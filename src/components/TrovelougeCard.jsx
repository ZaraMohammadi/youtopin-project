import prof1 from "../image/prof1.png";
import prof2 from "../image/prof2.jfif";
import prof3 from "../image/prof2.jfif";
import prof4 from "../image/prof4.jfif";
import prof5 from "../image/prof5.jfif";
import prof6 from "../image/prof5.jfif";
import prof7 from "../image/prof7.jfif";
import prof8 from "../image/prof7.jfif";
import prof9 from "../image/prof9.jfif";
import prof10 from "../image/prof10.jfif";
import prof11 from "../image/prof11.jfif";
import prof12 from "../image/prof12.jfif";
import prof13 from "../image/prof13.jfif";
import prof14 from "../image/prof14.jfif";
import prof15 from "../image/prof15.jfif";

import cardImg1 from "../image/card-img1.jpeg"
import cardImg2 from "../image/card-img2.jpeg"
import cardImg3 from "../image/card-img3.jpeg"
import cardImg4 from "../image/card-img4.jpeg"
import cardImg5 from "../image/card-img5.jpeg"
import cardImg6 from "../image/card-img6.jpeg"
import cardImg7 from "../image/card-img7.jpeg"
import cardImg8 from "../image/card-img8.jpeg"
import cardImg9 from "../image/card-img9.jpeg"
import cardImg10 from "../image/card-img10.jpeg"
import cardImg11 from "../image/card-img11.jpeg"
import cardImg12 from "../image/card-img12.jpeg"
import cardImg13 from "../image/card-img13.jpeg"
import cardImg14 from "../image/card-img14.jpeg"
import cardImg15 from "../image/card-img15.jpeg"

function TrovelougeCard() {

    const cardData = [
        {
            headerProf: prof1,
            headerTitle: "خبر",
            date: "17روز پیش",
            cardImg: cardImg1
        },
        {
            headerProf: prof2,
            headerTitle: "میرزاکوچک خان",
            date: "20روز پیش",
            cardImg: cardImg2
        },
        {
            headerProf: prof3,
            headerTitle: "امامزاده هاشم",
            date: "21روز پیش",
            cardImg: cardImg3
        },
        {
            headerProf: prof4,
            headerTitle: "ایران ناب",
            date: "3سال پیش",
            cardImg: cardImg4
        },
        {
            headerProf: prof5,
            headerTitle: "حکایت یزد جان",
            date: "25روز پیش ",
            cardImg: cardImg5
        },
        {
            headerProf: prof6,
            headerTitle: "باغ سوسکهرسویز",
            date: "1 ماه پیش ",
            cardImg: cardImg6
        },
        {
            headerProf: prof7,
            headerTitle: "چابهارگردی",
            date: "1ماه پیش",
            cardImg: cardImg7
        },
        {
            headerProf: prof8,
            headerTitle: "لیدر چابهار",
            date: " 1 ماه پیش",
            cardImg: cardImg8
        },
        {
            headerProf: prof9,
            headerTitle: "شمال",
            date: " 2ماه پیش",
            cardImg: cardImg9
        },
        {
            headerProf: prof10,
            headerTitle: "رشت ",
            date: " آبان 1403",
            cardImg: cardImg10
        },
        {
            headerProf: prof11,
            headerTitle: "شروع سفر ملو",
            date: "2ماه پیش ",
            cardImg: cardImg11
        },
        {
            headerProf: prof12,
            headerTitle: "رشت ",
            date: "3ماه پیش ",
            cardImg: cardImg12
        },
        {
            headerProf: prof13,
            headerTitle: "قائم شهر",
            date: " 3ماه پیش",
            cardImg: cardImg13
        },
        {
            headerProf: prof14,
            headerTitle: "تفریح",
            date: "3ماه پیش ",
            cardImg: cardImg14
        },
        {
            headerProf: prof15,
            headerTitle: "همدان گردی",
            date: " 3ماه پیش",
            cardImg: cardImg15
        }

    ];

    return (
        <div className="travelogue__card-box flex flex-row overflow-scroll pt-[34px] pb-[9px] lg-custom:pr-[25px] lg-custom:pl-[35px]"  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}> 
            {cardData.map((card, index) => (
                <div className="card w-auto h-auto p-[17px] rounded-[15px] ml-[35px] shadow-[0px_4px_12px_rgba(0,_0,_0,_0.1)  transition-shadow duration-300 ease-in-out hover:shadow-[0px_6px_20px_rgba(0,_0,_0,_0.25)] flex-shrink-0 lg-custom:ml-[27px]" key={index}>
                    <div className="card__header flex flex-row pb-[17px]">
                        <img className="header__prof w-14 rounded-full border-2 border-[#2cb34e] object-cover object-fit lg-custom:w-[3.2rem]" src={card.headerProf} alt="profile picture" />
                        <div className="header__text mr-[10px]">
                            <p className="font-iransanseBold text-xs leading-[25px] text-colorBase-0">{card.headerTitle}</p>
                            <p className="font-iransanseBold text-xs leading-[25px] text-colorBase-0">{card.date}</p>
                        </div>
                    </div>
                    <img className="card__img w-[255px] h-[289px] object-fit object-cover rounded-[15px] lg-custom:w-[230px] lg-custom:h-[260px]" src={card.cardImg} alt="card image" />
                </div>
            ))}
        </div>
    );
}

export default TrovelougeCard;
