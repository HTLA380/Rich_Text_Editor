import React from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { REDO_COMMAND, UNDO_COMMAND } from "lexical";
import { Redo, Undo } from "lucide-react";

const CustomHistoryActions = () => {
  const [editor] = useLexicalComposerContext();
  return (
    <>
      <button
        className="p-1 rounded-md text-gray-800 border border-gray-800 hover:text-white hover:bg-gray-800 duration-200 ease-in-out"
        onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)}>
        <Undo size="15" />
      </button>
      <button
        className="p-1 rounded-md text-gray-800 border border-gray-800 hover:text-white hover:bg-gray-800 duration-200 ease-in-out"
        onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)}>
        <Redo size="15" />
      </button>
    </>
  );
};

export default CustomHistoryActions;
