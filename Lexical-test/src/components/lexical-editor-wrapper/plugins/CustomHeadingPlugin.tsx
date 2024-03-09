"use client";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_NORMAL,
  createCommand,
} from "lexical";
import { useEffect } from "react";
import { $setBlocksType } from "@lexical/selection";
import { HeadingTagType, $createHeadingNode } from "@lexical/rich-text";

export const FORMAT_HEADING_COMMAND = createCommand("FORMAT_HEADING_COMMAND");

export const CustomHeadingPlugin = () => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    editor.registerCommand<HeadingTagType>(
      FORMAT_HEADING_COMMAND,
      (payload) => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $setBlocksType(selection, () => $createHeadingNode(payload));
        }
        return true;
      },
      COMMAND_PRIORITY_NORMAL
    );
  }, []);

  return null;
};
