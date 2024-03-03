export interface SnippetModel {
  id: number;
  title: string;
  code: string;
}

export type AddSnippetModel = Omit<SnippetModel, "id">;
