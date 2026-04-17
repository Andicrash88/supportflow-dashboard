import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, LoaderCircle, LockKeyhole, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useAuth } from "@/hooks/useAuth";

const loginSchema = z.object({
  email: z.string().trim().email("Enter a valid work email."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

export function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isLoading } = useAuth();
  const from = location.state?.from?.pathname || "/dashboard";
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "avery@supportflow.app",
      password: "support",
    },
  });

  const onSubmit = async (values) => {
    try {
      await login(values);
      navigate(from, { replace: true });
    } catch {
      setError("root", {
        message: "We couldn't start your session. Please try again.",
      });
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Work email</span>
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-brand-400 focus-within:ring-4 focus-within:ring-brand-100 dark:border-slate-700 dark:bg-slate-900 dark:focus-within:border-brand-500 dark:focus-within:ring-brand-900/40">
          <Mail className="h-4 w-4 text-slate-400 dark:text-slate-500" />
          <input
            {...register("email")}
            autoComplete="email"
            className="w-full border-none bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-slate-100 dark:placeholder:text-slate-500"
            placeholder="name@company.com"
            type="email"
          />
        </div>
        {errors.email ? <span className="mt-2 block text-sm text-rose-600">{errors.email.message}</span> : null}
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Password</span>
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-brand-400 focus-within:ring-4 focus-within:ring-brand-100 dark:border-slate-700 dark:bg-slate-900 dark:focus-within:border-brand-500 dark:focus-within:ring-brand-900/40">
          <LockKeyhole className="h-4 w-4 text-slate-400 dark:text-slate-500" />
          <input
            {...register("password")}
            autoComplete="current-password"
            className="w-full border-none bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-slate-100 dark:placeholder:text-slate-500"
            placeholder="Enter your password"
            type="password"
          />
        </div>
        {errors.password ? <span className="mt-2 block text-sm text-rose-600">{errors.password.message}</span> : null}
      </label>

      {errors.root ? (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:border-rose-900/60 dark:bg-rose-950/40 dark:text-rose-300">
          {errors.root.message}
        </div>
      ) : null}

      <button
        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-800 disabled:cursor-not-allowed disabled:bg-brand-400"
        disabled={isLoading}
        type="submit"
      >
        {isLoading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
        {isLoading ? "Signing in..." : "Sign in to SupportFlow"}
      </button>
    </form>
  );
}
