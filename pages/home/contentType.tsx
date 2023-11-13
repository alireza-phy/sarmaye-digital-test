import React, { Dispatch, SetStateAction } from "react";
import twitterIcon from "@/public/images/twitter.png";
import analysisIcon from "@/public/images/analysis.png";
import CandleStickIcon from "@/public/images/chart.png";
import Image, { StaticImageData } from "next/image";

interface IContentType {
  setToggleContentModal: Dispatch<SetStateAction<boolean>>;
  setToggleMarketModal: Dispatch<SetStateAction<boolean>>;
}

type ContentProps = {
  id: number;
  title: string;
  icon: StaticImageData;
};

const contentData: ContentProps[] = [
  { id: 1, title: "Signal", icon: CandleStickIcon },
  { id: 2, title: "Analysis", icon: analysisIcon },
  { id: 3, title: "Tweet", icon: twitterIcon },
];

const ContentType = (props: IContentType) => {
  const { setToggleContentModal, setToggleMarketModal } = props;
  return (
    <div className="grid grid-cols-3 gap-1 w-full">
      {contentData.map((item: ContentProps, index: number) => (
        <div key={item.id} className="bg-white rounded w-full">
          <div
            onClick={() => {
              setToggleContentModal(false);
              setToggleMarketModal(true);
            }}
            className="w-full flex flex-col justify-between items-center gap-4 py-4 px-10 hover:bg-purple-200 cursor-pointer rounded"
          >
            <Image width={20} height={20} src={item?.icon} alt={item?.title} />
            <span className="text-xs font-bold">{item?.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentType;
