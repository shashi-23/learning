import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Dark Mode Example</h1>
        <p className="text-lg">
          This text adapts based on your system’s color scheme preference.
        </p>
      </div>
    </div>
  );
}