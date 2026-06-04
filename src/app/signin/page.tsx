"use client"

import type React from "react"
import { signIn, useSession } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { AlertCircle, Loader2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function SignInPage() {
    const { data: session, status } = useSession()
    const router = useRouter()
    const searchParams = useSearchParams()
    const [isLoading, setIsLoading] = useState(false)
    const [isCredentialsLoading, setIsCredentialsLoading] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const callbackUrl = searchParams.get("callbackUrl") || "/"

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (status === "authenticated" && session) {
            router.push(callbackUrl)
        }
    }, [session, status, router, callbackUrl])

    const handleGoogleSignIn = async () => {
        setIsLoading(true)
        setError(null)
        try {
            await signIn("google", { callbackUrl })
        } catch (error) {
            console.error("Sign in error:", error)
            setError("Failed to sign in with Google. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    const handleCredentialsSignIn = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsCredentialsLoading(true)
        setError(null)

        try {
            const result = await signIn("credentials", {
                email,
                password,
                redirect: false,
            })

            if (result?.error) {
                setError("Invalid email or password. Please try again.")
            } else if (result?.ok) {
                router.push(callbackUrl)
            }
        } catch (error) {
            console.error("Sign in error:", error)
            setError("An error occurred. Please try again.")
        } finally {
            setIsCredentialsLoading(false)
        }
    }

    if (!mounted || status === "loading") {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white text-[#0a0a0a]">
                <Loader2 className="h-8 w-8 animate-spin text-[#0a0a0a]" />
            </div>
        )
    }

    if (session) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white text-[#0a0a0a]">
                <div className="text-center">
                    <Loader2 className="h-8 w-8 animate-spin text-[#0a0a0a] mx-auto mb-4" />
                    <p className="text-neutral-500">Redirecting...</p>
                </div>
            </div>
        )
    }

    return (
        <main className="min-h-screen w-full bg-white text-[#0a0a0a] font-sans flex items-center justify-center px-8 py-12">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="mb-12 text-center">
                    <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-3 font-medium">
                        Join the Movement
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-[#0a0a0a] mb-4">
                        Save Lives.<br />Together.
                    </h1>
                    <p className="text-lg text-neutral-500 leading-relaxed max-w-sm mx-auto">
                        Access your AntiDeath dashboard to track emergency detection, manage hardware, and monitor road safety impact.
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-6">
                    {error && (
                        <Alert variant="destructive" className="bg-red-50 border-red-200">
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription className="text-red-800">{error}</AlertDescription>
                        </Alert>
                    )}

                    <button
                        onClick={handleGoogleSignIn}
                        disabled={isLoading}
                        className="w-full h-12 px-8 border border-neutral-200 text-[#0a0a0a] text-sm font-semibold rounded-full hover:border-neutral-300 hover:bg-neutral-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Signing in...
                            </>
                        ) : (
                            <>
                                <svg className="h-4 w-4" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    />
                                </svg>
                                Continue with Google
                            </>
                        )}
                    </button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <Separator className="bg-neutral-100" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-3 text-neutral-400 font-medium">Or continue with email</span>
                        </div>
                    </div>

                    <form onSubmit={handleCredentialsSignIn} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium text-[#0a0a0a]">
                                Email Address
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={isCredentialsLoading}
                                className="h-11 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:ring-0"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-sm font-medium text-[#0a0a0a]">
                                Password
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                disabled={isCredentialsLoading}
                                className="h-11 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:ring-0"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isCredentialsLoading}
                            className="w-full h-12 px-8 bg-[#0a0a0a] text-white text-sm font-semibold rounded-full hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
                        >
                            {isCredentialsLoading ? (
                                <>
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                "Sign in with Email"
                            )}
                        </button>
                    </form>

                    <p className="text-center text-neutral-400 text-sm leading-relaxed">
                        New to AntiDeath? Set up your account and receive hardware installation instructions.
                    </p>
                </div>
            </div>
        </main>
    )
}
