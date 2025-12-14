import React from 'react';
import { SanitizedCertification } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import { FaAward } from 'react-icons/fa';

const ListItem = ({
  year,
  name,
  body,
  link,
}: {
  year?: React.ReactNode;
  name?: React.ReactNode;
  body?: React.ReactNode;
  link?: string;
}) => (
  <li className="mb-6 ml-4 group">
    <div
      className="absolute w-3 h-3 bg-primary rounded-full border border-primary mt-1.5 transition-all duration-300 group-hover:scale-125"
      style={{ left: '-5.5px' }}
    ></div>
    <div className="transform transition-all duration-300 hover:translate-x-2">
      <div className="text-sm font-medium text-base-content opacity-100 mb-1 text-glass-shadow">
        {year}
      </div>
      <div className="mb-2">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="font-bold text-lg text-base-content opacity-100 hover:text-primary-focus transition-colors duration-300 text-glass-shadow"
        >
          {name}
        </a>
      </div>
      <div className="text-base-content opacity-100 leading-relaxed text-glass-shadow">
        {body}
      </div>
    </div>
  </li>
);

const CertificationCard = ({
  certifications,
  loading,
}: {
  certifications: SanitizedCertification[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          year={skeleton({
            widthCls: 'w-5/12',
            heightCls: 'h-4',
          })}
          name={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          body={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
        />,
      );
    }

    return array;
  };

  return (
    <div className="card glass-bg shadow-md card-3d">
      <div className="card-body">
        <div className="mx-3 mb-4">
          <h5 className="card-title text-2xl font-bold">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-100 flex items-center text-glass-shadow">
                <FaAward className="mr-2" />
                {'Certifications'}
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
                {certifications.map((certification, index) => (
                  <ListItem
                    key={index}
                    year={certification.year}
                    name={certification.name}
                    body={certification.body}
                    link={certification.link}
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

export default CertificationCard;
