import DashboardNavbar from "@/components/layout/dashboard-navbar";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
const Dashboard = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();
  if (!session) return redirect("/signin");

  return (
    <>
  <DashboardNavbar />
  <div className="pt-24 z-0">{children}</div>
    </>
  );
};

export default Dashboard;
