"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
    return (
        <main className="w-full bg-background">
            {/* Hero Section with Video */}
            <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 ">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/home.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
                        We&apos;ll Find You.
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
                        Real-time accident detection and location. When every second counts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/journeys">
                            <Button
                                size="lg"
                                className="bg-white text-black hover:bg-white/90 text-base h-12 px-8 font-semibold"
                            >
                                Get Started
                            </Button>
                        </Link>
                        <Link href="/docs">
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-white border-white/30 hover:bg-white/10 text-base h-12 px-8 font-semibold"
                            >
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="bg-background px-4 py-24 md:py-32">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                            Our Mission
                        </h2>
                        <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
                            Every year, thousands of lives are lost in vehicle accidents. We&apos;re here to change that. By combining cutting-edge detection technology with real-time location services, we&apos;re making it possible to get help exactly when and where it&apos;s needed most.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-black/50 px-4 py-24 md:py-32 border-t border-white/10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div>
                            <h3 className="text-5xl md:text-6xl font-bold text-white mb-4">1.2M+</h3>
                            <p className="text-lg text-white/60">Lives lost annually to road accidents</p>
                        </div>
                        <div>
                            <h3 className="text-5xl md:text-6xl font-bold text-white mb-4">&lt;2s</h3>
                            <p className="text-lg text-white/60">Average detection time for emergencies</p>
                        </div>
                        <div>
                            <h3 className="text-5xl md:text-6xl font-bold text-white mb-4">100%</h3>
                            <p className="text-lg text-white/60">Location accuracy in deployed areas</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-background px-4 py-24 md:py-32">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-16 tracking-tight">
                        How It Works
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="border border-white/10 p-8 rounded-lg bg-black/20 hover:bg-black/30 transition-colors">
                            <div className="text-5xl font-bold text-white mb-4">1</div>
                            <h3 className="text-2xl font-bold text-white mb-4">Detection</h3>
                            <p className="text-white/60">Advanced sensors detect collision impact with millisecond precision</p>
                        </div>
                        <div className="border border-white/10 p-8 rounded-lg bg-black/20 hover:bg-black/30 transition-colors">
                            <div className="text-5xl font-bold text-white mb-4">2</div>
                            <h3 className="text-2xl font-bold text-white mb-4">Localization</h3>
                            <p className="text-white/60">GPS and cellular triangulation pinpoint exact location instantly</p>
                        </div>
                        <div className="border border-white/10 p-8 rounded-lg bg-black/20 hover:bg-black/30 transition-colors">
                            <div className="text-5xl font-bold text-white mb-4">3</div>
                            <h3 className="text-2xl font-bold text-white mb-4">Response</h3>
                            <p className="text-white/60">Emergency services receive data and dispatch immediately</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coverage Section */}
            <section className="bg-black/50 px-4 py-24 md:py-32 border-t border-white/10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-16 tracking-tight">
                        Available Now
                    </h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            "San Francisco Bay Area",
                            "Los Angeles",
                            "New York",
                            "Chicago",
                            "Houston",
                            "Phoenix",
                            "Atlanta",
                            "Dallas",
                            "Seattle",
                        ].map((city) => (
                            <div
                                key={city}
                                className="border border-white/10 p-6 rounded-lg bg-white/5 text-white/80"
                            >
                                {city}
                            </div>
                        ))}
                    </div>
                    <p className="text-white/60 mt-8">Expanding to 20+ new cities in 2025</p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-background px-4 py-24 md:py-32">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                        Ready to be found?
                    </h2>
                    <p className="text-xl text-white/70 mb-12">
                        Join thousands of drivers who trust us with their safety.
                    </p>
                    <Link href="/journeys">
                        <Button
                            size="lg"
                            className="bg-white text-black hover:bg-white/90 text-base h-12 px-10 font-semibold"
                        >
                            Get Started Now →
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    )
}
