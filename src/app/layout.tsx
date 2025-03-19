import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/_components/QueryClientProvider/Providers";
import Chats from "@/_components/Chats/Chats";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MyContextProvider } from "@/_components/Context/MyContextProvider";
import Navbar2 from "@/_components/shared/Navbar/Navbar";
import Footer from "@/_components/shared/Footer/Footer/Footer";

export const metadata: Metadata = {
  title: "Shabuj Global Education",
  description:
    "We take pride in our ability to help students achieve their academic goals and succeed in life.",
  keywords: [
    "study abroad",
    "university admission",
    "academic success",
    "student visa",
    "education consulting",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={` antialiased`}>
        <Providers>
          <MyContextProvider>
            <ToastContainer />
            <Navbar2 />
            <div className="pb-10">
              {children}
              <Chats />
            </div>
            <div className="lg:z-40 z-40 absolute w-full">
              <Footer />
            </div>
          </MyContextProvider>
        </Providers>
      </body>
    </html>
  );
}
