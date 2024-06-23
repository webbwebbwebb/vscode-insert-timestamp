import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerTextEditorCommand(
    "insert-timestamp.json",
    (editor, edit) => {
      const timestamp = JSON.stringify(new Date());
      editor.selections.forEach((selection, i) => {
        edit.insert(selection.active, timestamp);
      });
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
