import { getPodcastFeed } from '@/lib/podcast';
import { PodcastClient } from './podcast-client';

export async function Podcast() {
  // Fetch podcast episodes from RSS at build time
  const feed = await getPodcastFeed();

  return (
    <PodcastClient
      episodes={feed?.episodes || []}
      podcastImage={feed?.image}
    />
  );
}
