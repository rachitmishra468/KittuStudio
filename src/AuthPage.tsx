import { useState } from 'react'

export function AuthPage() {
  const [mode, setMode] = useState<'login' | 'register' | 'forgot'>('login')

  return (
    <div className="mx-auto max-w-xl rounded-[32px] border border-[#ead8cf] bg-[#fffaf7] p-7 dark:border-[#392d2a] dark:bg-[#1d1716]">
      <div className="flex justify-center gap-3 rounded-full bg-[#f6eee8] p-2 dark:bg-[#241d1c]">
        {[
          { key: 'login', label: 'Login' },
          { key: 'register', label: 'Register' },
          { key: 'forgot', label: 'Forgot' },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setMode(tab.key as 'login' | 'register' | 'forgot')}
            className={`rounded-full px-4 py-2 text-sm uppercase tracking-[0.18em] ${
              mode === tab.key ? 'bg-[#201814] text-[#f9efe8] dark:bg-[#f4e9de] dark:text-[#201814]' : 'text-[#473b35] dark:text-[#f1dfd0]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {mode === 'login' && (
        <div className="mt-8 space-y-5">
          <input type="email" placeholder="Email address" className="h-14 w-full rounded-full border border-[#ead7cb] bg-white px-4 text-sm outline-none dark:border-[#3b2d2a] dark:bg-[#251f1d] dark:text-[#f8efe9]" />
          <input type="password" placeholder="Password" className="h-14 w-full rounded-full border border-[#ead7cb] bg-white px-4 text-sm outline-none dark:border-[#3b2d2a] dark:bg-[#251f1d] dark:text-[#f8efe9]" />
          <button type="button" className="h-14 w-full rounded-full bg-[#201814] text-sm font-medium uppercase tracking-[0.18em] text-[#f9efe8] dark:bg-[#f4e9de] dark:text-[#201814]">Login</button>
        </div>
      )}

      {mode === 'register' && (
        <div className="mt-8 space-y-5">
          <input type="text" placeholder="Full name" className="h-14 w-full rounded-full border border-[#ead7cb] bg-white px-4 text-sm outline-none dark:border-[#3b2d2a] dark:bg-[#251f1d] dark:text-[#f8efe9]" />
          <input type="email" placeholder="Email address" className="h-14 w-full rounded-full border border-[#ead7cb] bg-white px-4 text-sm outline-none dark:border-[#3b2d2a] dark:bg-[#251f1d] dark:text-[#f8efe9]" />
          <input type="password" placeholder="Password" className="h-14 w-full rounded-full border border-[#ead7cb] bg-white px-4 text-sm outline-none dark:border-[#3b2d2a] dark:bg-[#251f1d] dark:text-[#f8efe9]" />
          <button type="button" className="h-14 w-full rounded-full bg-[#201814] text-sm font-medium uppercase tracking-[0.18em] text-[#f9efe8] dark:bg-[#f4e9de] dark:text-[#201814]">Create account</button>
        </div>
      )}

      {mode === 'forgot' && (
        <div className="mt-8 space-y-5">
          <input type="email" placeholder="Email address" className="h-14 w-full rounded-full border border-[#ead7cb] bg-white px-4 text-sm outline-none dark:border-[#3b2d2a] dark:bg-[#251f1d] dark:text-[#f8efe9]" />
          <button type="button" className="h-14 w-full rounded-full bg-[#201814] text-sm font-medium uppercase tracking-[0.18em] text-[#f9efe8] dark:bg-[#f4e9de] dark:text-[#201814]">Reset password</button>
        </div>
      )}
    </div>
  )
}
