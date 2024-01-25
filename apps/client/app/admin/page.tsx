import React from 'react';
import AdminSetting from './_components/AdminSetting';

export default function Admin() {
  return (
    <div className='flex items-center mt-5 justify-center'>
      <h1>경매 가격 조절</h1>
      <AdminSetting />
    </div>
  );
}
