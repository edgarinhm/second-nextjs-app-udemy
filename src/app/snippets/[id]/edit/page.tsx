interface SnippetEditProps {
  params: {
    id: string;
  };
}
export default function SnippetEditPage(props: Readonly<SnippetEditProps>) {
  const id = parseInt(props.params.id);
  return <h1>Edit Snippet with id {id}</h1>;
}
