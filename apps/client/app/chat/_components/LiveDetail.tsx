import { Span } from '@pacakage/ui';

const LiveDetail = () => {
  return (
    <div className='liveDetailWrap div-wrap'>
      <div className='liveDetailContent m-4'>
        <p>
          <Span
            content={'미디어 국토 대장정 프리미엄 굴비 A급 1세트 판매'}
            classNames={'font-black text-xl'}
          ></Span>
        </p>
        <p>
          <Span content={'99 / 100'} />
        </p>

        <p>
          참조기를 이용하여 만드는 보존식품. 전라남도 영광군 법성포의
          특산품이다. 오래 전부터 한국인의 밥상을 책임져 오는 인기 식품이며,
          소위 밥도둑으로 일컬어지는 반찬 중 한 가지다.
        </p>
      </div>
    </div>
  );
};

export default LiveDetail;
