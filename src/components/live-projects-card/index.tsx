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
      <div className="card glass-bg shadow-xl">
        <div className="card-body">
          <div className="mx-3">
            <h5 className="card-title">
              {skeleton({ widthCls: 'w-32', heightCls: 'h-8' })}
            </h5>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {[1, 2].map((index) => (
              <div key={index} className="card glass-bg border border-base-300">
                <div className="card-body">
                  {skeleton({ widthCls: 'w-24', heightCls: 'h-6' })}
                  {skeleton({ widthCls: 'w-full', heightCls: 'h-4 mt-2' })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderProjects = () => {
    return (
      <div className="card glass-bg shadow-xl">
        <div className="card-body">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <FaRocket className="w-6 h-6 text-primary animate-pulse" />
              <h5 className="card-title text-base-content opacity-90 text-2xl font-bold">
                Live Projects
              </h5>
            </div>
            <div className="badge badge-outline hover:bg-primary hover:bg-opacity-10 hover:text-primary badge-lg gap-2 transition-all duration-300">
              <MdStar className="w-4 h-4" />
              Featured
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                className="card glass-bg border border-base-300 hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer group"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-between flex-col p-6 h-full w-full">
                  <div>
                    <div className="flex items-start justify-between mb-2 gap-3">
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <FaRocket className="w-5 h-5 text-base-content opacity-70 group-hover:text-primary transition-colors duration-300 flex-shrink-0" />
                        <h5 className="card-title text-lg font-semibold text-base-content opacity-90 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 truncate">
                          {project.title}
                        </h5>
                      </div>
                      <div className="badge badge-outline hover:bg-primary hover:bg-opacity-10 hover:text-primary transition-all duration-300 flex-shrink-0">
                        <MdLaunch className="w-4 h-4 mr-1" />
                        Demo
                      </div>
                    </div>
                    <p className="text-base-content opacity-70 group-hover:opacity-90 transition-opacity duration-300 mb-4">
                      {project.description}
                    </p>
                  </div>
                  <div className="card-actions justify-end mt-4 pt-4 border-t border-base-300">
                    <div className="badge badge-outline hover:bg-primary hover:bg-opacity-10 hover:text-primary transition-all duration-300">
                      Click to explore
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2 transform hover:scale-[1.01] transition-transform duration-300">
        {loading ? renderSkeleton() : renderProjects()}
      </div>
    </Fragment>
  );
};

export default LiveProjectsCard;
