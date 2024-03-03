"use client";

import { SnippetModel } from "@/models/snippet-model";

interface SnippetEditFormProps {
  snippet: SnippetModel;
}

export default function SnippetEditForm({
  snippet,
}: Readonly<SnippetEditFormProps>) {
  return <h1>Client component has snippet with title {snippet.title}</h1>;
}
