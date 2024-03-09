import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND, TextFormatType } from "lexical";
import {
  Bold,
  Code,
  Highlighter,
  Italic,
  Strikethrough,
  Subscript,
  Superscript,
  Underline,
} from "lucide-react";
import React from "react";

const CustomTextActionsData = [
  {
    name: "Bold",
    icon: <Bold size="20" />,
  },
  {
    name: "Italic",
    icon: <Italic size="20" />,
  },
  {
    name: "Underline",
    icon: <Underline size="20" />,
  },
  {
    name: "Code",
    icon: <Code size="20" />,
  },
  {
    name: "Highlight",
    icon: <Highlighter size="20" />,
  },
  {
    name: "Strikethrough",
    icon: <Strikethrough size="20" />,
  },
  {
    name: "Subscript",
    icon: <Subscript size="20" />,
  },
  {
    name: "Superscript",
    icon: <Superscript size="20" />,
  },
];

const CustomTextActions = () => {
  const [editor] = useLexicalComposerContext();

  const handleOnClick = (formatType: TextFormatType) => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, formatType);
  };

  return (
    <div>
      {CustomTextActionsData.map((data) => {
        return (
          <button
            key={data.name}
            className="p-1 rounded-md text-gray-800 border border-gray-800 hover:text-white hover:bg-gray-800 duration-200 ease-in-out"
            onClick={() =>
              handleOnClick(data.name.toLowerCase() as TextFormatType)
            }>
            {data.icon}
          </button>
        );
      })}
    </div>
  );
};

export default CustomTextActions;
