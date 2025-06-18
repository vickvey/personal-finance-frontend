export default function SignUpPage() {
  return (
    <div className='h-full flex flex-col items-center'>
      <h2>Create an account</h2>

      <div className=''>
        <form action='' className='min-w-80 flex flex-col gap-3'>
          {/* INPUT NAME */}
          <div className='flex flex-col'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' placeholder='Enter your name here' />
          </div>

          {/* INPUT EMAIL ADDRESS */}
          <div className='flex flex-col'>
            <label htmlFor='email'>Email Address</label>
            <input
              type='email'
              name='email'
              placeholder='Enter your email here'
            />
          </div>

          {/* INPUT PASSWORD */}
          <div className='flex flex-col'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              placeholder='Enter your password here'
            />
          </div>

          {/* TEXT TERMS OF SERVICE */}
          <div className='opacity-50'>
            <p className='text-xs'>
              By continuing, you agree to our{' '}
              <a href='#' className='text-green-1 font-bold'>
                terms of service
              </a>
            </p>
          </div>

          {/* SIGN UP BUTTON */}
          <div className='flex flex-col items-center'>
            <button className='w-full btn btn-primary'>Sign up</button>
          </div>

          <div className='flex justify-center'>
            <p>or sign up with</p>
          </div>

          <div>
            <button className='w-full flex gap-2 btn btn-primary bg-[#e4e7eb] text-black font-medium justify-center'>
              <span className='font-extrabold'>@</span>Continue with Google
            </button>
          </div>

          <div className='flex gap-2'>
            Already have an account? <a href='#'>Sign in here</a>
          </div>
        </form>
      </div>
    </div>
  );
}
