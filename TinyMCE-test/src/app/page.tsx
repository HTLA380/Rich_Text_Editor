"use client";

import React from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function App() {
  const handleEditorChange = (content: any, editor: any) => {
    console.log("Content was updated:", content);
  };

  return (
    <Editor
      apiKey="4cp3boxi9yh8n0fns6z4nhyixpu1994aw1g4880glnlcedvj"
      // initialValue="<p>This is the initial content of the editor</p>"
      init={{
        skin: "snow",
        icons: "thin",
        placeholder: "Ask a question or post an update...",

        height: 200,
        menubar: true,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen textcolor ",
          "insertdatetime media table paste code help wordcount",
        ],
        textcolor_rows: "4",

        toolbar:
          "undo redo | styleselect | fontsizeselect| code | bold italic | alignleft aligncenter alignright alignjustify | outdent indent ",
      }}
      onEditorChange={handleEditorChange}
      // toolbar="code"
    />
  );
}
