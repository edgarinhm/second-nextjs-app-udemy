import { db } from "@/db";
import { SnippetModel } from "@/models/snippet-model";
export const CreateSnippet = async (
  snippet: SnippetModel
): Promise<SnippetModel> => {
  /**create new record in the database */
  return await db.snippet.create({
    data: snippet,
  });
};
