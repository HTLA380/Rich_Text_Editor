import {
  EditorConfig,
  ElementNode,
  LexicalEditor,
  LexicalNode,
  NodeKey,
} from "lexical";
import * as React from "react";

export class BannerNode extends ElementNode {
  constructor(key?: NodeKey) {
    super();
  }
  static clone(node: BannerNode): BannerNode {
    return new BannerNode(node.__key);
  }

  createDOM(_config: EditorConfig, _editor: LexicalEditor): HTMLElement {
    const element = document.createElement("div");
    element.className = _config.theme.banner;
    return element;
  }
}
