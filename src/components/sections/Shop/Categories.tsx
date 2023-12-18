import React from "react";

export function Categories() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full px-4 py-12 2xl:container sm:px-6 xl:px-20 2xl:mx-auto 2xl:px-0">
        <div className="jusitfy-center flex flex-col items-center space-y-10">
          <div className="flex flex-col items-center justify-center ">
            <h2 className="mb-12 pt-24 font-titles text-4xl">Encontrá lo que necesitás</h2>
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3 ">
            <div className="group relative flex h-full w-full items-center justify-center">
              <img
                alt="girl-"
                className="h-full w-full rounded-2xl object-cover object-center"
                src="https://i.ibb.co/K0JbH3j/pexels-cachimberos-12050697.jpg"
              />
              <button className="btn absolute  bottom-4 z-10 w-36 rounded-xl" type="button">
                Narguilas
              </button>
            </div>

            <div className="mt-4 flex flex-col space-y-4 md:mt-0 md:space-y-8">
              <div className="group relative flex h-full w-full items-center justify-center">
                <img
                  alt="shoe-"
                  className="h-full w-full rounded-2xl object-cover object-center"
                  src="https://i.ibb.co/XWDpjMT/7f2bc9c4-8932-494b-bd89-2da5c80f0150.jpg"
                />
                <button className="btn absolute  bottom-4 z-10 w-36 rounded-xl" type="button">
                  Cazoletas
                </button>
              </div>
              <div className="group relative flex h-full w-full items-center justify-center">
                <img
                  alt="watch-"
                  className="h-full w-full rounded-2xl object-cover object-center"
                  src="https://i.ibb.co/vLmpJrn/accesories.jpg"
                />
                <button className="btn absolute  bottom-4 z-10 w-36 rounded-xl" type="button">
                  Accesorios
                </button>
              </div>
            </div>

            <div className="group relative hidden h-full w-full items-center justify-center lg:flex">
              <img
                alt="girl-"
                className="h-full w-full rounded-2xl object-cover object-center"
                src="https://i.ibb.co/C7DSPgP/tobacco.jpg"
              />
              <button className="btn absolute  bottom-4 z-10 w-36 rounded-xl" type="button">
                Tabaco
              </button>
            </div>
            <div className="group relative mt-4 flex h-full w-full items-center justify-center md:mt-8 md:hidden lg:hidden">
              <img
                alt="girl-"
                className="hidden h-full w-full object-cover object-center md:block"
                src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png"
              />
              <img
                alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
                className="h-full w-full object-cover object-center md:hidden"
                src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
              />
              <button className="btn absolute  bottom-4 z-10 w-36 rounded-xl" type="button">
                Accesorios
              </button>
              <div className="absolute bottom-3 z-0 w-36 bg-white bg-opacity-50 px-20 py-6 opacity-0 transition duration-500 group-hover:opacity-100" />
            </div>
          </div>
          <div className="group relative mt-4 hidden h-full w-full items-center justify-center md:mt-8 md:flex lg:hidden">
            <img
              alt="girl-"
              className="hidden h-full w-full object-cover object-center md:block"
              src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png"
            />
            <img
              alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
              className="h-full w-full object-cover object-center sm:hidden"
              src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
            />
            <button
              className="absolute bottom-4  z-10 w-36 rounded-xl bg-white py-3 text-base font-medium leading-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-800 dark:text-white"
              type="button"
            >
              Accesorios
            </button>
            <div className="absolute bottom-3 z-0 w-36 bg-white bg-opacity-50 px-20 py-6 opacity-0 transition duration-500 group-hover:opacity-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
