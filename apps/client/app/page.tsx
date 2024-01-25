import { Badge } from '@pacakage/ui';
export default function Home() {
  return (
    <main className='h-dvh w-screen bg-slate-100 flex flex-col items-center p-20'>
      <section className='w-96 h-96 border border-solid border-black'>
        <Badge className='pt-2 pb-2'>날짜</Badge>
        <article>
          <h2>상품 상세설명</h2>
        </article>
      </section>
      <section></section>
    </main>
  );
}
