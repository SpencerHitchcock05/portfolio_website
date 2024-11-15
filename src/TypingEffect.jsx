import { useState, useEffect, useRef } from "react";

function TypingEffect({ text, speed = 150 }) {
    const [displayedText, setDisplayedText] = useState("");
    const [isInView, setIsInView] = useState(false);
    const ref = useRef();
  
    useEffect(() => {
      // Intersection Observer to check if element is in view
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.disconnect(); // Stop observing once it is in view
            }
          });
        },
        { threshold: 1 } // Trigger when 10% of the element is in view
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => observer.disconnect();
    }, []);
  
    useEffect(() => {
      if (!isInView) return; // Do nothing if not in view
  
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(() => text.substring(0, index));
          speed = speed + (Math.random() * 90 - 45);
          index += 1;
        } else {
          clearInterval(interval);
        }
      }, speed);
  
      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    }, [isInView]);
  
    return <span ref={ref}>{displayedText}<span className="typing-cursor">|</span></span>;
  }

export default TypingEffect