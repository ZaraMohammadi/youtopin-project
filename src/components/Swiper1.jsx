import React, { useRef } from 'react';

const Slider = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -100, behavior: "smooth" });
  };

// const scrollLeft = () => {
//     if (scrollContainerRef.current) {
//       const containerWidth = scrollContainerRef.current.offsetWidth;
//       scrollContainerRef.current.scrollBy({ 
//         left: -containerWidth / 1, 
//         behavior: "smooth" 
//       });
//     }
//   };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 100, behavior: "smooth" });
  };


// const scrollRight = () => {
//     if (scrollContainerRef.current) {
//       const containerWidth = scrollContainerRef.current.offsetWidth;
//       scrollContainerRef.current.scrollBy({ 
//         left: containerWidth / 1, 
//         behavior: "smooth" 
//       });
//     }
//   };
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
        style={{ display: 'flex', overflowX: 'auto', scrollBehavior: 'smooth', padding: '10px', gap:'200px' }}
      >
      
        <div className="swiper-wrapper">
    <div className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 12">


        {/* محتوای اسلایدر */}
        <div style={{ minWidth: '100px', margin: '0 50px', backgroundColor: 'lightgray' }}>
        {/* <!-- slider1 --> */}
        <div class="swiper-slide">
       <div className=" allCart__boxSadow allCart__boxSadow--radious">
      
      <div className="allCart__svg">
          <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary " xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5 text-textDetails hover:text-primary" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
      </div>


      <img className="allCart__img1" src='/images/0838696a-6ce7-4f17-a96f-f1aff432fed5.webp' alt="عکس اول"/>
      
      <div className="allCart__box1">
      <p className="allCart__box1--p"  >کویر کاراکال و یزدگردی 17 تا 19 بهمن</p>
  
  <div className="allCart__text2">
          <p className="allCart__text3">(1شب و 2 روز)</p>
          
          <div className="allCart__box1--scr">
              <span>مجری تور : </span>
              <span className="allCart__box1--number">9321</span>
          </div>
  </div>
  
  <div className="allCart__price">
      <p> <span className="allCart__priceNum">2,900,000</span>  تومان</p>
      <div className="allCart__icoStar">
          <svg className="allCart__star text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
          <p className="allCart__score">4.9</p>
      </div>
  </div>
  

  <div className="allCart__footer">
      <div className="allCart__clander">
          
          <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
          <p className="allCart__icoText">17 بهمن</p>
      </div>

      
     <p className="allCart__icon">
      <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 21 20" ><path stroke="currentColor" strokelinecap="round" strokelinejoin="round" d="M14.584 17.917H6.417c-1.417 0-2.583-1.1-2.583-2.454V4.538c0-1.346 1.158-2.455 2.583-2.455h8.166c1.417 0 2.584 1.1 2.584 2.455v10.925c0 1.353-1.158 2.454-2.584 2.454"></path><path stroke="currentColor" strokelinecap="round" strokelinejoin="round" d="M15.917 11.25H5.084c-.692 0-1.25-.558-1.25-1.25V8.334c0-.692.558-1.25 1.25-1.25h10.833c.691 0 1.25.558 1.25 1.25V10c0 .692-.559 1.25-1.25 1.25"></path><path stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokeWidth="2" d="M7.579 14.75h.007M13.412 14.75h.008"></path><path stroke="currentColor" strokelinecap="round" strokelinejoin="round" d="M8.417 4.584h4.166"></path></svg>
     </p>
     <div className="allCart__iconEstandart">
      <p className="allCart__textEstandard">استاندارد پلاس</p>
      <svg className="allCart__icoclander" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" class="w-5 h-5 text-textDetails"><path fill="#B0EFEB" stroke="#26B9B0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21.25 18.47-1.65.39c-.37.09-.66.37-.74.74l-.35 1.47a1 1 0 0 1-1.74.41L12 16l-4.77 5.49a1 1 0 0 1-1.74-.41l-.35-1.47a1 1 0 0 0-.74-.74l-1.65-.39a1.003 1.003 0 0 1-.48-1.68l3.9-3.9a6.99 6.99 0 0 0 4.78 3.02q.51.09 1.05.09t1.05-.09c1.99-.29 3.7-1.42 4.78-3.02l3.9 3.9c.55.54.28 1.49-.48 1.67"></path><path fill="#fff" stroke="#26B9B0" strokelinecap="round" strokelinejoin="round" strokeWidth="1.5" d="M19 9c0 1.45-.43 2.78-1.17 3.89a6.99 6.99 0 0 1-4.78 3.02Q12.54 16 12 16t-1.05-.09a6.99 6.99 0 0 1-4.78-3.02A6.97 6.97 0 0 1 5 9c0-3.87 3.13-7 7-7s7 3.13 7 7"></path><path fill="#F5BF41" stroke="#F5BF41" strokelinecap="round" strokelinejoin="round" d="m12.58 5.98.59 1.18c.08.16.29.32.48.35l1.07.18c.68.11.84.61.35 1.1l-.83.83c-.14.14-.22.41-.17.61l.24 1.03c.19.81-.24 1.13-.96.7l-1-.59a.7.7 0 0 0-.66 0l-1 .59c-.72.42-1.15.11-.96-.7l.24-1.03c.04-.19-.03-.47-.17-.61l-.83-.83c-.49-.49-.33-.98.35-1.1l1.07-.18c.18-.03.39-.19.47-.35l.59-1.18c.29-.64.81-.64 1.13 0"></path></svg>

     </div>
  </div>
  </div>


       </div>
      </div>
      </div>

        <div style={{ minWidth: '200px', margin: '0 10px', backgroundColor: 'lightgray' }}>
        {/* <!-- slider2 --> */}
        <div class="swiper-slide">
       <div className="  allCart__boxSadow allCart__boxSadow--radious">
 
 <div className="allCart__svg">
     <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
 </div>
 <img className="allCart__img1" src="/images/ماشین درکویر.webp" alt=""/>
 <div className="allCart__box1">
 <p className="allCart__box1--p" >کویر کاراکال و یزدگردی آفرودی 17 تا 19 بهمن</p>

<div className="allCart__text2">
     <p className="allCart__text3">(1شب و 2 روز)</p>
     <div className="allCart__box1--scr">
         <span>مجری تور : </span>
         <span className="allCart__box1--number">9321</span>
     </div>
     
</div>

<div className="allCart__price">
 <p> <span className="allCart__priceNum">3,800,000 </span>تومان</p>
 <div className="allCart__icoStar">
     <svg className="allCart__star text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
     <p className="allCart__score">4.9</p>
 </div>
</div>

<div className="allCart__footer">
 <div className="allCart__clander">
     <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>

     <p className="allCart__icoText">17 بهمن</p>
 </div>

 
<p className="allCart__icon">
 <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 21 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.584 17.917H6.417c-1.417 0-2.583-1.1-2.583-2.454V4.538c0-1.346 1.158-2.455 2.583-2.455h8.166c1.417 0 2.584 1.1 2.584 2.455v10.925c0 1.353-1.158 2.454-2.584 2.454"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.917 11.25H5.084c-.692 0-1.25-.558-1.25-1.25V8.334c0-.692.558-1.25 1.25-1.25h10.833c.691 0 1.25.558 1.25 1.25V10c0 .692-.559 1.25-1.25 1.25"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.579 14.75h.007M13.412 14.75h.008"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.417 4.584h4.166"></path></svg>
</p>
<div className="allCart__iconEstandart">
 <p className="allCart__textEstandard">استاندارد پلاس</p>
 <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" ><path fill="#B0EFEB" stroke="#26B9B0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21.25 18.47-1.65.39c-.37.09-.66.37-.74.74l-.35 1.47a1 1 0 0 1-1.74.41L12 16l-4.77 5.49a1 1 0 0 1-1.74-.41l-.35-1.47a1 1 0 0 0-.74-.74l-1.65-.39a1.003 1.003 0 0 1-.48-1.68l3.9-3.9a6.99 6.99 0 0 0 4.78 3.02q.51.09 1.05.09t1.05-.09c1.99-.29 3.7-1.42 4.78-3.02l3.9 3.9c.55.54.28 1.49-.48 1.67"></path><path fill="#fff" stroke="#26B9B0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9c0 1.45-.43 2.78-1.17 3.89a6.99 6.99 0 0 1-4.78 3.02Q12.54 16 12 16t-1.05-.09a6.99 6.99 0 0 1-4.78-3.02A6.97 6.97 0 0 1 5 9c0-3.87 3.13-7 7-7s7 3.13 7 7"></path><path fill="#F5BF41" stroke="#F5BF41" stroke-linecap="round" stroke-linejoin="round" d="m12.58 5.98.59 1.18c.08.16.29.32.48.35l1.07.18c.68.11.84.61.35 1.1l-.83.83c-.14.14-.22.41-.17.61l.24 1.03c.19.81-.24 1.13-.96.7l-1-.59a.7.7 0 0 0-.66 0l-1 .59c-.72.42-1.15.11-.96-.7l.24-1.03c.04-.19-.03-.47-.17-.61l-.83-.83c-.49-.49-.33-.98.35-1.1l1.07-.18c.18-.03.39-.19.47-.35l.59-1.18c.29-.64.81-.64 1.13 0"></path></svg>

</div>
</div>
</div>
      </div>
      </div>
      </div>



        <div style={{ minWidth: '200px', margin: '0 10px', backgroundColor: 'lightgray' }}>
        {/* slider3 */}
        <div class="swiper-slide">
        <div className=" allCart__boxSadow allCart__boxSadow--radious">
      <div className="allCart__svg">
          <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
      </div>
      <img className="allCart__img1" src="/images/جشن در ماشین.webp" alt=""/>
      <div className="allCart__box1">
      <p className="allCart__box1--p" >کویر مصر تا آبشار نمکی 17 تا 19 بهمن</p>
  
  <div className="allCart__text2">
          <p className="allCart__text3">(1شب و 2 روز)</p>
          <div className="allCart__box1--scr">
              <span>مجری تور : </span>
              <span className="allCart__box1--number">6465</span>
          </div>
  </div>
  
  <div className="allCart__price">
      <p> <span className="allCart__priceNum">3,000,000</span>  تومان</p>
      <div className="allCart__icoStar">
          <svg className="allCart__star text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
          <p className="allCart__score">4</p>
      </div>
  </div>
  
  <div className="allCart__footer">
      <div className="allCart__clander">
          <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>

          <p className="allCart__icoText">17 بهمن</p>
      </div>

      
     <p className="allCart__icon">
      <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 21 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.584 17.917H6.417c-1.417 0-2.583-1.1-2.583-2.454V4.538c0-1.346 1.158-2.455 2.583-2.455h8.166c1.417 0 2.584 1.1 2.584 2.455v10.925c0 1.353-1.158 2.454-2.584 2.454"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.917 11.25H5.084c-.692 0-1.25-.558-1.25-1.25V8.334c0-.692.558-1.25 1.25-1.25h10.833c.691 0 1.25.558 1.25 1.25V10c0 .692-.559 1.25-1.25 1.25"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.579 14.75h.007M13.412 14.75h.008"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.417 4.584h4.166"></path></svg>
     </p>
     <div className="allCart__iconEstandart">
      <p className="allCart__textEstandard">استاندارد پلاس</p>
      <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" ><path fill="#B0EFEB" stroke="#26B9B0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21.25 18.47-1.65.39c-.37.09-.66.37-.74.74l-.35 1.47a1 1 0 0 1-1.74.41L12 16l-4.77 5.49a1 1 0 0 1-1.74-.41l-.35-1.47a1 1 0 0 0-.74-.74l-1.65-.39a1.003 1.003 0 0 1-.48-1.68l3.9-3.9a6.99 6.99 0 0 0 4.78 3.02q.51.09 1.05.09t1.05-.09c1.99-.29 3.7-1.42 4.78-3.02l3.9 3.9c.55.54.28 1.49-.48 1.67"></path><path fill="#fff" stroke="#26B9B0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9c0 1.45-.43 2.78-1.17 3.89a6.99 6.99 0 0 1-4.78 3.02Q12.54 16 12 16t-1.05-.09a6.99 6.99 0 0 1-4.78-3.02A6.97 6.97 0 0 1 5 9c0-3.87 3.13-7 7-7s7 3.13 7 7"></path><path fill="#F5BF41" stroke="#F5BF41" stroke-linecap="round" stroke-linejoin="round" d="m12.58 5.98.59 1.18c.08.16.29.32.48.35l1.07.18c.68.11.84.61.35 1.1l-.83.83c-.14.14-.22.41-.17.61l.24 1.03c.19.81-.24 1.13-.96.7l-1-.59a.7.7 0 0 0-.66 0l-1 .59c-.72.42-1.15.11-.96-.7l.24-1.03c.04-.19-.03-.47-.17-.61l-.83-.83c-.49-.49-.33-.98.35-1.1l1.07-.18c.18-.03.39-.19.47-.35l.59-1.18c.29-.64.81-.64 1.13 0"></path></svg>

     </div>
  </div>
  </div>
        </div>
        </div>
        </div>

        <div style={{ minWidth: '200px', margin: '0 10px', backgroundColor: 'lightgray' }}>
            {/* <!-- slider4 --> */}
            <div class="swiper-slide">
        <div className=" allCart__boxSadow allCart__boxSadow--radious">
      <div className="allCart__svg">
          <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
      </div>
      <img className="allCart__img1" src="/images/یزد.webp" alt=""/>
      <div className="allCart__box1">
      <p className="allCart__box1--p" >کویر کاراکال فولبرد و یزدگردی 17 تا 19 بهمن</p>
  
  <div className="allCart__text2">
          <p className="allCart__text3">(1شب و 2 روز)</p>
         <div className="allCart__box1--scr">
          <span>مجری تور : </span>
          <span className="allCart__box1--number">9595</span>
         </div>
         
  </div>
  
  <div className="allCart__price">
      <p> <span className="allCart__priceNum">3,500,000</span>  تومان</p>
      <div className="allCart__icoStar">
          <svg className="allCart__star  text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
          <p className="allCart__score">4.2</p>
      </div>
  </div>
  
  <div className="allCart__footer">
      <div className="allCart__clander">
          <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>

          <p className="allCart__icoText">17 بهمن</p>
      </div>

      
     <p className="allCart__icon">
      <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 21 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.584 17.917H6.417c-1.417 0-2.583-1.1-2.583-2.454V4.538c0-1.346 1.158-2.455 2.583-2.455h8.166c1.417 0 2.584 1.1 2.584 2.455v10.925c0 1.353-1.158 2.454-2.584 2.454"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.917 11.25H5.084c-.692 0-1.25-.558-1.25-1.25V8.334c0-.692.558-1.25 1.25-1.25h10.833c.691 0 1.25.558 1.25 1.25V10c0 .692-.559 1.25-1.25 1.25"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.579 14.75h.007M13.412 14.75h.008"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.417 4.584h4.166"></path></svg>
     </p>
     <div className="allCart__iconEstandart">
         <p className="allCart__textEstandard">استاندارد پلاس</p>
      <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" ><path fill="#B0EFEB" stroke="#26B9B0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21.25 18.47-1.65.39c-.37.09-.66.37-.74.74l-.35 1.47a1 1 0 0 1-1.74.41L12 16l-4.77 5.49a1 1 0 0 1-1.74-.41l-.35-1.47a1 1 0 0 0-.74-.74l-1.65-.39a1.003 1.003 0 0 1-.48-1.68l3.9-3.9a6.99 6.99 0 0 0 4.78 3.02q.51.09 1.05.09t1.05-.09c1.99-.29 3.7-1.42 4.78-3.02l3.9 3.9c.55.54.28 1.49-.48 1.67"></path><path fill="#fff" stroke="#26B9B0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9c0 1.45-.43 2.78-1.17 3.89a6.99 6.99 0 0 1-4.78 3.02Q12.54 16 12 16t-1.05-.09a6.99 6.99 0 0 1-4.78-3.02A6.97 6.97 0 0 1 5 9c0-3.87 3.13-7 7-7s7 3.13 7 7"></path><path fill="#F5BF41" stroke="#F5BF41" stroke-linecap="round" stroke-linejoin="round" d="m12.58 5.98.59 1.18c.08.16.29.32.48.35l1.07.18c.68.11.84.61.35 1.1l-.83.83c-.14.14-.22.41-.17.61l.24 1.03c.19.81-.24 1.13-.96.7l-1-.59a.7.7 0 0 0-.66 0l-1 .59c-.72.42-1.15.11-.96-.7l.24-1.03c.04-.19-.03-.47-.17-.61l-.83-.83c-.49-.49-.33-.98.35-1.1l1.07-.18c.18-.03.39-.19.47-.35l.59-1.18c.29-.64.81-.64 1.13 0"></path></svg>

     </div>
  </div>
  </div>   
        </div>
        </div>
        </div>


        <div style={{ minWidth: '200px', margin: '0 10px', backgroundColor: 'lightgray' }}>
            {/* <!-- slider5 --> */}
            <div class="swiper-slide">
        <div className=" allCart__boxSadow allCart__boxSadow--radious">
     <div className="allCart__svg">
         <svg className="allCart__svg--eshterak  w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
  </div>
  <img className="allCart__img1" src="/images/kavir_One.webp" alt="#"/>
  <div className="allCart__box1">
  <p className="allCart__box1--p" >کویر کاراکال و یزدگردی آفرودی 15 تا 17 اسفند</p>

<div className="allCart__text2">
      <p className="allCart__text3">(1شب و 2 روز)</p>
     <div className="allCart__box1--scr">
      <span>مجری تور : </span>
      <span className="allCart__box1--number">9321</span>
     </div>
     
</div>

<div className="allCart__price">
  <p> <span className="allCart__priceNum">3,700,000</span>  تومان</p>
  <div className="allCart__icoStar">
      <svg className="allCart__star text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
      <p className="allCart__score">4.9</p>
  </div>
</div>

<div className="allCart__footer">
  <div className="allCart__clander">
      <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>

      <p className="allCart__icoText">15 اسفند</p>
  </div>

  
 <p className="allCart__icon">
  <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 21 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.584 17.917H6.417c-1.417 0-2.583-1.1-2.583-2.454V4.538c0-1.346 1.158-2.455 2.583-2.455h8.166c1.417 0 2.584 1.1 2.584 2.455v10.925c0 1.353-1.158 2.454-2.584 2.454"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.917 11.25H5.084c-.692 0-1.25-.558-1.25-1.25V8.334c0-.692.558-1.25 1.25-1.25h10.833c.691 0 1.25.558 1.25 1.25V10c0 .692-.559 1.25-1.25 1.25"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.579 14.75h.007M13.412 14.75h.008"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.417 4.584h4.166"></path></svg>
 </p>
 <div className="allCart__iconEstandart">
  <p className="allCart__textEstandard">استاندارد پلاس</p>
  <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" ><path fill="#B0EFEB" stroke="#26B9B0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21.25 18.47-1.65.39c-.37.09-.66.37-.74.74l-.35 1.47a1 1 0 0 1-1.74.41L12 16l-4.77 5.49a1 1 0 0 1-1.74-.41l-.35-1.47a1 1 0 0 0-.74-.74l-1.65-.39a1.003 1.003 0 0 1-.48-1.68l3.9-3.9a6.99 6.99 0 0 0 4.78 3.02q.51.09 1.05.09t1.05-.09c1.99-.29 3.7-1.42 4.78-3.02l3.9 3.9c.55.54.28 1.49-.48 1.67"></path><path fill="#fff" stroke="#26B9B0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9c0 1.45-.43 2.78-1.17 3.89a6.99 6.99 0 0 1-4.78 3.02Q12.54 16 12 16t-1.05-.09a6.99 6.99 0 0 1-4.78-3.02A6.97 6.97 0 0 1 5 9c0-3.87 3.13-7 7-7s7 3.13 7 7"></path><path fill="#F5BF41" stroke="#F5BF41" stroke-linecap="round" stroke-linejoin="round" d="m12.58 5.98.59 1.18c.08.16.29.32.48.35l1.07.18c.68.11.84.61.35 1.1l-.83.83c-.14.14-.22.41-.17.61l.24 1.03c.19.81-.24 1.13-.96.7l-1-.59a.7.7 0 0 0-.66 0l-1 .59c-.72.42-1.15.11-.96-.7l.24-1.03c.04-.19-.03-.47-.17-.61l-.83-.83c-.49-.49-.33-.98.35-1.1l1.07-.18c.18-.03.39-.19.47-.35l.59-1.18c.29-.64.81-.64 1.13 0"></path></svg>

 </div>
</div>
</div>
        </div>
        </div>
        </div>


        <div style={{ minWidth: '200px', margin: '0 10px', backgroundColor: 'lightgray' }}>
            {/* slider6 */}
            <div class="swiper-slide">
        <div className=" allCart__boxSadow allCart__boxSadow--radious">
      <div className="allCart__svg">
          <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
      </div>
      <img className="allCart__img1" src="/images/kavir_One.webp" alt=""/>
      <div className="allCart__box1">
      <p className="allCart__box1--p" >کویر کاراکال و یزدگردی آفرودی 22 تا 24 اسفند</p>
  
  <div className="allCart__text2">
          <p className="allCart__text3">(1شب و 2 روز)</p>
          <div className="allCart__box1--scr">
              <span>مجری تور :</span>
              <span className="allCart__box1--number">9321</span>
          </div>   
  </div>
  
  <div className="allCart__price">
      <p> <span className="allCart__priceNum">3,700,000</span>  تومان</p>
      <div className="allCart__icoStar">
          <svg className="allCart__star text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
          <p className="allCart__score">4.9</p>
      </div>
  </div>
  
  <div className="allCart__footer">
      <div className="allCart__clander">
          <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
  
          <p className="allCart__icoText">15 اسفند</p>
      </div>
  
      
     <p className="allCart__icon">
      <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 21 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.584 17.917H6.417c-1.417 0-2.583-1.1-2.583-2.454V4.538c0-1.346 1.158-2.455 2.583-2.455h8.166c1.417 0 2.584 1.1 2.584 2.455v10.925c0 1.353-1.158 2.454-2.584 2.454"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.917 11.25H5.084c-.692 0-1.25-.558-1.25-1.25V8.334c0-.692.558-1.25 1.25-1.25h10.833c.691 0 1.25.558 1.25 1.25V10c0 .692-.559 1.25-1.25 1.25"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.579 14.75h.007M13.412 14.75h.008"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.417 4.584h4.166"></path></svg>
     </p>
     <div className="allCart__iconEstandart">
         <p className="allCart__textEstandard">استاندارد پلاس</p>
      <svg className="allCart__icoclander" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" class="w-5 h-5 text-textDetails"><path fill="#B0EFEB" stroke="#26B9B0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21.25 18.47-1.65.39c-.37.09-.66.37-.74.74l-.35 1.47a1 1 0 0 1-1.74.41L12 16l-4.77 5.49a1 1 0 0 1-1.74-.41l-.35-1.47a1 1 0 0 0-.74-.74l-1.65-.39a1.003 1.003 0 0 1-.48-1.68l3.9-3.9a6.99 6.99 0 0 0 4.78 3.02q.51.09 1.05.09t1.05-.09c1.99-.29 3.7-1.42 4.78-3.02l3.9 3.9c.55.54.28 1.49-.48 1.67"></path><path fill="#fff" stroke="#26B9B0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9c0 1.45-.43 2.78-1.17 3.89a6.99 6.99 0 0 1-4.78 3.02Q12.54 16 12 16t-1.05-.09a6.99 6.99 0 0 1-4.78-3.02A6.97 6.97 0 0 1 5 9c0-3.87 3.13-7 7-7s7 3.13 7 7"></path><path fill="#F5BF41" stroke="#F5BF41" stroke-linecap="round" stroke-linejoin="round" d="m12.58 5.98.59 1.18c.08.16.29.32.48.35l1.07.18c.68.11.84.61.35 1.1l-.83.83c-.14.14-.22.41-.17.61l.24 1.03c.19.81-.24 1.13-.96.7l-1-.59a.7.7 0 0 0-.66 0l-1 .59c-.72.42-1.15.11-.96-.7l.24-1.03c.04-.19-.03-.47-.17-.61l-.83-.83c-.49-.49-.33-.98.35-1.1l1.07-.18c.18-.03.39-.19.47-.35l.59-1.18c.29-.64.81-.64 1.13 0"></path></svg>
  
     </div>
  </div>
  </div>
        </div>
        </div>
        </div>

        <div style={{ minWidth: '200px', margin: '0 10px', backgroundColor: 'lightgray' }}>
            
            {/* slider7 */}
            <div class="swiper-slide">
        <div className=" allCart__boxSadow allCart__boxSadow--radious">
  <div className="allCart__svg">
      <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
  </div>
  <img className="allCart__img1" src="/images/شتر.webp" alt=""/>
  <div className="allCart__box1">
  <p className="allCart__box1--p" >کویر کاراکال و یزدگردی 15 تا 17 اسفند</p>

<div className="allCart__text2">
      <p className="allCart__text3">(1شب و 2 روز)</p>
      <div className="allCart__box1--scr">
          <span>مجری تور :</span>
          <span className="allCart__box1--number">9321</span>
      </div>
      
</div>

<div className="allCart__price">
  <p> <span className="allCart__priceNum">2,900,000</span>  تومان</p>
  <div className="allCart__icoStar">
      <svg className="allCart__star text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
      <p className="allCart__score">4.9</p>
  </div>
</div>

<div className="allCart__footer">
  <div className="allCart__clander">
      <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>

      <p className="allCart__icoText">15 اسفند</p>
  </div>

  
 <p className="allCart__icon">
  <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 21 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.584 17.917H6.417c-1.417 0-2.583-1.1-2.583-2.454V4.538c0-1.346 1.158-2.455 2.583-2.455h8.166c1.417 0 2.584 1.1 2.584 2.455v10.925c0 1.353-1.158 2.454-2.584 2.454"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.917 11.25H5.084c-.692 0-1.25-.558-1.25-1.25V8.334c0-.692.558-1.25 1.25-1.25h10.833c.691 0 1.25.558 1.25 1.25V10c0 .692-.559 1.25-1.25 1.25"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.579 14.75h.007M13.412 14.75h.008"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.417 4.584h4.166"></path></svg>
 </p>
 <div className="allCart__iconEstandart">
  <p className="allCart__textEstandard">استاندارد پلاس</p>
  <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" ><path fill="#B0EFEB" stroke="#26B9B0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21.25 18.47-1.65.39c-.37.09-.66.37-.74.74l-.35 1.47a1 1 0 0 1-1.74.41L12 16l-4.77 5.49a1 1 0 0 1-1.74-.41l-.35-1.47a1 1 0 0 0-.74-.74l-1.65-.39a1.003 1.003 0 0 1-.48-1.68l3.9-3.9a6.99 6.99 0 0 0 4.78 3.02q.51.09 1.05.09t1.05-.09c1.99-.29 3.7-1.42 4.78-3.02l3.9 3.9c.55.54.28 1.49-.48 1.67"></path><path fill="#fff" stroke="#26B9B0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9c0 1.45-.43 2.78-1.17 3.89a6.99 6.99 0 0 1-4.78 3.02Q12.54 16 12 16t-1.05-.09a6.99 6.99 0 0 1-4.78-3.02A6.97 6.97 0 0 1 5 9c0-3.87 3.13-7 7-7s7 3.13 7 7"></path><path fill="#F5BF41" stroke="#F5BF41" stroke-linecap="round" stroke-linejoin="round" d="m12.58 5.98.59 1.18c.08.16.29.32.48.35l1.07.18c.68.11.84.61.35 1.1l-.83.83c-.14.14-.22.41-.17.61l.24 1.03c.19.81-.24 1.13-.96.7l-1-.59a.7.7 0 0 0-.66 0l-1 .59c-.72.42-1.15.11-.96-.7l.24-1.03c.04-.19-.03-.47-.17-.61l-.83-.83c-.49-.49-.33-.98.35-1.1l1.07-.18c.18-.03.39-.19.47-.35l.59-1.18c.29-.64.81-.64 1.13 0"></path></svg>

 </div>
</div>
</div>
        </div>
        </div>
        </div>

        <div style={{ minWidth: '200px', margin: '0 10px', backgroundColor: 'lightgray' }}>
            {/* slider8 */}
            <div class="swiper-slide">
         <div className=" allCart__boxSadow allCart__boxSadow--radious">
  <div className="allCart__svg">
      <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
  </div>
  <img className="allCart__img1" src="/images/نمک آبرود.webp" alt="#"/>
  <div className="allCart__box1">
  <p className="allCart__box1--p" >نمک آبرود و ساحل خزر 3 اسفند</p>

<div className="allCart__text2">
      <p className="allCart__text3">(1 روزه)</p>
      <div className="allCart__box1--scr">
          <span>مجری تور :</span>
          <span className="allCart__box1--number"> 2222</span>
      </div>
      
</div>

<div className="allCart__price">
  <p> <span className="allCart__priceNum">1,500,000</span>  تومان</p>
  <div className="allCart__icoStar">
      <svg className="allCart__star text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
      <p className="allCart__score">3.6</p>
  </div>
</div>

<div className="allCart__footer">
  <div className="allCart__clander">
      <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>

      <p className="allCart__icoText">3 اسفند</p>
  </div>

  
 <p className="allCart__icon">
  <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 21 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.584 17.917H6.417c-1.417 0-2.583-1.1-2.583-2.454V4.538c0-1.346 1.158-2.455 2.583-2.455h8.166c1.417 0 2.584 1.1 2.584 2.455v10.925c0 1.353-1.158 2.454-2.584 2.454"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.917 11.25H5.084c-.692 0-1.25-.558-1.25-1.25V8.334c0-.692.558-1.25 1.25-1.25h10.833c.691 0 1.25.558 1.25 1.25V10c0 .692-.559 1.25-1.25 1.25"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.579 14.75h.007M13.412 14.75h.008"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.417 4.584h4.166"></path></svg>
 </p>
 <div className="allCart__iconEstandart">
  <p className="allCart__textEstandard">استاندارد پلاس</p>
  <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" ><path fill="#B0EFEB" stroke="#26B9B0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21.25 18.47-1.65.39c-.37.09-.66.37-.74.74l-.35 1.47a1 1 0 0 1-1.74.41L12 16l-4.77 5.49a1 1 0 0 1-1.74-.41l-.35-1.47a1 1 0 0 0-.74-.74l-1.65-.39a1.003 1.003 0 0 1-.48-1.68l3.9-3.9a6.99 6.99 0 0 0 4.78 3.02q.51.09 1.05.09t1.05-.09c1.99-.29 3.7-1.42 4.78-3.02l3.9 3.9c.55.54.28 1.49-.48 1.67"></path><path fill="#fff" stroke="#26B9B0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9c0 1.45-.43 2.78-1.17 3.89a6.99 6.99 0 0 1-4.78 3.02Q12.54 16 12 16t-1.05-.09a6.99 6.99 0 0 1-4.78-3.02A6.97 6.97 0 0 1 5 9c0-3.87 3.13-7 7-7s7 3.13 7 7"></path><path fill="#F5BF41" stroke="#F5BF41" stroke-linecap="round" stroke-linejoin="round" d="m12.58 5.98.59 1.18c.08.16.29.32.48.35l1.07.18c.68.11.84.61.35 1.1l-.83.83c-.14.14-.22.41-.17.61l.24 1.03c.19.81-.24 1.13-.96.7l-1-.59a.7.7 0 0 0-.66 0l-1 .59c-.72.42-1.15.11-.96-.7l.24-1.03c.04-.19-.03-.47-.17-.61l-.83-.83c-.49-.49-.33-.98.35-1.1l1.07-.18c.18-.03.39-.19.47-.35l.59-1.18c.29-.64.81-.64 1.13 0"></path></svg>

 </div>
</div>
</div>
         </div>
        </div>
        </div>

        <div style={{ minWidth: '200px', margin: '0 10px', backgroundColor: 'lightgray' }}>
            {/* slider 9 */}
            <div class="swiper-slide">
         <div className=" allCart__boxSadow allCart__boxSadow--radious">
  <div className="allCart__svg">
      <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
  </div>
  <img className="allCart__img1" src="/images/نمک آبرود.webp" alt=""/>
  <div className="allCart__box1">
  <p className="allCart__box1--p" >نمک آبرود و ساحل خزر 10 اسفند</p>

<div className="allCart__text2">
      <p className="allCart__text3">(1 روزه)</p>
     <div className="allCart__box1--scr">
      <span>مجری تور :</span>
      <span className="allCart__box1--number">2222</span>
     </div>
     
</div>

<div className="allCart__price">
  <p> <span className="allCart__priceNum">1,500,000</span>  تومان</p>
  <div className="allCart__icoStar">
      <svg className="allCart__star text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
      <p className="allCart__score">3.6</p>
  </div>
</div>

<div className="allCart__footer">
  <div className="allCart__clander">
      <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
      <p className="allCart__icoText">10 اسفند</p>
  </div>

  
 <p className="allCart__icon">
  <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 21 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.584 17.917H6.417c-1.417 0-2.583-1.1-2.583-2.454V4.538c0-1.346 1.158-2.455 2.583-2.455h8.166c1.417 0 2.584 1.1 2.584 2.455v10.925c0 1.353-1.158 2.454-2.584 2.454"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.917 11.25H5.084c-.692 0-1.25-.558-1.25-1.25V8.334c0-.692.558-1.25 1.25-1.25h10.833c.691 0 1.25.558 1.25 1.25V10c0 .692-.559 1.25-1.25 1.25"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.579 14.75h.007M13.412 14.75h.008"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.417 4.584h4.166"></path></svg>
 </p>
 <div className="allCart__iconEstandart">
  <p className="allCart__textEstandard">استاندارد پلاس</p>
  <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" class="w-5 h-5 text-textDetails"><path fill="#B0EFEB" stroke="#26B9B0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21.25 18.47-1.65.39c-.37.09-.66.37-.74.74l-.35 1.47a1 1 0 0 1-1.74.41L12 16l-4.77 5.49a1 1 0 0 1-1.74-.41l-.35-1.47a1 1 0 0 0-.74-.74l-1.65-.39a1.003 1.003 0 0 1-.48-1.68l3.9-3.9a6.99 6.99 0 0 0 4.78 3.02q.51.09 1.05.09t1.05-.09c1.99-.29 3.7-1.42 4.78-3.02l3.9 3.9c.55.54.28 1.49-.48 1.67"></path><path fill="#fff" stroke="#26B9B0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9c0 1.45-.43 2.78-1.17 3.89a6.99 6.99 0 0 1-4.78 3.02Q12.54 16 12 16t-1.05-.09a6.99 6.99 0 0 1-4.78-3.02A6.97 6.97 0 0 1 5 9c0-3.87 3.13-7 7-7s7 3.13 7 7"></path><path fill="#F5BF41" stroke="#F5BF41" stroke-linecap="round" stroke-linejoin="round" d="m12.58 5.98.59 1.18c.08.16.29.32.48.35l1.07.18c.68.11.84.61.35 1.1l-.83.83c-.14.14-.22.41-.17.61l.24 1.03c.19.81-.24 1.13-.96.7l-1-.59a.7.7 0 0 0-.66 0l-1 .59c-.72.42-1.15.11-.96-.7l.24-1.03c.04-.19-.03-.47-.17-.61l-.83-.83c-.49-.49-.33-.98.35-1.1l1.07-.18c.18-.03.39-.19.47-.35l.59-1.18c.29-.64.81-.64 1.13 0"></path></svg>

 </div>
</div>
</div>
         </div>
        </div>
        </div>

        <div style={{ minWidth: '200px', margin: '0 10px', backgroundColor: 'lightgray' }}>
            {/* slider10 */}
            <div class="swiper-slide">
         <div className=" allCart__boxSadow allCart__boxSadow--radious">
  <div className="allCart__svg">
      <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
  </div>
  <img className="allCart__img1" src="/images/موج سواری.webp" alt="#"/>
  <div className="allCart__box1">
  <p className="allCart__box1--p" >ورزشهای موج سواری در چابهار 7 تا 10 اسفند</p>

<div className="allCart__text2">
      <p className="allCart__text3">(3 شب و 4 روز)</p>
      <div className="allCart__box1--scr">
          <span>مجری تور :</span>
          <span className="allCart__box1--number">5690</span>
      </div>
      
</div>

<div className="allCart__price">
  <p> <span className="allCart__priceNum">14,700,000</span>  تومان</p>

</div>

<div className="allCart__footer allCart__footer--sport">
  <div className="allCart__clander">
      <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>

      <p className="allCart__icoText">7 اسفند</p>
  </div>

 <div className="allCart__iconEstandart">
     
     <p className="allCart__textEstandard">استاندارد پلاس</p>
     <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24"><path fill="#B0EFEB" stroke="#26B9B0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21.25 18.47-1.65.39c-.37.09-.66.37-.74.74l-.35 1.47a1 1 0 0 1-1.74.41L12 16l-4.77 5.49a1 1 0 0 1-1.74-.41l-.35-1.47a1 1 0 0 0-.74-.74l-1.65-.39a1.003 1.003 0 0 1-.48-1.68l3.9-3.9a6.99 6.99 0 0 0 4.78 3.02q.51.09 1.05.09t1.05-.09c1.99-.29 3.7-1.42 4.78-3.02l3.9 3.9c.55.54.28 1.49-.48 1.67"></path><path fill="#fff" stroke="#26B9B0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9c0 1.45-.43 2.78-1.17 3.89a6.99 6.99 0 0 1-4.78 3.02Q12.54 16 12 16t-1.05-.09a6.99 6.99 0 0 1-4.78-3.02A6.97 6.97 0 0 1 5 9c0-3.87 3.13-7 7-7s7 3.13 7 7"></path><path fill="#F5BF41" stroke="#F5BF41" stroke-linecap="round" stroke-linejoin="round" d="m12.58 5.98.59 1.18c.08.16.29.32.48.35l1.07.18c.68.11.84.61.35 1.1l-.83.83c-.14.14-.22.41-.17.61l.24 1.03c.19.81-.24 1.13-.96.7l-1-.59a.7.7 0 0 0-.66 0l-1 .59c-.72.42-1.15.11-.96-.7l.24-1.03c.04-.19-.03-.47-.17-.61l-.83-.83c-.49-.49-.33-.98.35-1.1l1.07-.18c.18-.03.39-.19.47-.35l.59-1.18c.29-.64.81-.64 1.13 0"></path></svg>
 </div>
</div>
</div>
        </div>
        </div>
        </div>

        <div style={{ minWidth: '200px', margin: '0 10px', backgroundColor: 'lightgray' }}>
            
          {/* slider11 */}
          <div class="swiper-slide">
       <div className=" allCart__boxSadow allCart__boxSadow--radious">
  <div className="allCart__svg">
      <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
  </div>
  <img className="allCart__img1" src="/images/بادبادک.webp" alt="#"/>
  <div className="allCart__box1">
 <p className="allCart__box1--p" >نمک آبرود و ساحل خزر24 اسفند</p>

<div className="allCart__text2">
      <p className="allCart__text3">(1 روزه)</p>
     <div className="allCart__box1--scr">
      <span>مجری تور :</span>
      <span className="allCart__box1--number">2222</span>

     </div>
     
</div>

<div className="allCart__price">
  <p> <span className="allCart__priceNum">1,500,000</span>  تومان</p>
  <div className="allCart__icoStar">
      <svg className="allCart__star text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
      <p className="allCart__score">3.6</p>
  </div>
</div>

<div className="allCart__footer">
  <div className="allCart__clander">
      <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>

      <p className="allCart__icoText">24 اسفند</p>
  </div>

  
 <p className="allCart__icon">
  <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 21 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.584 17.917H6.417c-1.417 0-2.583-1.1-2.583-2.454V4.538c0-1.346 1.158-2.455 2.583-2.455h8.166c1.417 0 2.584 1.1 2.584 2.455v10.925c0 1.353-1.158 2.454-2.584 2.454"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.917 11.25H5.084c-.692 0-1.25-.558-1.25-1.25V8.334c0-.692.558-1.25 1.25-1.25h10.833c.691 0 1.25.558 1.25 1.25V10c0 .692-.559 1.25-1.25 1.25"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.579 14.75h.007M13.412 14.75h.008"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.417 4.584h4.166"></path></svg>
 </p>
 <div className="allCart__iconEstandart">
     
     <p className="allCart__textEstandard">استاندارد پلاس</p>
     <svg className="allCart__icoclander w-5 h-5 text-textDetails " xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24"><path fill="#B0EFEB" stroke="#26B9B0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21.25 18.47-1.65.39c-.37.09-.66.37-.74.74l-.35 1.47a1 1 0 0 1-1.74.41L12 16l-4.77 5.49a1 1 0 0 1-1.74-.41l-.35-1.47a1 1 0 0 0-.74-.74l-1.65-.39a1.003 1.003 0 0 1-.48-1.68l3.9-3.9a6.99 6.99 0 0 0 4.78 3.02q.51.09 1.05.09t1.05-.09c1.99-.29 3.7-1.42 4.78-3.02l3.9 3.9c.55.54.28 1.49-.48 1.67"></path><path fill="#fff" stroke="#26B9B0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9c0 1.45-.43 2.78-1.17 3.89a6.99 6.99 0 0 1-4.78 3.02Q12.54 16 12 16t-1.05-.09a6.99 6.99 0 0 1-4.78-3.02A6.97 6.97 0 0 1 5 9c0-3.87 3.13-7 7-7s7 3.13 7 7"></path><path fill="#F5BF41" stroke="#F5BF41" stroke-linecap="round" stroke-linejoin="round" d="m12.58 5.98.59 1.18c.08.16.29.32.48.35l1.07.18c.68.11.84.61.35 1.1l-.83.83c-.14.14-.22.41-.17.61l.24 1.03c.19.81-.24 1.13-.96.7l-1-.59a.7.7 0 0 0-.66 0l-1 .59c-.72.42-1.15.11-.96-.7l.24-1.03c.04-.19-.03-.47-.17-.61l-.83-.83c-.49-.49-.33-.98.35-1.1l1.07-.18c.18-.03.39-.19.47-.35l.59-1.18c.29-.64.81-.64 1.13 0"></path></svg>
 </div>
</div>
</div>
       </div>
        </div>
        </div>

        <div style={{ minWidth: '200px', margin: '0 10px', backgroundColor: 'lightgray' }}>
            
     {/* slider12 */}
     <div class="swiper-slide">
        <div className=" allCart__boxSadow allCart__boxSadow--radious">
      <div className="allCart__svg">
          <svg className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 20 20" width="1em" height="1em"><path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path></svg>
      </div>
      <img className="allCart__img1" src="/images/جنگل مشعل.webp" alt=""/>
      <div className="allCart__box1">
      <p className="allCart__box1--p" >جنگل مشعل، مرداب هسل ، نمک آبرو 3 اسفند</p>
  
  <div className="allCart__text2">
          <p className="allCart__text3">(1 روزه)</p>
          <div className="allCart__box1--scr">
              <span>مجری تور :</span>
              <span>2222</span>
              
          </div>
          
  </div>
  
  <div className="allCart__price">
      <p> <span className="allCart__priceNum">1,500,000</span>  تومان</p>
      <div className="allCart__icoStar">
          <svg className="allCart__star text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path></svg>
          <p className="allCart__score">4.5</p>
      </div>
  </div>
  
  <div className="allCart__footer">
      <div className="allCart__clander">
          <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path></svg>
  
          <p className="allCart__icoText">3 اسفند</p>
      </div>
  
      
     <p className="allCart__icon">
      <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 21 20" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.584 17.917H6.417c-1.417 0-2.583-1.1-2.583-2.454V4.538c0-1.346 1.158-2.455 2.583-2.455h8.166c1.417 0 2.584 1.1 2.584 2.455v10.925c0 1.353-1.158 2.454-2.584 2.454"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.917 11.25H5.084c-.692 0-1.25-.558-1.25-1.25V8.334c0-.692.558-1.25 1.25-1.25h10.833c.691 0 1.25.558 1.25 1.25V10c0 .692-.559 1.25-1.25 1.25"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.579 14.75h.007M13.412 14.75h.008"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.417 4.584h4.166"></path></svg>
     </p>
     <div className="allCart__iconEstandart">
         
         <p className="allCart__textEstandard">استاندارد پلاس</p>
         <svg className="allCart__icoclander w-5 h-5 text-textDetails" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" ><path fill="#B0EFEB" stroke="#26B9B0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21.25 18.47-1.65.39c-.37.09-.66.37-.74.74l-.35 1.47a1 1 0 0 1-1.74.41L12 16l-4.77 5.49a1 1 0 0 1-1.74-.41l-.35-1.47a1 1 0 0 0-.74-.74l-1.65-.39a1.003 1.003 0 0 1-.48-1.68l3.9-3.9a6.99 6.99 0 0 0 4.78 3.02q.51.09 1.05.09t1.05-.09c1.99-.29 3.7-1.42 4.78-3.02l3.9 3.9c.55.54.28 1.49-.48 1.67"></path><path fill="#fff" stroke="#26B9B0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9c0 1.45-.43 2.78-1.17 3.89a6.99 6.99 0 0 1-4.78 3.02Q12.54 16 12 16t-1.05-.09a6.99 6.99 0 0 1-4.78-3.02A6.97 6.97 0 0 1 5 9c0-3.87 3.13-7 7-7s7 3.13 7 7"></path><path fill="#F5BF41" stroke="#F5BF41" stroke-linecap="round" stroke-linejoin="round" d="m12.58 5.98.59 1.18c.08.16.29.32.48.35l1.07.18c.68.11.84.61.35 1.1l-.83.83c-.14.14-.22.41-.17.61l.24 1.03c.19.81-.24 1.13-.96.7l-1-.59a.7.7 0 0 0-.66 0l-1 .59c-.72.42-1.15.11-.96-.7l.24-1.03c.04-.19-.03-.47-.17-.61l-.83-.83c-.49-.49-.33-.98.35-1.1l1.07-.18c.18-.03.39-.19.47-.35l.59-1.18c.29-.64.81-.64 1.13 0"></path></svg>
     </div>
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


