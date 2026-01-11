"use client";

import React from "react";

import { motion } from "motion/react";

import Link from "next/link";

import {
  ShieldCheck,
  Layers,
  Circle,
  Aperture,
  Sparkles,
  Bolt,
  Boxes,
} from "lucide-react";

const logos = [
  { label: "Wealthro", icon: ShieldCheck },

  { label: "Finyon", icon: Layers },

  { label: "Aegra", icon: Circle },

  { label: "Portivio", icon: Aperture },

  { label: "Vaultic", icon: Sparkles },

  { label: "Altoris", icon: Bolt },

  { label: "Quantora", icon: Boxes },

  { label: "Fundara", icon: Layers },
];

export default function Intro() {
  return (
    <section
      id="intro"
      className="w-full flex flex-col container mx-auto items-center relative overflow-hidden z-[1]"
      style={{ height: "min-content" }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `

            @media (max-width: 809.98px) {

              .intro-section {  padding: 32px 20px; }

            }

          `,
        }}
      />

      <div
        className="intro-section flex flex-col items-center gap-[50px] md:gap-[120px] px-4 md:px-[100px] py-8 md:py-12"
        style={{ height: "min-content" }}
      >
        {/* Trusted by */}

        <motion.section
          className="flex flex-col items-center gap-6 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", duration: 0.6, bounce: 0.05 }}
        >
          <h2 className="text-white text-center text-[20px] md:text-xl font-medium">
            Trusted by Teams Searching “Management System”{" "}
          </h2>

          <p className="text-white/80 text-[12px] m-2 md:text-lg text-center w-full md:max-w-[700px] leading-[1.5] md:leading-relaxed px-6 md:px-0">
            We build appointment, clinic, employee, scholarship, and practice
            management systems—tailored to your exact workflow. If it can be
            defined, it can be built.
          </p>

          {/* Logos Marquee */}

          <div
            className="w-full flex items-center justify-center"
            style={{
              overflow: "visible",

              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 17.5%, rgb(0,0,0) 82.5%, rgba(0,0,0,0) 100%)",

              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 17.5%, rgb(0,0,0) 82.5%, rgba(0,0,0,0) 100%)",
            }}
          >
            {/* Outer container (like framer-ptb27k-container) */}

            <div
              className="logos-container"
              style={{
                flex: "none",

                width: "100%",

                maxWidth: "1000px",

                height: "33px",

                position: "relative",
              }}
            >
              {/* Masked viewport fills container */}

              <div
                className="logos-viewport absolute inset-0"
                style={{
                  overflow: "hidden",
                }}
              >
                <motion.ul
                  className="logos-list flex items-center w-full h-full max-w-full max-h-full list-none gap-[60px] relative flex-row"
                  initial={{ x: 0 }}
                  animate={{ x: [0, "-50%", 0] }}
                  transition={{
                    duration: 20,

                    repeat: Infinity,

                    ease: "linear",
                  }}
                  aria-label="Company logos"
                  style={{ willChange: "transform" }}
                >
                  {[...logos, ...logos].map((item, i) => {
                    const Icon = item.icon;

                    return (
                      <li
                        key={`${item.label}-${i}`}
                        className="flex-shrink-0 text-white"
                      >
                        <div className="logo-item flex items-center gap-2 md:gap-3">
                          <div className="grid place-items-center h-9 w-9 md:h-11 md:w-11 text-white/90">
                            <Icon
                              className="text-white"
                              size={24}
                              strokeWidth={1.6}
                            />
                          </div>

                          <p className="text-white text-sm md:text-base font-medium">
                            {item.label}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </motion.ul>

                <style
                  dangerouslySetInnerHTML={{
                    __html: `

                    @media (max-width: 809.98px) {

                      .logos-list { gap: 30px !important; }

                        .logos-list { justify-content: center !important; }

                        .logo-item { align-items: center !important; }

                        .logo-item p { text-align: center !important; color: white !important; font-weight: 600 !important; }

                        .logos-viewport { overflow: hidden !important; }

                        .logos-viewport { -webkit-mask-image: none !important; mask-image: none !important; }

                    }

                  `,
                  }}
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Main */}

        <div className="w-full max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-[260px_minmax(0,1fr)] gap-6 md:gap-8 items-center px-0">
          {/* Feature Visual */}

          {/* Heading & Button */}
        </div>
      </div>
    </section>
  );
}
