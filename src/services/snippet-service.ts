import { db } from "@/db";
import { AddSnippetModel, SnippetModel } from "@/models/snippet-model";

/**create new record in the database */
export const CreateSnippet = async (
  snippet: AddSnippetModel
): Promise<SnippetModel> => {
  return await db.snippet.create({
    data: snippet,
  });
};

/**get all record in the database */
export const GetSnippets = async (): Promise<SnippetModel[]> => {
  return await db.snippet.findMany();
};

/**get all record in the database */
export const GetSnippetById = async (
  id: number
): Promise<SnippetModel | null> => {
  return await db.snippet.findFirst({
    where: { id: id },
  });
};
