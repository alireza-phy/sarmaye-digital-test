import { useState, type ReactElement } from "react";

//components
import Layout from "@/components/layout";
import Modal from "@/components/modal";
import ContentType from "./contentType";
import Market from "./marketContent";

//types
import type { NextPageWithLayout } from "@/pages/_app";

//icons
import { PlusIcon } from "@heroicons/react/24/outline";

const Page: NextPageWithLayout = () => {
  const [toggleContentModal, setToggleContentModal] = useState(false);
  const [toggleMarketModal, setToggleMarketModal] = useState(false);

  const handleOpenContentModal = () => {
    setToggleContentModal(true);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full h-full">
      <div className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-700 flex justify-center items-center cursor-pointer">
        <PlusIcon
          className="text-white w-5"
          onClick={handleOpenContentModal}
        />
      </div>
      <button
        onClick={handleOpenContentModal}
        type="button"
        className="text-blue-900 bg-white hover:bg-blue-200 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Add content
      </button>
      <Modal
        toggleModal={toggleContentModal}
        setToggleModal={setToggleContentModal}
        title="Content Type"
        closeBtn
      >
        <ContentType
          setToggleMarketModal={setToggleMarketModal}
          setToggleContentModal={setToggleContentModal}
        />
      </Modal>
      <Modal
        toggleModal={toggleMarketModal}
        setToggleModal={setToggleMarketModal}
        handleBackBtn={handleOpenContentModal}
        title="Market"
        backBtn
      >
        <Market/>
      </Modal>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
