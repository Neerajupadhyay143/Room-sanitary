import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'your-project-id', // Replace with your Sanity project ID
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});

// Helper function to get image URL from Sanity
export const getImageUrl = (source) => {
  if (!source?.asset?._ref) return '';
  
  const ref = source.asset._ref;
  const [_file, id, extension] = ref.split('-');
  return `https://cdn.sanity.io/images/${client.config().projectId}/${client.config().dataset}/${id}.${extension}`;
};