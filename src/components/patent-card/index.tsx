import React from 'react';
import { SanitizedPatent } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

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
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <h3 className="font-bold">{title}</h3>
    <div className="font-semibold antialiased">{officeAndNumber}</div>
    {year && <div className="font-semibold">{year}</div>}
    {description && <div className="mb-4 font-normal">{description}</div>}
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
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Patents</span>
            )}
          </h5>
        </div>
        <div className="text-base-content text-opacity-60">
          <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
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
