"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import "../../Style/Navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
  
    {
      id: 1,
      link: "/",
      name: "Dental Care"
    },
    {
      id: 2,
      link: "AboutUs",
      name: "About Us"
    }
  ];

  return (
    <div className="HideMbNavbar flex justify-between  items-center w-full h-14   text-white bg-white fixed nav z-50">
      <div className="flex">
        <h1 className="text-5xl font-signature ">
          <a
            className="link-underline link-underline-black"
            href="/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/HomnidentLogo3.png" alt="HomnidentLogo" width={200} height={300} />
          </a>
        </h1>
        <ul className="hidden md:flex nav-linksnew ">
        {links.map(({ id, link, name }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium  hover:scale-105  duration-200 link-underline"
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>
      </div>

    

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer  z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <a href="#Form-section">

        <button className="text-black mr-10 navBtn">Contact</button>
        </a>
    </div>
  );
};

export default Navbar;