import Header from '@/components/landing-page/header';

export default function AuthLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <div className='min-h-screen flex flex-col items-center'>
      <Header />

      {/* CHILDREN */}
      {children}
    </div>
  );
}
