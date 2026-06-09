import { MetadataRoute } from 'next'

// Required for static export (output: 'export')
export const dynamic = 'force-static'
export const revalidate = 86400 // Revalidate once per day

/**
 * Sitemap configuration for MyCoreOffice
 *
 * Uses Next.js 16+ native MetadataRoute API for sitemap generation.
 * This replaces the external next-sitemap package.
 *
 * Routes are manually defined to ensure precise control over:
 * - Priority values (homepage: 1.0, services: 0.9, legal: 0.5)
 * - Change frequencies appropriate for each page type
 * - Last modified dates
 *
 * Why manual definition over auto-detection:
 * - More control over SEO priorities
 * - Avoids including non-public routes
 * - Explicit lastmod dates for better crawl efficiency
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mycoreoffice.com'

  // Define all public routes with appropriate SEO parameters
  const routes: MetadataRoute.Sitemap = [
    // Home page - highest priority
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Main service pages - high priority
    {
      url: `${baseUrl}/business-services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/company-registration`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/coworking-space`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gst`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/office-space`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Informational pages - medium priority
    {
      url: `${baseUrl}/About-Us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Legal pages - lower priority
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]

  return routes
}