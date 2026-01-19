export interface PodcastEpisode {
  title: string;
  link: string;
  description: string;
  thumbnail: string;
  pubDate: string;
}

export interface PodcastFeed {
  title: string;
  description: string;
  image: string;
  episodes: PodcastEpisode[];
}

// Anchor/Spotify RSS feed URL (from iTunes API lookup)
const PODCAST_RSS_URL = 'https://anchor.fm/s/105702640/podcast/rss';

export async function getPodcastFeed(): Promise<PodcastFeed | null> {
  try {
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(PODCAST_RSS_URL)}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      throw new Error('Failed to fetch podcast RSS');
    }

    const data = await response.json();

    if (data.status !== 'ok' || !data.items) {
      throw new Error('Invalid RSS response');
    }

    // Map episodes
    const episodes: PodcastEpisode[] = data.items.slice(0, 4).map((item: any) => {
      // Clean up description (strip HTML tags)
      const cleanDescription = item.description
        ?.replace(/<[^>]*>/g, '')
        ?.substring(0, 120) + '...';

      return {
        title: item.title,
        link: item.link,
        description: cleanDescription || '',
        thumbnail: item.thumbnail || data.feed?.image || '',
        pubDate: item.pubDate,
      };
    });

    return {
      title: data.feed?.title || 'The Practical AI Digest',
      description: data.feed?.description || '',
      image: data.feed?.image || '',
      episodes,
    };
  } catch (error) {
    console.error('Error fetching podcast feed:', error);
    return null;
  }
}
