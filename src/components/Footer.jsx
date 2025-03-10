// import React from 'react'
import phonIcon from "../image/phone.svg";
import linkdinPng from "../image/linkdin.png";
import instagramPng from "../image/instagram.png";
import telegramPng from "../image/telegram.png";
import etehadiehNemad from"../image/etehadieh-licence.svg"
import nemadEtemad from "../image/namad-etemad.svg"
import instaHover from "../image/instagram-hover.svg"
import linkdinHover from "../image/linkdin-hover.svg"
import telegramHover from "../image/telegram-hover.svg"
import { useState } from "react";


function Footer() {
  const[instagram,setInstagram]=useState(instagramPng)
  const[telegram,setTelegram]=useState(telegramPng)
  const[linkdin,setLinkdin]=useState(linkdinPng)

  return (
    <>
      <footer className="footer h-auto p-[17px] border-t-2 border-t-[rgba(228,223,223,0.688)] md-custom:grid lg-custom:border-b-2 lg-custom:border-b-[rgba(228,223,223,0.688)] 2xl-custom:grid-cols-4 ">
        <div className="footer__social-media w-full h-[200px] md-custom:h-[150px] md-custom:flex md-custom:justify-around md-custom:border-b-0 md-custom:col-start-1 md-custom:col-end-4 lg-custom:border-b-0 2xl-custom:col-span-1 lg-custom:col-end-3">
          <div className="social-media__support text-colorBase-0 flex items-center justify-around p-[10px] font-iransanseRegular text-[0.9rem] leading-7 md-custom:w-[45%]">
            <div>
              <p>پشتیبانی</p>
              <span className="text-slate-950 mt-[10px] font-iransanseMedium text-xl font-medium">24 ساعته</span>
            </div>
            <div>
              <div className="social-media__support__phone flex">
                <img className="w-5 scale-x-[-1] ml-2" src={phonIcon} alt="phone icon" />
                <p>تلفن پشتیبانی :</p>
              </div>
              <span className="text-slate-950 mt-[10px] font-iransanseMedium text-xl font-medium">021-91005711</span>
            </div>
          </div>
          <div className="social-media__icons flex items-center justify-center flex-col font-iransanseRegular text-[0.9rem] leading-4 mt-[10px]">
            <span>یوتوپین در شبکه های اجتماعی:</span>
            <div className="social-media__icon w-[180px] mt-5 flex justify-around">
              <img className="w-[40px] h-[40px] bg-[#CFCDCF] bg-opacity-30 rounded-[5px] cursor-pointer" src={linkdin}onMouseOver={()=>setLinkdin(linkdinHover)} onMouseLeave={()=>setLinkdin(linkdinPng)}  alt="likdin" />
              <img className="w-[40px] h-[40px] bg-[#CFCDCF] bg-opacity-30 rounded-[5px]cursor-pointer"src={instagram}onMouseEnter={()=>setInstagram(instaHover)} onMouseLeave={()=>setInstagram(instagramPng)} alt="instagram" />
              <img className="w-[40px] h-[40px] bg-[#CFCDCF] bg-opacity-30 rounded-[5px]cursor-pointer"src={telegram} onMouseEnter={()=>setTelegram(telegramHover)} onMouseLeave={()=>setTelegram(telegramPng)}alt="telegram" />
            </div>
          </div>
        </div>
        <div className="footer__links flex flex-row items-center justify-around pt-5 border-t-2 border-t-[rgb(90_90_91)] md-custom:pt-0 md-custom:border-t-0 md-custom:col-span-2 lg-custom:border-t-0 lg-custom:col-start-4 lg-custom:col-end-6 2xl-custom:col-start-3 2xl-custom:col-end-4">
          <ul className="footer__link__ul list-none">
            <li className="py-[7px]">
              <a className="text-colorBase-0 font-iransanseRegular text-xs no-underline lg-custom:text-sm" href="">درباره ما</a>
            </li>
            <li className="py-[7px]">
              <a className="text-colorBase-0 font-iransanseRegular text-xs no-underline lg-custom:text-sm" href="">تماس با ما</a>
            </li>
            <li className="py-[7px]">
              <a className="text-colorBase-0 font-iransanseRegular text-xs no-underline lg-custom:text-sm" href="">سوالات متداول</a>
            </li>
          </ul>
          <ul className="footer__link__ul list-none">
            <li className="py-[7px]">
              <a className="text-colorBase-0 font-iransanseRegular text-xs no-underline lg-custom:text-sm" href="">قوانین و شرایط</a>
            </li>
            <li className="py-[7px]">
              <a className="text-colorBase-0 font-iransanseRegular text-xs no-underline lg-custom:text-sm" href="">حریم خصوصی</a>
            </li>
            <li className="py-[7px]">
              <a className="text-colorBase-0 font-iransanseRegular text-xs no-underline lg-custom:text-sm" href="">شکایات</a>
            </li>
          </ul>
          <ul className="footer__link__ul list-none">
            <li className="py-[7px]">
              <a className="text-colorBase-0 font-iransanseRegular text-xs no-underline lg-custom:text-sm" href="">دانلود اپلیکیشن</a>
            </li>
            <li className="py-[7px]">
              <a className="text-colorBase-0 font-iransanseRegular text-xs no-underline lg-custom:text-sm" href="">اشتراک یوتوپین</a>
            </li>
            <li className="py-[7px]">
              <a className="text-colorBase-0 font-iransanseRegular text-xs no-underline lg-custom:text-sm" href="">بلاگ</a>
            </li>
          </ul>
        </div>
        <div className="footer__certificates flex flex-row items-center justify-center py-5 border-t-2 border-t-[rgb(90_90_91)] border-b-2 border-b-[rgb(228_223_223)] border-b-opacity-[68%] md-custom:p-0 md-custom:border-t-0 md-custom:border-b-0 lg-custom:col-span-5 lg-custom:my-[20px] lg-custom:mx-0 2xl-custom:col-span-1">
          <img className="w-16 h-16 ml-[25px] rounded-[10px] bg-[rgb(228_223_223)] bg-opacity-[68%]" src={nemadEtemad} alt="footer" />
          <img className="w-16 h-16 ml-[25px] rounded-[10px] bg-[rgb(228_223_223)] bg-opacity-[68%]" src={etehadiehNemad} alt="نماد اعتماد" />
          <img className="w-16 h-16 ml-[25px] rounded-[10px] bg-[rgb(228_223_223)] bg-opacity-[68%]" src={nemadEtemad} alt="مجوز اتحادیه" />
        </div>
      </footer>
      <p className="site-owner-note font-iransanseRegular text-[0.65rem] text-center mt-5 md-custom:mt-5 lg-custom:text-xs lg-custom:text-right">
        کلیه حقوق این سایت محفوظ و متعلق به شرکت ایده گستر داده کسب و کار شهر
        می‌باشد.
      </p>
    </>
  );
}

export default Footer;
