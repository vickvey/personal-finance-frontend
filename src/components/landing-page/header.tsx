import { ModeToggle } from '@/components/toggle-theme';
import FinTrackTextLogo from '../ui/logos/fin-track-text-logo';

export default function Header() {
  return (
    <header className='w-full flex justify-between bg-accent p-4'>
      <FinTrackTextLogo />
      <ModeToggle />
    </header>
  );
}
