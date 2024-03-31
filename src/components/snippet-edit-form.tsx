"use client";

import * as actions from "@/app/actions/snippets-actions";
import { SnippetModel } from "@/models/snippet-model";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import { locale } from "@/constants/locale";

interface SnippetEditFormProps {
  snippet: SnippetModel;
}

export default function SnippetEditForm({
  snippet,
}: Readonly<SnippetEditFormProps>) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  const editSnippetAction = actions.editSnippet.bind(null, {
    ...snippet,
    code,
  });

  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction}>
        <button type="submit" className="p-2 border rounded capitalize">
          {locale.ActionButtonSave}
        </button>
      </form>
    </div>
  );
}
