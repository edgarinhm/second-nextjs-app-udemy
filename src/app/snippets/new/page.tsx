import { locale } from "@/constants/locale";
export default function SnippetsCreatePage() {
  return (
    <form action="">
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
