export default function AuthLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <div className='h-screen bg-[#f4f5f7] flex flex-col items-center pt-36 gap-6'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='font-extrabold text-green-1 text-3xl'>
          FIN<span className='font-thin'>track.</span>
          <span>IO</span>
        </h1>
      </div>
      {children}
    </div>
  );
}
