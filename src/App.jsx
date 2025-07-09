import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import LogoSection from "./sections/LogoSection";
import NavBar from "./components/NavBar";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Loader from "./components/HeroModels/Loader"; // Your preloader component
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const App = () => {
  // 1. Introduce a state to control the loading status
  const [isLoading, setIsLoading] = useState(true);

  useGSAP(() => {
    // Only run GSAP animation for the preloader when it's actively loading
    if (isLoading) {
      let tl = gsap.timeline({
        onComplete: () => {
          // Optional: If you want to hide the preloader after its animation completes
          // This might be too early if your 3D model takes longer to load
          // setIsLoading(false);
        }
      });

      tl.to(".box", {
        scale: 0,
        y: 60,
        rotate: 400,
        duration: 0.5,
        repeat: 1,
        yoyo: true,
        delay: .2,
        stagger: {
          amount: 1,
          from: "start",
          grid: [3, 3],
        }
      });
      tl.to(".contain", {
        rotate: "-405deg",
        scale: 0,
        duration: 1,
      });
      tl.to(".wrap", {
        opacity: 0,
        display: "none",
        onComplete: () => {
            // After the preloader animation finishes, then hide the preloader component
            // This assumes your 3D model is *also* ready by this time.
            // If the 3D model takes longer, you need to delay this based on model's load event.
            if (!isLoading) { // Ensure it's not still trying to load
                setIsLoading(false);
            }
        }
      });
    }
  }, [isLoading]);

  useEffect(() => {
    // *** IMPORTANT: Replace this with your actual 3D model loading logic ***
    // You need to get a callback or promise from your 3D model component
    // (e.g., from Three.js or React Three Fiber's useLoader hooks)
    // that tells you when the model and its textures are fully loaded.

    // For demonstration, let's simulate a 3D model loading time
    const modelLoadSim = setTimeout(() => {
      console.log("3D Model assets loaded!");
      // Once your 3D model is truly ready, set isLoading to false.
      // This will trigger the preloader's exit animation (if designed to)
      // and then remove it from the DOM.
      setIsLoading(false);
    }, 4000); // Simulate 3D model loading for 4 seconds (adjust as needed)

    return () => clearTimeout(modelLoadSim); // Clean up timeout
  }, []); // Run once on component mount

  return (
    <>
      {isLoading && <Loader />}

      {!isLoading && ( // Only render main content after preloader is gone
        <>
          <NavBar />
          <Hero /> 
          <ShowcaseSection />
          {/* <LogoSection /> */}
          <FeatureCards />
          <Experience />
          <TechStack />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;