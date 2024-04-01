"use client";

import { locale } from "@/constants/locale";
import * as actions from "@/app/actions/snippets-actions";
import { useFormState } from "react-dom";

interface SnippetModel {
  title: string;
  code: string;
}
export default function SnippetsCreatePage() {
  const [formState, createSnippetAction] = useFormState(actions.createSnippet, {
    message: "",
  });

  return (
    <form action={createSnippetAction}>
      <h3 className="font-bold m-3 capitalize">{locale.SnippetCreateTitle}</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12 capitalize" htmlFor="title">
            {locale.SnippetFormTitle}
          </label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            name="title"
            id="title"
          />
        </div>
        <div className="flex gap-4">
          <label className="w-12 capitalize" htmlFor="code">
            {locale.SnippetFormCode}
          </label>
          <textarea
            className="border rounded p-2 w-full"
            name="code"
            id="code"
          />
        </div>

        {formState?.message && (
          <div className="my-2 p-2 bg-red-200 border rounded border-red-400">
            {formState.message}
          </div>
        )}

        <button type="submit" className="rounded p-2 bg-blue-200 capitalize">
          {locale.ActionButtonCreate}
        </button>
      </div>
    </form>
  );
}
