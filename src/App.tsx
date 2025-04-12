import DiceIcon from './assets/icons/icon-dice.svg';

const App = () => {
  return (
    <main className="h-screen w-screen bg-[#202733] flex items-center justify-center">
      <article className="bg-[#313A48] pt-12 px-12 pb-[72px] w-[540px] rounded-[15px] flex flex-col justify-start items-center relative">
        <span className="text-[#53FFAA] font-extrabold text-[13px] tracking-[4.09px] mb-6">
          ADVICE #117
        </span>
        <q className="text-[28px] text-[#CEE3E9] font-extrabold tracking-[0.3px] leading-[28px] text-center mb-10">
          It is easy to sit up and take notice, what's difficult is getting up and taking action.
        </q>
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
        <button className="bg-[#53FFAA] w-16 h-16 rounded-full flex items-center justify-center absolute bottom-[-32px] cursor-pointer">
          <img src={DiceIcon} alt="dice" />
        </button>
      </article>
    </main>
  );
};

export default App;
