import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "@/ckeditor5/build/ckeditor";
import "./theme.css";

export default function RichTextEditor({
  initialData,
}: {
  initialData: string;
}) {
  return (
    <div className="App">
      <CKEditor
        onReady={(editor: any) => {
          console.log("Editor is ready to use!", editor);

          // Insert the toolbar before the editable area.
          editor.ui
            ?.getEditableElement()
            ?.parentElement?.insertBefore(
              editor.ui.view.toolbar.element,
              editor.ui.getEditableElement()
            );
        }}
        onChange={(event, editor) =>
          console.log({ event, data: editor.getData() })
        }
        editor={Editor}
        data={initialData}
      />
    </div>
  );
}
