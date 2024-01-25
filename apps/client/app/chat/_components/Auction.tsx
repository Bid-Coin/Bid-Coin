'use client';
import { Span } from '@pacakage/ui';
import { socket } from '../_socket/Socket';
import { useState } from 'react';

const Auction = () => {
  const startPrice = 10000;
  const [receivedUnitPrice, setReceivedUnitPrice] = useState(1000);
  const [receivedCurrPrice, setReceivedCurrPrice] = useState(startPrice);
  const [isStart, setIsStart] = useState(false);

  const sendBid = () => {
    let price;
    if (!isStart) {
      price = startPrice + receivedUnitPrice;
      setIsStart(true);
    } else {
      price = receivedUnitPrice + receivedCurrPrice;
    }
    socket.emit('send_bid', price);
  };

  socket.on('receive_unitprice', (data) => {
    setReceivedUnitPrice(data);
  });

  socket.on('receive_bid', (data) => {
    if (!isStart) setIsStart(true);
    setReceivedCurrPrice(data);
  });

  return (
    <div className='auctionWrap div-wrap flex items-center justify-stretch'>
      <div className='auctionContent m-4'>
        <div className='mt-4'>
          <Span content={'경매 시작가'} />
        </div>
        <div>
          <Span
            classNames={'font-black text-xl'}
            content={`${startPrice.toLocaleString()}원`}
          />
        </div>
        <div>
          <Span content={'단위금액'} />
        </div>
        <div>
          <Span
            classNames={'text-red-500 font-black text-lg'}
            content={`${receivedUnitPrice.toLocaleString()}원`}
          />
        </div>
        <div>
          <Span content={'현재가'} />
        </div>
        <div className='mb-3'>
          <Span
            classNames={'text-green-500 font-black text-2xl'}
            content={`${receivedCurrPrice.toLocaleString()}원`}
          />
        </div>
        <div className='flex justify-center'>
          <button
            className='flex w-80 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            onClick={sendBid}
          >
            Bid
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auction;
