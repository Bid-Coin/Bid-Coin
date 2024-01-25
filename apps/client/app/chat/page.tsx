import Auction from './_components/Auction';
import Chatting from './_components/Chatting';
import LiveDetail from './_components/LiveDetail';
import LiveStream from './_components/LiveStream';
import AdminSetting from '../admin/_components/AdminSetting';
import './page.css';
export default function Chat() {
  return (
    <section className=' flex flex-col justify-center items-center'>
      <div className='border rounded-md flex'>
        <div className='liveStreamliveDetail'>
          <LiveStream />
          <LiveDetail />
        </div>
        <div className='chatAuction'>
          <Chatting />
          <Auction />
        </div>
      </div>
      <AdminSetting />
    </section>
  );
}
