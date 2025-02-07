import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MainLayout from "@/layouts/mainLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaFacebookF } from "react-icons/fa";
import { FaApple, FaGoogle } from "react-icons/fa6";
import { FormEvent } from "react";
export default function SignUp() {
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push('/setup');
  };

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 ">
        <div className="w-full max-w-md space-y-8">
          <h1 className="text-2xl font-bold text-center text-white">
            LOGIN
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              className="w-full bg-white/20 text-white placeholder:text-white/70 border-none"
            />
            <Input
              type="password"
              placeholder="Password"
              className="w-full bg-white/20 text-white placeholder:text-white/70 border-none"
            />

            <Button type="submit" className="w-full bg-teal-400 hover:bg-teal-500 text-white">
              Sign In
            </Button>
          </form>

        <div className="text-center text-white">
          <p>OR</p>
        </div>

        <div className="flex justify-center space-x-6">
          <Button
            variant="ghost"
            className="rounded-full bg-white/20 hover:bg-white/30 text-white p-3 h-12 w-12"
          >
            <FaFacebookF className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            className="rounded-full bg-white/20 hover:bg-white/30 text-white p-3 h-12 w-12"
          >
            <FaApple className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            className="rounded-full bg-white/20 hover:bg-white/30 text-white p-3 h-12 w-12"
          >
            <FaGoogle className="h-5 w-5" />
          </Button>
        </div>

        <p className="text-center text-white">
          Don't have an account ?{" "}
          <Link href="/auth/signup" className="font-bold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
    </MainLayout>
  );
}