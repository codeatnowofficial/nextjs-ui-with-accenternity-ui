"use client";
import React from "react";
import { Button } from "./ui/moving-border";

function ButtonLight() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-white bg-black/[0.96] text-black dark:text-white border-neutral-200 dark:border-slate-400"
      >
        Borders are cool
      </Button>
    </div>
  );
}

export default ButtonLight;
