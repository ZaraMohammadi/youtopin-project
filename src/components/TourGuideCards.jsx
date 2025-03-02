import { useRef } from "react";

const items = [
  { id: 1, tag: "cafe", src: "Images/Cards/cafe1.webp" },
  { id: 2, tag: "cafe", src: "Images/Cards/cafe2.webp" },
  { id: 3, tag: "cafe", src: "Images/Cards/cafe3.webp" },
  { id: 4, tag: "cafe", src: "Images/Cards/cafe4.webp" },
  { id: 5, tag: "cafe", src: "Images/Cards/cafe5.webp" },
  { id: 6, tag: "cafe", src: "Images/Cards/cafe6.webp" },
  { id: 7, tag: "cafe", src: "Images/Cards/cafe7.webp" },
  { id: 8, tag: "cafe", src: "Images/Cards/cafe8.webp" },

  { id: 9, tag: "camping", src: "Images/Cards/camping1.webp" },
  { id: 10, tag: "camping", src: "Images/Cards/camping2.webp" },
  { id: 11, tag: "camping", src: "Images/Cards/camping3.webp" },

  { id: 12, tag: "game", src: "Images/Cards/game1.webp" },
  { id: 13, tag: "game", src: "Images/Cards/game2.webp" },
  { id: 14, tag: "game", src: "Images/Cards/game3.webp" },
  { id: 15, tag: "game", src: "Images/Cards/game4.webp" },
  { id: 16, tag: "game", src: "Images/Cards/game5.webp" },
  { id: 17, tag: "game", src: "Images/Cards/game6.webp" },
  { id: 18, tag: "game", src: "Images/Cards/game7.webp" },

  { id: 19, tag: "hotel", src: "Images/Cards/hotel1.webp" },
  { id: 20, tag: "hotel", src: "Images/Cards/hotel2.webp" },
  { id: 21, tag: "hotel", src: "Images/Cards/hotel3.webp" },
  { id: 22, tag: "hotel", src: "Images/Cards/hotel4.webp" },
  { id: 23, tag: "hotel", src: "Images/Cards/hotel5.webp" },

  { id: 24, tag: "last", src: "Images/Cards/last1.webp" },
  { id: 25, tag: "last", src: "Images/Cards/last2.webp" },
  { id: 26, tag: "last", src: "Images/Cards/last3.webp" },
  { id: 27, tag: "last", src: "Images/Cards/last4.webp" },
  { id: 28, tag: "last", src: "Images/Cards/last5.webp" },
  { id: 29, tag: "last", src: "Images/Cards/last6.webp" },
  { id: 30, tag: "last", src: "Images/Cards/last7.webp" },
  { id: 31, tag: "last", src: "Images/Cards/last8.webp" },

  { id: 32, tag: "popular", src: "Images/Cards/popular1.webp" },
  { id: 33, tag: "popular", src: "Images/Cards/popular2.webp" },
  { id: 34, tag: "popular", src: "Images/Cards/popular3.webp" },
  { id: 35, tag: "popular", src: "Images/Cards/popular4.webp" },
  { id: 36, tag: "popular", src: "Images/Cards/popular5.webp" },
  { id: 37, tag: "popular", src: "Images/Cards/popular6.webp" },
  { id: 38, tag: "popular", src: "Images/Cards/popular7.webp" },
  { id: 39, tag: "popular", src: "Images/Cards/popular8.webp" },

  { id: 40, tag: "tehran", src: "Images/Cards/tehran1.webp" },
  { id: 41, tag: "tehran", src: "Images/Cards/tehran2.webp" },
  { id: 42, tag: "tehran", src: "Images/Cards/tehran3.webp" },
  { id: 43, tag: "tehran", src: "Images/Cards/tehran4.webp" },
  { id: 44, tag: "tehran", src: "Images/Cards/tehran5.webp" },
  { id: 45, tag: "tehran", src: "Images/Cards/tehran6.webp" },
  { id: 46, tag: "tehran", src: "Images/Cards/tehran7.webp" },
  { id: 47, tag: "tehran", src: "Images/Cards/tehran8.webp" },

  { id: 48, tag: "village", src: "Images/Cards/village1.webp" },
  { id: 49, tag: "village", src: "Images/Cards/village2.webp" },
  { id: 50, tag: "village", src: "Images/Cards/village3.webp" },
  { id: 51, tag: "village", src: "Images/Cards/village4.webp" },
  { id: 52, tag: "village", src: "Images/Cards/village5.webp" },
  { id: 53, tag: "village", src: "Images/Cards/village6.webp" },
  { id: 54, tag: "village", src: "Images/Cards/village7.webp" },
  { id: 55, tag: "village", src: "Images/Cards/village8.webp" },

  { id: 56, tag: "walking", src: "Images/Cards/walking1.webp" },
  { id: 57, tag: "walking", src: "Images/Cards/walking2.webp" },
  { id: 58, tag: "walking", src: "Images/Cards/walking3.webp" },
  { id: 59, tag: "walking", src: "Images/Cards/walking4.webp" },
  { id: 60, tag: "walking", src: "Images/Cards/walking5.webp" },
  { id: 61, tag: "walking", src: "Images/Cards/walking6.webp" },
  { id: 62, tag: "walking", src: "Images/Cards/walking7.webp" },
  { id: 63, tag: "walking", src: "Images/Cards/walking8.webp" },

  { id: 64, tag: "market", src: "Images/Cards/market1.webp" },
  { id: 65, tag: "market", src: "Images/Cards/market2.webp" },
  { id: 66, tag: "market", src: "Images/Cards/market3.webp" },
  { id: 67, tag: "market", src: "Images/Cards/market4.webp" },
  { id: 68, tag: "market", src: "Images/Cards/market5.webp" },
  { id: 69, tag: "market", src: "Images/Cards/market6.webp" },
  { id: 70, tag: "market", src: "Images/Cards/market7.webp" },
  { id: 71, tag: "market", src: "Images/Cards/market8.webp" },
];

function TourGuideCards({ show }) {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -100, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 100, behavior: "smooth" });
  };

  return (
    <div className="flex items-center px-[30px] py-0">
      <button
        className="absolute w-10 h-10 bg-[white] z-[999] rounded-[5px] border-0"
        style={{ right: "10px" }}
        onClick={scrollRight}
      >
        <svg className="h-[25px] w-[25px] m-2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            viewBox="30 2 10 2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.3986 4.3275a.75.75 0 0 1 1.0607 0l6.3639 6.364c.6835.6834.6835 1.7914 0 2.4749l-6.3639 6.3639a.75.75 0 0 1-1.0607-1.0606l6.364-6.364a.2501.2501 0 0 0 0-.3536l-6.364-6.364a.75.75 0 0 1 0-1.0606Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <div
        ref={scrollContainerRef}
        style={{ scrollbarWidth: "none" }}
        className="h-[500px] flex items-center justify-between gap-[30px] bg-transparent overflow-x-scroll w-[95%] relative px-[50px] py-0"
      >
        {items
          .filter((item) => item.tag === show)
          .map((filtredItem) => (
            <div
              key={filtredItem.id}
              className="min-w-[320px] h-[480px] bg-cover bg-bottom rounded-[40px] sm-custom:min-w-[320px] md-custom:min-w-[325px]"
              style={{ backgroundImage: `url(${filtredItem.src})` }}
            ></div>
          ))}
      </div>
      <button
        className="absolute w-10 h-10 bg-[white] z-[999] rounded-[5px] border-0"
        style={{ left: "10px" }}
        onClick={scrollLeft}
      >
        <svg className="h-[25px] w-[25px]  m-2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.6014 4.4697a.75.75 0 0 1 0 1.0606l-6.364 6.364a.25.25 0 0 0 0 .3535l6.364 6.364a.75.75 0 0 1-1.0607 1.0607l-6.364-6.364c-.6834-.6834-.6834-1.7915 0-2.4749l6.364-6.364a.75.75 0 0 1 1.0607 0Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
}

export default TourGuideCards;
