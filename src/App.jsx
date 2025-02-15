import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const About = lazy(() => import("./components/about/About"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Projects = lazy(() => import("./components/projects/Projects"));
const Services = lazy(() => import("./components/services/Services"));
const Skills = lazy(() => import("./components/skills/Skills"));
const Footer = lazy(() => import("./components/footer/Footer"));
const Courses = lazy(() => import("./components/courses/Courses"));
import { LanguageProvider } from "./store/LanguageProvider";

const App = () => {
  return (
    <LanguageProvider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        theme="dark"
      />
      <Navbar />
      <Header />
      <Suspense
        fallback={
          <p
            style={{
              color: "var(--color-white)",
              fontSize: "1.4rem",
              textAlign: "center",
            }}
          >
            Loading...
          </p>
        }
      >
        <About />
        <Services />
        <Skills />
        <Projects />
        <Courses />
        <Contact />
        <Footer />
      </Suspense>
    </LanguageProvider>
  );
};

export default App;
