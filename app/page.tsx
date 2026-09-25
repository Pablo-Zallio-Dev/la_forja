import AboutPage from "./pages/aboutPage/AboutPage";
import ContactPage from "./pages/contactPage/ContactPage";
import GalleryPage from "./pages/galleryPage/GalleryPage";
import HomePage from "./pages/homePage/HomePage";
import ServicesPage from "./pages/servicesPage/ServicesPage";


export default function Home() {
  return (
   <>
      <HomePage />
      <ServicesPage />
      <GalleryPage />
      <AboutPage />
      <ContactPage />
   </>
  );
}
