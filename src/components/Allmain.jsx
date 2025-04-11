import React from 'react'

function Allmain() {
  return (
    <div className="allmain">
    <div className="main__text">
      <h2 className="main__h2">
          تورهای
          <span className="main__text1">استاندارد </span>
          <sup className="main__sup">+</sup>
          یوتوپین
          
          <svg className="main__svg" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5" class="w-6 h-6 group-hover:text-primary text-primary group-hover:cursor-pointer" viewBox="0 0 24 24" width="1em" height="1em"><path strokeLinecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-9-3.75h.008v.008H12z"></path></svg>
    </h2>
    </div>
    <div className="main__btn">
        <button className="main__allbtn">مشاهده همه</button>
    </div>

    </div>
  )
}

export default Allmain