import { useState } from "react";

function SideNav({ navbarItems, openSideNav, setOpenSideNav }) {
  const [openMenus, setOpenMenus] = useState(
    Array(navbarItems.length).fill(false)
  );

  const toggleMenu = (index) => {
    setOpenMenus((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };

  if (!openSideNav) return null;

  return (
    <div className="absolute w-[50vw] h-[101vh] bg-[white] z-[999]">
      <button
        onClick={() => setOpenSideNav(false)}
        className="absolute h-12 w-11 bg-transparent p-2.5 border-0 right-full"
      >
        <svg
          fill="#000000"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[25px] h-[25px]"
        >
          <path d="M16 14.586l-4.95-4.95a1 1 0 0 0-1.414 1.414L14.586 16l-4.95 4.95a1 1 0 1 0 1.414 1.414L16 17.414l4.95 4.95a1 1 0 0 0 1.414-1.414L17.414 16l4.95-4.95a1 1 0 0 0-1.414-1.414L16 14.586z" />
        </svg>
      </button>

      <ul className="w-full h-full overflow-y-scroll px-2.5 py-[15px]">
        {navbarItems.map((item, index) => (
          <li
            key={index}
            className="flex justify-between relative flex-col cursor-pointer mb-5"
            onClick={() => toggleMenu(index)}
          >
            <span>{item.label}</span>
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000"
              strokeWidth="0"
              style={{
                transform: openMenus[index] ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease-in-out",
              }}
              className="absolute left-0 w-[25px] h-[25px]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.293 8.793a1 1 0 0 1 1.414 0L12 13.086l4.293-4.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414Z"
                fill="#000"
                stroke="none"
              />
            </svg>
            <ul
              className={`w-full px-0 py-2.5 top-full ${
                openMenus[index] ? "block" : "hidden"
              }`}
            >
              {item.content.map((subItem, subIndex) => (
                <li
                  className="flex justify-between relative flex-col cursor-pointer mb-5"
                  key={subIndex}
                >
                  {subItem.name}
                </li>
              ))}
            </ul>
          </li>
        ))}
        <li className="flex justify-between relative flex-col cursor-pointer mb-5">
          بلیط اتوبوس
        </li>
        <li className="flex justify-between relative flex-col cursor-pointer mb-5">
          راهنمای سفر
        </li>
        <li className="flex justify-between relative flex-col cursor-pointer mb-5">
          راهنمای مهاجرت
        </li>
        <li className="flex justify-between relative flex-col cursor-pointer mb-5">
          دانلود اپلیکیشن
        </li>
        <li className="flex justify-between relative flex-col cursor-pointer mb-5">
          درباره ما
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
