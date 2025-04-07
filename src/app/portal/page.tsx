import UsersList from '@/modules/users/components/users-list';
import Link from 'next/link';

export default function PortalPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="form-container space-y-6">
        <h1 className="text-2xl font-bold">Página do Portal</h1>

        <div className="text-left">
          <UsersList />
        </div>

        <Link
          href="/api/logout"
          className="block w-full bg-red-600 text-white text-center py-2 rounded-md font-semibold hover:bg-red-700 transition"
        >
          Logout
        </Link>
      </div>
    </main>
  );
}
