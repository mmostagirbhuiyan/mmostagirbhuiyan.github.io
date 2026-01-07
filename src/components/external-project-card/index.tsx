import React from 'react';
import { SanitizedExternalProject } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import { FaProjectDiagram, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({
  title,
  description,
  link,
}: {
  title?: React.ReactNode;
  description?: React.ReactNode;
  link?: string;
}) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="card glass-bg p-6 h-full flex flex-col justify-between group no-underline"
  >
    <div>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-primary-glow transition-colors duration-300">
          {title}
        </h3>
        <FaExternalLinkAlt className="text-gray-500 group-hover:text-white transition-colors" size={14} />
      </div>
      <div className="text-gray-400 text-sm leading-relaxed mb-4">
        {description}
      </div>
    </div>

    {/* Decorative gradient line at the bottom */}
    <div className="w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 opacity-30 rounded-full group-hover:opacity-100 transition-opacity duration-500" />
  </a>
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
        <div key={index} className="glass-bg p-6 rounded-2xl h-48">
          {skeleton({
            widthCls: 'w-3/4',
            heightCls: 'h-6',
            className: 'mb-4',
          })}
          {skeleton({ widthCls: 'w-full', heightCls: 'h-20' })}
        </div>,
      );
    }
    return array;
  };

  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="flex items-center gap-3 mb-6 px-2">
        <div className="p-3 rounded-lg bg-opacity-10 bg-purple-500 backdrop-blur-md border border-white/10 text-purple-400">
          <FaProjectDiagram size={20} />
        </div>
        <h5 className="text-2xl font-bold text-white tracking-tight">
          {header}
        </h5>
      </div>

      <div className="project-grid">
        {loading ? (
          renderSkeleton()
        ) : (
          <>
            {externalProjects.map((item, index) => (
              <ProjectCard
                key={index}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ExternalProjectCard;
