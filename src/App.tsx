import { useEffect, useState } from 'react';
import { QuoteType } from './@types';
import DiceIcon from './assets/icons/icon-dice.svg';
import QuoteGateway from './gateway/QuoteGateway';

const App = () => {
  const [advice, setAdvice] = useState<QuoteType>({ id: 0, advice: '' });

  const getAdvice = async () => {
    const advice = await QuoteGateway.get();
    setAdvice({ id: advice.id, advice: advice.advice });
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <main className="px-4 h-screen w-screen bg-[#202733] flex items-center justify-center">
      <article className="
          px-6 pt-10 pb-16
        bg-[#313A48] md:pt-12 md:px-12 md:pb-[72px] w-[540px] rounded-[15px] flex flex-col justify-start items-center relative
      ">
        <h2 className="text-[#53FFAA] font-extrabold text-[13px] tracking-[4.09px] mb-6">
          ADVICE #{advice.id}
        </h2>
        <h1 className="text-[28px] text-[#CEE3E9] font-extrabold tracking-[0.3px] leading-[28px] text-center mb-10">
          {advice.advice}
        </h1  >
        <div className="
          w-full flex
          before:content-[''] before:h-[1px] before:w-[calc(50%-16px)] before:bg-[#4F5D74] before:mt-1.5
          after:content-[''] after:h-[1px] after:w-[calc(50%-16px)] after:ml-[52px] after:bg-[#4F5D74] after:mt-1.5
        ">
          <div className="
            before:left-[calc(50%-8px)]
            before:content-[''] before:h-4 before:w-[6px] before:bg-white before:rounded-[3px] before:absolute
            after:left-[calc(50%-8px)]
            after:content-[''] after:h-4 after:w-[6px] after:bg-white after:rounded-[3px] after:absolute after:ml-2
          "/>
        </div>
        <button
          className="bg-[#53FFAA] w-16 h-16 rounded-full flex items-center justify-center absolute bottom-[-32px] cursor-pointer"
          onClick={() => getAdvice()}
        >
          <img src={DiceIcon} alt="dice" />
        </button>
      </article>
    </main>
  );
};

export default App;
