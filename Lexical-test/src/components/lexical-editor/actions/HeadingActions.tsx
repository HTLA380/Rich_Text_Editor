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
  ChevronDown,
  Heading,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "lucide-react";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $setBlocksType } from "@lexical/selection";
import { $getSelection, $isRangeSelection } from "lexical";

const options = [
  {
    tag: "h1",
    icon: <Heading1 size={20} />,
  },
  {
    tag: "h2",
    icon: <Heading2 size={20} />,
  },
  {
    tag: "h3",
    icon: <Heading3 size={20} />,
  },
  {
    tag: "h4",
    icon: <Heading4 size={20} />,
  },
  {
    tag: "h5",
    icon: <Heading5 size={20} />,
  },
  {
    tag: "h6",
    icon: <Heading6 size={20} />,
  },
];

const HeadingActions = () => {
  const [editor] = useLexicalComposerContext();

  const handleOnClick = (tag: HeadingTagType) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createHeadingNode(tag));
      }
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="inline-flex gap-1 text-xs h-fit py-1.5 px-3">
          <Heading size={15} />
          <ChevronDown size={15} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-gray-600">
        <DropdownMenuGroup>
          {options.map((data) => (
            <DropdownMenuItem key={data.tag}>
              <button
                onClick={() => handleOnClick(data.tag as HeadingTagType)}
                className="w-full rounded-sm py-1 px-3 outline-none cursor-pointer hover:bg-secondary hover:text-secondary-foreground">
                {data.icon}
              </button>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeadingActions;
