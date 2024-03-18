"use client";

import React from "react";
import dynamic from "next/dynamic";
import { exampleHTML } from "@/components/editor/exampleHtml";

const RichTextEditor = dynamic(
  () => import("../components/editor/RichTextEditor"),
  { ssr: false }
);

const Home = () => {
  return (
    <main className="w-full bg-slate-50 min-h-screen">
      <RichTextEditor initialData={exampleHTML} />
    </main>
  );
};

export default Home;
