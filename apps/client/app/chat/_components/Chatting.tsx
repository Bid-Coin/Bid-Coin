'use client';
import { useEffect, useId, useRef, useState } from 'react';
import { socket } from '../_socket/Socket';
import { Badge, Span } from '@pacakage/ui';
import { cn } from '@pacakage/ui/src/lib/utils';
type ChatMs = {
  user: string;
  chatMs: string;
};
const Chatting = () => {
  const ROOM = '1';
  const [myUserId, setUserId] = useState<string>();
  const [messages, setMessages] = useState<ChatMs[]>([]);
  const chatInputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const sendMessage = () => {
    if (chatInputRef.current) {
      const chatMs = chatInputRef.current.value;
      socket.emit('send_message', { chatMs, room: ROOM, user: myUserId });
      chatInputRef.current.value = '';
    }
  };

  socket.on('receive_message', (data) => {
    const { chatMs, user } = data;
    setMessages([...messages, { chatMs, user }]);
  });

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };
  useEffect(() => {
    socket.emit('join_room', ROOM);
    setUserId('my-' + (Math.random() * 100).toFixed());
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className='chattingWrap div-wrap'>
      <div className='chattingContent m-4 overflow-y-auto' ref={scrollRef}>
        {messages.map(({ chatMs, user }) => (
          <div key={chatMs} className='m-1'>
            <Badge
              className={cn(
                user === myUserId ? 'bg-violet-700' : 'bg-slate-400',
                'mr-2'
              )}
            >
              {user}
            </Badge>
            <Span classNames={'text-sm'} content={chatMs} />
          </div>
        ))}
      </div>
      <div className='chattingInput m-4 flex flex-col gap-2 '>
        <div>
          <input
            type='text'
            placeholder='Message...'
            className='block w-80 rounded-md border-0 py-1.5 pl-3 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            ref={chatInputRef}
          />
          <button
            onClick={sendMessage}
            className='flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 mt-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Send Message
          </button>
          {myUserId && <Badge className='bg-violet-700'>{myUserId}</Badge>}
        </div>
      </div>
    </div>
  );
};

export default Chatting;
