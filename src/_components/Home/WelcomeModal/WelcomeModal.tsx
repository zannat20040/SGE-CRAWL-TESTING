'use client';
import { useMyContext } from '@/_components/Context/MyContextProvider';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

interface ModalData {
  largeImageURL: string;
  phoneImageURL: string;
  formLink: string;
}

const defaultData: ModalData = {
  largeImageURL: "assets/Welcome-Modal/Study-In-the-UK-AD-Campaign-March-2025-Horizontal.webp",
  phoneImageURL: "assets/Welcome-Modal/Study-In-the-UK-AD-Campaign-March-2025-Square.webp",
  formLink: "/ModalEventRegistration",
};

const HomePageModal: React.FC = () => {
  const { modalOpen, setModalOpen } = useMyContext();
  const [apiData, setApiData] = useState<ModalData | null>(null);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setModalOpen(false);
    }
  };

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_FORM_URL;
    axios.get(`${apiUrl}/welcome-modal`)
      .then(res => setApiData(res.data.data))
      .catch(() => setApiData(defaultData));
  }, []);

  return (
    <div>
      {modalOpen && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-50 md:p-8 p-4"
          onClick={handleOverlayClick}
        >
          <div className="relative md:w-4/5 lg:w-2/3 w-full h-fit max-w-full max-h-full flex flex-col bg-white rounded-lg overflow-hidden">
            <div className="flex justify-end items-center p-4 border-b">
              <button
                onClick={() => setModalOpen(false)}
                className="text-white hover:text-gray-800 bg-gray-500 hover:bg-white p-1 rounded-full px-2 text-lg"
              >
                X
              </button>
            </div>
            <div className="flex-grow">
              <Link href={apiData?.formLink ?? defaultData.formLink} target="_blank">
                <Image
                  className="md:w-4/5 lg:w-2/3 w-full h-auto hidden md:block"
                  layout="responsive"
                  width={100}
                  height={100}
                  priority
                  src={apiData?.largeImageURL ?? defaultData.largeImageURL}
                  alt="Event Image"
                  placeholder="blur"
                  blurDataURL="https://i.ibb.co.com/d0GvvpS8/blur-placeholder.jpg"
                />
                <Image
                  className="md:w-4/5 lg:w-2/3 w-full h-auto block md:hidden"
                  layout="responsive"
                  width={100}
                  height={100}
                  priority
                  src={apiData?.phoneImageURL ?? defaultData.phoneImageURL}
                  alt="Event Image"
                  placeholder="blur"
                  blurDataURL="https://i.ibb.co.com/d0GvvpS8/blur-placeholder.jpg"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePageModal;
