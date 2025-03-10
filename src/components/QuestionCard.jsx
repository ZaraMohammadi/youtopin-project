// import React from 'react'
import arrowdown from "../image/arrowdown.svg"

function QuestionCard() {
    const quizeDataList = [{ quiz: "چطور اپلیکیشن گردشگردی یوتوپین را نصب کنیم؟", description: "در منوی بالای وب‌سایت، لینک‌های مربوط به دانلود اپلیکیشن یوتوپین در دسترس می‌باشند. کاربران اندروید می‌توانند جدیدترین نسخه اپلیکیشن را به صورت مستقیم دریافت یا از طریق گوگل‌پلی و کافه‌بازار آن‌ را دانلود کنند. کاربران iOS نیز می‌توانند از نسخه وب‌اپ یوتوپین استفاده کنند." },
    { quiz: "تور لیدر خوب را چگونه تشخیص بدهیم؟", description: "تیم پشتیبانی یوتوپین بعد از پایان هر سفر، با مسافران تماس می‌گیرد تا در مورد عملکرد تورلیدر و نحوه‌ی برگزاری تور نظرسنجی کند. بر اساس این نظرسنجی به هر تورلیدر از 1 تا 10 امتیازی داده می‌شود که میانگین این امتیازات در بخش توضیحات هر تور قابل مشاهده است." },
    { quiz: "مبدا حرکت تورها کجاست؟", description: "مبدا  حرکت بیشتر تورها، تهران یا کرج می‌باشد. اگر از شهرهای دیگر قصد همسفر شدن با یوتوپین را دارید، می‌توانید در مقصد به تور ملحق شوید. در این صورت هزینه‌ی حمل و نقل از شما دریافت نمی‌شود." },
    { quiz: "درجه سختی تور چیست؟", description: "بر اساس میزان پیاده‌روی، امکانات تور، وسیله نقلیه، آمادگی جسمانی مورد نیاز و عوامل دیگر‌‌، شاخص درجه سختی تور از 5 تعیین می گردد." },
    { quiz: "تور خریداری شده را میتوان با تور دیگری جایگزین کرد؟", description: "بله. در صورت موافقت تورلیدر، می‌توانید یکی دیگر از تورهای همان تورلیدر را انتخاب کنید." },
    { quiz: "در تورهای یوتوپین، امکان جایگزین کردن یک مسافر با مسافر جدید وجود دارد؟", description: "بله. در تورهای زمینی و قطاری تا ۴۸ ساعت قبل از حرکت، می‌توانید با تیم پشتیبانی یوتوپین هماهنگ کنید و اطلاعات مسافر جدید را جایگزین مشخصات خودتان کنید." },
    ]
    
    const arrowDownHandler = (event) => {
        const label = event.target.closest(".label-container");
        if (!label) return;
    
        const arrowIcon = label.querySelector(".arrow-icon");
        if (arrowIcon) {
            arrowIcon.classList.toggle("rotate-180");
        }
    };
   
    return (
        <div className=" px-[8.5px]">
            {quizeDataList.map((q, index) => (
                <div className=" w-full flex flex-col items-start cursor-pointer border-b border-gray-500 border-opacity-20 rounded-[10px] lg-custom:pt-[5px]" key={index}>
                    <input className="hidden peer" type="checkbox" id={`toggle-${index}`} />
                    <label htmlFor={`toggle-${index}`} className="label-container w-full flex items-center py-[12px] px-[4.5px] justify-start outline outline-2 outline-transparent rounded-[5px] gap-[10px] cursor-pointer hover:bg-gray-200" onClick={arrowDownHandler} data-id={index + 1} >
                        <span className="label-title flex-grow text-right font-iransanseMedium text-colorBase-0 text-sm "  >{q.quiz}</span>
                        <img src={arrowdown} alt="arrow down" className="arrow-icon w-5 h-5 transition-transform duration-300 ease-in-out " data-id={index + 1} />
                    </label>
                    <div className="content hidden peer-checked:block text-[rgb(117,117,117)] py-[17px] px-[34px] font-iransanseRegular rounded-lg text-xs tracking-letterSpaseCustom transition ease-in-out duration-300 lg-custom:text-sm">
                        <p className="transition ease-in-out duration-300">{q.description}</p>
                    </div>
                </div>))}
        </div>
    )
}

export default QuestionCard
