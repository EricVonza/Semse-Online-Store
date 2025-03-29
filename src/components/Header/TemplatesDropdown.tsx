import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import { MEGAMENU_TEMPLATES } from "data/navigation";
import CardCategory3 from "components/CardCategories/CardCategory3";
import { NavLink } from "react-router-dom";
import { NavItemType } from "shared/Navigation/NavigationItem";

export default function TemplatesDropdown() {
  const renderMegaMenuNavlink = (item: NavItemType) => {
    const isExternal = item.href?.startsWith("http");

    return (
      <li key={item.id} className={`${item.isNew ? "menuIsNew" : ""}`}>
        {isExternal ? (
          <a
            href={item.href}
            target={item.target || "_self"}
            rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
            className="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white"
          >
            {item.name}
          </a>
        ) : (
          <NavLink
            to={item.href as string}
            className="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white"
          >
            {item.name}
          </NavLink>
        )}
      </li>
    );
  };

  return (
    <div className="TemplatesDropdown hidden lg:block">
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button
              className={`group h-10 sm:h-12 px-3 py-1.5 inline-flex items-center text-sm text-gray-800 dark:text-slate-300 font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 ${
                open ? "" : "text-opacity-80"
              }`}
            >
              <span>Templates</span>
              <ChevronDownIcon
                className={`ml-1 h-4 w-4 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-20 w-full mt-3.5 inset-x-0">
                <div className="bg-white dark:bg-neutral-900 shadow-lg">
                  <div className="container">
                    <div className="flex text-sm border-t border-slate-200 dark:border-slate-700 py-14">
                      <div className="flex-1 grid grid-cols-4 gap-6 xl:gap-8 pr-6 xl:pr-8">
                        {MEGAMENU_TEMPLATES.map((item) => (
                          <div key={item.id}>
                            <p className="font-medium text-slate-900 dark:text-neutral-200">
                              {item.name}
                            </p>
                            <ul className="grid space-y-4 mt-4">
                              {item.children?.map(renderMegaMenuNavlink)}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="w-[40%] xl:w-[35%]">
                        <CardCategory3 />
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
