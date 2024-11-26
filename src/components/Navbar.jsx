import { useEffect } from "react";
import gsap from "gsap";

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".link");

    links.forEach((link) => {
      const underline = link.querySelector(".underline");

      link.addEventListener("mouseenter", () => {
        gsap.to(underline, {
          width: "100%",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      link.addEventListener("mouseleave", () => {
        if (!link.matches(":focus")) {
          gsap.to(underline, {
            width: "0%",
            duration: 0.3,
            ease: "power2.out",
          });
        }
      });

      link.addEventListener("focus", () => {
        gsap.to(underline, {
          width: "100%",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      link.addEventListener("blur", () => {
        gsap.to(underline, { width: "0%", duration: 0.3, ease: "power2.out" });
      });
    });
  }, []);

  return (
    <nav className="navbar sticky top-4 z-10 mx-16 my-2">
      <div className="glass flex justify-between items-center align-middle dark:text-white bg-black/10 backdrop-blur-lg rounded-full py-3 px-9">
        <img
          src="./assets/images/logo-indev.png"
          alt="logo-indev"
          className="logo w-36 h-auto"
        />
        <div className="navigationLink flex justify-between gap-9">
          <a
            href="#"
            className="link relative pb-1 w-12 text-center block transition-all hover:font-semibold text-slate-400 hover:text-white focus:text-white focus:font-semibold"
          >
            HOME
            <span className="underline absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-0 bg-white transition-all"></span>
          </a>
          <a
            href="#"
            className="link relative pb-1 w-16 text-center block transition-all hover:font-semibold text-slate-400 hover:text-white focus:text-white focus:font-semibold"
          >
            ABOUT
            <span className="underline absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-0 bg-white transition-all"></span>
          </a>
          <a
            href="#"
            className="link relative pb-1 w-20 text-center block transition-all hover:font-semibold text-slate-400 hover:text-white focus:text-white focus:font-semibold"
          >
            SERVICES
            <span className="underline absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-0 bg-white transition-all"></span>
          </a>
          <a
            href="#"
            className="link relative pb-1 w-24 text-center block transition-all hover:font-semibold text-slate-400 hover:text-white focus:text-white focus:font-semibold"
          >
            PORTFOLIO
            <span className="underline absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-0 bg-white transition-all"></span>
          </a>
          <a
            href="#"
            className="link relative pb-1 w-20 text-center block transition-all hover:font-semibold text-slate-400 hover:text-white focus:text-white focus:font-semibold"
          >
            CONTACT
            <span className="underline absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-0 bg-white transition-all"></span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
