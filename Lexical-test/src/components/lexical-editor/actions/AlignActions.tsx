"use client";

import * as React from "react";
import { HeadingTagType, $createHeadingNode } from "@lexical/rich-text";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  ChevronDown,
  Heading,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Indent,
  Outdent,
} from "lucide-react";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $setBlocksType } from "@lexical/selection";
import {
  $getSelection,
  $isRangeSelection,
  ElementFormatType,
  FORMAT_ELEMENT_COMMAND,
  INDENT_CONTENT_COMMAND,
  OUTDENT_CONTENT_COMMAND,
} from "lexical";
import { Separator } from "@/components/ui/separator";

const options = [
  {
    align: "Left",
    icon: <AlignLeft size={20} />,
  },
  {
    align: "Center",
    icon: <AlignCenter size={20} />,
  },
  {
    align: "Right",
    icon: <AlignRight size={20} />,
  },
  {
    align: "Justify",
    icon: <AlignJustify size={20} />,
  },
  {
    align: "Start",
    icon: <AlignLeft size={20} />,
  },
  {
    align: "End",
    icon: <AlignRight size={20} />,
  },
];

const AlignActions = () => {
  const [editor] = useLexicalComposerContext();

  const handleOnClick = (align: ElementFormatType) => {
    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, align);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="inline-flex gap-1 text-xs h-fit py-1.5 px-3">
          <AlignLeft size={15} />
          <ChevronDown size={15} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-gray-600">
        <DropdownMenuGroup className="w-48 p-2">
          {options.map((data) => (
            <DropdownMenuItem key={data.align}>
              <button
                onClick={() =>
                  handleOnClick(
                    data.align.toLocaleLowerCase() as ElementFormatType
                  )
                }
                className="w-full flex items-center gap-2 rounded-sm py-1 px-3 outline-none cursor-pointer hover:bg-secondary hover:text-secondary-foreground">
                {data.icon} {data.align} Align
              </button>
            </DropdownMenuItem>
          ))}
          <Separator className="my-1" />
          <DropdownMenuItem>
            <button
              className="w-full flex items-center gap-2 rounded-sm py-1 px-3 outline-none cursor-pointer hover:bg-secondary hover:text-secondary-foreground"
              onClick={() =>
                editor.dispatchCommand(OUTDENT_CONTENT_COMMAND, undefined)
              }>
              <Outdent size={20} /> Outdent
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button
              className="w-full flex items-center gap-2 rounded-sm py-1 px-3 outline-none cursor-pointer hover:bg-secondary hover:text-secondary-foreground"
              onClick={() =>
                editor.dispatchCommand(INDENT_CONTENT_COMMAND, undefined)
              }>
              <Indent size={20} /> Indent
            </button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AlignActions;
