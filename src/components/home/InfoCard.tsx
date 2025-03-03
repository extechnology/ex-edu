"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://img.freepik.com/premium-vector/education-innovative-online-e-learning-internet-technology-concept-virtual-screen-robotic-hand-touching-digital-interface_127544-420.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://img.freepik.com/free-vector/abstract-low-polygonal-graduation-cap-planet-earth-globe-model-map-e-learning-concept_127544-1106.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://img.freepik.com/premium-vector/futuristic-education-concept-with-glowing-polygonal-human-hand-holding-graduation-cap_67515-867.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://img.freepik.com/premium-photo/education-concept-3d-illustration-studying-with-focus-graduation_1995-934.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export default function InfoCard() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
