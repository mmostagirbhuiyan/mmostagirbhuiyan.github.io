import React from 'react';
import { SanitizedPodcast } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import { FaPodcast } from 'react-icons/fa';

const ListItem = ({
  title,
  year,
  description,
  links,
}: {
  title?: React.ReactNode;
  year?: React.ReactNode;
  description?: React.ReactNode;
  links?: { name: string; url: string }[];
}) => (
  <li className="mb-6 ml-4 group">
    <div
      className="absolute w-3 h-3 bg-primary rounded-full border border-primary mt-1.5 transition-all duration-300 group-hover:scale-125"
      style={{ left: '-5.5px' }}
    ></div>
    <div className="transform transition-all duration-300 hover:translate-x-2">
      <h3 className="font-bold text-lg text-base-content opacity-90 mb-1">
        {title}
      </h3>
      {year && (
        <div className="font-semibold text-base-content opacity-70 mb-2">
          {year}
        </div>
      )}
      {description && (
        <div className="mb-4 font-normal text-base-content opacity-60 leading-relaxed">
          {description}
        </div>
      )}
      {links && links.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-base-content-important bg-primary bg-opacity-10 rounded-full transition-all duration-300 hover:bg-opacity-20 hover:scale-105"
            >
              <FaPodcast className="mr-1.5" />
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  </li>
);

const PodcastCard = ({
  loading,
  podcasts,
}: {
  loading: boolean;
  podcasts: SanitizedPodcast[];
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 1; index++) {
      array.push(
        <ListItem
          key={index}
          title={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          year={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
          description={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
          links={[]}
        />,
      );
    }
    return array;
  };

  return (
    <div className="card glass-bg shadow-md">
      <div className="card-body">
        <div className="mx-3 mb-4">
          <h5 className="card-title text-2xl font-bold">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-80 flex items-center">
                <FaPodcast className="mr-2" />
                {'Podcasts'}
              </span>
            )}
          </h5>
        </div>
        <div className="text-base-content">
          <ol className="relative border-l border-primary border-opacity-20 my-2 mx-4">
            {loading ? (
              renderSkeleton()
            ) : (
              <>
                {podcasts.map((item, index) => (
                  <ListItem
                    key={index}
                    title={item.title}
                    year={item.year ? `Year: ${item.year}` : undefined}
                    description={item.description}
                    links={item.links}
                  />
                ))}
              </>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PodcastCard;
