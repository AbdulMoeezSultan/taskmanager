"use server";

import { auth } from "@/auth";
import z from "zod";
import prisma from "../prisma";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";

const formBlogSchema = z.object({
  id: z.number(),
  userId: z.string(),
  title: z.string(),
  excerpt: z.string(),
  author: z.string(),
});

const blog = formBlogSchema.omit({ id: true });

export const createBlog = async (formData: FormData) => {
  const session = await auth();

  if (!session?.user.id) {
    notFound();
  }

  try {
    const { userId, title, excerpt, author } = blog.parse({
      userId: session.user.id,
      title: formData.get("title"),
      excerpt: formData.get("excerpt"),
      author: formData.get("author"),
    });

    await prisma.blogs.create({
      data: { userId, title, excerpt, author },
    });

    revalidatePath("/dashboard");
    redirect("/dashboard");
  } catch (error) {
    console.log("failed to create blog:", error);
  }
};

export const deleteBlog = async (id: number) => {
  try {
    await prisma.blogs.delete({ where: { id: id } });
  } catch (err) {
    console.log("An error occurr while deleting blog: ", err);
    throw err;
  }
  revalidatePath("/blog");
};

