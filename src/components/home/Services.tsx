"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";

export function Services() {
  return (
    <div>
      <p className="text-center text-2xl pb-5 pt-14 font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,_purple_30%,_cyan_60%,_indigo_100%)]">
        Our Services
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full pb-10 px-4">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              WEB / E-COMMERCE APPLICATIONS
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              With over 100,000 mothly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
          </div>
          <Image
            src="https://img.freepik.com/free-vector/online-shopping-landing-page_33099-1725.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute lg:-right-[30%] grayscale filter md:-bottom-20 bottom-6 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            MOBILE APPLICATIONS
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            If someone yells “stop!”, goes limp, or taps out, the fight is over.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              WHATSAPP / CHATBOTS WEB
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              With over 100,000 mothly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
          </div>
          <Image
            src="https://img.freepik.com/premium-vector/chat-bot-support-online-message-dialogue-robot-customer-help-service-concept-chatbot-ai-messaging-vector_124894-895.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute grayscale  md:-right-[40%] lg:-right-[18%] md:-bottom-38 -bottom-8 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </div>
  );
}
