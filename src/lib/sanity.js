import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = createClient({
  projectId: 'xbqu5k94',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
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