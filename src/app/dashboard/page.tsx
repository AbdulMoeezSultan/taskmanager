import BlogCard from "@/components/ui/blog-card";
import { getBlogs } from "@/lib/data";
import { Blog } from "@/types/definations";
import { auth } from "@/auth";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Blog page of bloggy",
};

export const revalidate = 60;

export default async function Home() {
  const session = await auth();
  if (!session?.user.id) {
    notFound();
  }
  const blogs: Blog[] = await getBlogs(session.user.id);
  return (
    <main className="min-h-screen bg-[#fff] text-[#1f2937] font-sans">
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-8 text-[#f97316]">
          Latest Posts
        </h2>

        <div className="space-y-6">
          {blogs.length > 0 ? (
            blogs.map((blog) => <BlogCard blog={blog} key={blog.id} />)
          ) : (
            <p className="text-gray-500">No blogs found.</p>
          )}
        </div>
      </section>
    </main>
  );
}
