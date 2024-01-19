import Image from 'next/image';
import { Heading } from 'ui';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        <Heading title='드디어 성공함!!!' />
      </div>
    </main>
  );
}
