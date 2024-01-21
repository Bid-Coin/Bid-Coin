// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import { Heading } from 'ui';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className='w-96 h-96 bg-slate-400 flex justify-center items-center'>
        <Heading title='성공했다 드디어 1!!!!' />
      </div>
    </>
  );
}

export default App;
