import { locale } from "@/constants/locale";
export default function SnippetsCreatePage() {
  return (
    <form action="">
      <h3>{locale.SnippetCreateTitle}</h3>
      <div className="flex gap-4">
        <label className="w-12" htmlFor="title">
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
        <label className="w-12" htmlFor="code">
          {locale.SnippetFormCode}
        </label>
        <textarea className="border rounded p-2 w-full" name="code" id="code" />
      </div>
      <button type="submit" className="rounded p-2 bg-blue-200">
        {locale.ActionButtonCreate}
      </button>
    </form>
  );
}
