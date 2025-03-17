import { useState } from "react";
import styles from "./card.module.css";

const Card = ({ title,image,date }) => {
  return (
    <div className={styles.card}>
      <div className="allCart__svg">
        <svg
          className="allCart__svg--eshterak w-5 h-5 text-textDetails hover:text-primary"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          width="1em"
          height="1em"
        >
          <path d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></path>
        </svg>
      </div>
      <img className="allCart__img1" src={image} alt="" />
      <div className="allCart__box1">
        <p className="allCart__box1--p">قبرس شمالی هتل سالامیس بی ویژه نوروز</p>

        <div className="allCart__text2">
          <p className="allCart__text3">(6 شب و 7 روز)</p>
          <div className="allCart__box1--scr">
            <p className="allCart__box1--scr--tourEnferadi">تور انفرادی</p>
          </div>
        </div>

        <div className="allCart__price">
          <p>
            {" "}
            <span className="allCart__priceNum">86,690,000</span> تومان
          </p>
          <div className="allCart__icoStar">
            <svg
              className="allCart__star text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              width="1em"
              height="1em"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"></path>
            </svg>
            <p className="allCart__score">4.7</p>
          </div>
        </div>
        <div className="allCart__footer">
          <div className="allCart__clander">
            <svg
              className="allCart__icoclander w-5 h-5 text-textDetails"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokelinecap="round"
                strokelinejoin="round"
                strokeMiterlimit="10"
                d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"
              ></path>
              <path
                stroke="currentColor"
                strokelinecap="round"
                strokelinejoin="round"
                d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"
              ></path>
            </svg>
            <p className="allCart__icoText">29 اسفند</p>
          </div>

          <div className="allCart__iconEstandart">
            <svg
              className="allCart__airplane"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokelinecap="round"
                d="M1.664 17.084h16.667"
              ></path>
              <path
                stroke="currentColor"
                d="M7.05 6.246c-.201-.25-.46-.568-.742-.912A185 185 0 0 1 5.22 3.992l-.12-.159-.017-.026c-.004-.007-.021-.037-.036-.077zm0 0-.064.024c-.4.145-.94.337-1.54.548a4 4 0 0 1-.258-.14 30 30 0 0 1-.926-.567l-.043-.027c-.32-.202-.648-.408-.912-.56a5 5 0 0 0-.378-.203 1.3 1.3 0 0 0-.181-.071 1 1 0 0 0-.13-.026.6.6 0 0 0-.2.014l-.025.006-.096.022-.711.172-.08.023a.504.504 0 0 0-.335.551.6.6 0 0 0 .03.118c.014.044.035.09.052.126.037.08.09.182.15.296.123.229.291.528.464.824.173.297.353.597.498.828.073.114.14.217.196.295.027.038.057.079.086.114a1 1 0 0 0 .062.065c.014.014.079.075.177.113.145.056.394.107.644.152.269.048.595.098.928.143.656.088 1.384.164 1.764.164.203 0 .441-.054.805-.16.377-.11.943-.292 1.828-.585 2.712-.898 4.844-1.61 6.32-2.11.736-.25 1.311-.448 1.712-.59a28 28 0 0 0 .622-.228c.028-.01.085-.034.132-.062.3-.179.578-.421.786-.665.105-.123.2-.255.27-.39.067-.127.136-.298.136-.487 0-.491-.417-.754-.69-.865a2.45 2.45 0 0 0-1.112-.142c-.184.017-.504.105-.944.24-.463.144-1.116.359-2.006.66l-2.32.785-2.638-1.064A428 428 0 0 0 6.5 2.54l-.266-.1-.063-.015a.5.5 0 0 0-.369.073 1 1 0 0 0-.073.052 2 2 0 0 0-.104.092 5 5 0 0 0-.443.496c-.028.036-.058.08-.084.122a.543.543 0 0 0-.078.204.5.5 0 0 0 .025.265z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardList = () => {
  const cards = [
    { title: "تور کویر کاراکال", image: "./images/قبرس شمالی.webp", date: "17 بهمن", price: "2,900,000" },
    { title: "سفر به یزد", image: "./images/اسپانیا.webp", date: "25 اسفند", price: "3,500,000" },
    { title: "کیش گردی", image: "./images/اروپا.webp", date: "10 فروردین", price: "4,200,000" },
    { title: "شیراز گردی", image: "./images/فرانسه.webp", date: "5 اردیبهشت", price: "3,000,000" },
    { title: "اصفهان گردی", image: "./images/طبس.webp", date: "12 خرداد", price: "3,700,000" },
    { title: "مشهد مقدس", image: "./images/قبرس شمالی.webp", date: "20 تیر", price: "3,100,000" },
    { title: "سفر به گیلان", image: "./images/اروپا.webp", date: "8 مرداد", price: "2,800,000" },
    { title: "لرستان گردی", image: "./images/طبس.webp", date: "18 شهریور", price: "3,200,000" },
    { title: "تبریز گردی", image: "./images/فرانسه.webp", date: "29 مهر", price: "3,600,000" },
    { title: "کردستان گردی", image: "./images/اسپانیا.webp", date: "15 آبان", price: "3,400,000" },
    { title: "همدان گردی", image: "./images/اروپا.webp", date: "5 آذر", price: "2,950,000" },
    { title: "کرمان گردی", image: "./images/فرانسه.webp", date: "20 دی", price: "3,750,000" },
  ];
  const [startIndex, setStartIndex] = useState(0);

  const cardsPerPage = 4;

  const handleNext = () => {
    if (startIndex + cardsPerPage < cards.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        {cards
          .slice(startIndex, startIndex + cardsPerPage)
          .map((card, index) => (
            <Card key={index} {...card} />
          ))}
      </div>

      <div className={styles.controls}>
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className={styles.prevButton}
        >
          قبلی
        </button>

        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{
              width: `${((startIndex + cardsPerPage) / cards.length) * 100}%`,
            }}
          />
        </div>

        <button
          onClick={handleNext}
          disabled={startIndex + cardsPerPage >= cards.length}
          className={styles.nextButton}
        >
          بعدی
        </button>
      </div>
    </div>
  );
};

export default CardList;
