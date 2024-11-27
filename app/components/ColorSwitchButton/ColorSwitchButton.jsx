import React from 'react';
import Link from 'next/link';

function ColorSwitchButton({text, border, color, link}) {
  return (
    <>
    <Link href={`/${link}`}>
      <div className={`group relative cursor-pointer p-2 w-32 ${border && "border"}
      bg-[#f7f7f7] rounded-full overflow-hidden text-black
      text-center font-semibold`}>
        <span className='translate-y-0 group-hover:-translate-y-12
        group-hover:opacity-0 transition-all duration-300
        inline-block'>
          {text}
        </span>
        <div className={`flex gap-2 text-white ${color} z-10
        items-center absolute left-0 top-0 h-full w-full justify-center
        translate-y-12 opacity-0 group-hover:translate-y-0
        group-hover:opacity-100 transition-all duration-300
        rounded-full group-hover:rounded-none`}>
          <span>{text}</span>
        </div>
      </div>
      </Link>
    </>
  );
}

export default ColorSwitchButton;
