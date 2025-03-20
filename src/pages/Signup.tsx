import { AuthForm } from '../components/AuthForm';

export function Signup() {
  return (
    <div className="min-h-screen bg-orange-200 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <AuthForm mode="signup" />
    </div>
  );
}