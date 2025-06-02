import React from 'react';
import { SanitizedExternalProject } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import { FaProjectDiagram } from 'react-icons/fa';

const ListItem = ({
  title,
  description,
  link,
}: {
  title?: React.ReactNode;
  description?: React.ReactNode;
  link?: string;
}) => (
  <li className="mb-6 ml-4 group">
    <div
      className="absolute w-3 h-3 bg-primary rounded-full border border-primary mt-1.5 transition-all duration-300 group-hover:scale-125"
      style={{ left: '-5.5px' }}
    ></div>
    <div className="transform transition-all duration-300 hover:translate-x-2">
      <a href={link} target="_blank" rel="noreferrer" className="block">
        <h3 className="font-bold text-lg text-base-content opacity-100 hover:text-primary-focus transition-colors duration-300 mb-2 text-glass-shadow">
          {title}
        </h3>
        {description && (
          <div className="text-base-content opacity-100 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed text-glass-shadow">
            {description}
          </div>
        )}
      </a>
    </div>
  </li>
);

const ExternalProjectCard = ({
  externalProjects,
  header,
  loading,
}: {
  externalProjects: SanitizedExternalProject[];
  header: string;
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          title={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          description={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
        />,
      );
    }
    return array;
  };

  return (
    <div className="card glass-bg shadow-xl">
      <div className="card-body">
        <div className="mx-3 mb-4">
          <h5 className="card-title text-2xl font-bold">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-100 flex items-center text-glass-shadow">
                <FaProjectDiagram className="mr-2" />
                {header}
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
                {externalProjects.map((item, index) => (
                  <ListItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    link={item.link}
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

export default ExternalProjectCard;
