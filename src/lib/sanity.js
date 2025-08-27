import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "iebgwuqq",
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  useCdn: true,
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || "2023-01-01",
});

//  Image URL builder function
const builder = imageUrlBuilder(client);

export const getImageUrl = (source, options = {}) => {
  if (
    source &&
    source.asset &&
    source.asset._ref &&
    source.asset._ref.startsWith('image-')
  ) {
    return builder
      .image(source)
      .width(options.width || 600)      // default 600px width
      .quality(options.quality || 75)  // default quality 75%
      .auto('format')                  // auto-select best format (webp/jpg)
      .url();
  } else {
    return 'https://via.placeholder.com/300x200?text=No+Image';
  }
};
