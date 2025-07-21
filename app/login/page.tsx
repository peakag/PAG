"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../components/AuthProvider";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const { login, loading } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const { error } = await login(email, password);
    if (error) {
      setError(error);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative">
      {/* Back to Home Button */}
      <motion.a
        href="/"
        className="absolute top-8 left-8 inline-flex items-center gap-2 text-[#4169E1] hover:text-blue-300 transition-colors duration-200 text-base font-medium z-10"
        whileHover={{ x: -4 }}
        transition={{ duration: 0.2 }}
        aria-label="Back to Home"
        style={{ textDecoration: 'none' }}
      >
        <ArrowLeft size={20} />
        <span>Back to Home</span>
      </motion.a>
      <div className="w-full max-w-md p-8 rounded-2xl border" style={{ borderColor: "rgba(255,255,255,0.08)", background: "#111" }}>
        <div className="flex flex-col items-center mb-8">
          <Image src="/pag-logo.png" alt="Peak Automation Group" width={48} height={48} className="mb-2" />
          <span className="text-white text-lg font-semibold tracking-wide">Peak Automation Group</span>
          <span className="text-[#4169E1] text-base font-medium mt-1">Client Portal</span>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="bg-black border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoFocus
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-black border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          {error && <div className="text-red-400 text-sm text-center">{error}</div>}
          <button
            type="submit"
            className="bg-[#4169E1] text-white font-semibold py-3 rounded transition hover:bg-blue-700 disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
} 