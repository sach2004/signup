export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <main className="flex flex-col items-center gap-8">
        <h1 className="text-2xl font-bold text-gray-800">Welcome to Tracer Suite</h1>
        
        <div className="flex gap-4 flex-col sm:flex-row">
          <a
            href="/api/auth/signin"
            className="rounded-full bg-gray-200 text-black px-6 py-3 border border-gray-300 hover:bg-gray-300 transition-colors text-center min-w-[120px]"
          >
            Login
          </a>
          <a
            href="/api/auth/signup"
            className="rounded-full bg-gray-200 text-black px-6 py-3 border border-gray-300 hover:bg-gray-300 transition-colors text-center min-w-[120px]"
          >
            Sign Up
          </a>
        </div>
      </main>
    </div>
  );
}