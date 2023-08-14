const ToggleButton = () => {
  return (
    <div className='px-8 flex items-center justify-end gap-2'>
      <p className='text-xs tracking-tighter [word-spacing: 1rem]'>
        Move done things to end?
      </p>
      <input
        type='checkbox'
        name='sort'
        id='sort'
        className=' hidden'
      />
      <label
        htmlFor='sort'
        className='block h-5 w-10 px-1 bg-primary-500 rounded-full flex items-center cursor-pointer'
      >
        <div className='h-4 w-4  bg-primary-100 rounded-full'></div>
      </label>
    </div>
  );
};
export default ToggleButton;
