import Image from "next/image";
import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import Scroll from "@/components/Scroll";
import CardJordan from "@/components/CardJordan";
import Wave from "@/components/Wave";
import InfiniteScrollLeft from "@/components/InfiniteScrollLeft";
import { Button } from "@/components/ui/moving-border";
import ButtonLight from "@/components/ButtonLight";
import LampStyleHero from "@/components/LampStyleHero";
import { Tabs } from "@/components/ui/tabs";
import TabsComp from "@/components/TabsComp";
import FooterComp from "@/components/FooterComp";
import ToolTipAnimation from "@/components/ToolTipAnimation";

export default function Home() {
  return (
    <>
      <main className="h-[100vh] antialiased">
        <div className="h-[110vh] w-auto rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Spotlight <br /> is the new trend.
            </h1>

            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
              Spotlight effect is a great way to draw attention to a specific
              part of the page. Here, we are drawing the attention towards the
              text section of the page. I don&apos;t know why but I&apos;m
              running out of copy.
            </p>
            <div className="flex items-center justify-center my-8">
              {/* <ButtonLight /> */}
              <button className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                Figma
              </button>
              <button className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
                <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                <span className="relative z-20">Top gradient</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <LampStyleHero />
      <Wave />
      <Scroll />
      <div className="min-h-[60vh] flex flex-col flex-wrap gap-36 items-center justify-center mt-[5rem]">
        <div>
          <h1 className="text-4xl md:text-7xl font-bold text-center p-5 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Pricing
          </h1>
        </div>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <CardJordan />
          <CardJordan />
          <CardJordan />
        </div>
      </div>
      <div className="min-h-[80vh]">
        <TabsComp />
      </div>
      <div className="h-[100vh] mt-20">
        <InfiniteScrollLeft />
      </div>
      <div className="min-h-[50vh] mt-20">
        <ToolTipAnimation />
      </div>
      <div>
        <FooterComp />
      </div>
    </>
  );
}
