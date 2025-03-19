import Contact_Us_Accordion from "@/_components/ContactUs/Contact_Us_Accordion";
import Contact_Us_Map from "@/_components/ContactUs/Contact_Us_Map/Contact_Us_Map";
import ContactUs_Components from "@/_components/ContactUs/ContactUs_Components";
export const metadata = {
    title: "Contact Us",
    description: "Get in touch with us for expert guidance on studying abroad. We're here to help with your questions and support your journey.",
    keywords: ["contact us", "study abroad support", "education consultancy", "student guidance", "get in touch"],
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/contact`,
    },
  };
  
const page = () => {
    return (
        <div className="poppins">
            <ContactUs_Components/>
            <Contact_Us_Map/>
            <Contact_Us_Accordion/>
        </div>
    );
};

export default page;