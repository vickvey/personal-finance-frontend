import Sidebar from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <div className='h-screen flex'>
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className='p-4'>{children}</main>
    </div>
  );
}
