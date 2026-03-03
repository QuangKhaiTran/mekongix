export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mekongix',
    url: 'https://mekongix.com',
    logo: 'https://mekongix.com/logo.png',
    description: 'Công ty phát triển phần mềm và giải pháp công nghệ doanh nghiệp',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'VN',
      addressLocality: 'Hồ Chí Minh',
    },
    sameAs: [
      'https://www.facebook.com/mekongix',
      'https://www.linkedin.com/company/mekongix',
    ],
  }
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Mekongix',
    url: 'https://mekongix.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://mekongix.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }
}

export function getServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Service',
        name: 'Phát triển Web & App',
        description: 'Xây dựng website và ứng dụng di động hiện đại, tối ưu trải nghiệm người dùng',
        provider: {
          '@type': 'Organization',
          name: 'Mekongix',
        },
      },
      {
        '@type': 'Service',
        name: 'Giải pháp ERP & CMS',
        description: 'Hệ thống quản lý doanh nghiệp toàn diện, tùy chỉnh theo quy mô và ngành nghề',
        provider: {
          '@type': 'Organization',
          name: 'Mekongix',
        },
      },
      {
        '@type': 'Service',
        name: 'Nền tảng SaaS',
        description: 'Phát triển và triển khai sản phẩm SaaS với khả năng mở rộng cao',
        provider: {
          '@type': 'Organization',
          name: 'Mekongix',
        },
      },
      {
        '@type': 'Service',
        name: 'Bảo trì & Vận hành',
        description: 'Hỗ trợ kỹ thuật và vận hành hệ thống đảm bảo hoạt động liên tục 24/7',
        provider: {
          '@type': 'Organization',
          name: 'Mekongix',
        },
      },
    ],
  }
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
