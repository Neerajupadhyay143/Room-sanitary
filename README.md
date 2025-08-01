# Bathroom Essentials Website

A modern, responsive website for bathroom essentials with Sanity.io CMS integration built with React and JavaScript.

## Features

- **Fully Responsive Design**: Optimized for mobile, tablet, and desktop with Tailwind CSS
- **Sanity.io Integration**: Content management system for easy updates
- **Product Catalog**: Dynamic product listings and detailed product pages
- **Search Functionality**: Search products by name and description
- **Category Filtering**: Filter products by bathroom categories
- **Contact Forms**: Multiple contact options for customer support
- **Retailer Locator**: Find authorized retailers by location
- **Mobile-First Approach**: Designed with mobile users in mind

## Tech Stack

- **Frontend**: React 18 + JavaScript (ES6+)
- **Styling**: Tailwind CSS (fully responsive)
- **Routing**: React Router DOM
- **Icons**: Lucide React + Material UI Icons
- **Carousel**: Swiper.js
- **CMS**: Sanity.io
- **Build Tool**: Vite

## Responsive Design Features

- **Mobile Navigation**: Collapsible hamburger menu for mobile devices
- **Flexible Grid Layouts**: Responsive grids that adapt to screen size
- **Optimized Typography**: Scalable text sizes across devices
- **Touch-Friendly**: Large touch targets for mobile interaction
- **Breakpoint System**: 
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

## Getting Started

### Prerequisites

1. Node.js (v16 or higher)
2. Sanity.io account and project

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up Sanity.io:
   - Create a new Sanity project at [sanity.io](https://sanity.io)
   - Update the `src/lib/sanity.js` file with your project ID
   - Set up the following schema types in your Sanity studio:

#### Sanity Schema Types

Create these schema types in your Sanity studio:

**Product Schema (`product.js`)**:
```javascript
export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Shower', value: 'shower'},
          {title: 'Vanity', value: 'vanity'},
          {title: 'Mirror', value: 'mirror'},
          {title: 'Toilet', value: 'toilet'},
          {title: 'Accessories', value: 'accessories'},
        ],
      },
    },
  ],
}
```

**Banner Image Schema (`bannerImage.js`)**:
```javascript
export default {
  name: 'bannerImage',
  title: 'Banner Image',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'link',
      title: 'Link (optional)',
      type: 'string',
    },
  ],
}
```

**Media Section Schema (`mediaSection.js`)**:
```javascript
export default {
  name: 'mediaSection',
  title: 'Media Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Image', value: 'image'},
          {title: 'Video', value: 'video'},
        ],
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({document}) => document?.type !== 'image'
    },
    {
      name: 'video',
      title: 'Video',
      type: 'file',
      hidden: ({document}) => document?.type !== 'video'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
  ],
}
```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Responsive Breakpoints

The website uses Tailwind CSS's responsive system:

- **sm**: 640px and up (tablets)
- **md**: 768px and up (small laptops)
- **lg**: 1024px and up (laptops)
- **xl**: 1280px and up (desktops)

## Content Management

The website integrates with Sanity.io for content management:

- **Products**: Add, edit, and manage bathroom products
- **Banner Images**: Update homepage carousel images
- **Media Sections**: Manage image/video content sections
- **Real-time Updates**: Content changes reflect immediately on the website

## Mobile Optimization

- **Touch-friendly navigation** with hamburger menu
- **Optimized images** with proper sizing for different screens
- **Readable typography** with appropriate font sizes
- **Fast loading** with optimized assets
- **Smooth scrolling** and transitions

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting provider
3. Ensure your Sanity project is deployed and accessible

## Customization

- **Colors**: Update the color scheme in `tailwind.config.js`
- **Content**: Modify text content directly in component files
- **Layout**: Adjust component layouts in the `src/components` directory
- **Routing**: Add new pages by creating components and adding routes in `App.jsx`
- **Responsive Design**: Modify breakpoints and responsive classes as needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Support

For technical support or questions about the website, please contact the development team.#   R o o m - s a n i t a r y  
 