import About from "@/components/About";
import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import ClientFeedback from "@/components/ClientFeedback";
import FeaturedProducts from "@/components/FeaturedProduct";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navber";
import SectionDivider from "@/components/sectionDevider";
import SpecialOffer from "@/components/SpecialOffer";





export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <SectionDivider/>
      <FeaturedProducts/>
      
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
