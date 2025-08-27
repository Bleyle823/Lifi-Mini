"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-4xl fixed top-6 inset-x-0 mx-auto border border-white/20 dark:border-white/10 rounded-2xl dark:bg-black/20 bg-white/20 backdrop-blur-md shadow-2xl z-[5000] px-8 py-4 items-center justify-between",
          className
        )}
      >
        {/* LiFi Logo - Far Left */}
        <div className="flex items-center space-x-3">
          <Image
            src="/lifi-icon-1024x1024.png"
            alt="LiFi Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="text-lg font-semibold text-neutral-800 dark:text-white hidden sm:block">
            LiFi Bridge
          </span>
        </div>

        {/* Navigation Items - Center */}
        <div className="flex items-center space-x-6">
          {navItems.map((navItem: any, idx: number) => (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-2 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 transition-colors duration-200"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
            </a>
          ))}
        </div>

        {/* Login Button - Far Right */}
        <button className="border text-sm font-medium relative border-white/30 dark:border-white/20 text-black dark:text-white px-6 py-2.5 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-200">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
