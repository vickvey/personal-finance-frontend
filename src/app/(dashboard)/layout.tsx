export default function DashboardLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <div className='h-screen'>
      <h1>this is the dashboard layout</h1>
      {children}
    </div>
  );
}
