import { Fragment } from 'react';
import { AiOutlineFork, AiOutlineStar, AiOutlineCode } from 'react-icons/ai';
import { MdInsertLink, MdLanguage } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { ga, getLanguageColor, skeleton } from '../../utils';
import { GithubProject } from '../../interfaces/github-project';

const GithubProjectCard = ({
  header,
  githubProjects,
  loading,
  limit,
  username,
  googleAnalyticsId,
}: {
  header: string;
  githubProjects: GithubProject[];
  loading: boolean;
  limit: number;
  username: string;
  googleAnalyticsId?: string;
}) => {
  if (!loading && githubProjects.length === 0) {
    return;
  }

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < limit; index++) {
      array.push(
        <div
          className="card bg-base-200 bg-opacity-50 backdrop-blur-sm border border-base-300"
          key={index}
        >
          <div className="flex justify-between flex-col p-6 h-full w-full">
            <div>
              <div className="flex items-center">
                <span>
                  <h5 className="card-title text-lg">
                    {skeleton({
                      widthCls: 'w-32',
                      heightCls: 'h-8',
                      className: 'mb-1',
                    })}
                  </h5>
                </span>
              </div>
              <div className="mb-5 mt-1">
                {skeleton({
                  widthCls: 'w-full',
                  heightCls: 'h-4',
                  className: 'mb-2',
                })}
                {skeleton({ widthCls: 'w-full', heightCls: 'h-4' })}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-grow gap-4">
                <span className="flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
                <span className="flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
              </div>
              <div>
                <span className="flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const renderProjects = () => {
    return githubProjects.map((item, index) => (
      <a
        className="card bg-base-200 bg-opacity-50 backdrop-blur-sm border border-base-300 hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer group"
        href={item.html_url}
        key={index}
        onClick={(e) => {
          e.preventDefault();

          try {
            if (googleAnalyticsId) {
              ga.event('Click project', {
                project: item.name,
              });
            }
          } catch (error) {
            console.error(error);
          }

          window?.open(item.html_url, '_blank');
        }}
      >
        <div className="flex justify-between flex-col p-6 h-full w-full">
          <div>
            {/* Fixed header layout - separated title and button */}
            <div className="flex items-start justify-between mb-2 gap-3">
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <FaGithub className="w-5 h-5 text-base-content opacity-70 group-hover:text-primary transition-colors duration-300 flex-shrink-0" />
                <h5 className="card-title text-lg font-semibold text-base-content opacity-90 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 truncate">
                  {item.name}
                </h5>
              </div>
              <div className="badge badge-outline hover:bg-primary hover:bg-opacity-10 hover:text-primary transition-all duration-300 flex-shrink-0">
                <AiOutlineCode className="w-4 h-4 mr-1" />
                Code
              </div>
            </div>
            <p className="text-base-content opacity-70 group-hover:opacity-90 transition-opacity duration-300 mb-4">
              {item.description || 'No description available'}
            </p>
            {item.language && (
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: getLanguageColor(item.language) }}
                />
                <span className="text-sm text-base-content opacity-70">
                  {item.language}
                </span>
              </div>
            )}
          </div>
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-base-300">
            <div className="flex gap-4">
              <div className="flex items-center gap-1 text-base-content opacity-70 group-hover:opacity-90 transition-opacity duration-300">
                <AiOutlineStar className="w-4 h-4" />
                <span className="text-sm">{item.stargazers_count}</span>
              </div>
              <div className="flex items-center gap-1 text-base-content opacity-70 group-hover:opacity-90 transition-opacity duration-300">
                <AiOutlineFork className="w-4 h-4" />
                <span className="text-sm">{item.forks_count}</span>
              </div>
            </div>
            <div className="badge badge-outline hover:bg-primary hover:bg-opacity-10 hover:text-primary transition-all duration-300">
              <MdLanguage className="w-4 h-4 mr-1" />
              View
            </div>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2 transform hover:scale-[1.01] transition-transform duration-300">
        <div className="card glass-bg shadow-xl">
          <div className="card-body">
            <div className="mx-3 flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
              <div className="flex items-center gap-2">
                <FaGithub className="w-6 h-6 text-primary" />
                <h5 className="card-title text-base-content opacity-90 text-2xl font-bold">
                  {header}
                </h5>
              </div>
              {loading ? (
                skeleton({ widthCls: 'w-10', heightCls: 'h-5' })
              ) : (
                <a
                  href={`https://github.com/${username}?tab=repositories`}
                  target="_blank"
                  rel="noreferrer"
                  className="badge badge-outline hover:bg-primary hover:bg-opacity-10 hover:text-primary badge-md sm:badge-lg gap-2 transition-all duration-300 w-full sm:w-auto justify-center"
                >
                  <MdInsertLink className="w-4 h-4" />
                  View All
                </a>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loading ? renderSkeleton() : renderProjects()}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GithubProjectCard;
