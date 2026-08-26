import { Link } from '@/i18n/navigation';

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-8 py-20">
      <h1 className="mb-4 text-4xl font-bold text-text">404</h1>
      <p className="mb-8 text-lg text-text-muted">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="rounded-full bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
      >
        Go Home
      </Link>
    </section>
  );
}
