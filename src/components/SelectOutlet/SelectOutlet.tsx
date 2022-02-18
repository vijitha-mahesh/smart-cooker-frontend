import React, { useEffect, useState } from 'react'
import { getOutlets } from '../../Services/useOutletsService';
import { OutletProps } from '../../types/Outlet';

    


export default function SelectOutlet() {
    const [selectedOutlet, setSelectedOutlet] = useState('0');
    const [outlets, setOutlets] = useState<OutletProps[]>([]);

    useEffect(() => {
        getOutlets().then((res) => setOutlets(res.data));
    });

    const handleOutletChnage = async (event: React.FormEvent) => {
        var a = (event?.target as any).value;
    };
  return (
      <div className="relative">
          <select
              value={selectedOutlet}
              onChange={(e) => {
                  //setSelectedOutlet(e.target.value);
                  handleOutletChnage(e);
              }}
              defaultValue={0}
              className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-sky-700 text-base pl-3 pr-10"
          >
              {outlets.map(function (data,index) {
                  return <option value="{index}">{data.name}</option>;
              })}
          </select>
          <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
              </svg>
          </span>
      </div>
  );
}
