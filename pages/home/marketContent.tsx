import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

// icons
import cryptoIcon from "@/public/images/bitcoin.png";
import stocksIcon from "@/public/images/stocks.png";
import indicesIcon from "@/public/images/indices.png";
import bondsIcon from "@/public/images/bonds.png";
import futuresIcon from "@/public/images/diamond.png";
import forexIcon from "@/public/images/flag.png";
import dollarIcon from "@/public/images/dollar.png";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

type MarketProps = {
  id: number;
  title: string;
  icon: StaticImageData;
};

const globalMarkets: MarketProps[] = [
  { id: 1, title: "Crypto", icon: cryptoIcon },
  { id: 2, title: "Stocks", icon: stocksIcon },
  { id: 3, title: "Indices", icon: indicesIcon },
  { id: 4, title: "Bonds", icon: bondsIcon },
  { id: 5, title: "Futures", icon: futuresIcon },
  { id: 6, title: "Forex", icon: forexIcon },
];
const IranianMarkets: MarketProps[] = [
  { id: 1, title: "دلار آمریکا", icon: dollarIcon },
  { id: 2, title: "بورس", icon: indicesIcon },
];

const Market = () => {
  const [toggleBtn, setToggleBtn] = useState<"Chart" | "Blog">("Chart");

  const handleButtonToggle = (item: "Chart" | "Blog") => {
    setToggleBtn(item);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="rounded bg-white p-1 grid grid-cols-2 gap-1">
        <button
          onClick={() => handleButtonToggle("Blog")}
          type="button"
          className={`text-blue-900 ${
            toggleBtn === "Blog" ? "bg-blue-800 text-white" : "bg-white"
          } hover:bg-blue-700 hover:text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
        >
          Blog
        </button>
        <button
          onClick={() => handleButtonToggle("Chart")}
          type="button"
          className={`text-blue-900 ${
            toggleBtn === "Chart" ? "bg-blue-800 text-white" : "bg-white"
          } hover:bg-blue-700 hover:text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
        >
          Chart
        </button>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between">
          <ChevronUpIcon width="16px" />
          <span className="border-l-4 px-1 border-blue-700 text-xs font-bold h-min">
            Global Markets
          </span>
        </div>
        <div className="grid grid-cols-3 gap-1 w-full">
          {globalMarkets.map((item: MarketProps) => (
            <div key={item.id} className="bg-white rounded w-full">
              <div
                onClick={() => {}}
                className="w-full flex flex-col justify-between items-center gap-4 py-4 px-10 hover:bg-purple-200 cursor-pointer rounded"
              >
                <Image
                  width={20}
                  height={20}
                  src={item?.icon}
                  alt={item?.title}
                />
                <span className="text-xs font-bold">{item?.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between">
          <ChevronUpIcon width="16px" />
          <span className="border-l-4 px-1 border-blue-700 text-xs font-bold h-min">
            IRANIAN Markets
          </span>
        </div>
        <div className="grid grid-cols-2 gap-1 w-full">
          {IranianMarkets.map((item: MarketProps) => (
            <div key={item.id} className="bg-white rounded w-full">
              <div
                onClick={() => {}}
                className="w-full flex flex-col justify-between items-center gap-4 py-4 px-10 hover:bg-purple-200 cursor-pointer rounded"
              >
                <Image
                  width={20}
                  height={20}
                  src={item?.icon}
                  alt={item?.title}
                />
                <span className="text-xs font-bold">{item?.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Market;
