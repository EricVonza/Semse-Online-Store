import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import CardCategory3 from "components/CardCategories/CardCategory3";
import React, { FC, Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { LocationStates } from "routers/types";

export interface NavItemType {
  id: string;
  name: string;
  href: keyof LocationStates | string; // Support both internal and external links
  target?: "_blank" | "_self" | "_parent" | "_top"; // Optional target
  children?: NavItemType[];
  type?: "dropdown" | "megaMenu" | "none";
  isNew?: boolean;
}

export interface NavigationItemProps {
  menuItem: NavItemType;
}

const NavigationItem: FC<NavigationItemProps> = ({ menuItem }) => {
  const [menuCurrentHovers, setMenuCurrentHovers] = useState<string[]>([]);

  const onMouseEnterMenu = (id: string) => {
    setMenuCurrentHovers((state) => [...state, id]);
  };

  const onMouseLeaveMenu = (id: string) => {
    setMenuCurrentHovers((state) => state.filter((item) => item !== id));
  };

  const renderMegaMenu = (menu: NavItemType) => {
    if (!menu.children) return null;

    return (
      <li className="menu-item flex-shrink-0 menu-megamenu menu-megamenu--large">
        {renderMainItem(menu)}
        <div className="invisible sub-menu absolute top-full inset-x-0 transform z-50">
          <div className="bg-white dark:bg-neutral-900 shadow-lg">
            <div className="container">
              <div className="flex text-sm border-t border-slate-200 dark:border-slate-700 py-14">
                <div className="flex-1 grid grid-cols-4 gap-6 xl:gap-8 pr-6 xl:pr-8">
                  {menu.children.map((item, index) => (
                    <div key={index}>
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
        </div>
      </li>
    );
  };

  const renderMegaMenuNavlink = (item: NavItemType) => (
    <li key={item.id} className={item.isNew ? "menuIsNew" : ""}>
      {renderNavLink(item)}
    </li>
  );

  const renderDropdownMenu = (menuDropdown: NavItemType) => {
    const isHover = menuCurrentHovers.includes(menuDropdown.id);

    return (
      <Popover
        as="li"
        className="menu-item menu-dropdown relative"
        onMouseEnter={() => onMouseEnterMenu(menuDropdown.id)}
        onMouseLeave={() => onMouseLeaveMenu(menuDropdown.id)}
      >
        <>
          <Popover.Button as={Fragment}>
            {renderMainItem(menuDropdown)}
          </Popover.Button>
          <Transition
            as={Fragment}
            show={isHover}
            enter="transition ease-out duration-150"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel static className="sub-menu absolute z-10 w-56 top-full left-0">
              <ul className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 py-4 grid space-y-1">
                {menuDropdown.children?.map((i) => renderDropdownMenuNavlink(i))}
              </ul>
            </Popover.Panel>
          </Transition>
        </>
      </Popover>
    );
  };

  const renderDropdownMenuNavlink = (item: NavItemType) => (
    <li key={item.id} className="px-2">
      {renderNavLink(item)}
    </li>
  );

  const renderMainItem = (item: NavItemType) => (
    <div className="h-20 flex-shrink-0 flex items-center">
      {renderNavLink(item)}
    </div>
  );

  const renderNavLink = (item: NavItemType) => {
    const isExternal = typeof item.href === "string" && item.href.startsWith("http");

    return isExternal ? (
      <a
        href={item.href}
        target={item.target ?? "_self"}
        rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
        className="inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
      >
        {item.name}
        {item.type && <ChevronDownIcon className="ml-1 -mr-1 h-4 w-4 text-slate-400" aria-hidden="true" />}
      </a>
    ) : (
      <NavLink
        to={item.href as keyof LocationStates}
        target={item.target}
        rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
        className={({ isActive }) =>
          `flex items-center py-2 px-4 rounded-md hover:text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 ${
            isActive ? "font-medium text-neutral-900 dark:text-neutral-100" : "font-normal text-neutral-600 dark:text-neutral-400"
          }`
        }
      >
        {item.name}
        {item.type && <ChevronDownIcon className="ml-2 h-4 w-4 text-neutral-500" aria-hidden="true" />}
      </NavLink>
    );
  };

  switch (menuItem.type) {
    case "dropdown":
      return renderDropdownMenu(menuItem);
    case "megaMenu":
      return renderMegaMenu(menuItem);
    default:
      return <li className="menu-item flex-shrink-0">{renderMainItem(menuItem)}</li>;
  }
};

export default NavigationItem;
