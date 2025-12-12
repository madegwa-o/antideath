"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import {GlobeToMapTransform} from "@/components/globe2map";


export default function FintechQuizGame() {


    return (
        <section className="relative min-h-screen py-20 px-4 overflow-hidden flex items-center">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-slate-400/5 to-slate-500/5 rounded-full blur-3xl opacity-40" />
                <div className="absolute -top-32 left-1/3 w-96 h-96 bg-gradient-to-br from-slate-300/5 to-slate-400/5 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="max-w-6xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <div className="inline-block mb-4 px-3 py-1 bg-muted rounded-full border border-border/50">
                            <p className="text-xs text-muted-foreground font-medium">New: Map path finder now available</p>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
                            <span className="text-foreground"> We&#39;ll Find</span>
                            <br />
                            <span className="text-foreground"> You.</span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                                    Anti-Death
                                  </span>
                            <br />
                        </h1>

                        <p className="text-lg text-foreground/70 mb-8 max-w-xl leading-relaxed">Learn how we measure your M-pesa Familiarity by taking our test.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="bg-foreground text-background hover:bg-foreground/90 text-base h-12 px-8"
                            >
                                Get Started →
                            </Button>

                            <Link href="/docs">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-base h-12 px-8 border-border/50 hover:bg-muted bg-transparent"
                                >
                                    Dashboard
                                </Button>
                            </Link>
                        </div>

                     
                    </div>

                    <GlobeToMapTransform />
                </div>
            </div>
        </section>
    )
}
