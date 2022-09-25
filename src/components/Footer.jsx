import React from 'react';
import { memo } from 'react';

function Footer() {
  console.log("Heya! this is Footer. I'm running...")
  return (
    <div className="bg-white py-5 mt-10">
      <div className="flex flex-col gap-1 text-xs text-gray-400 tracking-wide items-center w-4/5 mx-auto sm:flex-row sm:justify-between sm:text-sm sm:tracking-wider sm:font-semibold">
        <p>Copyright &copy; 2022 | CodeYogi</p>
        <p>Powered by CodeYogi</p>
      </div>
    </div>
  );
}

export default memo(Footer)

