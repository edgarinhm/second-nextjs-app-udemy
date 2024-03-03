import { locale } from "@/constants/locale";
import { SnippetModel } from "@/models/snippet-model";
import { GetSnippets } from "@/services/snippet-service";
import Link from "next/link";

export default async function Home() {
  const loadSnippetsData = async () => {
    try {
      return await GetSnippets();
    } catch (error) {
      console.log("loadSnippetsData-error", error);
      return [];
    }
  };

  const snippets = await loadSnippetsData();

  const renderedSnippets = (snippets: SnippetModel[]) => {
    return snippets?.map((snippet) => {
      return (
        <Link
          key={snippet.id}
          href={`/snippets/${snippet.id}`}
          className="flex justify-between items-center p-2 border rounded capitalize"
        >
          <div className="capitalize">{snippet.title}</div>
          <div className="capitalize">{locale.ActionButtonView}</div>
        </Link>
      );
    });
  };

  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold capitalize">{locale.HomeTitle}</h1>
        <Link href="/snippets/new" className="border p-2 rounded capitalize">
          {locale.ActionButtonNew}
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renderedSnippets(snippets)}</div>
    </div>
  );
}
