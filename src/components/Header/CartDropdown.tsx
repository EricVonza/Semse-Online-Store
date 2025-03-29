import { Popover, Transition } from "@headlessui/react";
import Prices from "components/Prices";
import { Product, PRODUCTS } from "data/data";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";

export default function CartDropdown() {
  const [cartItems, setCartItems] = useState<Product[]>(PRODUCTS.slice(0, 3)); // Sample initial cart

  const removeItem = (index: number) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const renderProduct = (item: Product, index: number, close: () => void) => {
    const { name, price, image } = item;
    return (
      <div key={index} className="flex py-5 last:pb-0">
        <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-contain object-center"
          />
          <Link
            onClick={close}
            className="absolute inset-0"
            to={"/product-detail"}
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between">
              <div>
                <h3 className="text-base font-medium">
                  <Link onClick={close} to={"/product-detail"}>
                    {name}
                  </Link>
                </h3>
              </div>
              <Prices price={price} className="mt-0.5" />
            </div>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500 dark:text-slate-400">Qty 1</p>
            <button
              type="button"
              className="font-medium text-red-500 dark:text-red-400"
              onClick={() => removeItem(index)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Popover className="relative">
      {({ open, close }) => (
        <>
          <Popover.Button className="group w-10 h-10 sm:w-12 sm:h-12 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full inline-flex items-center justify-center">
            <div className="w-3.5 h-3.5 flex items-center justify-center bg-primary-500 absolute top-1.5 right-1.5 rounded-full text-[10px] leading-none text-white font-medium">
              <span>{cartItems.length}</span>
            </div>
            🛒
          </Popover.Button>
          <Transition as={Fragment}>
            <Popover.Panel className="absolute z-10 w-screen max-w-xs px-4 mt-3.5 -right-28 sm:right-0">
              <div className="rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-neutral-800">
                <div className="max-h-[60vh] p-5 overflow-y-auto">
                  <h3 className="text-xl font-semibold">Shopping cart</h3>
                  {cartItems.length > 0 ? (
                    <div className="divide-y divide-slate-100 dark:divide-slate-700">
                      {cartItems.map((item, index) => renderProduct(item, index, close))}
                    </div>
                  ) : (
                    <p className="text-center text-gray-500 mt-4">Your cart is empty.</p>
                  )}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
