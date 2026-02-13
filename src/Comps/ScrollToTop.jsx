import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

   useEffect(() => {
    const footer = document.getElementById("footer");

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // 20% of footer visible
      }
    );

    if (footer) observer.observe(footer);

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 outline-cyan-400 bg-primary/10 text-white p-3 rounded-full  hover:bg-primary/90 transition"
      >
        <ChevronUp size={16} />
      </button>
    )
  );
}
