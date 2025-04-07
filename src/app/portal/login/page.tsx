import LoginForm from '@/modules/auth/components/login-form';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-6 bg-gray-100">
      <div className="form-container">
        <LoginForm />
      </div>
    </main>
  );
}
