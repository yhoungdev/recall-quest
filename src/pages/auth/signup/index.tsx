import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CountrySelector } from "@/components/misc/CountrySelector";
import MainLayout from "@/layouts/mainLayout";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaApple, FaGoogle } from "react-icons/fa6";
import { useRouter } from "next/router";
import { supabase } from '@/lib/supabase';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from "react";

const signupSchema = Yup.object().shape({
  country: Yup.string()
    .required('Please select your country'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});

export default function SignUp() {
  const router = useRouter();
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      country: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signupSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setError("");
      try {
        const { data, error } = await supabase.auth.signUp({
          email: values.email,
          password: values.password,
          options: {
            data: {
              country: values.country,
            }
          }
        });

        if (error) throw error;

        if (data) {
          router.push('/setup');
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-md space-y-8">
          <h1 className="text-2xl font-bold text-center text-white">
            CREATE ACCOUNT
          </h1>

          {error && (
            <div className="bg-red-500/20 text-red-200 p-3 rounded-md text-center">
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={formik.handleSubmit}>
            <div className="space-y-1">
              <CountrySelector 
                onSelect={(value) => formik.setFieldValue('country', value)} 
              />
              {formik.touched.country && formik.errors.country && (
                <div className="text-red-400 text-sm">{formik.errors.country}</div>
              )}
            </div>

            <div className="space-y-1">
              <Input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full bg-white/20 text-white placeholder:text-white/70 border-none"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-400 text-sm">{formik.errors.email}</div>
              )}
            </div>

            <div className="space-y-1">
              <Input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full bg-white/20 text-white placeholder:text-white/70 border-none"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-400 text-sm">{formik.errors.password}</div>
              )}
            </div>

            <div className="space-y-1">
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full bg-white/20 text-white placeholder:text-white/70 border-none"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <div className="text-red-400 text-sm">{formik.errors.confirmPassword}</div>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full bg-teal-400 hover:bg-teal-500 text-white"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? 'Creating Account...' : 'Sign up'}
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
          Already have an account?{" "}
          <Link href="/auth/login" className="font-bold">
            Log in
          </Link>
        </p>
      </div>
    </div>
    </MainLayout>
  );
}