import React, { FC, useState } from "react";
import Logo from "shared/Logo/Logo";
import MenuBar from "shared/MenuBar/MenuBar";
import AvatarDropdown from "./AvatarDropdown";
import Navigation from "shared/Navigation/Navigation";
import CartDropdown from "./CartDropdown";
import { XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export interface MainNav2LoggedProps {}

const MainNav2Logged: FC<MainNav2LoggedProps> = () => {
  const inputRef = React.createRef<HTMLInputElement>();
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const renderMagnifyingGlassIcon = () => (
    <div>{/* Search Icon SVG (if needed) */}</div>
  );

  const renderSearchForm = () => (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate("/page-search");
      }}
      className="flex-1 py-2 text-slate-900 dark:text-slate-100"
    >
      <div className="bg-slate-50 dark:bg-slate-800 flex items-center space-x-1.5 px-5 h-full rounded">
        {renderMagnifyingGlassIcon()}
        <input
          ref={inputRef}
          type="text"
          placeholder="Type and press enter"
          className="border-none bg-transparent focus:outline-none focus:ring-0 w-full text-base"
          autoFocus
        />
        <button type="button" onClick={() => setShowSearchForm(false)}>
          <XMarkIcon className="w-5 h-5" />
        </button>
      </div>
      <input type="submit" hidden value="" />
    </form>
  );

  const renderContent = () => (
    <div className="h-20 flex justify-between">
      <div className="flex items-center lg:hidden flex-1">
        <MenuBar />
      </div>

      <div className="lg:flex-1 flex items-center">
        <Logo className="flex-shrink-0" />
      </div>

      <div className="flex-[2] hidden lg:flex justify-center mx-4">
        {showSearchForm ? renderSearchForm() : <Navigation />}
      </div>

      <div className="flex-1 flex items-center justify-end text-slate-700 dark:text-slate-100">
        {!showSearchForm && (
          <button
            className="hidden lg:flex w-10 h-10 sm:w-12 sm:h-12 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none items-center justify-center"
            onClick={() => setShowSearchForm(!showSearchForm)}
          >
            {renderMagnifyingGlassIcon()}
          </button>
        )}

        <AvatarDropdown />
        <CartDropdown />

        {/* Sun/Moon Icon for Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="ml-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {darkMode ? (
            <MoonIcon className="w-6 h-6 text-yellow-500" />
          ) : (
            <SunIcon className="w-6 h-6 text-gray-800 dark:text-yellow-400" />
          )}
        </button>
      </div>
    </div>
  );

  return (
    <div className="nc-MainNav2Logged relative z-10 bg-white dark:bg-neutral-900 border-b border-slate-100 dark:border-slate-700">
      <div className="container">{renderContent()}</div>
    </div>
  );
};

export default MainNav2Logged;
