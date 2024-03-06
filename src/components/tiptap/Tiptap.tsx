"use client";
import Heading from "@tiptap/extension-heading";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Toolbar from "./Toolbar";

const Tiptap = ({
  description,
  onChange,
}: {
  description: string;
  onChange: (richText: string) => void;
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({}),
      Heading.configure({
        HTMLAttributes: {
          class: "text-2xl font-semibold",
          levels: [2],
        },
      }),
      Underline.configure({}),
    ],
    content: description,
    editorProps: {
      attributes: {
        class: "border-0 bg-background p-3 min-h-64",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="w-full flex flex-col justify-center gap-0 border-2 rounded-lg overflow-hidden">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
