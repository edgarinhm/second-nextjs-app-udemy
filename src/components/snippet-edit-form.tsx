"use client";

import { SnippetModel } from "@/models/snippet-model";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";

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
    </div>
  );
}
