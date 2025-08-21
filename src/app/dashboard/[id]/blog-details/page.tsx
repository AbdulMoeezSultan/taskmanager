import { getBlogDetails } from "@/lib/data";
import { notFound } from "next/navigation";
import { Blog } from "@/types/definations";

export const revalidate = 3600;

export default async function BlogView(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = params.id;
  const blogDetails: Blog = await getBlogDetails(Number(id));

  if (!blogDetails) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fff] text-[#1f2937] font-sans px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#f97316] mb-4">
          {blogDetails.title}
        </h1>

        <div className="text-sm text-[#6b7280] mb-6">
          By <span className="font-medium">{blogDetails.author}</span> ·{" "}
          {blogDetails.createdAt
            ? new Date(blogDetails.createdAt).toString()
            : "N/A"}
        </div>

        <article className="bg-[#fafafa] p-6 rounded-2xl shadow border border-[#e5e7eb]">
          <p className="text-[#6b7280] whitespace-pre-line leading-relaxed text-base">
            {blogDetails.excerpt}
          </p>
        </article>
      </div>
    </main>
  );
}
