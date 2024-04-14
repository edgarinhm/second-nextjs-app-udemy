"use server";

import { locale } from "@/constants/locale";
import { SnippetModel } from "@/models/snippet-model";
import {
  CreateSnippet,
  DeleteSnippet,
  UpdateSnippet,
} from "@/services/snippet-service";
import { SnippetValidation } from "@/validations/snippets-validation";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function editSnippet(snippet: SnippetModel) {
  await UpdateSnippet(snippet);
  revalidatePath(`/snippets/${snippet.id}`);
  redirect(`/snippets/${snippet.id}`);
}

export async function deleteSnippet(snippet: SnippetModel) {
  await DeleteSnippet(snippet);
  revalidatePath("/");
  redirect("/");
}
export const createSnippet = async (
  formState: { message: string },
  formDada: FormData
): Promise<{ message: string }> => {
  try {
    /**Check the user's inputs and make sure they are valid*/
    const snippetModel = {
      title: formDada.get("title"),
      code: formDada.get("code"),
    } as SnippetModel;

    const errors = SnippetValidation(snippetModel);

    if (errors?.length) {
      return errors[0];
    }

    /**Create new record in the database */
    await CreateSnippet(snippetModel);
  } catch (error: unknown) {
    return { message: locale.SnippetCreateFailure };
  }

  revalidatePath("/");
  /**Redirect the user back to the root route */
  redirect("/");
};
