import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { ElementFormatType, FORMAT_ELEMENT_COMMAND } from "lexical";
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from "lucide-react";
import React from "react";

const CustomAlignActionsData = [
  {
    name: "Left",
    icon: <AlignLeft />,
  },
  {
    name: "Right",
    icon: <AlignRight />,
  },
  {
    name: "Center",
    icon: <AlignCenter />,
  },
  {
    name: "Justify",
    icon: <AlignJustify />,
  },
];

const CustomAlignActions = () => {
  const [editor] = useLexicalComposerContext();

  const handleOnClick = (formatType: ElementFormatType) => {
    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, formatType);
  };

  return (
    <div>
      {CustomAlignActionsData.map((data) => {
        return (
          <button
            key={data.name}
            className="p-1 rounded-md text-gray-800 border border-gray-800 hover:text-white hover:bg-gray-800 duration-200 ease-in-out"
            onClick={() =>
              handleOnClick(data.name.toLowerCase() as ElementFormatType)
            }>
            {data.icon}
          </button>
        );
      })}
    </div>
  );
};

export default CustomAlignActions;
