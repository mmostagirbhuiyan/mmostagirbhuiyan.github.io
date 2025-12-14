import React from 'react';
import { SanitizedPatent } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import { FaCertificate } from 'react-icons/fa';

const ListItem = ({
  title,
  officeAndNumber,
  year,
  description,
}: {
  title?: React.ReactNode;
  officeAndNumber?: React.ReactNode;
  year?: React.ReactNode;
  description?: React.ReactNode;
}) => (
  <li className="mb-6 ml-4 group">
    <div
      className="absolute w-3 h-3 bg-primary rounded-full border border-primary mt-1.5 transition-all duration-300 group-hover:scale-125"
      style={{ left: '-5.5px' }}
    ></div>
    <div className="transform transition-all duration-300 hover:translate-x-2">
      <h3 className="font-bold text-lg text-base-content opacity-90 mb-1">
        {title}
      </h3>
      <div className="font-semibold text-base-content opacity-70 mb-2">
        {officeAndNumber}
      </div>
      {year && (
        <div className="font-semibold text-base-content opacity-70 mb-2">
          {year}
        </div>
      )}
      {description && (
        <div className="mb-4 font-normal text-base-content opacity-60 leading-relaxed">
          {description}
        </div>
      )}
    </div>
  </li>
);

const PatentCard = ({
  loading,
  patents,
}: {
  loading: boolean;
  patents: SanitizedPatent[];
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
          officeAndNumber={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
          year={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
          description={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
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
                <FaCertificate className="mr-2" />
                {'Patents'}
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
                {patents.map((item, index) => (
                  <ListItem
                    key={index}
                    title={item.title}
                    officeAndNumber={
                      item.patentOffice && item.patentNumber
                        ? `${item.patentOffice} | ${item.patentNumber}`
                        : undefined
                    }
                    year={item.year ? `Year: ${item.year}` : undefined}
                    description={item.description}
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

export default PatentCard;
