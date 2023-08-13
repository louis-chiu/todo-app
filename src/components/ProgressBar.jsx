const ProgressBar = () => {
  return (
    <div className='px-8 my-4 flex items-center '>
      <p className='text-l w-9'>50%</p>
      <div className='h-4 w-[calc(100%-2.25rem)] bg-primary-100 rounded-full overflow-hidden'>
        <div
          className={` bg-primary-600 rounded-full h-full w-1/2 transition-[width] delay-150 duration-1000 `}
        ></div>
      </div>
    </div>
  );
};
export default ProgressBar;
