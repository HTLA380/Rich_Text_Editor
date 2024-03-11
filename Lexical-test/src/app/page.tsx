import LexicalEditorWrapper from "@/components/lexical-editor/LexicalEditorWrapper";
import React from "react";

export default function Home() {
  return (
    <main className="p-10 bg-secondary min-h-screen w-full">
      <div className="relative">
        <LexicalEditorWrapper />
      </div>
    </main>
  );
}
