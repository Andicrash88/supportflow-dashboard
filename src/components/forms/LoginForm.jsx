import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LockKeyhole, Mail } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email."),
  password: z.string().min(8, "Password must be at least 8 characters."),
});

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "avery@supportflow.app",
      password: "password123",
    },
  });

  const onSubmit = (values) => {
    // Intentional placeholder until auth flows are connected to a backend.
    console.log("Login payload", values);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">Work email</span>
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
          <Mail className="h-4 w-4 text-slate-400" />
          <input
            {...register("email")}
            className="w-full border-none bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
            placeholder="name@company.com"
            type="email"
          />
        </div>
        {errors.email ? <span className="mt-2 block text-sm text-rose-600">{errors.email.message}</span> : null}
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">Password</span>
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
          <LockKeyhole className="h-4 w-4 text-slate-400" />
          <input
            {...register("password")}
            className="w-full border-none bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
            placeholder="Enter your password"
            type="password"
          />
        </div>
        {errors.password ? <span className="mt-2 block text-sm text-rose-600">{errors.password.message}</span> : null}
      </label>

      <button
        className="w-full rounded-2xl bg-brand-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
        type="submit"
      >
        Sign in
      </button>
    </form>
  );
}
