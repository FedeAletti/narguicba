import React from "react";

import {Categories} from "@/components/sections/Shop/Categories";
import {Range} from "@/components/ui/inputs/Range";
import {Pagination} from "@/components/ui/Pagination";
import { ProductCard } from "@/components/ui/products/ProductCard";

function Tienda() {
  return (
    <div className="mt-16 min-h-screen bg-primary pb-16">
      <Categories />
      <div className="mx-auto">
        <div className="divider " />
        <div className="flex flex-col justify-center gap-16  px-12 lg:flex-row">
          <div className="rounded-lg  bg-white px-8 py-6 text-primary-content md:w-1/6">
            <h3 className="text-3xl font-semibold">Filtros</h3>
            <div className="mt-4 flex flex-col gap-6">
              <Range />
              <Range />
              <Range />
              <Range />
              <Range />
            </div>
          </div>
          <div className="flex-2 flex flex-col py-6 md:w-4/6">
            <h3 className="text-3xl font-semibold">Productos</h3>
            <div className="flex-1">
              {Array.from({length: 10}).map((_, i) => (
                <ProductCard key={i} />
              ))}
            </div>
            <div className="">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tienda;
