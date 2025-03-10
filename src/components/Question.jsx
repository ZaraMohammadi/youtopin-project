
import QuestionCard from "./QuestionCard";
function Question() {

    return (
        <div className="questions-box py-[85px] px-[25px] ] lg-custom:px-10">
            <div className="questions-box__title text-colorBase-0 font-iransanseMedium text-base leading-6 text-center pt-[17px] px-[5px] pb-[34px] lg-custom:font-semibold">پرسش‌های متداول</div>
            <hr className= " border-b  border-b-cyan-500"  />
            <QuestionCard />
        </div>
    )
}

export default Question
