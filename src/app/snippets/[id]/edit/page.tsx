import { GetSnippetById } from "@/services/snippet-service";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";

interface SnippetEditProps {
  params: {
    id: string;
  };
}
export default async function SnippetEditPage(
  props: Readonly<SnippetEditProps>
) {
  const id = parseInt(props.params.id);
  const loadEditSnippetData = async () => {
    try {
      return await GetSnippetById(id);
    } catch (error) {
      console.log("loadEditSnippetData-error", error);
    }
  };

  const snippet = await loadEditSnippetData();

  if (!snippet) {
    return notFound();
  }

  return (
    <h1>
      <SnippetEditForm snippet={snippet} />
    </h1>
  );
}
