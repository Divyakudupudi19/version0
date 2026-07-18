'use client';

import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login request
    setTimeout(() => {
      console.log('Login attempt:', { email, password, rememberMe });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50 dark:to-blue-950/20 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-lg">
              <Lock className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted-foreground text-sm">Sign in to your account to continue</p>
        </div>

        {/* Login Card */}
        <div className="bg-card rounded-2xl shadow-xl p-8 border border-border/50">
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-2.5 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-foreground mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2.5 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border border-input accent-primary cursor-pointer"
                />
                <span className="ml-2.5 text-sm text-foreground group-hover:text-primary transition-colors">
                  Remember me
                </span>
              </label>
              <a
                href="#"
                className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 mt-6 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  <span>Signing in...</span>
                </>
              ) : (
                'Sign in'
              )}
            </button>

            {/* Divider */}
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border/50" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-card text-muted-foreground">New user?</span>
              </div>
            </div>

            {/* Sign Up Link */}
            <button
              type="button"
              className="w-full border-2 border-border hover:border-primary text-foreground hover:text-primary py-2.5 rounded-lg font-semibold transition-all duration-200"
            >
              Create an account
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-xs text-muted-foreground mt-6">
            By signing in, you agree to our{' '}
            <a href="#" className="text-primary hover:underline">
              Terms of Service
            </a>
            {' '}and{' '}
            <a href="#" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-8 space-y-3">
          <p className="text-sm text-muted-foreground">Trusted by millions of users worldwide</p>
          <div className="flex items-center justify-center gap-6">
            <div className="h-8 px-3 rounded-full bg-card border border-border/50 flex items-center text-xs text-muted-foreground font-medium">
              4.9★
            </div>
            <div className="h-8 px-3 rounded-full bg-card border border-border/50 flex items-center text-xs text-muted-foreground font-medium">
              2M+ Users
            </div>
            <div className="h-8 px-3 rounded-full bg-card border border-border/50 flex items-center text-xs text-muted-foreground font-medium">
              99.9% Uptime
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
