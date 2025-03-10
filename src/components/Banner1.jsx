import "./App.css";
import "./index.css"
import whatsappIcon from "../image/whatsapp.svg";
import bannerMobile from "../image/banner1-mobile.webp";
import bannerDesktab from "../image/banner1-desktab.webp"
import { useState } from "react";
import { useEffect } from "react";
function Banner1() {
  const [bgImage, setBgImage] = useState(bannerDesktab);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setBgImage(bannerDesktab)
      }else{
        setBgImage(bannerMobile)
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // اجرا برای اولین بار

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section
        className=" min-h-[680px] bg-cover bg-repeat-round flex flex-col  items-center justify-center md-custom:min-h-[160px]  sm:flex-row-reverse md-custom:justify-end  md-custom:relative lg-custom:min-h-[300px]"
        style={{ backgroundImage: `url(${bgImage})`}}
    
      >
        <div className="align-middle text-colorBase-0 md-custom:flex md-custom:absolute md-custom:bottom-3 lg-custom:bottom-[22px] lg-custom:right-[120px]">
          <div className="flex  flex-row mb-5 text-xl leading-relaxed  items-center justify-center md-custom:ml-[10px] md-custom:mb-0 md-custom:justify-around md-custom:text-xs lg-custom:ml-5 lg-custom:text-[1.4rem]">
            <span className="text-xs leading-tight ml-4 font-iransanseBold md-custom:text-xs md-custom:ml-4 lg-custom:text-base">داخلی</span>
            <p className="font-iransanseBold">021-91005711-202</p>
          </div>
          <div className="flex flex-row mb-5 text-xl leading-relaxed  items-center justify-center font-iransanseBold md-custom:ml-[10px] md-custom:mb-0 md-custom:justify-around md-custom:text-xs lg-custom:ml-5 lg-custom:text-[1.4rem]">
            <span className="w-[34px] h-[34px] bg-[#16a34a] p-[6px] rounded-[10px] ml-9 items-center align-middle md-custom:ml-2 lg-custom:w-10 lg-custom:h-10 lg-custom:ml-2">
              <img src={whatsappIcon} alt="whatsapp" className="w-[22px] h-[22px] m-auto lg-custom:w-[26px] lg-custom:h-[26px] lg-custom:m-0"/>
            </span>
            <p>092227068311</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner1;