import { useState } from "react";
import DropDownMenu from "./DropDownMenu";
import SideNav from "./SideNav";
const cities = [
  { id: 1, name: "تهران" },
  { id: 2, name: "مشهد" },
  { id: 3, name: "اصفهان" },
  { id: 4, name: "شیراز" },
  { id: 5, name: "تبریز" },
  { id: 6, name: "اهواز" },
  { id: 7, name: "کرمان" },
  { id: 8, name: "ارومیه" },
  { id: 9, name: "رشت" },
  { id: 10, name: "کرج" },
  { id: 11, name: "زاهدان" },
  { id: 12, name: "قم" },
  { id: 13, name: "همدان" },
  { id: 14, name: "یزد" },
  { id: 15, name: "گرگان" },
  { id: 16, name: "اردبیل" },
  { id: 17, name: "بندرعباس" },
  { id: 18, name: "خرم‌آباد" },
  { id: 19, name: "سمنان" },
  { id: 20, name: "قزوین" },
  { id: 21, name: "بوشهر" },
  { id: 22, name: "سنندج" },
  { id: 23, name: "شهرکرد" },
  { id: 24, name: "ایلام" },
  { id: 25, name: "بیرجند" },
  { id: 26, name: "زنجان" },
  { id: 27, name: "یاسوج" },
  { id: 28, name: "ساوه" },
  { id: 29, name: "کاشان" },
  { id: 30, name: "نجف‌آباد" },
  { id: 31, name: "مراغه" },
];
const visas = [
  { id: 1, name: "ویزای توریستی" },
  { id: 2, name: "ویزای کاری" },
  { id: 3, name: "ویزای تحصیلی" },
  { id: 4, name: "ویزای سرمایه‌گذاری" },
  { id: 5, name: "ویزای خانوادگی" },
  { id: 6, name: "ویزای ازدواج" },
  { id: 7, name: "ویزای تجاری" },
  { id: 8, name: "ویزای پزشکی" },
  { id: 9, name: "ویزای نمایشگاهی" },
  { id: 10, name: "ویزای پژوهشی" },
  { id: 11, name: "ویزای دیپلماتیک" },
  { id: 12, name: "ویزای بشردوستانه" },
  { id: 13, name: "ویزای ترانزیت" },
  { id: 14, name: "ویزای خبرنگاری" },
  { id: 15, name: "ویزای ورزشی" },
  { id: 16, name: "ویزای هنری و فرهنگی" },
  { id: 17, name: "ویزای نخبگان" },
  { id: 18, name: "ویزای بازنشستگی" },
  { id: 19, name: "ویزای جستجوی کار" },
  { id: 20, name: "ویزای فریلنسری" },
  { id: 21, name: "ویزای پناهندگی" },
  { id: 22, name: "ویزای اقامت دائم" },
  { id: 23, name: "ویزای همراه" },
  { id: 24, name: "ویزای کارآفرینی" },
  { id: 25, name: "ویزای برنامه تعطیلات کاری" },
  { id: 26, name: "ویزای کشاورزی" },
  { id: 27, name: "ویزای انتقال درون شرکتی" },
  { id: 28, name: "ویزای تحصیل در مدارس" },
  { id: 29, name: "ویزای مهارت‌های خاص" },
  { id: 30, name: "ویزای داوطلبانه" },
  { id: 31, name: "ویزای اقامت ویژه" },
];
const countries = [
  { id: 1, name: "آلمان" },
  { id: 2, name: "فرانسه" },
  { id: 3, name: "ایتالیا" },
  { id: 4, name: "اسپانیا" },
  { id: 5, name: "کانادا" },
  { id: 6, name: "آمریکا" },
  { id: 7, name: "استرالیا" },
  { id: 8, name: "ژاپن" },
  { id: 9, name: "چین" },
  { id: 10, name: "کره جنوبی" },
  { id: 11, name: "سوئیس" },
  { id: 12, name: "اتریش" },
  { id: 13, name: "سوئد" },
  { id: 14, name: "نروژ" },
  { id: 15, name: "دانمارک" },
  { id: 16, name: "فنلاند" },
  { id: 17, name: "هلند" },
  { id: 18, name: "بلژیک" },
  { id: 19, name: "انگلستان" },
  { id: 20, name: "ایرلند" },
  { id: 21, name: "پرتغال" },
  { id: 22, name: "روسیه" },
  { id: 23, name: "مکزیک" },
  { id: 24, name: "برزیل" },
  { id: 25, name: "آرژانتین" },
  { id: 26, name: "نیوزیلند" },
  { id: 27, name: "سنگاپور" },
  { id: 28, name: "مالزی" },
  { id: 29, name: "هند" },
  { id: 30, name: "امارات متحده عربی" },
  { id: 31, name: "قطر" },
];

function Navbar() {
  const [isHoverd, setisHovered] = useState(false);
  const [openSideNav, setOpenSideNav] = useState(false);

  const navbarItems = [
    { label: "تور داخلی", content: cities },
    { label: "تور خارجی", content: countries },
    { label: "ویزا", content: visas },
  ];
  return (
    <>
      <nav className="h-[100px] flex flex-col text-sm bg-[white] z-[1000] sticky  pt-[5px] top-0 lg-custom:flex-row lg-custom:h-[63px]  lg-custom:items-center">
        <div className="flex justify-around items-center h-3/6 w-full lg-custom:h-full lg-custom:w-9/12 lg-custom:pl-10">
          <div className="relative lg-custom:hidden">
            <SideNav
              navbarItems={navbarItems}
              openSideNav={openSideNav}
              setOpenSideNav={setOpenSideNav}
            />
            <svg
              onClick={() => setOpenSideNav(true)}
              className=" h-10 w-12 m-2.5 pl-5 px-[5px] py-[7px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="gray">
                <path d="M1 12c0-.5523.4477-1 1-1h20c.5523 0 1 .4477 1 1s-.4477 1-1 1H2c-.5523 0-1-.4477-1-1ZM1 4c0-.5523.4477-1 1-1h20c.5523 0 1 .4477 1 1s-.4477 1-1 1H2c-.5523 0-1-.4477-1-1ZM1 20c0-.5523.4477-1 1-1h20c.5523 0 1 .4477 1 1s-.4477 1-1 1H2c-.5523 0-1-.4477-1-1Z" />
              </g>
            </svg>
          </div>
          <div className="hidden  lg-custom:block lg-custom:order-2 lg-custom:grow lg-custom:text-[gray] lg-custom:mr-[min(10px)] lg-custom:px-5 lg-custom:py-0">
            <ul className="flex justify-evenly list-none items-center relative  ">
              {navbarItems.map((item, index) => (
                <li
                  key={index}
                  className="w-20 lg-custom:max-w-[100px] lg-custom:min-w-[50px]"
                  onMouseEnter={() => {
                    setisHovered(index);
                  }}
                >
                  <span className="cursor-pointer">{item.label}</span>
                  {isHoverd === index && (
                    <DropDownMenu
                      content={item.content}
                      onMouseEnter={() => {
                        setisHovered(index);
                      }}
                      onMouseLeave={() => {
                        setisHovered(null);
                      }}
                    />
                  )}
                </li>
              ))}
              <li className="w-20">
                <span className="cursor-pointer">بلیط اتوبوس</span>
              </li>
            </ul>
          </div>
          <div className="h-[50px] flex items-center justify-between bg-[rgb(249,249,249)] grow pr-2.5 rounded-[5px] lg-custom:order-2 lg-custom:grow-[unset] lg-custom:w-80">
            <svg
              className="w-[25px] h-[25px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7955 15.8111 21 21m-3-10.5c0 4.1421-3.3579 7.5-7.5 7.5S3 14.6421 3 10.5 6.3579 3 10.5 3 18 6.3579 18 10.5Z"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              name=""
              id=""
              placeholder="جست و جو "
              className="w-[90%] h-[90%] bg-[rgb(249,249,249)] p-2.5 border-0"
            />
          </div>
          <div className="lg-custom:order-2 lg-custom:fixed lg-custom:left-0">
            <svg
              className="h-10 w-10 m-2.5 pl-2 px-[5px] py-[7px] hover:text-[rgb(28,70,184)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M2 2H3.74C4.82 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.9 16.99 7.54 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M16.25 22C16.94 22 17.5 21.44 17.5 20.75C17.5 20.06 16.94 19.5 16.25 19.5C15.56 19.5 15 20.06 15 20.75C15 21.44 15.56 22 16.25 22Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M8.25 22C8.94 22 9.5 21.44 9.5 20.75C9.5 20.06 8.94 19.5 8.25 19.5C7.56 19.5 7 20.06 7 20.75C7 21.44 7.56 22 8.25 22Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M9 8H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </div>
          <div className="w-[70px] h-[90%] flex items-center md-custom:w-[130px] md-custom:h-full lg-custom:order-1 lg-custom:w-[140px] lg-custom:mr-[25px] lg-custom:m-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 47 44"
              data-test="icon"
              className="md-custom:pr-[50px]"
            >
              <g clipPath="url(#youtopin-icon-new-1_svg__a)">
                <path
                  fill="url(#youtopin-icon-new-1_svg__b)"
                  d="M24.65 43.517c1.62 0 3.224-.273 6.848-5.036s7.01-9.776 7.01-9.776L16.436 36.73s3.71 6.786 8.215 6.786"
                ></path>
                <path
                  fill="url(#youtopin-icon-new-1_svg__c)"
                  d="M38.509 28.705s7.23-10.663 9.181-18.888c.782-4.115.4-9.56-5.592-9.327S31.353 8.163 24.673 8.163 12.944.49 6.75.49C2.124.49.34 5.776.799 8.3c1.476 8.93 15.636 28.43 15.636 28.43z"
                ></path>
                <path
                  fill="url(#youtopin-icon-new-1_svg__d)"
                  d="M38.509 28.705s7.23-10.663 9.181-18.888c.782-4.115.4-9.56-5.592-9.327-3.421.136-5.268 2.126-8.956 4.263-.33.193-1.835 4.308-6.472 6.889-8.035 4.468-20.823 8.611-19.694 10.583.764 1.336 1.51 2.53 2.194 3.638a192 192 0 0 0 7.265 10.868z"
                ></path>
                <path
                  fill="url(#youtopin-icon-new-1_svg__e)"
                  d="M37.652 1.866s3.392 6.707-.776 12.317-14.305 10.55-26.67 13.34C1.343 13.773.388 8.215.886 6.02c.52-1.66-1.228 11.35 10.854 9.225s17.703-8.282 17.703-8.282 2.71-1.392 3.086-1.796c.463-.37 4.926-3.302 5.123-3.302"
                ></path>
                <path
                  fill="url(#youtopin-icon-new-1_svg__f)"
                  d="m34.445 3.883 3.207-2.017s2.883 5.928 0 11.117c0 0 1.945-4.876-3.207-9.1"
                ></path>
              </g>
              <defs>
                <linearGradient
                  id="youtopin-icon-new-1_svg__b"
                  x1="25.371"
                  x2="32.329"
                  y1="30.677"
                  y2="38.829"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.3" stopColor="#589C9A"></stop>
                  <stop offset="0.77" stopColor="#458A9D"></stop>
                  <stop offset="1" stopColor="#3A809E"></stop>
                </linearGradient>
                <linearGradient
                  id="youtopin-icon-new-1_svg__c"
                  x1="0.729"
                  x2="47.992"
                  y1="18.608"
                  y2="18.608"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1C95A2"></stop>
                  <stop offset="1" stopColor="#21989A"></stop>
                </linearGradient>
                <linearGradient
                  id="youtopin-icon-new-1_svg__d"
                  x1="12.843"
                  x2="49.546"
                  y1="31.578"
                  y2="6.364"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.21" stopColor="#063CA6"></stop>
                  <stop offset="0.47" stopColor="#0A6CAC"></stop>
                  <stop offset="0.83" stopColor="#10ABB5"></stop>
                  <stop offset="1" stopColor="#12C4B8"></stop>
                </linearGradient>
                <linearGradient
                  id="youtopin-icon-new-1_svg__e"
                  x1="0.777"
                  x2="38.953"
                  y1="14.694"
                  y2="14.694"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#75A7CA"></stop>
                  <stop offset="1" stopColor="#86C39F"></stop>
                </linearGradient>
                <linearGradient
                  id="youtopin-icon-new-1_svg__f"
                  x1="34.445"
                  x2="38.931"
                  y1="7.423"
                  y2="7.423"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#71B497"></stop>
                  <stop offset="1" stopColor="#61A598"></stop>
                </linearGradient>
                <clipPath id="youtopin-icon-new-1_svg__a">
                  <path fill="#fff" d="M0 .483h48v43.035H0z"></path>
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="100"
              fill="none"
              viewBox="0 0 139 37"
              className=" hidden w-full  h-6 md-custom:hidden lg-custom:block"
              data-test="icon"
            >
              <path
                fill="#00469F"
                d="M119.885 30.797c1.425 0 2.58-1.144 2.58-2.555 0-1.41-1.155-2.555-2.58-2.555s-2.581 1.144-2.581 2.555 1.156 2.555 2.581 2.555M126.407 30.658c1.425 0 2.58-1.144 2.58-2.555 0-1.41-1.155-2.555-2.58-2.555s-2.581 1.144-2.581 2.555 1.156 2.555 2.581 2.555"
              ></path>
              <path
                fill="#00469F"
                fillRule="evenodd"
                d="M128.002 18.674V8.083c-1.783 0-4.41 2.973-4.41 2.973v6.131c0 2.23-2.206 2.23-2.206 2.23h-9.055V7.525l-8.352.093s-7.132 1.069-7.132 7.99 5.63 7.154 5.63 7.154h3.707c1.408 0 1.548.046 1.548.975s-1.97 3.623-5.677 4.367c-.329 1.114 1.173 2.88 1.971 2.74 6.193-1.254 7.976-6.364 7.976-7.2a.842.842 0 0 1 .845-.883h10.135c5.02 0 5.02-4.087 5.02-4.087m-20.27.743v-9.57h-2.299c-.61 0-3.941.79-3.941 4.785 0 5.063 3.19 4.785 3.19 4.785z"
                clipRule="evenodd"
              ></path>
              <path
                fill="#00469F"
                d="M82.442 5.249c1.425 0 2.58-1.144 2.58-2.555S83.867.139 82.442.139 79.86 1.283 79.86 2.694s1.155 2.555 2.58 2.555M88.964 5.11c1.425 0 2.58-1.144 2.58-2.555S90.39 0 88.965 0s-2.58 1.144-2.58 2.555c0 1.41 1.155 2.555 2.58 2.555"
              ></path>
              <path
                fill="#00469F"
                fillRule="evenodd"
                d="M92.437 18.674V8.083c-1.783 0-4.41 2.973-4.41 2.973v6.131c0 2.23-2.206 2.23-2.206 2.23h-9.056V7.525l-8.352.093s-7.132 1.069-7.132 7.99 5.63 7.154 5.63 7.154h3.707c1.408 0 1.549.046 1.549.975s-2.018 3.623-5.677 4.367c-.329 1.114 1.172 2.88 1.97 2.74 6.194-1.254 7.977-6.364 7.977-7.2a.83.83 0 0 1 .23-.621.85.85 0 0 1 .614-.261h10.135c5.02 0 5.02-4.088 5.02-4.088m-20.27.743v-9.57h-2.3c-.61 0-3.94.79-3.94 4.785 0 5.063 3.19 4.785 3.19 4.785z"
                clipRule="evenodd"
              ></path>
              <path
                fill="#1C95A2"
                d="M52.272 9.012s2.768-2.323 4.973 0c.235.186.141 9.011.141 9.011s0 4.367-4.692 4.367H40.025s-1.454-.14-1.454-.79-.657.79-1.36.79H24.353s-1.408 7.664-11.402 7.664S.987 27.36.987 12.867h4.505v6.968s.61 7.897 7.179 7.897 7.225-7.85 7.225-7.85V9.847s1.173-2.23 4.364-2.23v9.105s.328 2.415 2.487 2.415h7.273s2.252.186 2.252-2.415V9.244a3.4 3.4 0 0 1 2.252-.852c.831 0 1.633.304 2.252.852v7.943c.119.553.426 1.05.87 1.404.445.356.999.549 1.57.547h7.648s1.549-.14 1.549-1.58-.141-8.546-.141-8.546M49.41 30.426c1.425 0 2.58-1.144 2.58-2.555s-1.155-2.555-2.58-2.555-2.58 1.144-2.58 2.555c0 1.41 1.154 2.555 2.58 2.555M55.931 30.286c1.425 0 2.58-1.143 2.58-2.554s-1.155-2.555-2.58-2.555-2.58 1.144-2.58 2.555c0 1.41 1.155 2.554 2.58 2.554"
              ></path>
              <path
                fill="#1C95A2"
                d="M30.548 30.38c1.425 0 2.58-1.145 2.58-2.556 0-1.41-1.155-2.555-2.58-2.555s-2.58 1.144-2.58 2.555 1.155 2.555 2.58 2.555M37.07 30.24c1.425 0 2.58-1.144 2.58-2.555 0-1.41-1.155-2.555-2.58-2.555s-2.581 1.144-2.581 2.555 1.155 2.555 2.58 2.555M12.577 15.887c1.425 0 2.58-1.144 2.58-2.555s-1.155-2.555-2.58-2.555-2.58 1.144-2.58 2.555c0 1.41 1.155 2.554 2.58 2.554M52.647 36c1.425 0 2.58-1.144 2.58-2.555s-1.155-2.555-2.58-2.555-2.58 1.144-2.58 2.555S51.221 36 52.646 36"
              ></path>
              <path fill="#1C95A2" d="M34.63 27.639h-1.596v.292h1.596z"></path>
            </svg>
          </div>
        </div>
        <div className="flex justify-between items-center w-full h-3/6 p-2.5 lg-custom:w-1/4 lg-custom:h-full lg-custom:justify-around">
          <div className="col-[span_2] pt-[5px] lg-custom:relative lg-custom:left-10">
            <button className="h-10 w-[133px] bg-[white] flex items-center mb-2.5 p-[5px] rounded-[5px] border-0 hover:bg-[color:var(--primary-color2)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[25px] w-[25px] ml-[15px]"
              >
                <path
                  d="M10 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4m3.758.673A5.983 5.983 0 0 0 16 6a6 6 0 1 0-9.758 4.673C2.583 12.048 0 15.445 0 20h2c0-5 3.589-8 8-8s8 3 8 8h2c0-4.555-2.583-7.952-6.242-9.327"
                  fill="#000"
                  fillRule="evenodd"
                />
              </svg>
              <span> ورود / عضویت </span>
            </button>
          </div>
          <div className="col-[span_2] flex items-center pl-0.5 justify-end lg-custom:relative lg-custom:left-10 lg-custom:text-[13px]">
            <span className="bold">021-91005711</span>
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[25px] w-[23px] mr-[3px]"
            >
              <path
                d="M3 5.5C3 14.0604 9.9396 21 18.5 21c.3862 0 .7691-.0141 1.1483-.0419.4351-.0319.6526-.0478.8507-.1618.164-.0944.3195-.2618.4017-.4323.0993-.2058.0993-.4459.0993-.926v-2.8173c0-.4038 0-.6057-.0665-.7787a.9988.9988 0 0 0-.2776-.3964c-.1399-.1216-.3297-.1906-.7091-.3286L16.74 13.9509c-.4415-.1605-.6623-.2408-.8717-.2272a1.0002 1.0002 0 0 0-.5134.1821c-.1712.1213-.292.3227-.5337.7256L14 16c-2.6499-1.2001-4.7981-3.3511-6-6l1.3686-.8212c.4028-.2417.6043-.3625.7256-.5337a1 1 0 0 0 .1821-.5134c.0136-.2094-.0667-.4302-.2272-.8717L8.883 4.0533c-.138-.3794-.207-.5692-.3286-.7091a1 1 0 0 0-.3964-.2776C7.985 3 7.783 3 7.3793 3H4.562c-.4801 0-.7202 0-.926.0993-.1705.0822-.3379.2377-.4323.4017-.114.198-.13.4156-.1618.8507C3.014 4.731 3 5.1137 3 5.5Z"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
