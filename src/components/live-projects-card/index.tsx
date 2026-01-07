import { Fragment } from 'react';
import { MdLaunch, MdStar } from 'react-icons/md';
import { FaRocket } from 'react-icons/fa';
import { skeleton } from '../../utils';

interface LiveProject {
  title: string;
  description: string;
  link: string;
}

interface LiveProjectsCardProps {
  loading: boolean;
  projects: LiveProject[];
}

const LiveProjectsCard = ({ loading, projects }: LiveProjectsCardProps) => {
  const renderSkeleton = () => {
    return (
      <div className="project-grid mt-6">
        {[1, 2].map((index) => (
          <div key={index} className="glass-bg p-6 rounded-2xl h-48">
            {skeleton({ widthCls: 'w-24', heightCls: 'h-6' })}
            {skeleton({ widthCls: 'w-full', heightCls: 'h-20 mt-4' })}
          </div>
        ))}
      </div>
    );
  };

  const renderProjects = () => {
    return (
      <div className="col-span-1 lg:col-span-2">
        {/* Minimal Header */}
        <div className="flex items-center justify-between mb-6 px-2">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-opacity-10 bg-primary backdrop-blur-md border border-base-content/10 text-primary">
              <FaRocket size={20} />
            </div>
            <h5 className="text-2xl font-bold text-base-content tracking-tight">
              Live Projects
            </h5>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-base-content/5 border border-base-content/10 text-xs font-semibold text-primary">
            <MdStar className="w-4 h-4" />
            <span>FEATURED</span>
          </div>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <a
              key={index}
              className="card glass-bg p-6 h-full flex flex-col justify-between group no-underline relative overflow-hidden text-base-content"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Background Gradient Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-base-content group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <MdLaunch className="text-base-content/50 group-hover:text-base-content transition-colors" />
                </div>

                <p className="text-base-content/70 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="relative z-10 w-full flex items-center justify-between border-t border-base-content/5 pt-4">
                <span className="text-xs font-mono text-primary/80 uppercase tracking-widest">
                  Production Ready
                </span>
                <span className="text-xs text-base-content opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  Explore &rarr;
                </span>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      {loading ? renderSkeleton() : renderProjects()}
    </Fragment>
  );
};

export default LiveProjectsCard;
