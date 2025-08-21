import Link from "next/link";
import { Blog } from "@/types/definations";
import { deleteBlog } from "../../lib/form-actions/create-blog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BlogCard({ blog }: { blog: Blog }) {
  const deleteBlogById = deleteBlog.bind(null, blog.id);

  return (
    <Card className="bg-[#fafafa] text-[#1f2937] border border-[#e5e7eb] mb-4">
      <CardHeader className="flex justify-between items-center">
        <Link href={`dashboard/${blog.id}/blog-details`}>
          <CardTitle className="cursor-pointer hover:underline text-[#f97316]">
            {blog.title}
          </CardTitle>
        </Link>
        <form action={deleteBlogById}>
          <Button
            type="submit"
            variant="outline"
            className="bg-[#fff7ed] text-[#f97316] border border-[#e5e7eb] hover:bg-[#f97316] hover:text-white"
          >
            Delete
          </Button>
        </form>
      </CardHeader>

      <CardContent>
        {blog.excerpt.length > 250
          ? blog.excerpt.slice(0, 250) + "..."
          : blog.excerpt}
      </CardContent>

      <CardFooter className="text-[#6b7280]">
        {blog.author} ·{" "}
        {blog.createdAt ? new Date(blog.createdAt).toDateString() : "N/A"}
      </CardFooter>
    </Card>
  );
}
