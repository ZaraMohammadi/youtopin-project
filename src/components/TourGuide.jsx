import React, { useRef, useState } from "react";
import TourGuideCards from "./TourGuideCards";
// const url="../../src/assets/images/TourGuide.png";
function TourGuide() {
  const [show, setIsShow] = useState("last");
  const scrollContainerRef = useRef(null);
  const manageShow = (event) => {
    setIsShow(event.target.id);
  };

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -100, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 100, behavior: "smooth" });
  };

  return (
    <section
      style={{ backgroundImage: "url('/Images/tourGuide.png')" }}
      className="h-[830px] bg-cover bg-center flex flex-col justify-around overflow-x-hidden mt-[150px]"
    >
      <div className="flex justify-between items-center px-[50px] py-0 " >
        <h1 className="bold">راهنمای سفر</h1>
        <button className="h-[35px] w-[90px] bg-[white] border border-[color:var(--primary-color)] text-[color:var(--primary-color)] p-[5px] rounded-[10px] border-solid text-sm hover:bg-[color:var(--primary-color)] hover:text-[white]">
          مشاهده همه
        </button>
      </div>
      <div className="h-[50px] flex px-[100px] py-0 sm-custom:m-5 sm-custom:p-0 ">
        <button className="bg-transparent p-2.5 border-0" onClick={scrollRight}>
          <svg className="h-[25px] w-[25px] pt-[5px] hover:text-[var(--primary-color)]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.3986 4.3275a.75.75 0 0 1 1.0607 0l6.3639 6.364c.6835.6834.6835 1.7914 0 2.4749l-6.3639 6.3639a.75.75 0 0 1-1.0607-1.0606l6.364-6.364a.2501.2501 0 0 0 0-.3536l-6.364-6.364a.75.75 0 0 1 0-1.0606Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <ul
          ref={scrollContainerRef}
          style={{ scrollbarWidth: "none" }}
          className="flex justify-between items-center list-none overflow-x-scroll p-2.5"
        >
          <li
            className="min-w-[160px] text-center cursor-pointer p-[5px] hover:bg-[color:var(--primary-color)] hover:text-[white] hover:rounded-lg"
            id="last"
            onClick={manageShow}
          >
            آخرین راهنماها
          </li>
          <li
            className="min-w-[160px] text-center cursor-pointer p-[5px] hover:bg-[color:var(--primary-color)] hover:text-[white] hover:rounded-lg"
            id="popular"
            onClick={manageShow}
          >
            پر بازدید ترین
          </li>
          <li
            className="min-w-[160px] text-center cursor-pointer p-[5px] hover:bg-[color:var(--primary-color)] hover:text-[white] hover:rounded-lg"
            id="village"
            onClick={manageShow}
          >
            روستاگردی
          </li>
          <li
            className="min-w-[160px] text-center cursor-pointer p-[5px] hover:bg-[color:var(--primary-color)] hover:text-[white] hover:rounded-lg"
            id="walking"
            onClick={manageShow}
          >
            پیاده روی
          </li>
          <li
            className="min-w-[160px] text-center cursor-pointer p-[5px] hover:bg-[color:var(--primary-color)] hover:text-[white] hover:rounded-lg"
            id="cafe"
            onClick={manageShow}
          >
            کافه رستوران
          </li>
          <li
            className="min-w-[160px] text-center cursor-pointer p-[5px] hover:bg-[color:var(--primary-color)] hover:text-[white] hover:rounded-lg"
            id="camping"
            onClick={manageShow}
          >
            کمپینگ
          </li>
          <li
            className="min-w-[160px] text-center cursor-pointer p-[5px] hover:bg-[color:var(--primary-color)] hover:text-[white] hover:rounded-lg"
            id="tehran"
            onClick={manageShow}
          >
            تهران گردی
          </li>
          <li
            className="min-w-[160px] text-center cursor-pointer p-[5px] hover:bg-[color:var(--primary-color)] hover:text-[white] hover:rounded-lg"
            id="market"
            onClick={manageShow}
          >
            مراکز خرید
          </li>
          <li
            className="min-w-[160px] text-center cursor-pointer p-[5px] hover:bg-[color:var(--primary-color)] hover:text-[white] hover:rounded-lg"
            id="game"
            onClick={manageShow}
          >
            تفریحات و سرگرمی
          </li>
          <li
            className="min-w-[160px] text-center cursor-pointer p-[5px] hover:bg-[color:var(--primary-color)] hover:text-[white] hover:rounded-lg"
            id="hotel"
            onClick={manageShow}
          >
            اقامتگاه های خاص
          </li>
        </ul>
        <button className="bg-transparent p-2.5 border-0" onClick={scrollLeft}>
          <svg className="h-[25px] w-[25px] pt-[5px] hover:text[var(--primary-color)]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.6014 4.4697a.75.75 0 0 1 0 1.0606l-6.364 6.364a.25.25 0 0 0 0 .3535l6.364 6.364a.75.75 0 0 1-1.0607 1.0607l-6.364-6.364c-.6834-.6834-.6834-1.7915 0-2.4749l6.364-6.364a.75.75 0 0 1 1.0607 0Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
      <TourGuideCards show={show} />
      <div className="w-80 h-[70px] text-center text-[13px] self-center p-2.5 ">
        <div className="flex items-center pr-10">
          <svg className="h-[25px] w-[25px] pt-[5px]"
            viewBox="0 -0.06 33.834 33.834"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.217 15.309a2.38 2.38 0 0 1 .489-1.434 9.29 9.29 0 0 1 1.443-1.482 10.139 10.139 0 0 0 1.321-1.372 1.985 1.985 0 0 0 .368-1.2 1.956 1.956 0 0 0-1.983-2 2.073 2.073 0 0 0-1.419.543 3.575 3.575 0 0 0-.954 1.582l-2.152-.939a5.029 5.029 0 0 1 1.724-2.656 4.626 4.626 0 0 1 2.9-.927 4.968 4.968 0 0 1 2.287.531 4.168 4.168 0 0 1 1.651 1.495 3.974 3.974 0 0 1 .612 2.175 3.688 3.688 0 0 1-.538 1.965 8.8 8.8 0 0 1-1.639 1.865 13.862 13.862 0 0 0-1.358 1.322 1.536 1.536 0 0 0-.379 1 2.85 2.85 0 0 0 .1.667h-2.2a2.737 2.737 0 0 1-.273-1.135Zm1.467 6.968a1.851 1.851 0 0 1-1.357-.543 1.831 1.831 0 0 1-.551-1.359 1.875 1.875 0 0 1 .551-1.372 1.835 1.835 0 0 1 1.357-.556 1.87 1.87 0 0 1 1.909 1.928 1.834 1.834 0 0 1-.55 1.359 1.857 1.857 0 0 1-1.359.543Z" />
            <path d="M1.474 33.717a1.475 1.475 0 0 1-.626-.14A1.459 1.459 0 0 1 0 32.244V3.572A3.576 3.576 0 0 1 3.572 0h26.69a3.576 3.576 0 0 1 3.572 3.572v20.416a3.576 3.576 0 0 1-3.572 3.571H10.29a2.555 2.555 0 0 0-1.637.594l-6.24 5.22a1.467 1.467 0 0 1-.939.344ZM3.572 2A1.574 1.574 0 0 0 2 3.572V31.11l5.37-4.491a4.561 4.561 0 0 1 2.92-1.06h19.972a1.573 1.573 0 0 0 1.572-1.571V3.572A1.574 1.574 0 0 0 30.262 2Z" />
          </svg>
          <span>راهنمای سفر چه کمکی به من میکند؟</span>
        </div>
        <a className="no-underline text-[color:var(--primary-color)]" href="">اینجارو بخون</a>
      </div>
    </section>
  );
}

export default TourGuide;
