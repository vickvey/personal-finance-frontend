export default function ForgotPasswordPage() {
  return (
    <div className='flex flex-col items-center'>
      <form className='min-w-80 flex flex-col gap-6'>
        <div className='flex flex-col items-center gap-3'>
          <h2>Forgot Password?</h2>
          <p className='text-xl max-w-96 text-center'>
            Enter your email address to get the password reset link.
          </p>
        </div>

        {/* INPUT EMAIL ADDRESS */}
        <div className='flex flex-col gap-2'>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            name='email'
            placeholder='Enter your email here'
          />
        </div>

        {/* LOGIN BUTTON */}
        <div className='flex flex-col items-center'>
          <button className='w-full btn btn-primary'>Password Reset</button>
        </div>

        <div className='flex justify-center'>
          <a className='anchor anchor-primary text-gray-2'>Back to login</a>
        </div>
      </form>
    </div>
  );
}
