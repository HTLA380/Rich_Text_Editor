import { Toggle } from "@/components/ui/toggle";
import { FORMAT_TEXT_COMMAND, TextFormatType } from "lexical";
import {
  Bold,
  Code2,
  Highlighter,
  Italic,
  Strikethrough,
  Underline,
} from "lucide-react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import React from "react";
import { Button } from "@/components/ui/button";

const options = [
  {
    value: "Bold",
    icon: <Bold size={15} />,
  },
  {
    value: "Italic",
    icon: <Italic size={15} />,
  },
  {
    value: "Underline",
    icon: <Underline size={15} />,
  },
  {
    value: "Code",
    icon: <Code2 size={15} />,
  },
  {
    value: "Highlight",
    icon: <Highlighter size={15} />,
  },
  {
    value: "Strikethrough",
    icon: <Strikethrough size={15} />,
  },
];

const ComponentPickerActions = () => {
  const [editor] = useLexicalComposerContext();

  const handleClick = (value: TextFormatType) => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, value);
  };

  return (
    <div>
      {options.map((data) => (
        <Button
          key={data.value}
          variant={"ghost"}
          size={"sm"}
          onClick={() =>
            handleClick(data.value.toLowerCase() as TextFormatType)
          }>
          {data.icon}
        </Button>
      ))}
    </div>
  );
};

export default ComponentPickerActions;
