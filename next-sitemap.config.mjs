// next-sitemap.config.mjs

import { essays } from './src/contents/essays.ts';

const siteMapConfig = {
  siteUrl: 'https://www.who-we-are-when-we-ask.com',
  generateRobotsTxt: true,
  exclude: ['/components/**', '/drafts/*'],

  additionalPaths: async () => {
    return essays.map((entry) => {
      const path = {
        loc: `/essays/${entry.slug}`,
        changefreq: 'daily',
        priority: 0.7
      };

      if (entry.date) {
        path.lastmod = new Date(entry.date).toISOString();
      }

      return path;
    });
  }
};

export default siteMapConfig;
