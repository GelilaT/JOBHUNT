'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image"

export default function Animations() {
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) > 5) { // Scroll sensitivity
        setBounce(true);
        setTimeout(() => setBounce(false), 1500); // Bounce duration
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex gap-20 bg-black">
        <div className="flex pt-16">
        <Image src={'/f1.png'} alt="person1" width={120} height={30} className="w-32 h-28" />
        <Image src={'/f2.png'} alt="person1" width={150} height={150} className={`w-32 h-28 ${bounce ? "animate-bounce": ""}`}/>
        <Image src={'/f3.png'} alt="person1" width={150} height={150} className="w-32 h-28" />
        <Image src={'/f4.png'} alt="person1" width={150} height={150} className={`w-32 h-28 ${bounce ? "animate-bounce": ""}`}/>
        <Image src={'/f5.png'} alt="person1" width={150} height={150} className={`w-32 h-28 ${bounce ? "animate-bounce": ""}`}/>
        </div>

        <div className="flex pt-16">
        <Image src={'/f6.png'} alt="person1" width={120} height={30} className={`w-32 h-28 ${bounce ? "animate-bounce": ""}`}/>
        <Image src={'/f1.png'} alt="person1" width={150} height={150} className="w-32 h-28" />
        <Image src={'/f2.png'} alt="person1" width={150} height={150} className={`w-32 h-28 ${bounce ? "animate-bounce": ""}`}/>
        <Image src={'/f3.png'} alt="person1" width={150} height={150} className="w-32 h-28" />
        <Image src={'/f4.png'} alt="person1" width={150} height={150} className={`w-32 h-28 ${bounce ? "animate-bounce": ""}`}/>
        </div>
    </div>
  );
}
