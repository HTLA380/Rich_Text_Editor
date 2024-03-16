import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $generateHtmlFromNodes } from "@lexical/html";

import React from "react";
import jsPDF from "jspdf";

const ExportPDFPlugin = () => {
  const [editor] = useLexicalComposerContext();

  const handleClick = () => {
    const editorState = editor.getEditorState();

    editorState.read(() => {
      const htmlString = $generateHtmlFromNodes(editor);

      const pdf = new jsPDF("p", "mm", "a4", true);
      pdf.html(htmlString, {
        callback: function (doc) {
          doc.save("document.pdf");
        },
      });
    });
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 rounded-lg shadow-lg hover:bg-black hover:text-white duration-300 bg-white fixed bottom-10 right-10">
      Download PDF
    </button>
  );
};

export default ExportPDFPlugin;
