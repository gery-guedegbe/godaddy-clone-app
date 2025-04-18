import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

const MenuContainer = ({ activeMenu, onClose }) => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = "hidden";
    return () => {
      // Restore scroll on unmount
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, [activeMenu]);

  if (!activeMenu) return null;

  return (
    <AnimatePresence>
      <motion.div
        onClick={onClose}
        className="fixed inset-0 z-50 mt-[10vh] hidden h-screen w-full flex-col overflow-hidden bg-black/50 backdrop-blur-md xl:flex"
      >
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="h-full w-full"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex h-[70vh] w-full items-start justify-between bg-white px-12 py-10 text-start text-black shadow-lg"
          >
            <AnimatePresence mode="popLayout">
              <motion.ul
                key={animationKey}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.3, delay: 0.3 }}
                className="grid w-2/3 grid-cols-3 gap-4"
              >
                {activeMenu.sections?.map((section, index) => (
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
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MenuContainer;
