/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { DecoupledEditor } from "@ckeditor/ckeditor5-editor-decoupled";

import { Alignment } from "@ckeditor/ckeditor5-alignment";
import { Autoformat } from "@ckeditor/ckeditor5-autoformat";
import { Autosave } from "@ckeditor/ckeditor5-autosave";
import {
  Bold,
  Code,
  Italic,
  Strikethrough,
  Subscript,
  Superscript,
  Underline,
} from "@ckeditor/ckeditor5-basic-styles";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import { CodeBlock } from "@ckeditor/ckeditor5-code-block";
import type { EditorConfig } from "@ckeditor/ckeditor5-core";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import {
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
} from "@ckeditor/ckeditor5-font";
import { Heading } from "@ckeditor/ckeditor5-heading";
import { Highlight } from "@ckeditor/ckeditor5-highlight";
import { HorizontalLine } from "@ckeditor/ckeditor5-horizontal-line";
import {
  AutoImage,
  Image,
  ImageInsert,
  ImageResize,
  ImageStyle,
  ImageToolbar,
} from "@ckeditor/ckeditor5-image";
import { Indent, IndentBlock } from "@ckeditor/ckeditor5-indent";
import { AutoLink, Link } from "@ckeditor/ckeditor5-link";
import { List, TodoList } from "@ckeditor/ckeditor5-list";
import { MediaEmbed } from "@ckeditor/ckeditor5-media-embed";
import { PageBreak } from "@ckeditor/ckeditor5-page-break";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { RemoveFormat } from "@ckeditor/ckeditor5-remove-format";
import { SelectAll } from "@ckeditor/ckeditor5-select-all";
import {
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
} from "@ckeditor/ckeditor5-table";
import { AccessibilityHelp } from "@ckeditor/ckeditor5-ui";
import { Undo } from "@ckeditor/ckeditor5-undo";
import { WordCount } from "@ckeditor/ckeditor5-word-count";

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class Editor extends DecoupledEditor {
  public static override builtinPlugins = [
    AccessibilityHelp,
    Alignment,
    AutoImage,
    AutoLink,
    Autoformat,
    Autosave,
    BlockQuote,
    Bold,
    Code,
    CodeBlock,
    Essentials,
    FontBackgroundColor,
    FontColor,
    FontFamily,
    FontSize,
    Heading,
    Highlight,
    HorizontalLine,
    Image,
    ImageInsert,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    Indent,
    IndentBlock,
    Italic,
    Link,
    List,
    MediaEmbed,
    PageBreak,
    Paragraph,
    RemoveFormat,
    SelectAll,
    Strikethrough,
    Subscript,
    Superscript,
    Table,
    TableCaption,
    TableCellProperties,
    TableColumnResize,
    TableProperties,
    TableToolbar,
    TodoList,
    Underline,
    Undo,
    WordCount,
  ];

  public static override defaultConfig: EditorConfig = {
    toolbar: {
      items: [
        "accessibilityHelp",
        "|",
        "undo",
        "redo",
        "|",
        "removeFormat",
        "selectAll",
        "|",
        "fontFamily",
        "fontSize",
        "fontColor",
        "fontBackgroundColor",
        "|",
        "heading",
        "|",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "link",
        "code",
        "subscript",
        "superscript",
        "|",
        "insertTable",
        "|",
        "alignment",
        "todoList",
        "numberedList",
        "bulletedList",
        "outdent",
        "indent",
        "|",
        "highlight",
        "blockQuote",
        "codeBlock",
        "|",
        "horizontalLine",
        "pageBreak",
        "|",
        "mediaEmbed",
        "imageInsert",
        "|",
      ],
    },
    language: "en",
    table: {
      contentToolbar: [
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "tableCellProperties",
        "tableProperties",
      ],
    },
    image: {
      insert: {
        type: "auto",
      },
      toolbar: ["imageStyle:inline", "imageStyle:block", "imageStyle:side"],
    },
  };
}

export default Editor;
