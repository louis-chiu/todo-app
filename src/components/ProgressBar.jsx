import { useGlobalContext } from './context';

const ProgressBar = () => {
  const { progress } = useGlobalContext();
  return (
    <div className='px-8 my-4 flex items-center '>
      <p className='text-l w-12'>{progress}%</p>
      <div className='h-4 w-[calc(100%-3rem)] bg-primary-100 rounded-full overflow-hidden'>
        <div
          className={` bg-primary-600 rounded-full h-full w-1/2 transition-[width]  duration-[2000ms] `}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};
export default ProgressBar;
