import React from "react";
import { type Editor } from "@tiptap/react";
import { Toggle } from "../ui/toggle";
import {
  AArrowDown,
  AlignLeft,
  Bold,
  Heading2,
  Italic,
  Ligature,
  Underline,
} from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";

type Props = {
  editor: Editor | null;
};

const Toolbar = ({ editor }: Props) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="w-full bg-background flex items-center border-b border-input resize-y">
      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}>
        <Bold className="w-4 h-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}>
        <Italic className="w-4 h-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("underline")}
        onPressedChange={() => editor.commands.toggleUnderline()}>
        <Underline className="w-4 h-4" />
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive("heading")}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }>
        <Heading2 className="w-4 h-4" />
      </Toggle>
    </div>
  );
};

export default Toolbar;
