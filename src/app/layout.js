import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Homnident",
  description: "In search of a dentist near you? Look no further! Homnident brings to you the best dental care right at your doorstep through our expert dentists and advance equipments. From root canal to implants, get all dental treatments at your home.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}</body>
    </html>
  );
}
