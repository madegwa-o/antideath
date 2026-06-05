"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ResearchPage() {
    return (
        <main className="w-full bg-white text-[#0a0a0a] font-sans overflow-x-hidden">

            {/* ── HERO ── */}
            <section className="px-8 md:px-16 lg:px-24 py-28 md:py-40 border-b border-neutral-100">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-5 font-medium">
                        Research & Data
                    </p>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0a0a0a] leading-[1.05] tracking-tight mb-6">
                        Evidence-based<br />road safety.
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-500 mb-8 leading-relaxed max-w-2xl">
                        Our research foundation drives every design decision. We combine epidemiological data, field testing, and real-world impact measurements to build systems that save lives.
                    </p>
                </div>
            </section>

            {/* ── KEY FINDINGS ── */}
            <section className="px-8 md:px-16 lg:px-24 py-28 md:py-40 bg-[#f7f7f5] border-b border-neutral-100">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-5 font-medium">
                        Kenya's Road Safety Crisis
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-16 max-w-lg">
                        The data that drives our mission.
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                stat: "4,634",
                                title: "Reported Road Deaths (2023)",
                                description: "NTSA data. Actual estimated deaths: ~12,000. The gap reveals a critical data collection challenge that AntiDeath's real-time detection system helps solve.",
                            },
                            {
                                stat: "45%",
                                title: "Pedestrian Fatality Rate",
                                description: "Pedestrians are Kenya's highest-risk group. Motorcyclists (boda bodas) are second. Our system detects collisions involving all road users.",
                            },
                            {
                                stat: "60 min",
                                title: "Average Rural Response Time",
                                description: "In rural areas, emergency services take 45–60+ minutes to arrive. Our <2 second detection enables immediate dispatch coordination.",
                            },
                            {
                                stat: "5%",
                                title: "Economic Cost",
                                description: "Road crashes cost Kenya approximately 5% of GDP annually. That's billions lost to preventable deaths, injuries, and economic disruption.",
                            },
                        ].map(({ stat, title, description }, i) => (
                            <div
                                key={i}
                                className="border border-neutral-200 rounded-2xl p-8 md:p-10 bg-white hover:border-neutral-300 transition-colors"
                            >
                                <p className="text-5xl md:text-6xl font-bold text-[#0a0a0a] mb-3">{stat}</p>
                                <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">{title}</h3>
                                <p className="text-neutral-500 leading-relaxed">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── NRSAP ALIGNMENT ── */}
            <section className="px-8 md:px-16 lg:px-24 py-28 md:py-40 border-b border-neutral-100">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-5 font-medium">
                        Supporting Kenya's 8 Strategic Priorities
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-16 max-w-lg">
                        Aligned with NRSAP 2024–2028.
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {[
                            {
                                priority: "Post-Crash Response",
                                how: "Our emergency detection system provides sub-2-second alerts to dispatch centers, eliminating delays in critical response windows.",
                            },
                            {
                                priority: "Data & Monitoring",
                                how: "Real-time crash detection builds the national database NRSAP envisions. Geolocation and severity data inform ongoing interventions.",
                            },
                            {
                                priority: "Risk Targeting",
                                how: "We deploy to NRSAP's identified high-risk corridors and urban hotspots, concentrating resources where fatalities are highest.",
                            },
                            {
                                priority: "Enforcement Support",
                                how: "Behavior change campaigns and data insights support driver training, licensing, and speeding/drunk driving enforcement.",
                            },
                            {
                                priority: "Infrastructure Safety",
                                how: "Crash hotspot data informs Safe System road design recommendations in partnership with county governments.",
                            },
                            {
                                priority: "Funding Efficiency",
                                how: "Our open-hardware model reduces costs, enabling governments to allocate road safety budgets further under NRSAP funding priorities.",
                            },
                        ].map(({ priority, how }, i) => (
                            <div key={i} className="border border-neutral-200 rounded-2xl p-6 md:p-8 bg-white hover:border-neutral-300 transition-colors">
                                <h3 className="text-lg font-bold text-[#0a0a0a] mb-3">{priority}</h3>
                                <p className="text-neutral-500 leading-relaxed text-sm">{how}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-[#f7f7f5] border border-neutral-200 rounded-2xl p-8 md:p-10">
                        <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 font-medium mb-3">The Vision</p>
                        <p className="text-lg text-[#0a0a0a] leading-relaxed">
                            Kenya's vision is "<span className="font-semibold">safe roads for all users</span>" — eliminating fatal and serious injuries. AntiDeath's technology is purpose-built to be a key enabler of this vision, working in concert with the 8 national strategic priorities that guide Kenya's road safety transformation through 2030.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── RESEARCH AREAS ── */}
            <section className="px-8 md:px-16 lg:px-24 py-28 md:py-40 border-b border-neutral-100">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-5 font-medium">
                        Research Domains
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-16 max-w-lg">
                        Multidisciplinary approach.
                    </h2>

                    <div className="space-y-0 divide-y divide-neutral-100">
                        {[
                            {
                                domain: "Emergency Medicine",
                                description: "Understanding optimal pre-hospital protocols and survival metrics for collision trauma. We partner with trauma surgeons and ER specialists.",
                                focus: "Response timing, critical interventions, patient outcomes",
                            },
                            {
                                domain: "Hardware & IoT",
                                description: "Developing low-cost, reliable collision detection sensors for resource-constrained environments. Our sensors operate in harsh conditions.",
                                focus: "Impact detection algorithms, 4G reliability, battery optimization",
                            },
                            {
                                domain: "Computer Vision & AI",
                                description: "Real-time hazard detection using YOLO object detection. Phase 2 vision systems enable vehicle-to-vehicle and vehicle-to-infrastructure awareness.",
                                focus: "Object detection, latency optimization, edge deployment",
                            },
                            {
                                domain: "Geographic Information Systems",
                                description: "Mapping high-risk corridors and optimizing dispatch routing. Our GIS models predict where accidents are most likely to occur.",
                                focus: "Hotspot analysis, routing optimization, predictive modeling",
                            },
                        ].map(({ domain, description, focus }, i) => (
                            <div key={i} className="py-10 group">
                                <div className="flex items-start justify-between gap-6 md:gap-12">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-[#0a0a0a] mb-3">{domain}</h3>
                                        <p className="text-neutral-500 leading-relaxed mb-4 max-w-2xl">{description}</p>
                                        <p className="text-sm text-neutral-400">
                                            <span className="font-semibold">Focus areas:</span> {focus}
                                        </p>
                                    </div>
                                    <div className="hidden md:flex flex-shrink-0 text-4xl font-bold text-neutral-100 group-hover:text-neutral-200 transition-colors mt-1">
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PUBLICATIONS ── */}
            <section className="px-8 md:px-16 lg:px-24 py-28 md:py-40 bg-[#f7f7f5] border-b border-neutral-100">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-5 font-medium">
                        Publications
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-16 max-w-lg">
                        Peer-reviewed research.
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Emergency Detection Systems in Low-Resource Settings",
                                authors: "Ogada et al., 2024",
                                journal: "Lancet Global Health",
                                status: "Published",
                                statusColor: "bg-emerald-100 text-emerald-700",
                            },
                            {
                                title: "Real-time Collision Detection via Accelerometer Fusion",
                                authors: "Kipchoge & Team, 2024",
                                journal: "IEEE Sensors Journal",
                                status: "Published",
                                statusColor: "bg-emerald-100 text-emerald-700",
                            },
                            {
                                title: "LiDAR-based Hazard Prediction for Autonomous Response",
                                authors: "Kinyanjui et al., 2025",
                                journal: "Nature Machine Intelligence",
                                status: "Under Review",
                                statusColor: "bg-amber-100 text-amber-700",
                            },
                            {
                                title: "Geographic Disparities in Emergency Response Times",
                                authors: "Okoro & Collaborators, 2025",
                                journal: "Health Affairs",
                                status: "In Press",
                                statusColor: "bg-blue-100 text-blue-700",
                            },
                        ].map(({ title, authors, journal, status, statusColor }, i) => (
                            <div
                                key={i}
                                className="border border-neutral-200 rounded-2xl p-6 md:p-8 bg-white hover:border-neutral-300 transition-colors"
                            >
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <h3 className="text-lg font-bold text-[#0a0a0a] leading-tight flex-1">{title}</h3>
                                    <span className={`text-xs px-3 py-1 rounded-full font-medium flex-shrink-0 ${statusColor}`}>
                                        {status}
                                    </span>
                                </div>
                                <p className="text-sm text-neutral-500 mb-2">{authors}</p>
                                <p className="text-sm font-medium text-neutral-400">{journal}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── COLLABORATORS ── */}
            <section className="px-8 md:px-16 lg:px-24 py-28 md:py-40 border-b border-neutral-100">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-5 font-medium">
                        Partners & Collaborators
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-16 max-w-lg">
                        Building with experts.
                    </h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            "University of Nairobi — Biomedical Engineering",
                            "Kenyatta National Hospital — Trauma Center",
                            "Kenya Road Safety Authority — Policy & Deployment",
                            "MIT D-Lab — Hardware & Systems Design",
                            "Imperial College London — Computer Vision Research",
                            "African Federation of Road Safety Associations — Regional Coordination",
                        ].map((partner, i) => (
                            <div
                                key={i}
                                className="border border-neutral-200 rounded-2xl px-6 py-5 hover:border-neutral-300 hover:bg-neutral-50 transition-all cursor-default"
                            >
                                <p className="text-sm font-semibold text-[#0a0a0a]">{partner}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="px-8 md:px-16 lg:px-24 py-28 md:py-40">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <div>
                        <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-5 font-medium">
                            Get Involved
                        </p>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0a0a0a] leading-tight">
                            Contribute to<br />the research.
                        </h2>
                    </div>
                    <div className="flex flex-col gap-4 md:items-end">
                        <p className="text-neutral-400 max-w-xs md:text-right">
                            We welcome partnerships, data sharing agreements, and field study proposals.
                        </p>
                        <a href="mailto:research@antideath.io?subject=Research%20Partnership">
                            <button className="h-14 px-10 bg-[#0a0a0a] text-white text-sm font-semibold rounded-full hover:bg-neutral-800 transition-colors flex items-center gap-2">
                                Contact Research Team
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </a>
                    </div>
                </div>
            </section>

        </main>
    )
}
