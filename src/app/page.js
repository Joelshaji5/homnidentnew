import Image from "next/image";
import HomePage from "./Homepage/page";
import Navbar from "./Components/Navbar/Navbar";
import NavbarMb from "./Components/Navbar/NavbarMb";

export default function Home() {
  return (
    <>
    <Navbar/>
    <NavbarMb />
  <HomePage />
  </>
  );
}
