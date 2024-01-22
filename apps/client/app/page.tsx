import { Button, Heading } from '@pacakage/ui';

export default function Home() {
  return (
    <main>
      <div className='w-96 h-96 bg-violet-500 flex justify-center items-center '>
        <Heading title='드디어 성공함!!!' />
      </div>
      <Button className='p-10'>shadcn버튼성공</Button>
    </main>
  );
}
