import About from "@/components/About";
import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import ClientFeedback from "@/components/ClientFeedback";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navber";
import SectionDivider from "@/components/sectionDevider";
import SpecialOffer from "@/components/SpecialOffer";



import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About/>
      <SectionDivider />
      <SpecialOffer />
      <SectionDivider />
      <ClientFeedback />
      <SectionDivider />
      <Blog />
      <SectionDivider />
      <Footer />
    </>
  );
}
