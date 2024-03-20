"use client";

import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const TinyMCE = () => {
  const handleEditorChange = (content: any, editor: any) => {
    console.log("Content was updated:", content);
  };

  return (
    <Editor
      apiKey={"0gz87w29kgjnzgcp5wojmv88i56ursnpiaf2x7dbdxxb8gmd"}
      initialValue="<p>Tiny MCE</p>"
      init={{
        skin: "snow",
        icons: "thin",
        toolbar_mode: "sliding",
        content_css: "document",
        setup: (editor) => {
          editor.ui.registry.addContextToolbar("tableoptions", {
            predicate: (node) => node.nodeName.toLowerCase() === "table",
            items: "tablemergecells tablecellbackgroundcolor",
            position: "node",
            scope: "node",
          });
        },
        height: "110vh",
        menubar: true,
        plugins:
          "advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen textcolor insertdatetime media paste code help wordcount table",
        toolbar:
          "help | undo redo | removeformat selectall | bold italic underline strikethrough link superscript subscript | align outdent indent | fontfamily | fontsize | lineheight | blocks | forecolor | backcolor | image media | table | wordcount | code print | preview",
        textcolor_rows: "4",
      }}
      onEditorChange={handleEditorChange}
    />
  );
};

export default TinyMCE;
