"use client";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { isDevPlayground } from "@/components/editor/lib/appSettings";
import { SettingsContext } from "@/components/editor/context/SettingsContext";
import { SharedAutocompleteContext } from "@/components/editor/context/SharedAutocompleteContext";
import { SharedHistoryContext } from "@/components/editor/context/SharedHistoryContext";
import PlaygroundNodes from "@/components/editor/nodes/PlaygroundNodes";
import PasteLogPlugin from "@/components/editor/plugins/PasteLogPlugin";
import { TableContext } from "@/components/editor/plugins/TablePlugin";
import PlaygroundEditorTheme from "@/components/editor/themes/PlaygroundEditorTheme";
import Editor from "@/components/editor/editor";
import ExportPDFPlugin from "@/components/editor/plugins/ExportPDFPlugin";

export default function LexicalEditor(): JSX.Element {
  const initialConfig = {
    namespace: "Playground",
    nodes: [...PlaygroundNodes],
    onError: (error: Error) => {
      throw error;
    },
    theme: PlaygroundEditorTheme,
  };

  return (
    <SettingsContext>
      <LexicalComposer initialConfig={initialConfig}>
        <SharedHistoryContext>
          <TableContext>
            <SharedAutocompleteContext>
              <div className="editor-shell">
                <Editor />
              </div>
              {isDevPlayground ? <PasteLogPlugin /> : null}
              <ExportPDFPlugin />
            </SharedAutocompleteContext>
          </TableContext>
        </SharedHistoryContext>
      </LexicalComposer>
    </SettingsContext>
  );
}
