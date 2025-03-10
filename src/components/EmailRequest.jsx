// import React from 'react'

function EmailRequest() {
  return (
    <div>
      <div className="email-request-box h-auto flex flex-col items-center justify-center md-custom:pt-24 md-custom:px-0 md-custom:pb-14 ">
            <div className="email-request__title">
                <h5 className="text-colorBase-0 text-center font-kalameh text-xl font-bold md-custom:text-2xl lg-custom:text-4xl">با ما همسفر شو!</h5>
                <p className="text-colorBase-0 font-iransanseRegular text-xs py-[17px] md-custom:text-[0.9rem] md-custom:font-medium">از تخفیف‌ها و جدیدترین‌ تورها با خبر شوید.</p>
            </div>
            <div className="email-request__input-container flex w-full overflow-hidden justify-center py-[29px] ">
                <input className="min-w-[20.5rem] py-3 px-2 font-iransanseMedium text-sm border-[0.5px] border-[rgb(236_240_240)]  rounded-[8px] outline-none focus:border-[darkcyan] md-custom:min-w-[26rem] md-custom:py-[0.9rem] md-custom:px-[0.8rem] md-custom:text-base lg-custom:min-w-[32rem] lg-custom:py-[0.8rem]" id="text" placeholder="ایمیل شما"/>
                <button className="w-[12%] font-iransanseMedium text-[rgb(255_255_255)] bg-[rgb(38_185_176)] text-[0.62rem] py-[0.86rem] px-[0.65rem] border-none relative left-[9px] rounded-tl-lg rounded-bl-lg md-custom:w-[17%] md-custom:text-base lg-custom:w-[12%]">ارسال</button>
            </div>
        </div>
    </div>
  )
}

export default EmailRequest
