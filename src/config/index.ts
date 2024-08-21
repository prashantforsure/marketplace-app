export const PRODUCT_CATEGORIES = [
    {
      label: 'Graphic Templates',
      value: 'gt' as const,
      featured: [
        {
          name: 'Favorite Templates Picks',
          href: `/products?category=ui_kits`,
          imageSrc: '/nav/gt/gt1.jpg',
        },
        {
          name: 'New Arrivals',
          href: '/products?category=ui_kits&sort=desc',
          imageSrc: '/nav/gt/gt2.jpg',
        },
        {
          name: 'Bestselling Templates',
          href: '/products?category=ui_kits',
          imageSrc: '/nav/gt/gt3.jpg',
        },
      ],
    },
    {
      label: 'Presentation Templates',
      value: 'pt' as const,
      featured: [
        {
          name: 'Favorite Templates Picks',
          href: `/products?category=icons`,
          imageSrc: '/nav/pt/pt1.jpg',
        },
        {
          name: 'New Arrivals',
          href: '/products?category=icons&sort=desc',
          imageSrc: '/nav/pt/pt2.jpg',
        },
        {
          name: 'Bestselling Templates',
          href: '/products?category=icons',
          imageSrc: '/nav/pt/pt3.jpg',
        },
      ],
    },
  ]