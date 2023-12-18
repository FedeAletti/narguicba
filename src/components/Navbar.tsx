"use client";
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";

import {LogoIcon, CartIcon, ProfileIcon} from "./icons";
import Link from "next/link";

export function Navbar() {
  const pathname = usePathname();

  const [sectionColor, setSectionColor] = useState("/");

  useEffect(() => {
    switch (pathname) {
      case "/":
        setSectionColor("transparent");
        break;
      default:
        setSectionColor("primary");
        break;
    }
  }, [pathname]);

  return (
    <div className={`navbar bg-${sectionColor}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div className="btn btn-ghost lg:hidden" role="button" tabIndex={0}>
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6h16M4 12h8m-8 6h16"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
          <ul
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            tabIndex={0}
          >
            <li>
              <Link href="/tienda">Tienda</Link>
            </li>
            <li className="divider"></li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <LogoIcon />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-20 px-1 font-semibold">
          <li>
            <details>
              <summary>Productos</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Servicios</a>
          </li>
          <li>
            <a>Comunidad</a>
          </li>
          <li>
            <a>Contacto</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-10">
        <CartIcon />
        <ProfileIcon />
      </div>
    </div>
  );
}
