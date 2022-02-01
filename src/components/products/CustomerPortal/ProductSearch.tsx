import React from 'react';

export default function ProductSearch() {
  return (
      <div className="flex justify-center">
          <input className=" border-2 border-sky-700 shadow-md bg-white w-2/4 h-14 px-6 rounded-lg text-sm focus:outline-none placeholder:text-xl placeholder:text-center" type="search" name="search" placeholder="Search Products . . ." />
      </div>
  );
}
