import { MetadataRoute } from 'next'

// Required for static export (output: 'export')
export const dynamic = 'force-static'
export const revalidate = 86400 // Revalidate once per day

/**
 * Robots.txt configuration for MyCoreOffice
 *
 * Uses Next.js 16+ native MetadataRoute API for robots.txt generation.
 * This replaces the external next-sitemap package's generateRobotsTxt option.
 *
 * Configuration:
 * - Allows all crawlers (User-agent: *)
 * - References the dynamically generated sitemap.xml
 * - Uses NEXT_PUBLIC_SITE_URL for base URL
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mycoreoffice.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}