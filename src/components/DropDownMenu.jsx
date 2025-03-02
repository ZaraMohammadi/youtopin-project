function DropDownMenu({ content, onMouseEnter, onMouseLeave }) {
  return (
    <section
      className="bg-[white] -translate-x-2/4 absolute h-[500px] w-[95vw] shadow-custom flex flex-col text-[grey] z-[999] rounded-[0_0_20px_20px] left-0 top-[39px]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="h-[50px] w-full border pt-[15px] border-solid border-[rgb(238,232,232)]">
        <span className="p-[15px]">مقصد ها</span>
        <span className="p-[15px]">دسته بندی ها</span>
        <span className="p-[15px]">همه تور های داخلی</span>
      </div>
      <ul className="w-2/5 h-[85%] flex flex-col flex-wrap list-none">
        {content.map((item) => (
          <li
            className="w-[150px] mx-0 my-[5px] px-6 py-2 border-l-[rgb(207,204,204)] border-l border-solid"
            key={item.id}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DropDownMenu;
