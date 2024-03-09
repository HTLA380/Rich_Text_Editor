import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { HeadingTagType } from "@lexical/rich-text";
import React from "react";
import { FORMAT_HEADING_COMMAND } from "./plugins/CustomHeadingPlugin";
import { Heading1, Heading2, Heading3, Heading4, Heading5 } from "lucide-react";

const CustomHeadingActionsData = [
  {
    tag: "h1",
    icon: <Heading1 />,
  },
  {
    tag: "h2",
    icon: <Heading2 />,
  },
  {
    tag: "h3",
    icon: <Heading3 />,
  },
  {
    tag: "h4",
    icon: <Heading4 />,
  },
  {
    tag: "h5",
    icon: <Heading5 />,
  },
];

const CustomHeadingActions = () => {
  const [editor] = useLexicalComposerContext();

  const handleOnClick = (tag: HeadingTagType) => {
    editor.dispatchCommand(FORMAT_HEADING_COMMAND, tag);
  };

  return (
    <div>
      {CustomHeadingActionsData.map((data) => {
        return (
          <button
            key={data.tag}
            className="p-1 rounded-md text-gray-800 border border-gray-800 hover:text-white hover:bg-gray-800 duration-200 ease-in-out"
            onClick={() =>
              handleOnClick(data.tag.toLowerCase() as HeadingTagType)
            }>
            {data.icon}
          </button>
        );
      })}
    </div>
  );
};

export default CustomHeadingActions;
