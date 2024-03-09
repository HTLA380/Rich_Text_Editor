"use client";

import React, { useMemo } from "react";
import {
  InitialConfigType,
  LexicalComposer,
} from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import CustomHistoryActions from "./CustomHistoryActions";
import CustomTextActions from "./CustomTextActions";
import CustomAlignActions from "./CustomAlignActions";
import { theme } from "./theme";
import CustomHeadingActions from "./CustomHeadingActions";
import { HeadingNode } from "@lexical/rich-text";
import { CustomHeadingPlugin } from "./plugins/CustomHeadingPlugin";
import { BannerNode } from "./node/CustomBannerNode";
import { CustomBannerPlugin } from "./plugins/CustomBannerPlugin";
import CustomBannerAction from "./CustomBannerAction";

const LexicalEditorWrapper: React.FC = () => {
  const CustomContent = useMemo(() => {
    return (
      <ContentEditable
        style={{
          position: "relative",
          borderColor: "rgba(255,211,2,0.68)",
          border: "2px solid red",
          borderRadius: "5px",
          maxWidth: "100%",
          padding: "10px",
        }}
      />
    );
  }, []);

  const CustomPlaceholder = useMemo(() => {
    return (
      <div
        style={{
          position: "absolute",
          top: 30,
          left: 30,
        }}>
        Enter some text...
      </div>
    );
  }, []);

  const lexicalConfig: InitialConfigType = {
    namespace: "My Rich Text Editor",
    onError: (e) => {
      console.log("ERROR:", e);
    },
    nodes: [HeadingNode, BannerNode],
    theme: theme,
  };

  return (
    <div style={{ padding: "20px" }}>
      <LexicalComposer initialConfig={lexicalConfig}>
        <RichTextPlugin
          contentEditable={CustomContent}
          placeholder={CustomPlaceholder}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <CustomBannerPlugin />
        <CustomHeadingPlugin />
        <HistoryPlugin />

        <div className="mt-3">
          <CustomHistoryActions />
        </div>
        <div className="mt-3">
          <p>Text Actions</p>
          <CustomTextActions />
        </div>
        <div className="mt-3">
          <p>Align Actions</p>
          <CustomAlignActions />
        </div>
        <div className="mt-3">
          <p>Heading Actions</p>
          <CustomHeadingActions />
        </div>

        <div className="mt-3">
          <p>Banner Action</p>
          <CustomBannerAction />
        </div>
      </LexicalComposer>
    </div>
  );
};

export default LexicalEditorWrapper;
