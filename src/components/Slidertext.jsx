// import React from 'react'

// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// import './styles.css';

// // import required modules
// import { Navigation } from 'swiper/modules';

// export default function App() {
//   return (
//     <>
//       <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }




function Slidertext() {

  return (
    <>
    {/* <!-- slider text جدیدترین --> */}
 
 <div id='tabs' style={{maxWidth:'800px'}}>
     <div >
         <div className="tabs-list">جدیدترین</div>
         <div className="tabs-list">ترکیه</div>
         <div className="tabs-list">دبی</div>
         <div className="tabs-list">ارمنستان</div>
         <div className="tabs-list">روسیه</div>
       
     </div>
     <div>
         {/* <!--  کارت های جدیدترین --> */}
         <div>
             <div className="Swiper">
                 <div dir="rtl" className="swiper mySwiper">
                 <div className="swiper-wrapper">
              {/* <!-- slider1 --> */}
             <div className="swiper-slide">
              
                  <div className=" allCart__boxSadow allCart__boxSadow--radious">
                      
                          <div className="allCart__svg">
                              <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                          </div>
              
                          <img className="allCart__img1" src="./image/دبی نوروز.webp" alt=""/>
                          <div className="allCart__box1">
                          <p className="allCart__box1--p"  >دبی نوروز هتل وکو</p>
                      
                      <div className="allCart__text2">
                            <p className="allCart__text3">(4 شب و 5 روز)</p>
                            <div className="allCart__box1--scr">
                            <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
                            </div>
                      </div>
                      
                      <div className="allCart__price">
                          <p> <span className="allCart__priceNum">58,990,000</span>  تومان</p>
                          <div className="allCart__icoStar">
                              <svg className="allCart__star text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                              <p className="allCart__score">4.7</p>
                          </div>
                      </div>
                    
                      <div className="allCart__footer">
                          <div className="allCart__clander">
                              
                              <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                              <p className="allCart__icoText">3 فروردین</p>
                          </div>
              
                         <div className="allCart__iconEstandart">
                             <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                         </div>
                      </div>
                      </div>
                  </div>
             </div>
              
              {/* <!-- slider2 --> */}
             <div className="swiper-slide">
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                     
                         <div className="allCart__svg">
                             <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
             
                         <img className="allCart__img1" src="./image/دبی نوروز.webp" alt=""/>
                         <div className="allCart__box1">
                         <p className="allCart__box1--p">دبی ویژه نوروز هتل پیرل سوییس</p>
                     
                    <div className="allCart__text2">
                             <p className="allCart__text3">(4 شب و 5 روز)</p>
                             <div className="allCart__box1--scr">
                                 <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
                             </div>
                     </div>
                     
                     <div className="allCart__price">
                         <p> <span className="allCart__priceNum">45,500,000</span>  تومان</p>
                         <div className="allCart__icoStar">
                             <svg className="allCart__star text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.7</p>
                         </div>
                     </div>
                     <div className="allCart__footer">
                         <div className="allCart__clander">
                             
                             <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">3 فروردین</p>
                         </div>
                        <div className="allCart__iconEstandart">
                            <svg className="allCart__airplane " xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                        </div>
                     </div>
                     </div>
                 </div>
             </div>
              {/* <!-- slider 3  --> */}
             <div className="swiper-slide">
              
                <div className=" allCart__boxSadow allCart__boxSadow--radious">
                     
                         <div className="allCart__svg">
                             <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
                         <img className="allCart__img1" src="./image/قبرس شمالی.webp" alt=""/>
                         <div className="allCart__box1">
                         <p className="allCart__box1--p">قبرس شمالی هتل سالامیس بی ویژه نوروز</p>
                     
                <div className="allCart__text2">
                             <p className="allCart__text3">(6 شب و 7 روز)</p>
                             <div className="allCart__box1--scr">
                                 <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
                             </div>
                     </div>
                     
                     <div className="allCart__price">
                         <p> <span className="allCart__priceNum">86,690,000</span>  تومان</p>
                         <div className="allCart__icoStar">
                             <svg className="allCart__star text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.7</p>
                         </div>
                     </div>
                     <div className="allCart__footer">
                         <div className="allCart__clander">
                             
                             <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">29 اسفند</p>
                         </div>
             
                        <div className="allCart__iconEstandart">
                            <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                        </div>
                     </div>
                     </div>
                 </div>
             </div>
              
              {/* <!-- slider4 --> */}
             <div className="swiper-slide">
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                     
                         <div className="allCart__svg">
                             <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
                         <img className="allCart__img1" src="./image/پوکت و بانکوک.webp" alt=""/>  
                         <div className="allCart__box1">
                         <p className="allCart__box1--p"  >پوکت و بانکوک نوروز 1404</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3">(7 شب و 8 روز)</p>
                             
                             <div className="allCart__box1--scr">
                                 <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
                             </div>
                     </div>
                     
                     <div className="allCart__price">
                         <p> <span className="allCart__priceNum">175,000,000</span>  تومان</p>
                         <div className="allCart__icoStar">
                             <svg className="allCart__star text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.7</p>
                         </div>
                     </div>
                     <div className="allCart__footer">
                         <div className="allCart__clander">
                             <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">5 فروردین</p>
                         </div>
             
                        <div className="allCart__iconEstandart">
                            <svg className="allCart__airplane " xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                        </div>
                     </div>
                     </div>
                 </div>
             </div>
              
              {/* <!-- slider5 --> */}
             <div className="swiper-slide">
              
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                     
                         <div className="allCart__svg">
                             <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
             
                         <img className="allCart__img1" src="./image/بالی.webp" alt=""/>
                         
                         <div className="allCart__box1">
                         <p className="allCart__box1--p">بالی 8 روزه نوروز</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3">(7 شب و 8 روز)</p>
                             
                             <div className="allCart__box1--scr">
                                 <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
                             </div>
                     </div>
                     
                     <div className="allCart__price">
                         <p> <span className="allCart__priceNum">139,740,000</span>  تومان</p>
                         <div className="allCart__icoStar">
                             <svg className="allCart__star text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.7</p>
                         </div>
                     </div>
                     <div className="allCart__footer">
                         <div className="allCart__clander"> 
                             <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">26 اسفند</p>
                         </div>
             
                        <div className="allCart__iconEstandart">
                            <svg className="allCart__airplane " xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                        </div>
                     </div>
                     </div>
                 </div>
             </div>
              
             {/* <!-- slider6 --> */}
             <div className="swiper-slide">
              
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                     
                         <div className="allCart__svg">
                             <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
             
                         <img className="allCart__img1" src="./image/آفر ویژه سریلانکا.webp" alt=""/>
                         
                         <div className="allCart__box1">
                         <p className="allCart__box1--p">آفر ویژه سریلانکا 10 اسفند</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3">(7 شب و 8 روز)</p>
                             <div className="allCart__box1--scr">
                                 <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
                             </div>
                     </div>
                     <div className="allCart__price">
                         <p> <span className="allCart__priceNum">89,000,000</span>  تومان</p>
                         <div className="allCart__icoStar">
                             <svg className="allCart__star text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.6</p>
                         </div>
                     </div>
                     <div className="allCart__footer">
                         <div className="allCart__clander">
                             
                             <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">10 اسفند</p>
                         </div>
             
                        <div className="allCart__iconEstandart">
                            <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                        </div>
                     </div>
                     </div>
                 </div>
             </div>
              
              {/* <!-- slider7 --> */}
             <div className="swiper-slide">
              
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                         <div className="allCart__svg">
                             <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
                         <img className="allCart__img1" src="./image/ارمنستان ایروان.webp" alt=""/>
                         <div className="allCart__box1">
                         <p className="allCart__box1--p">ارمنستان (ایروان) هوایی 29 بهمن</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3">(3 شب و 4 روز)</p>
                             
                             <div className="allCart__box1--scr">
                                 <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
                             </div>
                     </div>
                     <div className="allCart__price">
                         <p> <span className="allCart__priceNum">21,200,000</span>  تومان</p>
                         <div className="allCart__icoStar">
                             <svg className="allCart__star text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.6</p>
                         </div>
                     </div>
                     <div className="allCart__footer">
                         <div className="allCart__clander">
                             <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">29 بهمن</p>
                         </div>
                        <div className="allCart__iconEstandart">
                            <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                        </div>
                     </div>
                     </div>
                 </div>
             </div>
              
             {/* <!-- slider8 --> */}
             <div className="swiper-slide">
              
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                     
                         <div className="allCart__svg">
                            <svg className="allCart__svg--eshterak" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5 text-textDetails hover:text-primary" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
             
                         <img className="allCart__img1" src="./image/گرجستان تفلیس.webp" alt=""/>
                         <div className="allCart__box1">
                         <p className="allCart__box1--p">گرجستان (تفلیس) هوایی انفرادی ویژه 24 بهمن</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3">(4 شب و 5 روز)</p>
                             <div className="allCart__box1--scr">
                                 <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
                             </div>
                     </div>
                     <div className="allCart__price">
                         <p> <span className="allCart__priceNum">16,60,000</span>  تومان</p>
                         <div className="allCart__icoStar">
                             <svg className="allCart__star text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.7</p>
                         </div>
                     </div>
                     <div className="allCart__footer">
                         <div className="allCart__clander">
                             <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">24 بهمن</p>
                         </div>
                        <div className="allCart__iconEstandart">
                            <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                        </div>
                     </div>
                     </div>
                 </div>
             </div>
              
                   
             </div>  
              {/* <!-- swiper wrapper -->     */}
             <div className="swiper-button-next"></div>
             <div className="swiper-button-prev"></div>
             </div>
             </div>
         </div>
 
         {/* <!-- ترکیه --> */}
         <div>
             <div className="Swiper">
                 <div dir="rtl" className="swiper mySwiper">
                 <div className="swiper-wrapper">
              {/* <!-- slider1 --> */}
             <div className="swiper-slide">
              
                  <div className=" allCart__boxSadow allCart__boxSadow--radious">
                      
                          <div className="allCart__svg">
                             <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                          </div>
                          <img className="allCart__img1" src="./image/مارماریس نورورز.webp" alt=""/>
                          <div className="allCart__box1">
                          <p className="allCart__box1--p"  >مارماریس نوروز (1404) 30 اسفند تا 5 فروردین</p>
                      
                      <div className="allCart__text2">
                              <p className="allCart__text3">(6 شب و 7 روز)</p>
                              <div className="allCart__box1--scr">
                                  <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
                              </div>
                      </div>
                      <div className="allCart__price1 allCart__price1--price">
                         <h2 className="allCart__price--h2 allCart__price--h2--h21">28,990,000</h2>
                         <span className="allCart__price--spanprice">تومان </span>
                         <span className="allCart__price--plus"> + </span>
                         <h2 className="allCart__price--h2 allCart__price--h2--h21"> 350 </h2>
                         <span className="allCart__price--spanprice">دلار</span>
                         <div className="allCart__icoStar">
                             <svg className="allCart__star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.6</p>
                         </div>
                        </div>
                      <div className="allCart__footer">
                          <div className="allCart__clander">
                              <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                              <p className="allCart__icoText">30 اسفند</p>
                          </div>
                         <div className="allCart__iconEstandart">
                             <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                         </div>
                      </div>
                      </div>
                  </div>
             </div>
              
              {/* <!-- slider2 --> */}
              <div className="swiper-slide">
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                         <div className="allCart__svg">
                            <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
                         <img className="allCart__img1" src="./image/مارماریس نورورز.webp" alt=""/>
                         <div className="allCart__box1">
                         <p className="allCart__box1--p">مارماریس فتحیه 29 اسفند تا 6 فروردین</p>
                     <div className="allCart__text2">
                             <p className="allCart__text3">(6 شب و 7 روز)</p>
                             <div className="allCart__box1--scr">
                                 <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
                             </div>
                     </div>
                     
                     <div className="allCart__price1 allCart__price1--price22">
                        <h2 className="allCart__price--h2 allCart__price--h2--h21">79,990,000 تومان</h2>
                        <div className="allCart__icoStar">
                            <svg className="allCart__star " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                            <p className="allCart__score">4.6</p>
                        </div>
                       </div>
                     
             
                     <div className="allCart__footer">
                         <div className="allCart__clander">
                             
                             <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">3 فروردین</p>
                         </div>
             
                        <div className="allCart__iconEstandart">
                            <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                        </div>
                     </div>
                     </div>
                 </div>
             </div>
 
              {/* <!-- slider 3  --> */}
             <div className="swiper-slide">
              
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                     
                         <div className="allCart__svg">
                            <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
             
                         <img className="allCart__img1" src="./image/مارماریس نورورز.webp" alt=""/>
                         
                         <div className="allCart__box1">
                         <p className="allCart__box1--p"  >مارماریس نوروز (1404) 28 اسفند تا 5 فروردین</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3">(6 شب و 7 روز)</p>
                             <div className="allCart__box1--scr">
                                 <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
                             </div>
                     </div>
                     
                     <div className="allCart__price1 allCart__price1--price">
 
                        <h2 className="allCart__price--h2 allCart__price--h2--h21">28,990,000</h2>
                        <span className="allCart__price--spanprice">تومان </span>
                        
                        <span className="allCart__price--plus"> + </span>
                        <h2 className="allCart__price--h2 allCart__price--h2--h21">405</h2>
                        <span className="allCart__price--spanprice">دلار</span>
                
 
                        <div className="allCart__icoStar">
                            <svg className="allCart__star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                            <p className="allCart__score">4.6</p>
                        </div>
                       </div>
                     
                     <div className="allCart__footer">
                         <div className="allCart__clander">
                             <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">28 اسفند</p>
                         </div>
             
                        <div className="allCart__iconEstandart">
                            <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                        </div>
                     </div>
                     </div>
                 </div>
             </div>
              
              {/* <!-- slider4 --> */}
             <div className="swiper-slide">
              
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                     
                         <div className="allCart__svg">
                            <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
             
                         <img className="allCart__img1" src="./image/مارماریس نورورز.webp" alt=""/>
                         
                         <div className="allCart__box1">
                         <p className="allCart__box1--p"  >مارماریس فتحیه 3 تا 10 فروردین</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3">(6 شب و 7 روز)</p>
                             <div className="allCart__box1--scr">
                                 <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
                             </div>
                     </div>
                     
                     <div className="allCart__price1 allCart__price1--price22">
 
                        <h2 className="allCart__price--h2 allCart__price--h2--h21">82,990,000 تومان</h2>
                     
                        <div className="allCart__icoStar">
                            <svg className="allCart__star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                            <p className="allCart__score">4.6</p>
                        </div>
                       </div>
                     
                     <div className="allCart__footer">
                         <div className="allCart__clander">
                             <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">3 فروردین</p>
                         </div>
                        <div className="allCart__iconEstandart">
                            <svg className="allCart__airplane " xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                        </div>
                     </div>
                     </div>
                 </div>
             </div>
              
              {/* <!-- slider5 --> */}
             <div className="swiper-slide">
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                         <div className="allCart__svg">
                            <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
                         <img className="allCart__img1" src="./image/استانبول مرکیور.webp" alt=""/>
                         
                         <div className="allCart__box1">
                         <p className="allCart__box1--p"  >استانبول مرکیور بومونتی 29 بهمن تا 2 اسفند</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3">(3 شب و 4 روز)</p>
                             
                             <div className="allCart__box1--scr">
                                 <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
                             </div>
                     </div>
                     
                     <div className="allCart__price1 allCart__price1--price22">
 
                        <h2 className="allCart__price--h2 allCart__price--h2--h21">22,590,000 تومان</h2>
                     
                        <div className="allCart__icoStar">
                            <svg className="allCart__star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                            <p className="allCart__score">4.6</p>
                        </div>
                       </div>
                     
                     <div className="allCart__footer">
                         <div className="allCart__clander">
                             <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">29 بهمن</p>
                         </div>
             
                        <div className="allCart__iconEstandart">
                            <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                        </div>
                     </div>
                     </div>
                 </div>
             </div>
              
             {/* <!-- slider6 --> */}
             <div className="swiper-slide">
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                         <div className="allCart__svg">
                            <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
                         <img className="allCart__img1" src="./image/استانبول هتل.webp" alt=""/>
                         <div className="allCart__box1">
                         <p className="allCart__box1--p"  >استانبول هتل  گرنداستار29 بهمن تا 2 اسفند</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3">(3 شب و 4 روز)</p>
                             
                             <div className="allCart__box1--scr">
                                 <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
                             </div>
                     </div>
                     <div className="allCart__price1 allCart__price1--price22">
 
                        <h2 className="allCart__price--h2 allCart__price--h2--h21">19,990,000 تومان</h2>
                     
                        <div className="allCart__icoStar">
                            <svg className="allCart__star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                            <p className="allCart__score">4.6</p>
                        </div>
                       </div>
                     <div className="allCart__footer">
                         <div className="allCart__clander">
                             <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">29 بهمن</p>
                         </div>
                        <div className="allCart__iconEstandart">
                            <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                        </div>
                     </div>
                     </div>
                 </div>
             </div>
              {/* <!-- slider7 --> */}
             <div className="swiper-slide">
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                     
                         <div className="allCart__svg">
                            <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
                         <img className="allCart__img1" src="./image/استانبول هتل فیده.webp" alt=""/>
                         <div className="allCart__box1">
                         <p className="allCart__box1--p"  >استانبول هتل فیده 29 بهمن تا 2 اسفند</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3">(3 شب و 4 روز)</p>
                             
                             <div className="allCart__box1--scr">
                                 <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
                             </div>
                     </div>
                     <div className="allCart__price1 allCart__price1--price22">
                        <h2 className="allCart__price--h2 allCart__price--h2--h21">14,990,000 تومان</h2>
                        <div className="allCart__icoStar">
                            <svg className="allCart__star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                            <p className="allCart__score">4.6</p>
                        </div>
                       </div>
                     
             
                     <div className="allCart__footer">
                         <div className="allCart__clander">
                             <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">29 بهمن</p>
                         </div>
                        <div className="allCart__iconEstandart">
                            <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                        </div>
                     </div>
                     </div>
                 </div>
             </div>
             {/* <!-- slider8 --> */}
             <div className="swiper-slide">
              
                 <div class=" allCart__boxSadow allCart__boxSadow--radious">
                     
                         <div className="allCart__svg">
                            <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
                         <img className="allCart__img1" src="./image/استانبول نوروز الیتت.webp" alt=""/>
                         <div className="allCart__box1">
                         <p className="allCart__box1--p"  >استانبول نوروز الیت ورلد کامفی 1 تا 4 فروردین</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3">(3 شب و 4 روز)</p>
                             
                             <div className="allCart__box1--scr">
                                 <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
                             </div>
                     </div>
                     
                     <div className="allCart__price1 allCart__price1--price22">
 
                        <h2 className="allCart__price--h2 allCart__price--h2--h21">44,990,000 تومان</h2>
                     
                        <div className="allCart__icoStar">
                            <svg className="allCart__star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                            <p className="allCart__score">4.6</p>
                        </div>
                       </div>
                     
             
                     <div className="allCart__footer">
                         <div className="allCart__clander">
                             
                             <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">1 فروردین</p>
                         </div>

                        <div className="allCart__iconEstandart">
                            <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                        </div>
                     </div>
                     </div>
                 </div>
             </div>
                
             </div>  
              {/* <!-- swiper wrapper -->     */}
             <div className="swiper-button-next"></div>
             <div className="swiper-button-prev"></div>
             </div>
             </div>
         </div>
 
         {/* <!-- دبی --> */}
         <div>
             <div className="Swiper">
                 <div dir="rtl" className="swiper mySwiper">
                 <div className="swiper-wrapper">
              {/* <!-- slider1 --> */}
             <div className="swiper-slide">
                 <div className="allCart__cart1 allCart__boxSadow allCart__boxSadow--radious">
             
                     <div className="allCart__svg">
                         <svg className="allCart__svg--eshterak" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                     </div>
                     
                     <img className="allCart__img1" src="./image/کشتی کروز.webp" alt=""/>
                     
                     <div className="allCart__box1">
                        <p className="allCart__box1--p">کشتی کروز خلیج فارس 9 تا 16 فروردین</p>
                         
                         <div className="allCart__text2 allCart__text2--text3">
                             <p className="allCart__text3">(7 شب و 8 روز)</p>
                            <div className="allCart__box1--scr">
                             <span>مجری تور :</span>
                             <span className="allCart__box1--number">3333</span>
                 
                            </div>
                         </div>
                         
                         <div className="allCart__price1 allCart__price1--price22">
                             <div className="allCart__price1--flex">
                             <h2 className="allCart__price--h2 ">1,290</h2>
                             <span className="allCart__price--spanprice">یورو +  نرخ پرواز</span>
                            </div>
                             <div className="allCart__icoStar">
                             <svg className="allCart__star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.7</p>
                         </div>
                         </div>

                         <div className="allCart__footer allCart__footer--footer1">
                             <div className="allCart__clander">
                                 <svg className="allCart__icoclander" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                                 
                                 <p className="allCart__icoText">9 فروردین</p>
                             </div>
                             
                             
                             <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                         </div>
                     </div>
                     
                     
                     </div>
             </div>
              
             {/* <!-- slider2 --> */}
             <div className="swiper-slide">
                 <div className="allCart__cart1 allCart__boxSadow allCart__boxSadow--radious">
             
                     <div className="allCart__svg">
                         <svg className="allCart__svg--eshterak" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                     </div>
                     
                     <img className="allCart__img1" src="./image/دبی نوروز.webp" alt=""/>
                     
                     <div className="allCart__box1">
                        <p className="allCart__box1--p">دبی ویژه نوروز هتل وکو</p>
                         
                         <div className="allCart__text2 allCart__text2--text3">
                             <p className="allCart__text3">(4 شب و 5 روز)</p>
                             <div className="allCart__box1--scr">
                                 <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
                             </div>
                         </div>
                         
                         <div className="allCart__price1 allCart__price1--price22">
                             <div className="allCart__price1--flex">
                             <h2 className="allCart__price--h2 ">58,990,000</h2>
                             <span className="allCart__price--spanprice">تومان</span>
                            </div>
                             <div className="allCart__icoStar">
                             <svg className="allCart__star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.7</p>
                         </div>
                         </div>
                         
                         <div className="allCart__footer allCart__footer--footer1">
                             <div className="allCart__clander">
                                 <svg className="allCart__icoclander" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                                 
                                 <p className="allCart__icoText">3 فروردین</p>
                             </div>
                             
                             <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                         </div>
                     </div>
                     </div>
             </div>
 
             {/* <!-- slider 3  --> */}
             <div className="swiper-slide">
                 <div className="allCart__cart1 allCart__boxSadow allCart__boxSadow--radious">
             
                     <div className="allCart__svg">
                         <svg className="allCart__svg--eshterak" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                     </div>
                     
                     <img className="allCart__img1" src="./image/دبی نوروز.webp" alt="#"/>
                     
                     <div className="allCart__box1">
                        <p className="allCart__box1--p">دبی ویژه نوروز هتل پیرل سوییس</p>
                         
                         <div className="allCart__text2 allCart__text2--text3">
                             <p className="allCart__text3">(4 شب و 5 روز)</p>
                             <div className="allCart__box1--scr">
                                 <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
                             </div>
                         </div>
                         <div className="allCart__price1 allCart__price1--price22">
                             <div className="allCart__price1--flex">
                             <h2 className="allCart__price--h2 ">45,500,000</h2>
                             <span className="allCart__price--spanprice">تومان</span>
                            </div>
                             <div className="allCart__icoStar">
                             <svg className="allCart__star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.7</p>
                         </div>
                         </div>
                         
                         <div className="allCart__footer allCart__footer--footer1">
                             <div className="allCart__clander">
                                 <svg className="allCart__icoclander" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                                 
                                 <p className="allCart__icoText">3 فروردین</p>
                             </div>
                             
                             
                             <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                         </div>
                     </div>
                     </div>     
             </div>
            
             {/* <!-- slider4 --> */}
             <div className="swiper-slide">
                 <div className="allCart__cart1 allCart__boxSadow allCart__boxSadow--radious">
             
                     <div className="allCart__svg">
                         <svg className="allCart__svg--eshterak" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                     </div>
                     
                     <img className="allCart__img1" src="./image/دبی نوروز.webp" alt="#"/>
                     
                     <div className="allCart__box1">
                        <p className="allCart__box1--p">دبی ویژه نوروز هتل رها گرند</p>
                         
                         <div className="allCart__text2 allCart__text2--text3">
                             <p className="allCart__text3">(4 شب و 5 روز)</p>
                             <div className="allCart__box1--scr">
                                 <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
                             </div>
                         </div>
                         
                         <div className="allCart__price1 allCart__price1--price22">
                             <div className="allCart__price1--flex">
                             <h2 className="allCart__price--h2 ">41,600,000</h2>
                             <span className="allCart__price--spanprice">تومان</span>
                            </div>
                             <div className="allCart__icoStar">
                             <svg className="allCart__star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.7</p>
                         </div>
                         </div>
                         
                         <div className="allCart__footer allCart__footer--footer1">
                             <div className="allCart__clander">
                                 <svg className="allCart__icoclander" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                                 
                                 <p className="allCart__icoText">3 فروردین</p>
                             </div>
                             <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                         </div>
                     </div>
                     </div>
             </div>
              
             {/* <!-- slider5 --> */}
             <div className="swiper-slide">
                 <div className="allCart__cart1 allCart__boxSadow allCart__boxSadow--radious">
             
                     <div className="allCart__svg">
                         <svg className="allCart__svg--eshterak" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                     </div>
                     <img className="allCart__img1" src="./image/کشتی کروز.webp" alt=""/>
                     
                     <div className="allCart__box1">
                        <p className="allCart__box1--p">کشتی کروز خلیج فارس 2 تا 9 فروردین</p>
                         
                         <div className="allCart__text2 allCart__text2--text3">
                             <p className="allCart__text3">(7 شب و 8 روز)</p>
                            <div className="allCart__box1--scr">
                             <span>مجری تور :</span>
                             <span className="allCart__box1--number">3333</span>
                            </div>
                         </div>
                         
                         <div className="allCart__price1 allCart__price1--price22">
                             <div className="allCart__price1--flex">
                             <h2 className="allCart__price--h2 ">1,320</h2>
                             <span className="allCart__price--spanprice">یورو +  نرخ پرواز</span>
                            </div>
                             <div className="allCart__icoStar">
                             <svg className="allCart__star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.7</p>
                         </div>
                         </div>

                         <div className="allCart__footer allCart__footer--footer1">
                             <div className="allCart__clander">
                                 <svg className="allCart__icoclander" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                                 <p className="allCart__icoText">2 فروردین</p>
                             </div>
                             
                             <svg class="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                         </div>
                     </div>
                     </div>
             </div>
              
             {/* <!-- slider6 --> */}
             <div className="swiper-slide">
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                     
                         <div className="allCart__svg">
                             <svg className="allCart__svg--eshterak" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         
                         </div>
             
                         <div className="allCart__allmom">
                         <img className="allCart__img1" src="./image/دبی کلاریج.webp" alt=""/>
                         <div className="allCart__takmil">تکمیل</div>
                         </div>

                         <div className="allCart__box1">
                         <p className="allCart__box1--p">دبی 22 تا 25 بهمن هتل کلاریج</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3">(3 شب و 4 روز )</p>
                             
                             <div className="allCart__box1--scr">
                                 <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
                             </div>
                     </div>
                     
                     <div className="allCart__price">
                         <p> <span className="allCart__priceNum">57,000,000</span>تومان</p>
                         <div className="allCart__icoStar">
                             <svg className="allCart__star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.7</p>
                         </div>
                     </div>
                     
                     <div className="allCart__footer allCart__footer--footer1">
                         <div className="allCart__clander">
                             <svg className="allCart__icoclander" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">22 بهمن</p>
                         </div>
             
                         <div className="allCart__iconEstandart">
                             <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                         </div>
                     </div>
                     </div>
                 </div>
             </div>
              
             {/* <!-- slider7 --> */}
             <div className="swiper-slide">
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                     
                         <div className="allCart__svg">
                             <svg className="allCart__svg--eshterak" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         
                         </div>
             
                         <div className="allCart__allmom">
                         <img className="allCart__img1" src="./image/کشتی کروز.webp" alt="#"/>
                         <div className="allCart__takmil">تکمیل</div>
                         </div>

                         <div className="allCart__box1">
                         <p className="allCart__box1--p">کشتی کروز خلیج فارس 2 تا 9 فروردین</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3">(7 شب و 8 روز)</p>
                             
                             <div className="allCart__box1--scr">
                                 <span>مجری تور :</span>
                                 <span className="allCart__box1--number">3333</span>
                             </div>
                     </div>
                     
                     <div className="allCart__price">
                         <p> <span className="allCart__priceNum">169,500,000</span>تومان</p>
                         <div className="allCart__icoStar">
                             <svg className="allCart__star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.7</p>
                         </div>
                     </div>
                     
                     <div className="allCart__footer allCart__footer--footer1">
                         <div className="allCart__clander">
                             
                             <svg className="allCart__icoclander" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">2 فروردین</p>
                         </div>
             
                         <div className="allCart__iconEstandart">
                             <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                         </div>
                     </div>
                     </div>
                 
                 </div>
             </div>
              
             {/* <!-- slider8 --> */}
             <div className="swiper-slide">
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                         <div className="allCart__svg">
                             <svg className="allCart__svg--eshterak" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
             
                         <div className="allCart__allmom">
                         <img className="allCart__img1" src="./image/دبی نوروز.webp" alt="#"/>
                         <div className="allCart__takmil">تکمیل</div>
                         </div>
                         <div className="allCart__box1">
                         <p className="allCart__box1--p">دبی هتل پیرل سوییس 15 اسفند</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3">(3 شب و 4 روز )</p>
                             
                             <div className="allCart__box1--scr">
                                 <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
                             </div>
                     </div>
                     
                     <div className="allCart__price">
                         <p> <span className="allCart__priceNum">29,700,000</span>تومان</p>
                         <div className="allCart__icoStar">
                             <svg className="allCart__star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.7</p>
                         </div>
                     </div>
                     
             
                     <div className="allCart__footer allCart__footer--footer1">
                         <div className="allCart__clander">
                             
                             <svg className="allCart__icoclander" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">15 اسفند</p>
                         </div>
             
                         <div className="allCart__iconEstandart">
                             <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                         </div>
                     </div>
                     </div>
                 </div>
             </div>
                
             </div> 
               {/* <!-- swiper wrapper -->     */}
             <div className="swiper-button-next"></div>
             <div className="swiper-button-prev"></div>
             </div>
             </div>
         </div>
 
         {/* <!-- ارمنستان --> */}
         <div>
             <div className="Swiper">
                 <div dir="rtl" className="swiper mySwiper">
                 <div className="swiper-wrapper">
             
             {/* <!-- swiper 1 --> */}
                <div className="swiper-slide">
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                     
                         <div className="allCart__svg">
                             <svg className="allCart__svg--eshterak" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5 text-textDetails hover:text-primary" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
                         <img className="allCart__img1" src="./image/ارمنستااان ایروان.webp" alt=""/>
                         <div className="allCart__box1">
                         <p className="allCart__box1--p"  >ارمنستان (ایروان) هوایی 7 اسفند</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3">(2 شب و 3 روز)</p>
                             <div className="allCart__box1--scr">
                                 <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
                             </div>   
                     </div>
                     
                     <div className="allCart__price allCart__price--price1">
                         <p> <span className="allCart__priceNum">24,380,000</span>تومان</p>
                         <div className="allCart__icoStar">
                             <svg className="allCart__star text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.6</p>
                         </div>
                     </div>
                     <div className="allCart__footer allCart__footer--footer1">
                         <div className="allCart__clander">
                             
                             <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">7 اسفند</p>
                         </div>
             
                         <div className="allCart__iconEstandart">
                             <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                         </div>
                     </div>
                     </div>
                 </div>
                </div>
             
             {/* <!-- swiper 2--> */}
             <div className="swiper-slide">
             
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                     
                         <div className="allCart__svg">
                             <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
             
                         <img className="allCart__img1" src="./image/ارمنستان هوایی.webp" alt="#"/>
                         
                         <div className="allCart__box1">
                         <p className="allCart__box1--p"  >ارمنستان (ایروان) هوایی 7 اسفند</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3">(4 شب و 5 روز)</p>
                             <div className="allCart__box1--scr">
                                 <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
                             </div>
                     </div>
                     
                     <div className="allCart__price allCart__price--price1">
                         <p> <span className="allCart__priceNum">22,040,000</span>تومان</p>
                         <div className="allCart__icoStar">
                             <svg className="allCart__star text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.6</p>
                         </div>
                     </div>
                     <div className="allCart__footer allCart__footer--footer1">
                         <div className="allCart__clander">
                             
                             <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">7 اسفند</p>
                         </div>
             
                         <div className="allCart__iconEstandart">
                             <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                         </div>
                     </div>
                     </div>
                 
                 
                 </div>
             </div>
             
             {/* <!-- swiper 3--> */}
             <div className="swiper-slide">
             
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                     
                         <div className="allCart__svg">
                             <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
             
                         <img className="allCart__img1" src="./image/ارمنستان کارت 3.webp" alt="#"/>
                         
                         <div className="allCart__box1">
                         <p className="allCart__box1--p"  >ارمنستان (ایروان) هوایی 7 اسفند</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3">(4 شب و 5 روز)</p>
                             <div className="allCart__box1--scr">
                                 <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
                             </div>  
                     </div>
                     
                     <div className="allCart__price allCart__price--price1">
                         <p> <span className="allCart__priceNum">17,540,000</span>تومان</p>
                         <div className="allCart__icoStar">
                             <svg className="allCart__star text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.6</p>
                         </div>
                     </div>
                     
                     <div className="allCart__footer allCart__footer--footer1">
                         <div className="allCart__clander">
                             
                             <svg className="allCart__icoclander  w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">7 اسفند</p>
                         </div>
                         <div className="allCart__iconEstandart">
                             <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                         </div>
                     </div>
                     </div>
                 </div>
             </div>
             
             {/* <!-- swiper 4--> */}
             <div className="swiper-slide">
             
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                     
                         <div className="allCart__svg">
                             <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
             
                         <img className="allCart__img1" src="./image/ارمنستان کارت 4.webp" alt="#"/>
                         
                         <div className="allCart__box1">
                         <p className="allCart__box1--p"  >ارمنستان (ایروان) هوایی 7 اسفند</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3">(4 شب و 5 روز)</p>
                             <div className="allCart__box1--scr">
                                 <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
                             </div> 
                     </div>
                     
                     <div className="allCart__price allCart__price--price1">
                         <p> <span className="allCart__priceNum">15,200,000</span>تومان</p>
                         <div className="allCart__icoStar">
                             <svg className="allCart__star text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.6</p>
                         </div>
                     </div>
                     <div className="allCart__footer allCart__footer--footer1">
                         <div className="allCart__clander">
                             
                             <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">7 اسفند</p>
                         </div>
             
                         <div className="allCart__iconEstandart">
                             <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                         </div>
                     </div>
                     </div>
                 </div>
             </div>
             
             {/* <!-- swiper 5--> */}
             <div className="swiper-slide">
             
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                     
                         <div className="allCart__svg">
                             <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
             
                         <img className="allCart__img1" src="./image/ارمنستان اسلاید 1.webp" alt="#"/>
                         
                         <div className="allCart__box1">
                         <p className="allCart__box1--p"  >ارمنستان (ایروان) هوایی 11 اسفند</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3">(3 شب و 4 روز)</p>
                             <div className="allCart__box1--scr">
                                 <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
                             </div>  
                     </div>
                     
                     <div className="allCart__price allCart__price--price1">
                         <p> <span className="allCart__priceNum">19,250,000</span>تومان</p>
                         <div className="allCart__icoStar">
                             <svg className="allCart__star text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.6</p>
                         </div>
                     </div>
                     <div className="allCart__footer allCart__footer--footer1">
                         <div className="allCart__clander">
                             
                             <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">11 اسفند</p>
                         </div>
             
                         <div className="allCart__iconEstandart">
                             <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                         </div>
                     </div>
                     </div>
                 </div>
             </div>
             
             {/* <!-- swiper 6--> */}
             <div className="swiper-slide">
             
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                     
                         <div className="allCart__svg">
                             <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
             
                         <img className="allCart__img1" src="./image/ارمنستان اسلاید2.webp" alt="#"/>
                         
                         <div className="allCart__box1">
                         <p className="allCart__box1--p"  >ارمنستان (ایروان) هوایی 11 اسفند</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3">(3 شب و 4 روز)</p>
                             <div className="allCart__box1--scr">
                                 <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
                             </div>
                            
                     </div>
                     
                     <div className="allCart__price allCart__price--price1">
                         <p> <span className="allCart__priceNum">17,900,000</span>تومان</p>
                         <div className="allCart__icoStar">
                             <svg className="allCart__star text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.6</p>
                         </div>
                     </div>
                     <div className="allCart__footer allCart__footer--footer1">
                         <div className="allCart__clander">
                             
                             <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">11 اسفند</p>
                         </div>
             
                         <div className="allCart__iconEstandart">
                             <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                         </div>
                     </div>
                     </div>
                 </div>
             </div>
             
             {/* <!-- swiper 7--> */}
             <div className="swiper-slide">
             
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                     
                         <div className="allCart__svg">
                             <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
             
                         <img className="allCart__img1" src="./image/ارمنستان اسلاید 33.webp" alt="#"/>
                         
                         <div className="allCart__box1">
                         <p className="allCart__box1--p"  >ارمنستان (ایروان) هوایی 11 اسفند</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3">(3 شب و 4 روز)</p>
                             <div className="allCart__box1--scr">
                                 <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
                             </div>
                     </div>
                     
                     <div className="allCart__price allCart__price--price1">
                         <p> <span className="allCart__priceNum">16,280,000</span>تومان</p>
                         <div className="allCart__icoStar">
                             <svg className="allCart__star text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.6</p>
                         </div>
                     </div>
                     <div className="allCart__footer allCart__footer--footer1">
                         <div className="allCart__clander">
                             
                             <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">11 اسفند</p>
                         </div>
             
                         <div className="allCart__iconEstandart">
                             <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                         </div>
                     </div>
                     </div>
                 </div>
             </div>
             
             {/* <!--swiper 8 --> */}
             <div className="swiper-slide">
             
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                     
                         <div className="allCart__svg">
                             <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
             
                         <img className="allCart__img1" src="./image/ارمنستان اسلاید 4.webp" alt="#"/>
                         
                         <div className="allCart__box1">
                         <p className="allCart__box1--p"  >ارمنستان (ایروان) هوایی 11 اسفند</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3">(3 شب و 4 روز)</p>
                             <div className="allCart__box1--scr">
                                 <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
                             </div>   
                     </div>
                     
                     <div className="allCart__price allCart__price--price1">
                         <p> <span className="allCart__priceNum">14,530,000</span>تومان</p>
                         <div className="allCart__icoStar">
                             <svg className="allCart__star text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.6</p>
                         </div>
                     </div>
                     <div className="allCart__footer allCart__footer--footer1">
                         <div className="allCart__clander">
                             
                             <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">11 اسفند</p>
                         </div>
             
                         <div className="allCart__iconEstandart">
                             <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                         </div>
                     </div>
                     </div>
                 </div>
             </div>
             
             
                 </div>  
                  {/* <!-- swiper wrapper -->     */}
              
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                  </div>
             </div>
 
 
 
         </div>
 
         {/* <!-- روسیه --> */}
         <div>
             <div className="Swiper">
                 <div dir="rtl" className="swiper mySwiper">
                 <div className="swiper-wrapper">
             
             {/* <!-- swiper 1 --> */}
                <div className="swiper-slide">
             
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                     
                         <div className="allCart__svg">
                             <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
             
                         <img className="allCart__img1" src="./image/روسیه هتل.webp" alt="#"/>
                         
                         <div className="allCart__box1">
                         <p className="allCart__box1--p"  >روسیه ویژه نوروز 1404</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3">(6 شب و 7 روز)</p>
                             <div className="allCart__box1--scr">
                                 <span>مجری تور :</span>
                                 <span className="allCart__box1--number">5555</span>
                             </div>
                     </div>
                     
                     <div className="allCart__price allCart__price--price1">
                         <p> <span className="allCart__priceNum">83,000,000</span>تومان</p>
                         <div className="allCart__icoStar">
                             <svg className="allCart__star text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.6</p>
                         </div>
                     </div>
                     <div className="allCart__footer allCart__footer--footer1">
                         <div className="allCart__clander">
                             
                             <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">30 اسفند</p>
                         </div>
             
                         <div className="allCart__iconEstandart">
                             <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                         </div>
                     </div>
                     </div>
                 
                 </div>
                </div>
             
             {/* <!-- swiper 2--> */}
             <div className="swiper-slide">
             
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                     
                         <div className="allCart__svg">
                             <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
                         <img className="allCart__img1" src="./image/روسیه هتل.webp" alt="#"/>
                         
                         <div className="allCart__box1">
                         <p className="allCart__box1--p">روسیه هتل 5 ستاره تاپ ویژه نوروز 1404</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3">(6 شب و 7 روز)</p>
                             <div className="allCart__box1--scr">
                                 <span>مجری تور :</span>
                                 <span className="allCart__box1--number">5555</span>
                             </div>
                     </div>
                     
                     <div className="allCart__price1 allCart__price1--price">
 
                         <h2 className="allCart__price--h2 allCart__price--h2--h21">775</h2>
                         <span className="allCart__price--spanprice">دلار</span>
                         
                         <span className="allCart__price--plus"> + </span>
                         <h2 className="allCart__price--h2 allCart__price--h2--h21">34,990,000</h2>
                         <span className="allCart__price--spanprice">تومان</span>
                 
  
                         <div className="allCart__icoStar">
                             <svg className="allCart__star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.6</p>
                         </div>
                        </div>
             
                     <div className="allCart__footer allCart__footer--footer1">
                         <div className="allCart__clander">
                             
                             <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">8 فروردین</p>
                         </div>
             
                         <div className="allCart__iconEstandart">
                             <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                         </div>
                     </div>
                     </div>
                 </div>
             </div>
             {/* <!-- swiper 3--> */}
             <div className="swiper-slide">
             
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                     
                         <div className="allCart__svg">
                             <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
                         <img className="allCart__img1" src="./image/روسیه نورورز زمستان.webp" alt="#"/>
                         <div className="allCart__box1">
                         <p className="allCart__box1--p"  >روسیه ویژه نوروز 1404</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3">(6 شب و 7 روز)</p>
                             <div className="allCart__box1--scr">
                                 <span>مجری تور :</span>
                                 <span className="allCart__box1--number">5555</span>
                             </div>
                     </div>
                     
                     <div className="allCart__price1 allCart__price1--price">
 
                         <h2 className="allCart__price--h2 allCart__price--h2--h21">630</h2>
                         <span className="allCart__price--spanprice">دلار</span>
                         
                         <span className="allCart__price--plus"> + </span>
                         <h2 className="allCart__price--h2 allCart__price--h2--h21">35,000,000</h2>
                         <span className="allCart__price--spanprice">تومان</span>
                 
                         <div className="allCart__icoStar">
                             <svg className="allCart__star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.6</p>
                         </div>
                        </div>
             
                     <div className="allCart__footer allCart__footer--footer1">
                         <div className="allCart__clander">
                             <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">8 فروردین</p>
                         </div>
             
                         <div className="allCart__iconEstandart">
                             <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                         </div>
                     </div>
                     </div>
                 </div>
             </div>
             
             {/* <!-- swiper 4--> */}
             <div className="swiper-slide">
             
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                     
                         <div className="allCart__svg">
                             <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
             
                         <img className="allCart__img1" src="./image/روسیه نورورز زمستان.webp" alt="#"/>
                         
                         <div className="allCart__box1">
                         <p className="allCart__box1--p"  >روسیه ویژه زمستان 1404</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3">(7 شب و 8 روز)</p>
                             <div className="allCart__box1--scr">
                                 <span>مجری تور :</span>
                                 <span className="allCart__box1--number">5555</span>
                             </div>
                     </div>
                     
                     <div className="allCart__price1 allCart__price1--price">
 
                         <h2 className="allCart__price--h2 allCart__price--h2--h21">630</h2>
                         <span className="allCart__price--spanprice">دلار</span>
                         
                         <span className="allCart__price--plus"> + </span>
                         <h2 className="allCart__price--h2 allCart__price--h2--h21">35,000,000</h2>
                         <span className="allCart__price--spanprice">تومان</span>
                 
                         <div className="allCart__icoStar">
                             <svg className="allCart__star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.6</p>
                         </div>
                        </div>
                     
                     <div className="allCart__footer allCart__footer--footer1">
                         <div className="allCart__clander">
                             
                             <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">زمستان</p>
 
                             <div className="allCart__title"> 
                             <p>اولین اجرا</p>
                             <p className="allCart__title--esfand">2 اسفند</p>
                            </div>
                         </div>
             
                         <div className="allCart__iconEstandart">
                             <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                         </div>
                     </div>
                     </div>
                 </div>
             </div>
             
             {/* <!-- swiper 5--> */}
             <div className="swiper-slide" role="group" aria-label="3 / 8" style="{{width: '261.25px', margin-left: '40px'}}">
 
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                     
                         <div className="allCart__svg">
                             <svg className="allCart__svg--eshterak" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
                         <div className="allCart__allmom">
                         <img className="allCart__img1" src="./image/روسیه نورورز زمستان.webp" alt="#"/>
                         <div className="allCart__takmil">تکمیل</div>
                         </div>
                         <div className="allCart__box1">
                         <p className="allCart__box1--p">روسیه ویژه نوروز 1404</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3" >(6 شب و 7 روز)</p>
                             
                             <div className="allCart__box1--scr">
                                 <span>مجری تور : </span>
                                 <span className="allCart__box1--number">5555</span>
                             </div>
                     </div>
                     
                     <div className="allCart__price allCart__price--price1 ">
                         <p> <span className="allCart__priceNum">83,000,000</span>تومان</p>
                         <div className="allCart__icoStar">
                             <svg className="allCart__star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.6</p>
                         </div>
                     </div>
                     
                     <div className="allCart__footer allCart__footer--footer1">
                         <div className="allCart__clander">
                             <svg className="allCart__icoclander" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">30 اسفند</p>
                         </div>
             
                         <div className="allCart__iconEstandart">
                            <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                         </div>
                     </div>
                     </div>
                 </div>
             </div>
             
             {/* <!-- swiper 6--> */}
             <div className="swiper-slide" role="group" aria-label="3 / 8" style={{width: "261.25px", marginLeft: '40px'}}>
 
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                     
                         <div className="allCart__svg">
                             <svg className="allCart__svg--eshterak" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
                         <div className="allCart__allmom">
                         <img className="allCart__img1" src="./image/شفق قطبی روسیه 1.webp" alt="#"/>
                         <div className="allCart__takmil">تکمیل</div>
                         </div>
                         <div className="allCart__box1">
                         <p className="allCart__box1--p">شفق قطبی روسیه 8 روزه</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3" >(7 شب و 8 روز)</p>
                             
                             <div className="allCart__box1--scr">
                                 <span>مجری تور : </span>
                                 <span className="allCart__box1--number">3333</span>
                             </div>
                     </div>
                     <div className="allCart__price1 allCart__price1--price">
                         <h2 className="allCart__price--h2 allCart__price--h2--h21">1,290</h2>
                         <span className="allCart__price--spanprice">دلار </span>
                         
                         <span className="allCart__price--plus"> + </span>
                         <h2 className="allCart__price--h2 allCart__price--h2--h21">20,000,000</h2>
                         <span className="allCart__price--spanprice">تومان</span>
                 
                         <div className="allCart__icoStar">
                             <svg className="allCart__star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.7</p>
                         </div>
                        </div>
                     
             
                     <div className="allCart__footer allCart__footer--footer1">
                         <div className="allCart__clander">
                             
                             <svg className="allCart__icoclander" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">25 بهمن</p>
                         </div>
             
                         <div className="allCart__iconEstandart">
                             <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                         </div>
                     </div>
                     </div>
                 </div>
             </div>
             
             {/* <!-- swiper 7--> */}
             <div className="swiper-slide" role="group" aria-label="3 / 8" style= {{width:'261.25px', marginLeft: "40px"}}>
 
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                     
                         <div className="allCart__svg">
                             <svg className="allCart__svg--eshterak" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
                         <div className="allCart__allmom">
                         <img className="allCart__img1" src="./image/شفق 2.webp" alt="#"/>
                         <div className="allCart__takmil">تکمیل</div>
                         </div>
                         <div className="allCart__box1">
                         <p className="allCart__box1--p">شفق قطبی روسیه 8 روزه</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3" >(7 شب و 8 روز)</p>
                             
                             <div className="allCart__box1--scr">
                                 <span>مجری تور : </span>
                                 <span className="allCart__box1--number">3333</span>
                             </div>
                     </div>
                     
                     <div className="allCart__price1 allCart__price1--price  ">
 
                         <h2 className="allCart__price--h2 allCart__price--h2--h21">1,260</h2>
                         <span className="allCart__price--spanprice">دلار </span>
                         
                         <span className="allCart__price--plus"> + </span>
                         <h2 className="allCart__price--h2 allCart__price--h2--h21">23,000,000</h2>
                         <span className="allCart__price--spanprice">تومان</span>
                 
 
                         <div className="allCart__icoStar">
                             <svg className="allCart__star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.7</p>
                         </div>
                        </div>
                     <div className="allCart__footer allCart__footer--footer1">
                         <div className="allCart__clander">
                             
                             <svg className="allCart__icoclander" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">16 بهمن</p>
                         </div>
             
                         <div className="allCart__iconEstandart">
                             <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                         </div>
                     </div>
                     </div>
                 </div>
             </div>
             
             {/* <!--swiper 8 --> */}
             <div className="swiper-slide" role="group" aria-label="3 / 8" style={{width: '261.25px', marginLeft: '40px'}}>
 
                 <div className=" allCart__boxSadow allCart__boxSadow--radious">
                     
                         <div className="allCart__svg">
                             <svg className="allCart__svg--eshterak" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
                         </div>
                         <div className="allCart__allmom">
                         <img className="allCart__img1" src="./image/شفق 3.webp" alt="#"/>
                         <div className="allCart__takmil">تکمیل</div>
                         </div>
                         <div className="allCart__box1">
                         <p className="allCart__box1--p">شفق قطبی روسیه 10 روزه</p>
                     
                     <div className="allCart__text2">
                             <p className="allCart__text3" >(9 شب و 10 روز)</p>
                             
                             <div className="allCart__box1--scr">
                                 <span>مجری تور : </span>
                                 <span className="allCart__box1--number">3333</span>
                             </div>
                     </div>
                     <div className="allCart__price1 allCart__price1--price  ">
                         <h2 className="allCart__price--h2 allCart__price--h2--h21">1,640</h2>
                         <span className="allCart__price--spanprice">دلار </span>
                         
                         <span className="allCart__price--plus"> + </span>
                         <h2 className="allCart__price--h2 allCart__price--h2--h21">19,990,000</h2>
                         <span className="allCart__price--spanprice">تومان</span>
                         <div className="allCart__icoStar">
                             <svg className="allCart__star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
                             <p className="allCart__score">4.7</p>
                         </div>
                        </div>
                     
                     <div className="allCart__footer allCart__footer--footer1">
                         <div className="allCart__clander">
                             <svg className="allCart__icoclander" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                             <p className="allCart__icoText">شفق قطبی رو...</p>
                         </div>
             
                         <div className="allCart__iconEstandart">
                            <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                         </div>
                     </div>
                     </div>
                 </div>
             </div>
             
                 </div>  
                  {/* <!-- swiper wrapper -->     */}
              
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                  </div>
             </div>
         </div>
     </div>
  /* </div>   */
    </>
  )
}
export default Slidertext