export default function LandingPage() {
  return (
    <div className='h-full flex flex-col items-center justify-center gap-6'>
      <h1 className='font-bold'>
        <span>FIN</span>
        <span>track</span>
        <span>.IO</span>
      </h1>
      <div className='flex flex-col gap-6 min-w-80'>
        <a href='/sign-up' className='btn btn-primary'>
          Sign-Up Page
        </a>
        <a href='/sign-in' className='btn btn-primary'>
          Sign-In Page
        </a>
        <a href='/user' className='btn btn-primary'>
          User Dashboard Page
        </a>
      </div>
    </div>
  );
}
