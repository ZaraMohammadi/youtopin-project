// import React from 'react'
import media from "../image/commiunity-media.svg";
import background from "../image/commiunity-background.png"
import support from "../image/commiunity-support.svg"
import map from "../image/commiunity-map.svg"
import tourrefrence from "../image/commiunity-tourrefrence.svg"
function Commiunity() {
  return (
      <div className="flex flex-col py-[50px] bg-[rgb(255 255 255 / 1)] bg-center bg-cover bg-no-repeat lg-custom:py-28"style={{ backgroundImage: `url(${background})`}}>
            <div className="flex items-center justify-center text-colorBase-0 font-iransanseBold text-base my-[10px] pb-[29px] lg-custom:text-lg lg-custom:pb-28">
                <p> چرا یوتوپین؟</p>
            </div>
            <div className="grid grid-cols-2 md-custom:grid-cols-4 lg-custom:px-56">
                <div className="flex flex-col items-center justify-center mb-[50px]">
                    <img src={media} alt="media" className="w-11 h-11  lg-custom:w-[100px] lg-custom:h-[100px]"/>
                    <span className="text-colorBase-0 font-iransanseMedium text-xs font-medium mt-[18px] lg-custom:text-[0.9rem]">شبکه اجتماعی گردشگری</span>
                </div>
                <div className="flex flex-col items-center justify-center mb-[50px]">
                    <img src={support} alt=""className="w-11 h-11 lg-custom:w-[100px] lg-custom:h-[100px]"/>
                    <span className="text-colorBase-0 font-iransanseMedium text-xs font-medium mt-[18px] lg-custom:text-[0.9rem]">پشتیبانی 24 ساعته</span>
                </div>
                <div className="flex flex-col items-center justify-center mb-[50px]">
                    <img src={map} alt=""className="w-11 h-11 lg-custom:w-[100px] lg-custom:h-[100px]"/>
                    <span className="text-colorBase-0 font-iransanseMedium text-xs font-medium mt-[18px] lg-custom:text-[0.9rem]">مرجع راهنمای سفر شخصی</span>
                </div>
                <div className="flex flex-col items-center justify-center mb-[50px]">
                    <img src={tourrefrence}alt=""className="w-11 h-11 lg-custom:w-[100px] lg-custom:h-[100px]"/>
                    <span className="text-colorBase-0 font-iransanseMedium text-xs font-medium mt-[18px] lg-custom:text-[0.9rem]">مرجع تورهای داخلی و خارجی</span>
                </div>
            </div>
        </div>
  )
}

export default Commiunity
