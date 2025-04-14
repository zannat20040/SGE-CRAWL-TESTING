"use client";

import { useEffect, useState, MouseEvent } from "react";
import { useMyContext } from "@/_components/Context/MyContextProvider";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import type { ModalData } from "@/assets/type/WelcomeModel";

const defaultData: ModalData = {
  largeImageURL:
    "/assets/Welcome-Modal/Study-In-the-UK-AD-Campaign-March-2025-Horizontal.webp",
  phoneImageURL:
    "/assets/Welcome-Modal/Study-In-the-UK-AD-Campaign-March-2025-Square.webp",
  formLink: "/ModalEventRegistration",
};

const universalBlurDataURL =
  'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IC4AAADQAgCdASoIAAUAAsBMJZACdDBAvkZXAAA=';


const HomePageModal = () => {
  const { modalOpen, setModalOpen } = useMyContext();
  const [modalData, setModalData] = useState<ModalData>(defaultData);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_FORM_URL;
    if (!apiUrl) return;

    axios
      .get(`${apiUrl}/welcome-modal`)
      .then((res) => setModalData(res.data.data))
      .catch(() => setModalData(defaultData));
  }, []);

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setModalOpen(false);
    }
  };

  if (!modalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-50 md:p-8 p-4"
      onClick={handleOverlayClick}
    >
      <div className="relative md:w-4/5 lg:w-2/3 w-full h-fit max-w-full max-h-full flex flex-col bg-white rounded-lg overflow-hidden">
        <div className="flex justify-end items-center p-4 border-b">
          <button
            onClick={() => setModalOpen(false)}
            className="text-white hover:text-gray-800 bg-gray-500 hover:bg-white p-1 rounded-full px-2 text-lg"
            aria-label="Close Modal"
          >
            X
          </button>
        </div>
        <div className="flex-grow">
          <Link href={modalData.formLink} target="_blank">
            <div className="hidden md:block">
              <Image
                src={modalData.largeImageURL}
                alt="Event Image Large"
                width={800}
                height={400}
                className="w-full h-auto"
                placeholder="blur"
                blurDataURL={universalBlurDataURL}
                loading="lazy"
              />
            </div>
            <div className="block md:hidden">
              <Image
                src={modalData.phoneImageURL}
                alt="Event Image Mobile"
                width={500}
                height={500}
                className="w-full h-auto"
                placeholder="blur"
                blurDataURL={universalBlurDataURL}
                loading="lazy"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePageModal;
