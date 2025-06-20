'use client';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';

const formSchema = z.object({
  email: z.string(),
  password: z.string(),
  'keep-me-signed-in': z.boolean().default(true).optional(),
});

export default function AuthLoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(values, null, 2)}</code>
        </pre>,
      );
    } catch (error) {
      console.error('Form submission error', error);
      toast.error('Failed to submit the form. Please try again.');
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8 max-w-3xl mx-auto py-10'
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  placeholder='john.doe@example.com'
                  type='email'
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <div className='flex justify-between'>
                <FormLabel>Password</FormLabel>
                <Link
                  href={'/sign-in/forgot-password'}
                  className='text-xs text-primary'
                >
                  Forgot Password?
                </Link>
              </div>
              <FormControl>
                <Input
                  placeholder='Enter your password here'
                  type='password'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='keep-me-signed-in'
          render={({ field }) => (
            <FormItem className='flex flex-row items-start'>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className='space-y-1 leading-none'>
                <FormLabel className='text-accent-foreground'>
                  Keep me signed in
                </FormLabel>

                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        {/* Login Button */}
        <Button type='submit' className='w-full hover:cursor-pointer'>
          Login
        </Button>

        <div className='flex justify-center'>
          <p className='text-muted-foreground'>or sign in with</p>
        </div>
        <Button className='w-full flex gap-2'>
          <span className='italic'>&le;icon&ge;</span>
          Continue with Google
        </Button>
      </form>
    </Form>
  );
}
