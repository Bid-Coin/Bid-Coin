import { Button, Heading } from '@pacakage/ui';
import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const btnRef = useRef<HTMLButtonElement>(null);
  const plusCount = () => setCount(count + 1);
  return (
    <>
      <div className='w-96 h-96 bg-slate-400 flex justify-center items-center'>
        <Heading title='성공했다 드디어 1!!!!' />
      </div>
      <div>
        <Button ref={btnRef} onClick={plusCount} className='w-'>
          shadcn 버튼 성공
        </Button>
        <br />
        {count}
      </div>
    </>
  );
}

export default App;
