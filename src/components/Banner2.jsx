// import React from 'react'
import background from "../image/banner2.jpg";
import mobilePhoto from "../image/banner2-mobile-pic.png";
function Banner2() {
  return (
    <section className="min-h-[408px] flex flex-col justify-center items-center my-[17px] bg-center bg-no-repeat lg-custom:relative "style={{backgroundImage:`url(${background})`}}>
      <div className=" hidden lg-custom:inline-block lg-custom:w-[295px] lg-custom:h-[385px] lg-custom:absolute lg-custom:right-[50px] lg-custom:bottom-0"style={{backgroundImage:`url(${mobilePhoto})`}}></div>
      <p className="text-colorBase-0 font-iransanseBold text-xs m-[13px] py-1 md-custom:text-lg md-custom:font-bold md-custom:my-[25px] lg-custom:text-xl">ورود به اپلیکیشن جامع گردشگری یوتوپین</p>
      <button className="w-[215px] text-[#ffffff] bg-[#26b9b0] font-iransanseRegular text-xs text-center p-[7.5px] border-none rounded-[5px] md-custom:w-[315px] md-custom:text-base md-custom:py-[22px] md-custom:rounded-lg lg-custom:w-[340px]">دانلود اپلیکیشن (iOS&Android)</button>
    </section>
  )
}

export default Banner2
