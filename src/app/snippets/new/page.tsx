import { locale } from "@/constants/locale";
import { CreateSnippet } from "@/services/snippet-service";
import { redirect } from "next/navigation";

interface SnippetModel {
  title: string;
  code: string;
}
export default function SnippetsCreatePage() {
  const createSnippet = async (formDada: FormData): Promise<void> => {
    /**This needs to be a server action!*/
    "use server";

    /**Check the user's inputs and make sure they are valid*/
    const snippetModel = {
      title: formDada.get("title"),
      code: formDada.get("code"),
    } as SnippetModel;

    /**Create new record in the database */
    await CreateSnippet(snippetModel);

    /**Redirect the user back to the root route */
    redirect("/");
  };
  return (
    <form action={createSnippet}>
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
        <button type="submit" className="rounded p-2 bg-blue-200 capitalize">
          {locale.ActionButtonCreate}
        </button>
      </div>
    </form>
  );
}
