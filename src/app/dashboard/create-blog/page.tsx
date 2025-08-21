import CreateBlogForm from "@/components/ui/create-blog-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Blog",
  description: "Create blog form page of bloggy"
};

export default function CreateBlog() {
  return (
    <main className="min-h-screen bg-[#fff] text-[#1f2937] font-sans flex justify-center">
      <section className="w-[40%]">
        <h2 className="text-3xl font-semibold text-[#f97316] mb-8 bg-transparent shadow-2xl w-fit">
          Create a New Blog
        </h2>
        <CreateBlogForm />
      </section>
    </main>
  );
}
