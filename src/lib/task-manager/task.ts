import prisma from "../prisma";

export const getTasks = async () => {
  const tasks = await prisma.task.findMany();
  return tasks;
};
