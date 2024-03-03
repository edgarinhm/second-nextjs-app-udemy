import Link from "next/link";

export default function SnippetNotFound() {
  return (
    <div>
      <h2 className="text-xl bold">Not Found</h2>
      <p>Sorry, but we could not find that particular snippet</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
