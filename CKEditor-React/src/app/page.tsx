"use client";

import React from "react";
import dynamic from "next/dynamic";
import { exampleHTML } from "@/components/editor/exampleHtml";
import Head from "next/head";

const RichTextEditor = dynamic(
  () => import("../components/editor/RichTextEditor"),
  { ssr: false }
);

const Home = () => {
  return (
    <main className="w-full min-h-screen">
      <RichTextEditor initialData={exampleHTML} />
    </main>
  );
};

export default Home;
