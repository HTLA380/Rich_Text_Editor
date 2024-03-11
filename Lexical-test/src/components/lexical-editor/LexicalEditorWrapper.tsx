"use client";

import { useMemo } from "react";

import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import {
  InitialConfigType,
  LexicalComposer,
} from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { Separator } from "../ui/separator";
import ComponentPickerActions from "./actions/ComponentPickerActions";
import { theme } from "./theme/theme";
import { HeadingNode } from "@lexical/rich-text";
import HistoryActions from "./actions/HistoryActions";
import HeadingActions from "./actions/HeadingActions";
import AlignActions from "./actions/AlignActions";

function onError(error: Error) {
  console.error(error);
}

export default function LexicalEditorWrapper() {
  const LexicalContent = useMemo(() => {
    return (
      <ContentEditable className="max-w-full p-3 relative focus:outline-none min-h-60 border-t border-gray-300" />
    );
  }, []);

  const LexicalPlaceholder = useMemo(() => {
    return (
      <div className="absolute top-0 pointer-events-none left-0 text-gray-400 m-3">
        Enter some text...
      </div>
    );
  }, []);

  const lexicalConfig: InitialConfigType = {
    namespace: "My Rich Text Editor",
    onError: (e) => {
      console.log("Error:", e);
    },
    nodes: [HeadingNode],
    theme: theme,
  };

  return (
    <LexicalComposer initialConfig={lexicalConfig}>
      <div className="bg-card shadow-md rounded-lg border border-gray-300">
        <div className="flex items-center p-2">
          <HistoryActions />
          <Separator orientation="vertical" className="h-8 mx-2 bg-gray-300" />
          <ComponentPickerActions />
          <Separator orientation="vertical" className="h-8 mx-2 bg-gray-300" />
          <HeadingActions />
          <Separator orientation="vertical" className="h-8 mx-2 bg-gray-300" />
          <AlignActions />
        </div>

        <div className="relative">
          <RichTextPlugin
            contentEditable={LexicalContent}
            placeholder={LexicalPlaceholder}
            ErrorBoundary={LexicalErrorBoundary}
          />
        </div>
        <HistoryPlugin />
        <AutoFocusPlugin />
      </div>
    </LexicalComposer>
  );
}
