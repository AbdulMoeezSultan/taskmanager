import prisma from "./prisma";
import { Blog } from "@/types/definations";

export async function getBlogs(id: string) {
  try {
    const myBlogs = await prisma.blogs.findMany({ where: { userId: id } });
    return myBlogs;
  } catch (err) {
    console.log("Error creating blog:", err);
    return [];
  }
}

export const getBlogDetails = async (id: number) => {
  try {
    const blogDetails = await prisma.blogs.findUnique({ where: { id: id } });
    const myBlog: Blog = blogDetails as Blog;
    if (myBlog) return myBlog;
    throw new Error("Blog not found");
  } catch (err) {
    console.log("An error occured while fetching blog details: ", err);
    throw err;
  }
};
