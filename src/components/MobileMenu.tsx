import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoArrowForward } from "react-icons/io5";
import logo from "../assets/logos/godaddy_symbol.svg";
import { Menus } from "../constant";
import { motion, AnimatePresence } from "motion/react";
import { IoIosArrowBack } from "react-icons/io";

const MobileMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState<number | null>(null);
  const [animationKey, setAnimationKey] = useState(0);

  const handleMenuOpen = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleMenuClick = (menuId: number, hasSubMenu: boolean) => {
    if (!hasSubMenu) return;
    setActiveMenuId((prev) => (prev === menuId ? null : menuId));
  };

  const activeMenu = Menus.find((menu) => menu.id === activeMenuId);

  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, [activeMenu]);

  return (
    <div className="relative z-50 flex xl:hidden">
      <BiMenu
        onClick={handleMenuOpen}
        className="text-2xl font-semibold text-white lg:text-3xl"
      />
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 flex h-screen w-full bg-black/50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex h-full w-[80vw] flex-col items-start bg-white px-3 py-1.5 text-start sm:w-[40vw] md:w-[38vw]"
          >
            <img
              src={logo}
              alt="Logo"
              className="mb-4 h-auto w-[30px] object-cover"
            />

            {Menus.map((menu) => (
              <div
                key={menu.id}
                onClick={() =>
                  handleMenuClick(
                    menu.id,
                    !!menu.sections && menu.sections.length > 0,
                  )
                }
                className="flex w-full items-center justify-between px-1 py-4"
              >
                <span className="text-base font-medium text-black">
                  {menu.name}
                </span>

                {!!menu.sections && menu.sections.length > 0 && (
                  <IoArrowForward className="text-xl text-black" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {mobileMenuOpen && activeMenu && (
        <AnimatePresence>
          <div className="fixed top-0 left-0 flex h-screen w-[80vw] flex-col items-start bg-[#F5F7F8] text-start md:left-72 md:ml-1 md:w-[40vw] xl:hidden">
            <div
              onClick={() => setActiveMenuId(null)}
              className="p-3 text-2xl font-bold text-black"
            >
              <IoIosArrowBack />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className=""
            >
              <AnimatePresence mode="popLayout">
                <motion.ul
                  key={animationKey}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 0.3, delay: 0.3 }}
                  className="grid grid-rows-3 gap-3 p-4"
                >
                  {activeMenu?.sections?.map((section, index) => (
                    <li key={index} className="flex flex-col gap-4">
                      <span className="text-custom-black/50 text-xs font-semibold uppercase">
                        {section.title}
                      </span>

                      <div className="w-full space-y-5">
                        {section.items.map((i) => (
                          <div
                            key={i.name}
                            className="hover:bg-custom-black/5 flex w-full items-center gap-3 rounded-lg p-2"
                          >
                            <span className="bg-custom-green/20 text-custom-black flex items-center justify-center rounded-lg p-2 text-xl">
                              {<i.icon />}
                            </span>

                            <a
                              href="#"
                              className="text-custom-black cursor-pointer text-sm font-medium hover:text-blue-500"
                            >
                              {i.name}
                            </a>
                          </div>
                        ))}
                      </div>
                    </li>
                  ))}
                </motion.ul>
              </AnimatePresence>
            </motion.div>
          </div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default MobileMenu;
