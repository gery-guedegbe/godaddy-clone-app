import { useState } from "react";
import logo from "../../assets/logos/godaddy-logo.svg";
import { Menus } from "../../constant/index";
import DeskopMenu from "../DeskopMenu";
import MenuContainer from "../MenuContainer";
import { BiCart, BiHelpCircle } from "react-icons/bi";
import ButtonSeConnecter from "../ButtonSeConnecter";
import MobileMenu from "../MobileMenu";

const NavBar = () => {
  const [activeMenuId, setActiveMenuId] = useState<number | null>(null);

  const handleMenuClick = (menuId: number, hasSubMenu: boolean) => {
    if (!hasSubMenu) return;
    setActiveMenuId((prev) => (prev === menuId ? null : menuId));
  };

  const activeMenu = Menus.find((menu) => menu.id === activeMenuId);

  return (
    <header className="bg-custom-black/90 relative w-full text-white">
      <nav className="flex h-[8vh] items-center justify-between p-2 px-3 lg:h-[10vh] lg:px-12 lg:py-2">
        <div className="flex items-center gap-2 lg:gap-3">
          <MobileMenu />

          <img
            src={logo}
            alt="Logo"
            className="h-auto w-[90px] object-cover lg:w-[115px]"
          />

          <ul className="hidden items-center gap-2 xl:flex">
            {Menus.map((menu) => (
              <DeskopMenu
                key={menu.id}
                menu={menu}
                isActive={activeMenuId === menu.id}
                onClick={() =>
                  handleMenuClick(
                    menu.id,
                    !!menu.sections && menu.sections.length > 0,
                  )
                }
              />
            ))}
          </ul>
        </div>

        <ul className="flex items-center gap-2">
          <li className="hidden cursor-pointer rounded-md px-2 py-1.5 text-sm hover:bg-white/50 xl:flex">
            Contactez-nous
          </li>

          <li className="hidden cursor-pointer rounded-md px-2 py-1.5 text-sm hover:bg-white/50 xl:flex">
            Aide
          </li>

          <li className="flex lg:hidden">
            <BiHelpCircle className="text-2xl font-semibold text-white" />
          </li>

          <li className="">
            <ButtonSeConnecter />
          </li>

          <li className="">
            <BiCart className="cursor-pointer text-2xl font-bold text-white" />
          </li>
        </ul>
      </nav>

      {/* `MenuContainer` s'affiche dynamiquement seulement si un menu est actif */}
      {activeMenu && (
        <MenuContainer
          activeMenu={activeMenu}
          onClose={() => setActiveMenuId(null)}
        />
      )}
    </header>
  );
};

export default NavBar;
