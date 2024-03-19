"use client";

import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const PLUGINS = [
  "advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen textcolor insertdatetime media paste code help wordcount table",
];

// prettier-ignore
const TOOLBAR = [
  "help | undo redo | removeformat selectall | bold italic underline strikethrough link superscript subscript | align outdent indent | fontfamily | fontsize | lineheight | blocks | forecolor | backcolor | image media | table | wordcount | code print | preview",
];

const TinyMCE = ({ apiKey }: { apiKey: string | undefined }) => {
  if (!apiKey) throw new Error("The api key must be provided");

  const handleEditorChange = (content: any, editor: any) => {
    console.log("Content was updated:", content);
  };

  return (
    <Editor
      apiKey={
        process.env.TINYMCE_API_KEY ||
        "4cp3boxi9yh8n0fns6z4nhyixpu1994aw1g4880glnlcedvj"
      }
      initialValue="<p>Tiny MCE</p>"
      init={{
        skin: "snow",
        icons: "thin",
        content_css: "document",
        setup: (editor) => {
          editor.ui.registry.addContextToolbar("tableoptions", {
            predicate: (node) => node.nodeName.toLowerCase() === "table",
            items: "",
            position: "node",
            scope: "node",
          });
        },
        height: "100vh",
        menubar: true,
        plugins: PLUGINS,
        toolbar: TOOLBAR,
        textcolor_rows: "4",
      }}
      onEditorChange={handleEditorChange}
    />
  );
};

export default TinyMCE;
