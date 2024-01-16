import Image from "next/image";
import htmlandCSSC from "@/public/images/htmlCertificate.png";
import jsC from "@/public/images/jsCerifi.png";
import tsC from "@/public/images/tsCertifi.png";
import reactC from "@/public/images/reactCertifi.png";
import nextC from "@/public/images/nextjsCertifi.png";
import gitC from "@/public/images/gitCertifi.png";
import Cerificate from "./Certificate";

const Cerification = () => {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-white mb-3 text-center">
        Certificates
      </h2>
      <div className="grid md:grid-cols-3 md:gap-6 gap-6">
        <Cerificate src={htmlandCSSC} alt="html Certificate" />
        <Cerificate src={jsC} alt="js Certificate" />
        <Cerificate src={tsC} alt="ts Certificate" />
        <Cerificate src={reactC} alt="react Certificate" />
        <Cerificate src={nextC} alt="next Certificate" />
        <Cerificate src={gitC} alt="git Certificate" />
      </div>
    </div>
  );
};

export default Cerification;
