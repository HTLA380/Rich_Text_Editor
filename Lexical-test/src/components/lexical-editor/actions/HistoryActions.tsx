import React from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { REDO_COMMAND, UNDO_COMMAND } from "lexical";
import { Redo, Undo } from "lucide-react";

import { Button } from "@/components/ui/button";

const HistoryActions = () => {
  const [editor] = useLexicalComposerContext();

  return (
    <div>
      <Button
        variant={"ghost"}
        className="h-fit p-1"
        size={"sm"}
        onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)}>
        <Undo size={15} />
      </Button>
      <Button
        variant={"ghost"}
        className="h-fit p-1"
        size={"sm"}
        onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)}>
        <Redo size={15} />
      </Button>
    </div>
  );
};

export default HistoryActions;
