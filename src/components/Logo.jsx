import { LogoIcon } from './Icons';

export default function Logo() {
  return (
    <div className="h-min flex flex-row gap-3 mt-[4.2rem] justify-center items-center">
      <div>
        <LogoIcon />
      </div>
      <div className="flex flex-col gap-0">
        <p className="text-xl font-normal text-[#656565] p-0 m-0 leading-none">ConverterX</p>
        <a
          className="text-xs p-0 m-0 text-[#BCBCBC]"
          href="https://www.github.com/victorzhamval/convx"
          target="_blank"
        >
          github.com/victorzhamval/convx
        </a>
      </div>
    </div>
  );
}
