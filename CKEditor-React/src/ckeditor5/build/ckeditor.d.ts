/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { DecoupledEditor } from "@ckeditor/ckeditor5-editor-decoupled";
import { Alignment } from "@ckeditor/ckeditor5-alignment";
import { Autoformat } from "@ckeditor/ckeditor5-autoformat";
import { Autosave } from "@ckeditor/ckeditor5-autosave";
import { Bold, Code, Italic, Strikethrough, Subscript, Superscript, Underline } from "@ckeditor/ckeditor5-basic-styles";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import { CodeBlock } from "@ckeditor/ckeditor5-code-block";
import type { EditorConfig } from "@ckeditor/ckeditor5-core";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { FontBackgroundColor, FontColor, FontFamily, FontSize } from "@ckeditor/ckeditor5-font";
import { Heading } from "@ckeditor/ckeditor5-heading";
import { Highlight } from "@ckeditor/ckeditor5-highlight";
import { HorizontalLine } from "@ckeditor/ckeditor5-horizontal-line";
import { AutoImage, Image, ImageInsert, ImageResize, ImageStyle, ImageToolbar } from "@ckeditor/ckeditor5-image";
import { Indent, IndentBlock } from "@ckeditor/ckeditor5-indent";
import { AutoLink, Link } from "@ckeditor/ckeditor5-link";
import { List, TodoList } from "@ckeditor/ckeditor5-list";
import { MediaEmbed } from "@ckeditor/ckeditor5-media-embed";
import { PageBreak } from "@ckeditor/ckeditor5-page-break";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { RemoveFormat } from "@ckeditor/ckeditor5-remove-format";
import { SelectAll } from "@ckeditor/ckeditor5-select-all";
import { Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar } from "@ckeditor/ckeditor5-table";
import { AccessibilityHelp } from "@ckeditor/ckeditor5-ui";
import { Undo } from "@ckeditor/ckeditor5-undo";
import { WordCount } from "@ckeditor/ckeditor5-word-count";
declare class Editor extends DecoupledEditor {
    static builtinPlugins: (typeof AccessibilityHelp | typeof Alignment | typeof AutoImage | typeof AutoLink | typeof Autoformat | typeof Autosave | typeof BlockQuote | typeof Bold | typeof Code | typeof CodeBlock | typeof Essentials | typeof FontBackgroundColor | typeof FontColor | typeof FontFamily | typeof FontSize | typeof Heading | typeof Highlight | typeof HorizontalLine | typeof Image | typeof ImageInsert | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof Indent | typeof IndentBlock | typeof Italic | typeof Link | typeof List | typeof MediaEmbed | typeof PageBreak | typeof Paragraph | typeof RemoveFormat | typeof SelectAll | typeof Strikethrough | typeof Subscript | typeof Superscript | typeof Table | typeof TableCaption | typeof TableCellProperties | typeof TableColumnResize | typeof TableProperties | typeof TableToolbar | typeof TodoList | typeof Underline | typeof Undo | typeof WordCount)[];
    static defaultConfig: EditorConfig;
}
export default Editor;
