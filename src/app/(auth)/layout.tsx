export default function AuthLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <div className='h-screen bg-[#f4f5f7] flex flex-col items-center justify-center gap-6'>
      {/* FINtrack.IO */}
      <div className='flex flex-col items-center gap-4'>
        <h1 className='font-extrabold text-green-1 text-5xl'>
          FIN<span className='font-thin'>track.</span>
          <span>IO</span>
        </h1>
      </div>

      {/* CHILDREN */}
      {children}
    </div>
  );
}
