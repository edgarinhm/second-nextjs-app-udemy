import { locale } from "@/constants/locale";
import { GetSnippetById } from "@/services/snippet-service";
import Link from "next/link";
import { notFound } from "next/navigation";

interface SnippetShowProps {
  params: {
    id: string;
  };
}
export default async function SnippetShowPage(
  props: Readonly<SnippetShowProps>
) {
  const loadSnippetData = async () => {
    try {
      return await GetSnippetById(parseInt(props.params.id));
    } catch (error) {
      console.log("loadSnippetData-error", error);
    }
  };
  const snippet = await loadSnippetData();

  if (!snippet) {
    return notFound();
  }
  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold capitalize">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="p-2 border rounded"
          >
            {locale.ActionButtonEdit}
          </Link>
          <button className="p-2 border rounded">
            {locale.ActionButtonDelete}
          </button>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
