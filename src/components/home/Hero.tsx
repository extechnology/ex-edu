"use client";
import { useRef } from "react";
import VariableProximity from "../../../components/VariableProximity/VariableProximity";
import Squares from "../../../components/Squares/Squares";

function Hero() {
  const containerRef = useRef(null);

  return (
    <div className="h-[100vh] w-full dark:bg-slate-900 bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <Squares
        speed={0.4}
        squareSize={50}
        direction="diagonal"
        borderColor="#475569"
        hoverFillColor="#D3D3D3"
      />

      {/* Add your text content here */}
      <div className="absolute text-center text-white">
        <p className="text-2xl font-bold text-transparent bg-clip-text bg-[linear-gradient(to_right,#c026d3_0%,#a855f7_40%,#22d3ee_100%)]">
          ExEdu
        </p>
        <h1 className="md:text-7xl text-4xl shadow mt-2 font-bold capitalize max-w-6xl">
          Creating interactive and <br /> dynamic UI experiences.
        </h1>
      </div>
    </div>
  );
}

export default Hero;
