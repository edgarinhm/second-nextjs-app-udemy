import { SnippetModel } from "@/models/snippet-model";

const SnippetValidationModel = {
  title: (value: string): { message: string } | void => {
    if (typeof value !== "string" || value.length < 3) {
      return { message: "Title must be longer" };
    }
  },
  code: (value: string): { message: string } | void => {
    if (typeof value !== "string" || value.length < 10) {
      return { message: "Code must be longer" };
    }
  },
};

export const SnippetValidation = (snippet: SnippetModel) => {
  const Errors = [];
  const titleError = SnippetValidationModel.title(snippet.title);
  const codeError = SnippetValidationModel.code(snippet.code);
  if (titleError) {
    Errors.push(titleError);
  }
  if (codeError) {
    Errors.push(codeError);
  }

  return Errors;
};
