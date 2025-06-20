import Header from '@/components/landing-page/header';
import Main from '@/components/landing-page/main';

export default function LandingPage() {
  return (
    <div className='min-h-screen flex flex-col items-center'>
      <Header />
      <Main />
    </div>
  );
}
