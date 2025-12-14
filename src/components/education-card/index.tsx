import React from 'react';
import { SanitizedEducation } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import { FaGraduationCap } from 'react-icons/fa';

const ListItem = ({
  degree,
  status,
  institution,
}: {
  degree?: React.ReactNode;
  status?: React.ReactNode;
  institution?: React.ReactNode;
}) => (
  <li className="mb-6 ml-4 group">
    <div
      className="absolute w-3 h-3 bg-primary rounded-full border border-primary mt-1.5 transition-all duration-300 group-hover:scale-125"
      style={{ left: '-5.5px' }}
    ></div>
    <div className="transform transition-all duration-300 hover:translate-x-2">
      <h3 className="font-bold text-lg text-base-content opacity-90 mb-1">
        {degree}
      </h3>
      <div className="font-semibold text-base-content opacity-70 mb-2">
        {status}
      </div>
      <div className="mb-4 font-normal text-base-content opacity-60 leading-relaxed">
        {institution}
      </div>
    </div>
  </li>
);

const EducationCard = ({
  loading,
  educations,
}: {
  loading: boolean;
  educations: SanitizedEducation[];
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          degree={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          status={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
          institution={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
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
              <span className="text-base-content opacity-80 flex items-center">
                <FaGraduationCap className="mr-2" />
                {'Education'}
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
                {educations.map((item, index) => (
                  <ListItem
                    key={index}
                    degree={item.degree}
                    status={item.status}
                    institution={item.institution}
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

export default EducationCard;
