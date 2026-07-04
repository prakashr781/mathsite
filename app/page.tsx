'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { BookOpen, Calculator, GraduationCap, Sparkles } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState('');

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
      }
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-olive-50 via-accent-lavender to-accent-peach flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Branding */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-olive-600 to-olive-800 rounded-3xl shadow-premium-lg mb-4">
            <Calculator className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-display font-bold text-olive-900 mb-2">
            MathMaster
          </h1>
          <p className="text-olive-600 text-lg">
            Master Mathematics with Confidence
          </p>
        </div>

        {/* Auth Card */}
        <div className="premium-card p-8 animate-slide-up">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-accent-mustard" />
            <h2 className="text-2xl font-bold text-olive-900">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h2>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-olive-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-olive-200 focus:border-olive-600 focus:outline-none transition-colors"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-olive-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-olive-200 focus:border-olive-600 focus:outline-none transition-colors"
                placeholder="••••••••"
                required
                minLength={6}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  {isSignUp ? (
                    <>
                      <GraduationCap className="w-5 h-5" />
                      Start Learning
                    </>
                  ) : (
                    <>
                      <BookOpen className="w-5 h-5" />
                      Sign In
                    </>
                  )}
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-olive-600 hover:text-olive-800 font-semibold transition-colors"
            >
              {isSignUp
                ? 'Already have an account? Sign In'
                : "Don't have an account? Sign Up"}
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 grid grid-cols-3 gap-4 animate-fade-in">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-coral/10 rounded-xl mb-2">
              <BookOpen className="w-6 h-6 text-accent-coral" />
            </div>
            <p className="text-sm font-semibold text-olive-700">11 Chapters</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-teal/10 rounded-xl mb-2">
              <Calculator className="w-6 h-6 text-accent-teal" />
            </div>
            <p className="text-sm font-semibold text-olive-700">62 Lessons</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-mustard/10 rounded-xl mb-2">
              <Sparkles className="w-6 h-6 text-accent-mustard" />
            </div>
            <p className="text-sm font-semibold text-olive-700">Certificate</p>
          </div>
        </div>
      </div>
    </div>
  );
}
