import React from 'react';

const Contact = () => {
  return (
    <div className='flex items-center justify-center h-[352px] bg-[#6222CC] text-center'>
      <div>
        <h2 className='text-white  mb-4'>--NEED SOME MORE HELP?--</h2>
        <h1 className='text-white font-extrabold text-4xl mb-6'>Contact us!</h1>
        <input
          type="text"
          placeholder='Enter your Email'
          className='w-[690px] h-[49px] rounded-full px-4'
        />
      </div>
    </div>
  );
};

export default Contact;

