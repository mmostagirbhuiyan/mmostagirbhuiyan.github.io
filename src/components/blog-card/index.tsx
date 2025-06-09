import { useEffect, useState } from 'react';
import LazyImage from '../lazy-image';
import { AiOutlineContainer } from 'react-icons/ai';
import { getDevPost, getMediumPost } from '@arifszn/blog-js';
import { formatDistance } from 'date-fns';
import { SanitizedBlog } from '../../interfaces/sanitized-config';
import { ga, skeleton } from '../../utils';
import { Article } from '../../interfaces/article';

const BlogCard = ({
  loading,
  blog,
  googleAnalyticsId,
}: {
  loading: boolean;
  blog: SanitizedBlog;
  googleAnalyticsId?: string;
}) => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    if (blog.source === 'medium') {
      getMediumPost({
        user: blog.username,
      }).then((res) => {
        setArticles(res);
      });
    } else if (blog.source === 'dev') {
      getDevPost({
        user: blog.username,
      }).then((res) => {
        setArticles(res);
      });
    }
  }, [blog.source, blog.username]);

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < blog.limit; index++) {
      array.push(
        <div
          className="card glass-bg shadow-lg compact transition-all duration-300"
          key={index}
        >
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col md:flex-row">
              <div className="avatar mb-5 md:mb-0">
                <div className="w-24 h-24 mask mask-squircle bg-base-300 bg-opacity-20">
                  {skeleton({
                    widthCls: 'w-full',
                    heightCls: 'h-full',
                    shape: '',
                  })}
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-8',
                        className: 'mb-2 mx-auto md:mx-0',
                      })}
                    </h2>
                    {skeleton({
                      widthCls: 'w-24',
                      heightCls: 'h-3',
                      className: 'mx-auto md:mx-0',
                    })}
                    <div className="mt-3">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mx-auto md:mx-0',
                      })}
                    </div>
                    <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start gap-2">
                      {skeleton({
                        widthCls: 'w-32',
                        heightCls: 'h-4',
                        className: 'md:mr-2 mx-auto md:mx-0',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const renderArticles = () => {
    return articles && articles.length ? (
      articles.slice(0, blog.limit).map((article, index) => (
        <a
          className="card glass-bg shadow-lg compact transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
          key={index}
          href={article.link}
          onClick={(e) => {
            e.preventDefault();

            try {
              if (googleAnalyticsId) {
                ga.event('Click Blog Post', {
                  post: article.title,
                });
              }
            } catch (error) {
              console.error(error);
            }

            window?.open(article.link, '_blank');
          }}
        >
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col md:flex-row">
              <div className="avatar mb-5 md:mb-0 opacity-90">
                <div className="w-24 h-24 mask mask-squircle bg-base-300 bg-opacity-20">
                  <LazyImage
                    src={article.thumbnail}
                    alt={'thumbnail'}
                    placeholder={skeleton({
                      widthCls: 'w-full',
                      heightCls: 'h-full',
                      shape: '',
                    })}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="text-center md:text-left w-full">
                    <h2 className="font-medium text-lg text-base-content opacity-80 mb-2">
                      {article.title}
                    </h2>
                    <p className="text-base-content opacity-60 text-sm">
                      {formatDistance(article.publishedAt, new Date(), {
                        addSuffix: true,
                      })}
                    </p>
                    <p className="mt-3 text-base-content opacity-70 text-sm leading-relaxed">
                      {article.description}
                    </p>
                    <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start gap-2">
                      {article.categories.map((category, index2) => (
                        <div
                          className="py-1.5 px-3 text-xs font-medium rounded-full bg-primary bg-opacity-10 text-primary transition-all duration-300 hover:bg-opacity-20"
                          key={index2}
                        >
                          #{category}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      ))
    ) : (
      <div className="text-center mb-6">
        <AiOutlineContainer className="mx-auto h-12 w-12 opacity-30" />
        <p className="mt-1 text-sm opacity-50 text-base-content">
          No recent post
        </p>
      </div>
    );
  };

  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <div className="card glass-bg shadow-lg compact">
            <div className="card-body">
              <div className="mx-3 mb-4">
                <h5 className="card-title text-2xl font-bold">
                  {loading ? (
                    skeleton({ widthCls: 'w-28', heightCls: 'h-8' })
                  ) : (
                    <span className="text-base-content opacity-80 flex items-center">
                      <AiOutlineContainer className="mr-2" />
                      {'My Articles'}
                    </span>
                  )}
                </h5>
              </div>
              <div className="col-span-2">
                <div className="grid grid-cols-1 gap-6">
                  {loading || !articles ? renderSkeleton() : renderArticles()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
