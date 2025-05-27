import React from 'react';
import { SanitizedPodcast } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

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
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <h3 className="font-bold">{title}</h3>
    {year && <div className="font-semibold">{year}</div>}
    {description && (
      <div className="mb-4 font-normal whitespace-pre-line">{description}</div>
    )}
    {links && links.length > 0 && (
      <div className="mt-2">
        <span className="font-semibold">Links: </span>
        {links.map((link, idx) => (
          <span key={link.url}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              {link.name}
            </a>
            {idx < links.length - 1 && ', '}
          </span>
        ))}
      </div>
    )}
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
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Podcasts</span>
            )}
          </h5>
        </div>
        <div className="text-base-content text-opacity-60">
          <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
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