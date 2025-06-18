import { Google } from "@mui/icons-material";
import { Eye } from "lucide-react";

export default function SignInPage() {
  return (
    <div className='h-full flex flex-col items-center'>
      <div className='min-w-80'>
        <form action='' className='flex flex-col gap-3'>
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
            <div className='flex justify-between items-center'>
              <label htmlFor='password'>Password</label>
              <a href="#" className="anchor anchor-primary text-xs">Forgot Password?</a>
            </div>
            <div className="flex justify-between items-center border rounded-lg">
              <input
                type='password'
                name='password'
                placeholder='Enter your password here'
                className="border-none"
              >  
              </input>
              <div className="px-4 text-black/50 hover:text-black/80 cursor-pointer transition-colors duration-200">
                <Eye />
              </div>
            </div>
          </div>

          <div className='flex gap-2 text-md'>
            <input
              type='checkbox'
              name='keep-signed-in'
              className='text-green-1'
            />
            <label htmlFor='keep-signed-in'>Keep me signed in</label>
          </div>

          {/* LOGIN BUTTON */}
          <div className='flex flex-col items-center'>
            <button className='w-full btn btn-primary'>Login</button>
          </div>

          <div className='flex justify-center'>
            <p>or sign in with</p>
          </div>

          <div>
            <button className='w-full flex gap-2 btn btn-primary bg-[#e4e7eb] text-black font-normal justify-center'>
              <span className='font-extrabold text-black/30 flex items-center'>
                <Google />
                </span>Continue with Google
            </button>
          </div>

          <div className='flex justify-center'>
            <a className='anchor anchor-primary'>Create an account</a>
          </div>
        </form>
      </div>
    </div>
  );
}
