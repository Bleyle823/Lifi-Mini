"use client";
import React from "react";
import { motion } from "motion/react";
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
  return (
    <motion.div
              className={cn(
          "flex max-w-3xl fixed top-6 inset-x-0 mx-auto border border-white/20 dark:border-white/10 rounded-2xl dark:bg-black/20 bg-white/20 backdrop-blur-md shadow-2xl z-[5000] px-8 py-4 items-center justify-between",
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

        {/* GitHub Icon - Far Right */}
        <a
          href="https://github.com/lifinance"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/30 dark:border-white/20 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-200"
        >
          <svg
            className="w-5 h-5 text-neutral-700 dark:text-neutral-300"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </motion.div>
  );
};
