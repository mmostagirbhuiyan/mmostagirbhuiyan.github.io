import { siteConfig } from '@/data/portfolio';

export interface MediumPost {
  title: string;
  link: string;
  description: string;
  thumbnail: string;
  pubDate: string;
}

// Featured article URLs we want to show (in order)
const FEATURED_URLS = [
  'https://medium.com/@mmostagirbhuiyan/the-zero-marginal-cost-architecture-why-i-built-a-wealth-planner-to-run-entirely-on-the-edge-e632ba727490',
  'https://medium.com/@mmostagirbhuiyan/to-build-a-better-model-you-must-understand-the-machine-a-systems-leaders-deep-dive-into-ai-d5041f95d056',
  'https://medium.com/@mmostagirbhuiyan/from-manual-mappings-to-intelligent-automation-engineering-production-ml-pipelines-that-scale-c09b02a4881d',
  'https://medium.com/@mmostagirbhuiyan/implementing-authentication-with-django-drf-angular-and-microsoft-azure-ad-648c1c9f9649',
];

export async function getMediumPosts(): Promise<MediumPost[]> {
  try {
    // Use rss2json.com to convert Medium RSS to JSON (free tier: 10,000 requests/day)
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${siteConfig.github}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Medium RSS');
    }

    const data = await response.json();

    if (data.status !== 'ok' || !data.items) {
      throw new Error('Invalid RSS response');
    }

    // Map RSS items to our format
    const allPosts: MediumPost[] = data.items.map((item: any) => {
      // Extract first actual content image (not tracking pixels) from content
      const imgMatches = item.content?.match(/<img[^>]+src="([^">]+)"/g) || [];
      let thumbnail = item.thumbnail || '';

      // Find first image from cdn-images (actual content image, not tracking pixel)
      for (const match of imgMatches) {
        const srcMatch = match.match(/src="([^"]+)"/);
        if (srcMatch && srcMatch[1].includes('cdn-images-1.medium.com')) {
          thumbnail = srcMatch[1];
          break;
        }
      }

      // Clean up description (strip HTML tags)
      const cleanDescription = item.description
        ?.replace(/<[^>]*>/g, '')
        ?.substring(0, 150) + '...';

      return {
        title: item.title,
        link: item.link,
        description: cleanDescription || '',
        thumbnail: thumbnail,
        pubDate: item.pubDate,
      };
    });

    // Extract article ID from URL for matching (e.g., "e632ba727490" from the URL)
    const getArticleId = (url: string) => {
      const match = url.match(/-([a-f0-9]+)(?:\?|$)/);
      return match ? match[1] : url;
    };

    // Filter to only featured articles and maintain order
    const featuredPosts = FEATURED_URLS.map(featuredUrl => {
      const featuredId = getArticleId(featuredUrl);
      return allPosts.find(post => getArticleId(post.link) === featuredId);
    }).filter((post): post is MediumPost => post !== undefined);

    // If we couldn't match featured URLs, return first 4 posts
    if (featuredPosts.length === 0) {
      return allPosts.slice(0, 4);
    }

    return featuredPosts;
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    // Return empty array, component will show fallback
    return [];
  }
}
