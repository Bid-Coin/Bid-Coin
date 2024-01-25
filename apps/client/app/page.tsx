import { Badge, Button } from '@pacakage/ui';
import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
  return (
    <main className='min-h-screen w-screen bg-slate-100 flex flex-col items-center'>
      <section className='w-3/5 h-screen min-w-[1000px] relative pt-3'>
        <Badge className='pt-2 pb-2 mb-2'>날짜</Badge>
        <article className=' h-4/6 overflow-hidden rounded-tl rounded-tr'>
          <div className='h-full w-full relative'>
            <Image src={`/vivo.gif`} alt='live_shopping' fill />
          </div>
        </article>
        <article className=' min-h-1/6 border-t-2 border-solid border-black grid grid-cols-4 bg-slate-50 rounded-bl rounded-br'>
          <div className='col-span-3 text-center pt-5 pb-5'>
            <h2 className='font-bold text-black text-xl'>
              국토 대장정 퍼센트 할인
            </h2>
            <p>
              경매시작가 :<span className='font-bold'>1000</span>
            </p>
            <p>
              경매 시작 시간 : <span className='font-bold'>1000</span>
            </p>
          </div>
          <div className='border-l-2 border-solid border-black pt-5 pb-5 text-center'>
            <div>
              <Button className='transition duration-100 bg-sky-500 text-xl hover:bg-blue-800 transform active:scale-90'>
                <Link href='/chat'>JOIN</Link>
              </Button>
            </div>
            <div>
              <Badge className=''>1/100</Badge>
            </div>
            <Badge className='text-red-600 bg-slate-300 font-bold hover:bg-slate-300'>
              LIVE
            </Badge>
          </div>
        </article>
        <div className='absolute bottom-10 right-2/4 animate-bounce'>
          <span className='font-bold cursor-pointer'>상품 자세히보기</span>
        </div>
      </section>

      <section className=''></section>
    </main>
  );
}
