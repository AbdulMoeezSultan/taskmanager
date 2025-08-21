import { createBlog } from "@/lib/form-actions/create-blog";
import { Button } from "./button";

export default function CreateBlogForm() {
  return (
    <form
      action={createBlog}
      className="p-8 bg-[#fafafa] shadow-2xl rounded-3xl space-y-6 border border-[#e5e7eb]"
    >
      <div>
        <label htmlFor="title" className="block mb-2 pl-3">
          Title
        </label>
        <input
          id="title"
          type="text"
          name="title"
          required
          className="w-full p-3 rounded-2xl bg-[#fff7ed] text-[#1f2937] border border-[#e5e7eb] focus:outline-none focus:border-[#f97316] placeholder:text-[#6b7280]"
        />
      </div>

      <div>
        <label htmlFor="author" className="block mb-2 pl-3">
          Author
        </label>
        <input
          id="author"
          type="text"
          name="author"
          required
          className="w-full p-3 rounded-2xl bg-[#fff7ed] text-[#1f2937] border border-[#e5e7eb] focus:outline-none focus:border-[#f97316] placeholder:text-[#6b7280]"
        />
      </div>

      <div>
        <label htmlFor="excerpt" className="block mb-2 pl-3">
          Content
        </label>
        <textarea
          id="excerpt"
          name="excerpt"
          rows={6}
          required
          className="w-full p-3 rounded-2xl bg-[#fff7ed] text-[#1f2937] border border-[#e5e7eb] focus:outline-none focus:border-[#f97316] placeholder:text-[#6b7280]"
        />
      </div>

      <Button
        type="submit"
        variant={"secondary"}
        className="bg-[#f97316] px-6 py-2 rounded font-semibold hover:bg-[#ea580c] text-white transition ml-3"
      >
        Submit Blog
      </Button>
    </form>
  );
}
