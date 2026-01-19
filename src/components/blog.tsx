import { getMediumPosts } from '@/lib/medium';
import { BlogClient } from './blog-client';
import { blogPosts, siteConfig } from '@/data/portfolio';

export async function Blog() {
  // Fetch posts from Medium RSS at build time
  let posts = await getMediumPosts();

  // Fallback to static data if RSS fetch fails
  if (posts.length === 0) {
    posts = blogPosts.map(post => ({
      title: post.title,
      link: post.link,
      description: post.description,
      thumbnail: post.thumbnail || '',
      pubDate: '',
    }));
  }

  return <BlogClient posts={posts} mediumUrl={siteConfig.social.medium} />;
}
