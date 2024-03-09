import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import React from "react";
import { INSERT_BANNER_COMMAND } from "./plugins/CustomBannerPlugin";
import { TicketSlash } from "lucide-react";

const CustomBannerAction = () => {
  const [editor] = useLexicalComposerContext();

  const handleOnClick = () => {
    editor.dispatchCommand(INSERT_BANNER_COMMAND, undefined);
  };

  return (
    <div>
      <button
        className="p-1 rounded-md text-gray-800 border border-gray-800 hover:text-white hover:bg-gray-800 duration-200 ease-in-out"
        onClick={handleOnClick}>
        <TicketSlash />
      </button>
    </div>
  );
};

export default CustomBannerAction;
