import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navber";
import SectionDivider from "@/components/sectionDevider";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <SectionDivider />
      <Blog />
      <SectionDivider />
      <Footer />
    </>
  );
}
