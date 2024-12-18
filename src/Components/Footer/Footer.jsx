import FooterCarousel from "./FooterCarousel";
import FooterContent from "./FooterContent";

const Footer = () => {
  return (
    <div className="max-h-screen flex flex-col">
      <div className="">
        <FooterCarousel />
      </div>
      <div className="bg-[#E6F2FF] flex-grow ">
        <FooterContent />
      </div>
    </div>
  );
};

export default Footer;
