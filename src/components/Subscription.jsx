// import React from 'react'
import imgMobileHidden from "../image/subscription-img-hidden.webp";
import tikIcon from "../image/access-icon.png";
import arrowInButton from"../image/acces-button-icon.png"
import logoHidden from "../image/subscription-logo-hidden.svg";
import youtopinNameLogo from"../image/youtopin-name.svg"
function Subscription() {
  return (
      <section className="subscription h-auto bg-[#f7fffe] flex flex-col items-center justify-center py-[34px] md-custom:grid md-custom:relative md-custom: grid-cols-[1.5fr_1.3fr_1fr] ">
        <img src={imgMobileHidden} className="subscription__img__hidden hidden md-custom:inline-block w-full top-0 right-0  col-start-1 self-stretch" />
        <div className="subscription__text flex flex-col justify-center items-center">
          <div className="subscription__title text-[#26b9b0] font-iransanseBold font-black py-[17px] md-custom:text-4xl">اشتراک یوتوپین</div>
          <div className="subscription__offer text-colorBase-0 font-iransanseRegular text-xs py-[17px] md-custom:text-center md-custom:text-[0.9rem] md-custom:leading-6">
            با خرید اشتراک، از خدمات کاربران ویژه بهره‌مند شوید.
          </div>
          <div className="subscription__access pb-[25px] md-custom:pb-[15px]">
            <span className="access-card flex py-[4.5px] font-iransanseBold text-[0.65rem] leading-[1.3rem] md-custom:text-[0.8rem]">
              <img className="ml-[5px] align-middle" src={tikIcon} alt="tik" />
              <p>دسترسی به راهنماهای سفر</p>
            </span>
            <span className="access-card  flex py-[4.5px] font-iransanseBold text-[0.65rem] leading-[1.3rem] md-custom:text-[0.8rem]">
              <img className="ml-[5px] align-middle" src={tikIcon} alt="tik" />
              <p>دسترسی به راهنماهای مهاجرت</p>
            </span>
            <span className="access-card  flex py-[4.5px] font-iransanseBold text-[0.65rem] leading-[1.3rem] md-custom:text-[0.8rem]">
              <img className="ml-[5px] align-middle" src={tikIcon} alt="tik" />
              <p>تخفیف رزرو تورهای داخلی</p>
            </span>
          </div>
          <div className="subscription__button flex w-fit font-iransanseBold bg-[#26b9b0] text-[0.65rem] p-3 rounded-[5px]">
            <a className="no-underline text-[#ffff] ml-2" href="">اشتراک ویژه</a>
            <img className="w-3 h-3 text-[#ffff]" src= {arrowInButton } alt="tik" />
          </div>
        </div>
        <div className="subscription__logo__hidden hidden md-custom:flex flex-col justify-center items-center p-[35px] ">
          <img
            className="logo__hidden w-[60%]"
            src={logoHidden}
          />
          <img
            className="text__logo__hidden w-[110px]"
            src={youtopinNameLogo}
            alt="youtopin"
          />
        </div>
      </section>
  );
}

export default Subscription;
