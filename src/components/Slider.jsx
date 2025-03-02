import { useEffect, useRef, useState } from "react";

const images = [
  {
    id: 1,
    url: "Images/slider1.webp",
  },
  {
    id: 2,
    url: "images/slider2.webp",
  },
  {
    id: 3,
    url: "images/slider3.webp",
  },
  {
    id: 4,
    url: "images/slider4.webp",
  },
  {
    id: 5,
    url: "images/slider5.webp",
  },
  {
    id: 6,
    url: "images/slider6.webp",
  },
  {
    id: 7,
    url: "images/slider7.webp",
  },
  {
    id: 8,
    url: "images/slider8.webp",
  },
  {
    id: 9,
    url: "images/slider9.webp",
  },
  {
    id: 10,
    url: "images/slider10.webp",
  },
  {
    id: 11,
    url: "images/slider11.webp",
  },
  {
    id: 12,
    url: "images/slider12.webp",
  },
  {
    id: 13,
    url: "images/slider13.webp",
  },
  {
    id: 14,
    url: "images/slider14.webp",
  },
  {
    id: 15,
    url: "images/slider15.webp",
  },
  {
    id: 16,
    url: "images/slider16.webp",
  },
  {
    id: 17,
    url: "images/slider17.webp",
  },
  {
    id: 18,
    url: "images/slider18.webp",
  },
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    if (sliderRef.current) {
      const newTransformValue = currentIndex * 6 + "%";
      sliderRef.current.style.transform = `translateX(${newTransformValue})`;
    }
  }, [currentIndex]);

  return (
    <section className="w-full overflow-hidden sm-custom:h-[200px] relative md-custom:h-[300px] lg-custom:h-[400px]">
      <div className="flex w-[1800%] h-full transition-transform duration-[0.5s] ease-[ease-in-out]" ref={sliderRef}>
        {images.map((image) => (
          <img className="w-[6%] h-full" key={image.id} src={image.url} />
        ))}
      </div>
      <div className="absolute h-5 flex items-center justify-center gap-[5px] mx-auto my-0 bottom-[2%] inset-x-0">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-[15px] h-[15px] bg-[#e9e6e6] cursor-pointer transition-[background-color] duration-[0.3s] ease-[ease] rounded-[50%] ${index === currentIndex ? "bg-[rgb(20,100,95)] w-[30px] rounded-[10px]" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
      <div className=" sm-custom:hidden absolute h-[50px] w-[100px] flex justify-around items-center right-[30px] bottom-[3px]">
        <button className="w-10 h-10  bg-[rgba(255,255,255,0.5)] rounded-[5px] border-0 hover:bg-[rgba(255,255,255,1)]" onClick={prevSlide}>
          <svg
            viewBox="-5 0 35 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.3986 4.3275a.75.75 0 0 1 1.0607 0l6.3639 6.364c.6835.6834.6835 1.7914 0 2.4749l-6.3639 6.3639a.75.75 0 0 1-1.0607-1.0606l6.364-6.364a.2501.2501 0 0 0 0-.3536l-6.364-6.364a.75.75 0 0 1 0-1.0606Z"
              fill="#000"
            />
          </svg>
        </button>
        <button className="w-10 h-10  bg-[rgba(255,255,255,0.5)] rounded-[5px] border-0 hover:bg-[rgba(255,255,255,1)]" onClick={nextSlide}>
          <svg
            viewBox="-5 0 35 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.6014 4.4697a.75.75 0 0 1 0 1.0606l-6.364 6.364a.25.25 0 0 0 0 .3535l6.364 6.364a.75.75 0 0 1-1.0607 1.0607l-6.364-6.364c-.6834-.6834-.6834-1.7915 0-2.4749l6.364-6.364a.75.75 0 0 1 1.0607 0Z"
              fill="#000"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Slider;
