import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "xbqu5k94",
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  useCdn: true,
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || "2023-01-01",
});

// ✅ Image URL builder function
const builder = imageUrlBuilder(client);

export const getImageUrl = (source) => {
  if (
    source &&
    source.asset &&
    source.asset._ref &&
    source.asset._ref.startsWith('image-')
  ) {
    return builder.image(source).url();
  } else {
    return 'https://via.placeholder.com/300x200?text=No+Image';
  }
};
