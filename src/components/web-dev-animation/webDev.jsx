import React, { useEffect } from "react";
import "./webDev.styles.css";

import { gsap } from "gsap";

function WebDevAnimation() {
  const tl = gsap.timeline({ delay: 1 });
  useEffect(() => {
    tl.to(".i__drop", { duration: 0.5, bottom: "29rem", ease: "bounce.out" });
    tl.to(".i__drop", {
      duration: 0.2,
      bottom: "37rem",
      ease: "back.out(4)",
      backgroundColor: "#ffffff",
      //   ease: "elastic.out(0.5, 0.3)",
    });
    tl.from(
      ".i__letter",
      {
        duration: 0.4,
        bottom: "-10rem",
        ease: "elastic.out(1, 0.1)",
      },
      "-=0.2"
    );
    tl.to(
      ".h__drop",
      { duration: 0.5, ease: "elastic.out(1,0.3)", bottom: 0 },
      "-=0.5"
    );
    tl.to(".h__letter", { opacity: 1 }, "-=0.4");
    tl.to(".h__drop", { width: "0rem", duration: 0.1 });
    tl.to(".h__paravan", { width: "5.5rem" }, "-=0.5");
    tl.to(".i__dev", { opacity: 1, duration: 0.01 }, "+=1");
    tl.to(".h__letter", { left: "-10rem", duration: 0.5 }, "+=0.2");
    tl.to(".i__letter", { bottom: "-15rem" });

    tl.to(
      ".i__drop",
      { bottom: "29rem", duration: 0.5, ease: "bounce.out" },
      "-=0.2"
    );
    tl.to(".i__drop", { left: "35rem", duration: 0.1 });
    tl.from(".m__dev", { left: "-15rem" }, "-=0.3");
    tl.to(".h__paravan", { width: 0 });
    tl.to(".coma__letter", { opacity: 1 }, "-=3.5");
    tl.to(".coma__letter", { opacity: 0 }, "-=1.5");
    tl.to(
      ".a__dev",
      { opacity: 1, duration: 0.3, rotate: 360, ease: "elastic.out(2,0.2)" },
      "-=0.5"
    );
    tl.from(".web__dev", { left: "80rem", duration: 0.5 }, "-=0.5");
    tl.to(".web__dev", { fontStyle: "normal" }, "+=0.5");
  }, []);

  return (
    <div className="web__dev__animation__container">
      aniamtion
      <div className="i__drop" />
      <div className="hello__div">
        <div className="h__letter">H</div>
        <div className="i__letter">I</div>
        <div className="coma__letter">,</div>
        <div className="h__drop" />
        <div className="h__paravan" />
        <div className="i__dev">I</div>
        <div className="m__dev">'m</div>
        <div className="a__dev">a</div>
        <div className="web__dev">web</div>
        <div className="web__paravan" />
      </div>
    </div>
  );
}

export default WebDevAnimation;
