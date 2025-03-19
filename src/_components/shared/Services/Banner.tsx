import React from "react";

export default function Banner({ title  }: { title: string }) {
    return (
        <div
            className="hero h-full "
            style={{
                backgroundImage:
                    "url('/assets/Homepage/image-gallery/gallery-image (7).webp')",
            }}
        >
            <div className="hero-overlay bg-opacity-60 bg-black "></div>
            <div className="hero-content text-neutral-content  flex justify-start w-full px-5 md:px-16">
                <div className="max-w-4xl ml-0 py-28 pb-20  text-start ">
                    <div>
                        <h1 className={`mb-5 md:text-5xl text-3xl font-bold poppins-bold capitalize`}>{title}</h1>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
