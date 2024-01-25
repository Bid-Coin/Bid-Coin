'use client';
import { useState } from 'react';
import { socket } from '../../chat/_socket/Socket';

const AdminSetting = () => {
  const [unitPrice, setUnitPrice] = useState(1000);

  const changeUnitPrice = () => {
    socket.emit('change_unitprice', unitPrice);
  };

  return (
    <div className='mt-12'>
      <input
        type='text'
        className='block w-80 rounded-md border-0 py-1.5 pl-3 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        onChange={(event) => {
          setUnitPrice(+event.currentTarget.value);
        }}
      />
      <button
        onClick={changeUnitPrice}
        className='rounded-md bg-indigo-600 px-3 py-1.5 mt-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      >
        Change UnitPrice
      </button>
    </div>
  );
};

export default AdminSetting;
