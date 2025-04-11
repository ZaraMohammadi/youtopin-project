
import React, { useRef } from 'react';

const Slider = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -100, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 100, behavior: "smooth" });
  };

  return (

      <div className='swiper'>
        <div style={{ position: 'relative' }}>
        <div dir="rtl" className="swiper mySwiper swiper-initialized swiper-horizontal swiper-rtl">
      <button
        className="card-scroll-left"
        style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}
        onClick={scrollLeft}
      >
        Left
      </button>

      <div
        ref={scrollContainerRef}
        className="tourGuide__cards card-scroll-container"
        style={{ display: 'flex', overflowX: 'auto', scrollBehavior: 'smooth', padding: '10px' }}
      >
      
        <div className="swiper-wrapper">
    <div className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 12">


        {/* محتوای اسلایدر */}
        <div style={{ minWidth: '200px', margin: '0 10px', backgroundColor: 'lightgray' }}>
        {/* <!-- slider1 --> */}
        <div className="swiper-slide">
         <div className="allCart__cart1 allCart__boxSadow allCart__boxSadow--radious">
            
            <div className="allCart__svg">
                <svg className="allCart__svg--eshterak  w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
            </div>
            
            <img className="allCart__img1" src="./image/ایتالیا.webp" alt=""/>
            
            <div className="allCart__box1">
               <p className="allCart__box1--p" >سوییس ایتالیا 11 روزه نوروز 1404</p>
                
                <div className="allCart__text2 allCart__text2--text3">
                    <p className="allCart__text3">(10 شب و 11 روز)</p>
                    <div className="allCart__box1--scr">
                        <span>مجری تور : </span>
                        <span className="allCart__box1--number">9898</span>

                    </div>
   
                </div>
                
                <div className="allCart__price1">
                <h2 className="allCart__price--h2">3,190 </h2>
                <span className="allCart__price--spanprice">یورو +</span>
                <h2 className="allCart__price--h2">85,900.000 </h2>
                <span className="allCart__price--spanprice">تومان</span>
                
                </div>
                
                <div className="allCart__footer allCart__footer--footer1">
                    <div className="allCart__clander">
                        <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                        
                        <p className="allCart__icoText">28 اسفند</p>
                    </div> 
                    <svg className="allCart__airplane  w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                </div>
            </div>      
    </div> 
        </div>
      </div>


        <div style={{ minWidth: '200px', margin: '0 10px', backgroundColor: 'lightgray' }}>
       {/* slider2 */}
       <div className="swiper-slide">
        <div className="allCart__cart1 allCart__boxSadow allCart__boxSadow--radious">
            
    <div className="allCart__svg">
        <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
    </div>
    
    <img class="allCart__img1" src="./image/فرانسه بلژیک.webp" alt=""/>
    
    <div className="allCart__box1">
       <p className="allCart__box1--p" >فرانسه بلژیک هلند آلمان سوییس ایتالیا 20 روزه</p>
        
        <div className="allCart__text2 allCart__text2--text3">
            <p className="allCart__text3">(19 شب و 20 روز)</p>
           <div className="allCart__box1--scr">
            <span>مجری تور :</span>
            <span className="allCart__box1--number">9898</span>
           </div>
        </div>
        
        <div className="allCart__price1">
            <h2 className="allCart__price--h2">4,890</h2>
            <span className="allCart__price--spanprice">یورو +  نرخ پرواز</span>
        </div>
        
        <div className="allCart__footer allCart__footer--footer1">
            <div className="allCart__clander">
                <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                <p class="allCart__icoText">26 اسفند</p>
            </div>
            <svg class="allCart__airplane w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
        </div>
    </div>
    </div>   
       </div>
      </div>

        <div style={{ minWidth: '200px', margin: '0 10px', backgroundColor: 'lightgray' }}>
      {/* slider3 */}
      <div className="swiper-slide">
     <div className="allCart__cart1 allCart__boxSadow allCart__boxSadow--radious">
            
    <div className="allCart__svg">
        <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
    </div>
    
    <img className="allCart__img1" src="./image/فرانسه کروز.webp" alt=""/>
    
    <div className="allCart__box1">
       <p className="allCart__box1--p" >فرانسه کروز اسپانیا نوروز 1404</p>
        
        <div className="allCart__text2 allCart__text2--text3">
            <p className="allCart__text3">(12 شب و 13 روز )</p>
            <div className="allCart__box1--scr">
                <span>مجری تور :</span>
                <span className="allCart__box1--number">9898</span>

            </div>
        </div>
        <div className="allCart__price1">
        <h2 className="allCart__price--h2">4,990</h2>
        <span className="allCart__price--spanprice">یورو +</span>
        <h2 className="allCart__price--h2">79,990,000 </h2>
        <span className="allCart__price--spanprice">تومان</span>
       </div>
        
        <div className="allCart__footer allCart__footer--footer1">
            <div className="allCart__clander">
                <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                
                <p className="allCart__icoText">29 اسفند</p>
            </div>
            <svg className="allCart__airplane" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" class="w-5 h-5 text-textDetails"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
        </div>
    </div>
     </div>   
      </div>
        </div>

        <div style={{ minWidth: '200px', margin: '0 10px', backgroundColor: 'lightgray' }}>
        {/* slider 4 */}
        <div className="swiper-slide">
    <div className="allCart__cart1 allCart__boxSadow allCart__boxSadow--radious">
            
    <div className="allCart__svg">
        <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary " xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
    </div>
    <img className="allCart__img1" src="./image/آلمان اتریش.webp" alt=""/>
    <div className="allCart__box1">
       <p className="allCart__box1--p" >سوییس آلمان اتریش 9 روزه نوروز 1404</p>
        
        <div className="allCart__text2 allCart__text2--text3">
            <p className="allCart__text3">(8 شب و 9 روز)</p>
            
            <div className="allCart__box1--scr">
                <span>مجری تور :</span>
                <span className="allCart__box1--number">9898</span>
            </div>
        </div>
        
        <div className="allCart__price1">
            <h2 className="allCart__price--h2">1,990</h2>
            <span className="allCart__price--spanprice">یورو + نرخ پرواز</span>
        </div>
        
        <div className="allCart__footer allCart__footer--footer1">
            <div className="allCart__clander">
                <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                <p className="allCart__icoText">3 فروردین</p>
            </div>
            <svg className="allCart__airplane w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
        </div>
    </div>
    </div>  
        </div>
        </div>


        <div style={{ minWidth: '200px', margin: '0 10px', backgroundColor: 'lightgray' }}>
        {/* slider 5  */}
        <div className="swiper-slide">
    <div className="allCart__cart1 allCart__boxSadow allCart__boxSadow--radious"> 
        <div className="allCart__svg">
            <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
        </div>
        
        <img className="allCart__img1" src="./image/فرانسه پرتغال.webp" alt=""/>
        
        <div className="allCart__box1">
           <p className="allCart__box1--p" >فرانسه پرتغال اسپانیا 10 روزه 1404</p>
            
            <div className="allCart__text2 allCart__text2--text3">
                <p className="allCart__text3">(9 شب و 10 روز)</p>
               <div className="allCart__box1--scr">
                <span>مجری تور :</span>
                <span className="allCart__box1--number">9898</span>
               </div>
            </div>
            
            <div className="allCart__price1">
            
            <h2 className="allCart__price--h2">2,790</h2>
            <span className="allCart__price--spanprice">یورو + نرخ پرواز</span>
            </div>
            
            
            <div className="allCart__footer allCart__footer--footer1">
                <div className="allCart__clander">
                    <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                    <p className="allCart__icoText">1 فروردین</p>
                </div>
                <svg className="allCart__airplane w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
            </div>
        </div>
    </div>  
        </div>
        </div>


        <div style={{ minWidth: '200px', margin: '0 10px', backgroundColor: 'lightgray' }}>
           {/* <!-- slider6 --> */}
        <div className="swiper-slide">
        <div className="allCart__cart1 allCart__boxSadow allCart__boxSadow--radious">
                
            <div className="allCart__svg">
                <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
            </div>
            
            <img className="allCart__img1" src="./image/سوییس ایتالیا 9 روزه.webp" alt=""/>
            
            <div className="allCart__box1">
               <p className="allCart__box1--p" >سوییس ایتالیا 9 روزه 1404</p>
                
                <div className="allCart__text2 allCart__text2--text3">
                    <p className="allCart__text3">(8 شب و 9 روز)</p>
                   <div className="allCart__box1--scr">
                    <span>مجری تور :</span>
                    <span className="allCart__box1--number">9898</span>
                   </div>
                </div>
                
                <div className="allCart__price1">

                <h2 className="allCart__price--h2">2,390</h2>
                <span className="allCart__price--spanprice">یورو + نرخ پرواز</span>
                </div>
                
                <div className="allCart__footer allCart__footer--footer1">
                    <div className="allCart__clander">
                        <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                        <p className="allCart__icoText">28 اسفند</p>
                    </div>
                    <svg className="allCart__airplane w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                </div>
            </div>
        </div>  
        </div>
        </div>

        <div style={{ minWidth: '200px', margin: '0 10px', backgroundColor: 'lightgray' }}>
            {/* <!-- slider7 --> */}
        <div className="swiper-slide">
        <div className="allCart__cart1 allCart__boxSadow allCart__boxSadow--radious">   
            <div className="allCart__svg">
                <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
            </div>
            <img className="allCart__img1" src="./image/سوییس 6 روزه.webp" alt=""/>
            
            <div className="allCart__box1">
               <p className="allCart__box1--p" >سوییس 6 روزه نوروز 1404</p>
                
                <div className="allCart__text2 allCart__text2--text3">
                    <p className="allCart__text3">(5 شب و 6 روز)</p>
                    
                    <div className="allCart__box1--scr">
                        <span>مجری تور :</span>
                        <span className="allCart__box1--number">9898</span>
                    </div>
                </div>
                
                <div className="allCart__price1">
                <h2 className="allCart__price--h2">1,690</h2>
                <span className="allCart__price--spanprice">یورو + نرخ پرواز</span>
                </div>
                
                <div className="allCart__footer allCart__footer--footer1">
                    <div className="allCart__clander">
                        <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                        
                        <p className="allCart__icoText">نوروز 1404</p>
                    </div>
                    <div className="allCart__footer--textCenter">
                        <span className="allCart__footer--textCenter--span" >.</span>
                        <p>اولین اجرا <span>6 فروردین</span></p>
                    </div>
                    
                    <svg class="allCart__airplane w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                </div>
            </div>
        </div>  
        </div>
        </div>

        <div style={{ minWidth: '200px', margin: '0 10px', backgroundColor: 'lightgray' }}>
         {/* <!-- slider8 --> */}
        <div className="swiper-slide">
        <div className="allCart__cart1 allCart__boxSadow allCart__boxSadow--radious"> 
            <div className="allCart__svg">
                <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
            </div>
            <img className="allCart__img1" src="./image/فرانسه 6 روزه.webp" alt=""/>
            <div className="allCart__box1">
               <p className="allCart__box1--p" >فرنسه 6 روزه نوروز 1404</p>
                
                <div className="allCart__text2 allCart__text2--text3">
                    <p className="allCart__text3">(5 شب و 6 روز)</p>
                    <div className="allCart__box1--scr">
                        <span>مجری تور :</span>
                        <span className="allCart__box1--number">9898</span>
                    </div>
                </div>
                <div className="allCart__price1">
                <h2 className="allCart__price--h2">1,890</h2>
               <span className="allCart__price--spanprice">یورو + نرخ پرواز</span>
                </div>
                <div className="allCart__footer allCart__footer--footer1">
                    <div className="allCart__clander">
                        <svg className="allCart__icoclander w-5 h-5 text-textDetails " xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                        <p className="allCart__icoText">نوروز 1404</p>
                    </div>
                    <div className="allCart__footer--textCenter">
                        <span className="allCart__footer--textCenter--span" >.</span>
                        <p>اولین اجرا <span>9 فروردین</span></p>
                    </div>
                    <svg className="allCart__airplane w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                </div>
            </div>
        </div>  
        </div>
        </div>

        <div style={{ minWidth: '200px', margin: '0 10px', backgroundColor: 'lightgray' }}>
            {/* <!-- slider9 --> */}
        <div className="swiper-slide">
        <div className="allCart__cart1 allCart__boxSadow allCart__boxSadow--radious">
                
            <div className="allCart__svg">
                <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
            </div>
            <img className="allCart__img1" src="./image/فرانسه ایتالیا اسپانیا.webp" alt=""/>
            
            <div className="allCart__box1">
               <p className="allCart__box1--p" >فرانسه ایتالیا اسپانیا 12 روزه 1404</p>
                
                <div className="allCart__text2 allCart__text2--text3">
                    <p className="allCart__text3">(11 شب و 12 روز)</p>
                    
                    <div className="allCart__box1--scr">
                       <span>مجری تور :</span>
                       <span className="allCart__box1--number">7989</span>
                    </div>
                </div>
                <div className="allCart__price1">
                <h2 className="allCart__price--h2">3,590</h2>
                <span className="allCart__price--spanprice">یورو +</span>
                <h2 className="allCart__price--h2">79,900,000</h2>
                <span className="allCart__price--spanprice">تومان</span>
                </div>
                <div className="allCart__footer allCart__footer--footer1">
                    <div className="allCart__clander">
                        <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
                        <p className="allCart__icoText">28 اسفند</p>
                    </div>
                    <svg className="allCart__airplane w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" d="M1.664 17.084h16.667"></path><path stroke="currentColor" d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"></path></svg>
                </div>
            </div>
        </div>  
        </div>
        </div>
        </div>

      <button
        className="card-scroll-right"
        style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}
        onClick={scrollRight}
      >
        Right
      </button>
    </div>
    </div>
    </div>

   </div>
      </div>
    
  );
};

export default Slider;
























