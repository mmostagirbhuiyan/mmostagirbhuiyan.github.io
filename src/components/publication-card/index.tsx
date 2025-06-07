import { Fragment } from 'react';
import { SanitizedPublication } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import { FaBook, FaExternalLinkAlt, FaUser, FaNewspaper } from 'react-icons/fa';

const PublicationCard = ({
  publications,
  loading,
}: {
  publications: SanitizedPublication[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < publications.length; index++) {
      array.push(
        <div
          className="card bg-base-200 bg-opacity-50 backdrop-blur-sm border border-base-300"
          key={index}
        >
          <div className="p-6 h-full w-full">
            <div className="flex items-center flex-col">
              <div className="w-full">
                <div className="px-4">
                  <div className="text-center w-full">
                    <h2 className="mb-2">
                      {skeleton({
                        widthCls: 'w-32',
                        heightCls: 'h-8',
                        className: 'mb-2 mx-auto',
                      })}
                    </h2>
                    <div>
                      {skeleton({
                        widthCls: 'w-20',
                        heightCls: 'h-4',
                        className: 'mb-2 mx-auto',
                      })}
                    </div>
                    <div>
                      {skeleton({
                        widthCls: 'w-20',
                        heightCls: 'h-4',
                        className: 'mb-2 mx-auto',
                      })}
                    </div>
                    <div>
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mb-2 mx-auto',
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

  const renderPublications = () => {
    return publications.map((item, index) => (
      <a
        className="card bg-base-200 bg-opacity-50 backdrop-blur-sm border border-base-300 hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer group"
        key={index}
        href={item.link}
        target="_blank"
        rel="noreferrer"
      >
        <div className="p-6 h-full w-full">
          <div className="flex flex-col h-full">
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <FaNewspaper className="w-5 h-5 text-primary opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  <h2 className="font-semibold text-lg text-base-content opacity-90 group-hover:opacity-100 group-hover:text-primary transition-all duration-300">
                    {item.title}
                  </h2>
                </div>
                <div className="badge badge-outline hover:bg-primary hover:bg-opacity-10 hover:text-primary transition-all duration-300">
                  <FaExternalLinkAlt className="w-3 h-3 mr-1" />
                  View
                </div>
              </div>

              <div className="space-y-2 mb-4">
                {item.conferenceName && (
                  <div className="flex items-center gap-2 text-base-content opacity-70 group-hover:opacity-90 transition-opacity duration-300">
                    <FaBook className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {item.conferenceName}
                    </span>
                  </div>
                )}
                {item.journalName && (
                  <div className="flex items-center gap-2 text-base-content opacity-70 group-hover:opacity-90 transition-opacity duration-300">
                    <FaBook className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {item.journalName}
                    </span>
                  </div>
                )}
                {item.authors && (
                  <div className="flex items-center gap-2 text-base-content opacity-70 group-hover:opacity-90 transition-opacity duration-300">
                    <FaUser className="w-4 h-4" />
                    <span className="text-sm">Authors: {item.authors}</span>
                  </div>
                )}
              </div>

              {item.description && (
                <div className="mt-4">
                  <div className="text-base-content opacity-70 group-hover:opacity-90 transition-opacity duration-300 text-sm leading-relaxed line-clamp-3">
                    {item.description}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 pt-4 border-t border-base-300">
              <div className="flex justify-end">
                <div className="badge badge-outline hover:bg-primary hover:bg-opacity-10 hover:text-primary transition-all duration-300">
                  Read Publication
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-1 gap-6">
          <div className="col-span-2">
            <div className="card glass-bg shadow-xl compact">
              <div className="card-body">
                <div className="mx-3 mb-4">
                  <h5 className="card-title text-2xl font-bold">
                    {loading ? (
                      skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-80 flex items-center">
                        <FaBook className="mr-2" />
                        {'Publications'}
                      </span>
                    )}
                  </h5>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 gap-6">
                    {loading ? renderSkeleton() : renderPublications()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PublicationCard;
