import { skeleton } from '../../utils';
import { FaCode } from 'react-icons/fa';

const SkillCard = ({
  loading,
  skills,
}: {
  loading: boolean;
  skills: string[];
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index} className="animate-pulse">
          {skeleton({ widthCls: 'w-16', heightCls: 'h-4', className: 'm-1' })}
        </div>,
      );
    }

    return array;
  };

  return (
    <div className="card glass-bg shadow-md">
      <div className="card-body">
        <div className="mx-3 mb-4">
          <h5 className="card-title text-2xl font-bold text-base-content opacity-100 text-glass-shadow">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-100 flex items-center text-glass-shadow">
                <FaCode className="mr-2" />
                {'Tech Stack'}
              </span>
            )}
          </h5>
        </div>
        <div className="p-3 flow-root">
          <div className="-m-1 flex flex-wrap justify-center gap-2">
            {loading
              ? renderSkeleton()
              : skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group m-1 text-xs inline-flex items-center font-semibold leading-sm px-3 py-1.5 bg-primary bg-opacity-10 text-base-content opacity-100 rounded-full transition-all duration-300 hover:bg-opacity-20 hover:scale-105 hover:shadow-md text-glass-shadow"
                  >
                    {skill}
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
