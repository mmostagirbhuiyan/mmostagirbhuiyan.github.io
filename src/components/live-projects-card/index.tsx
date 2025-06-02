import { Fragment } from 'react';
import { MdLaunch } from 'react-icons/md';
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
      <div className="card shadow-lg compact bg-base-100">
        <div className="card-body">
          <div className="mx-3">
            <h5 className="card-title">
              {skeleton({ widthCls: 'w-32', heightCls: 'h-8' })}
            </h5>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {[1, 2].map((index) => (
              <div key={index} className="card bg-base-200">
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
      <div className="card shadow-lg compact bg-base-100">
        <div className="card-body">
          <div className="mx-3 flex items-center justify-between">
            <h5 className="card-title text-base-content opacity-70">
              Live Projects
            </h5>
            <span className="text-sm text-base-content opacity-50">
              Click for a demo
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card bg-base-200 hover:bg-base-300 transition-colors duration-200 cursor-pointer group"
              >
                <div className="card-body">
                  <div className="flex items-center justify-between">
                    <h6 className="card-title text-base-content opacity-90 group-hover:opacity-100">
                      {project.title}
                    </h6>
                    <MdLaunch className="w-5 h-5 text-base-content opacity-50 group-hover:opacity-100" />
                  </div>
                  <p className="text-sm text-base-content opacity-70 mt-2">
                    {project.description}
                  </p>
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
      <div className="col-span-1 lg:col-span-2">
        {loading ? renderSkeleton() : renderProjects()}
      </div>
    </Fragment>
  );
};

export default LiveProjectsCard; 