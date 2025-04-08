import { BiChevronDown } from "react-icons/bi";

const DeskopMenu = ({ menu, isActive, onClick }) => {
  const hasSubMenu = menu?.sections?.length > 0;

  return (
    <li onClick={onClick} className="cursor-pointer">
      <span
        className={`${isActive ? "text-custom-black bg-white" : "hover:bg-white/40"} flex items-center gap-0.5 rounded-md px-2 py-1.5 text-sm`}
      >
        {menu.name}
        {hasSubMenu && (
          <BiChevronDown
            className={`text-base transition-transform duration-200 ${
              isActive ? "text-custom-black rotate-180" : "text-white"
            }`}
          />
        )}
      </span>
    </li>
  );
};

export default DeskopMenu;
