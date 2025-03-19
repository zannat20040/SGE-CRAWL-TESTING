import Image from "next/image";


const Service_SingleTestimonial = ({item}) => {
    const { image } = item
    return (
        <div>
            <Image width={100} height={100} src={image} className="rounded-2xl lg:w-[951px] w-full px-5" alt="ServiceSignleTestimonial" />        
        </div>
    );
};

export default Service_SingleTestimonial;