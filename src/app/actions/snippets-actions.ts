"use server";

import { SnippetModel } from "@/models/snippet-model";
import { DeleteSnippet, UpdateSnippet } from "@/services/snippet-service";
import { redirect } from "next/navigation";

export async function editSnippet(snippet: SnippetModel) {
  await UpdateSnippet(snippet);
  redirect(`/snippets/${snippet.id}`);
}

export async function deleteSnippet(snippet: SnippetModel) {
  await DeleteSnippet(snippet);
  redirect("/");
}
