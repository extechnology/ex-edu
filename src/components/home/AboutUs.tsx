"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";

export function AboutUs() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <p className="pb-5 text-center text-2xl font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,_purple_30%,_cyan_60%,_indigo_100%)]">
              Unleash The Power Of
            </p>
            <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Modern Technologies
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="/6108768.jpg"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
