export interface Product {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  image: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  shortDescription: string;
  description: string;
  price?: number;
  category: string;
}

export interface BannerImage {
  _id: string;
  title: string;
  image: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  link?: string;
}

export interface MediaSection {
  _id: string;
  title: string;
  type: 'image' | 'video';
  image?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  video?: {
    asset: {
      _ref: string;
    };
  };
  description: string;
}