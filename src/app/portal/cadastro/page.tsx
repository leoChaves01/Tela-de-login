import SignUpForm from '@/modules/auth/components/sign-up-form';

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-6 bg-gray-100">
      <div className="form-container">
        <SignUpForm />
      </div>
    </main>
  );
}
