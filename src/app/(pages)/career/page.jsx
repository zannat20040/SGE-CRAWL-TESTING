import React from 'react';
import Careers from '../../../_components/Careers/Careers';
export const metadata = {
  title: "Careers",
  description: "Join our team and be part of a mission to guide students toward their study abroad dreams. Explore exciting career opportunities with us.",
  keywords: ["career opportunities", "education jobs", "study abroad careers", "join our team", "job openings"],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/career`,
  },
};

const page = () => {
  return (
    <div>
      <Careers/>
    </div>
  );
};

export default page;