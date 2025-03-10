// import React from 'react'
import TrovelougeCard from "./TrovelougeCard";
import goNext from "../image/go-next.svg"
function Trovelouge() {

    const goNextHandler = (event) => {
        const travelougeBox = event.target.parentElement.children[1]
        travelougeBox.scrollBy({
            left: -315, behavior: "smooth"
        })
    }
    const goBackHandler = (event) => {
        const travelougeBox = event.target.parentElement.children[1]
        travelougeBox.scrollBy({
            left: 315, behavior: "smooth"
        })
    }


    return (
        <div className=" h-auto md-custom:pt-[136px]">
            <p className="travelogue__text flex items-center justify-center font-iransanseMedium text-colorBase-0 text-xs md-custom:font-iransanseBold md-custom:text-base">با سفرنامه ها میتونی اطلاعات بیشتری از تور ها به دست بیاری!</p>
            <div className=" py-[29px] px-[17px] md-custom:px-[26px] md-custom:relative">
                <p className="travelogue__title font-iransanseMedium text-base text-colorBase-0 md-custom:pr-[17px] md-custom:font-iransanseBold "> سفرنامه‌های برتر</p>
                <TrovelougeCard />
                <img className="go-back hidden md-custom:flex md-custom:w-9 md-custom:h-9 md-custom:p-[8.5px] md-custom:absolute md-custom:left-2 md-custom:z-20  justify-center items-center bg-[#ffffff] md-custom:top-[50%] md-custom:scale-x-100 md-custom:right-2 md-custom:rounded-lg" src={goNext} alt="go back" onClick={goBackHandler} />
                <img className="go-next hidden md-custom:block md-custom:w-9 md-custom:h-9 md-custom:p-[8.5px] md-custom:absolute md-custom:left-2 md-custom:z-20  justify-center items-center bg-[#ffffff] md-custom:top-[50%] md-custom:rounded-lg" src={goNext} alt="go ahead" onClick={goNextHandler} />
            </div> 

        </div >
    )
}

export default Trovelouge;
