import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
      disallow: [],
    },
    sitemap: 'https://akanji-dev.vercel.app/sitemap.xml',
  }
}