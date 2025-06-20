import { Button } from '@/components/ui/button';

export default function Main() {
  return (
    <main className='flex flex-col p-24'>
      <div className='flex flex-col gap-6'>
        <Button>
          <a href='/sign-up'>Sign-Up Page</a>
        </Button>

        <Button>
          <a href='/sign-in'>Sign-In Page</a>
        </Button>

        <Button>
          <a href='/user'>User Dashboard Page</a>
        </Button>
      </div>
    </main>
  );
}
