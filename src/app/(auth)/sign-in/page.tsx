import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AuthLoginForm from '@/components/auth/login-form';
import { Button } from '@/components/ui/button';

export default function SignInPage() {
  return (
    <div className='flex flex-col items-center py-24'>
      <Card className='min-w-96'>
        <CardHeader className='flex flex-col items-center'>
          <CardTitle className='text-2xl'>Sign Up Page</CardTitle>
        </CardHeader>
        <CardContent>
          <AuthLoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
