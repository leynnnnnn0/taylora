"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Circle } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "./glowing_effect";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import GridItem from "./grid_item";
import { ContainerScroll } from "./container_scroll_animation";
import { TestimonialsSection } from "./testimonial-with-marquee";
import FooterSection from "./footer";
import { Package, FileText, Wrench, Calendar, DollarSign, Building2, ArrowRight, CheckCircle, Star, Users, TrendingUp, Shield, Zap, BarChart } from 'lucide-react';

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

function Home({
    badge = "Taylora",
    title = "Built Around Your Business, Not the Other Way Around",
    description = "Crafting Exceptional Systems",
}: {
    badge?: string;
    title?: string;
    description?: string;
}) {
    const [gridInView, setGridInView] = useState(false);

const testimonials = [
  {
    author: {
      name: "Early Access Program",
      handle: "@taylora",
      avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=face"
    },
    text: "We’re onboarding our first wave of businesses. If you want a custom-built system that actually fits your workflow, join our early access list — the first few builds are completely free.",
    href: "mailto:youremail@example.com"
  },
  {
    author: {
      name: "Founding Partner Offer",
      handle: "@taylora",
      avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=150&h=150&fit=crop&crop=face"
    },
    text: "We’re looking for forward-thinking businesses to partner with as we grow. Get a tailored system built for your operations at zero cost during our launch phase.",
    href: "mailto:youremail@example.com"
  },
  {
    author: {
      name: "Your Spot Is Open",
      handle: "@founder",
      avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face"
    },
    text: "Be one of Taylora’s first adopters. If your current system holds you back, let’s build one that doesn’t. Early clients get a fully custom solution — 100% free.",
    href: "mailto:youremail@example.com"
  }
]




    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setGridInView(true);
                }
            },
            { threshold: 0.2 }
        );

        const gridSection = document.getElementById('grid-section');
        if (gridSection) {
            observer.observe(gridSection);
        }

        return () => observer.disconnect();
    }, []);

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    const gridItemVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
      <>
        <div className="relative pt-24 min-h-fit w-full flex items-center justify-center overflow-hidden bg-[#030303]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-indigo-500/[0.15]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-rose-500/[0.15]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-violet-500/[0.15]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-amber-500/[0.15]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-cyan-500/[0.15]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
                    >
                        <Circle className="h-2 w-2 fill-rose-500/80" />
                        <span className="text-sm text-white/60 tracking-wide">
                            {badge}
                        </span>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                {title}
                            </span>
                            <br />
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                          {description}
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </div>

        <div id="grid-section" className="relative min-h-fit w-full flex items-center justify-center overflow-hidden bg-[#030303] pt-30">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.03] via-transparent to-cyan-500/[0.03] blur-3xl" />
            
            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.2}
                    width={400}
                    height={100}
                    rotate={-10}
                    gradient="from-violet-500/[0.12]"
                    className="left-[-8%] top-[20%]"
                />
                <ElegantShape
                    delay={0.4}
                    width={350}
                    height={90}
                    rotate={15}
                    gradient="from-cyan-500/[0.12]"
                    className="right-[-5%] top-[60%]"
                />
                <ElegantShape
                    delay={0.3}
                    width={250}
                    height={70}
                    rotate={-20}
                    gradient="from-indigo-500/[0.12]"
                    className="left-[15%] bottom-[10%]"
                />
            </div>
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 max-w-7xl mx-auto auto-rows-fr">
                    <motion.div
                        custom={0}
                        variants={gridItemVariants}
                        initial="hidden"
                        animate={gridInView ? "visible" : "hidden"}
                        className="col-span-1"
                    >
                        <div className="h-full">
                            <GridItem
                                area=""
                                icon={<Box className="h-4 w-4" />}
                                title="Custom Systems Built for You"
                                description="Every business is unique — your software should be too. We design solutions tailored exactly to your workflow."
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        custom={1}
                        variants={gridItemVariants}
                        initial="hidden"
                        animate={gridInView ? "visible" : "hidden"}
                        className="col-span-1"
                    >
                        <div className="h-full">
                            <GridItem
                                area=""
                                icon={<Settings className="h-4 w-4" />}
                                title="Seamless Integration"
                                description="We build systems that work effortlessly with your existing tools, reducing manual work and improving accuracy."
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        custom={2}
                        variants={gridItemVariants}
                        initial="hidden"
                        animate={gridInView ? "visible" : "hidden"}
                        className="col-span-1 md:col-span-2 lg:col-span-1"
                    >
                        <div className="h-full">
                            <GridItem
                                area=""
                                icon={<Lock className="h-4 w-4" />}
                                title="Secure & Reliable"
                                description="Your business data stays safe. We follow modern security practices to keep your operations protected and stable."
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        custom={3}
                        variants={gridItemVariants}
                        initial="hidden"
                        animate={gridInView ? "visible" : "hidden"}
                        className="col-span-1 md:col-span-1 lg:col-span-2"
                    >
                        <div className="h-full">
                            <GridItem
                                area=""
                                icon={<Sparkles className="h-4 w-4" />}
                                title="Designed to Scale"
                                description="Your business won’t stay the same forever, and your system shouldn’t either. Taylora creates technology that expands with your operations, adapts to new challenges, and scales seamlessly without limits."
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        custom={4}
                        variants={gridItemVariants}
                        initial="hidden"
                        animate={gridInView ? "visible" : "hidden"}
                        className="col-span-1"
                    >
                        <div className="h-full">
                            <GridItem
                                area=""
                                icon={<Search className="h-4 w-4" />}
                                title="Deep Business Understanding"
                                description="We take time to understand your exact workflow, challenges, and goals before writing a single line of code."
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>

        <div className="relative flex flex-col overflow-hidden bg-[#030303]">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.03] via-transparent to-amber-500/[0.03] blur-3xl" />
            
            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={500}
                    height={120}
                    rotate={18}
                    gradient="from-rose-500/[0.12]"
                    className="left-[-10%] top-[15%]"
                />
                <ElegantShape
                    delay={0.5}
                    width={400}
                    height={100}
                    rotate={-12}
                    gradient="from-amber-500/[0.12]"
                    className="right-[-8%] top-[50%]"
                />
                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-18}
                    gradient="from-pink-500/[0.12]"
                    className="left-[10%] bottom-[15%]"
                />
            </div>
            
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-black dark:text-white">
                            Unleash the power of <br />
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                Tailored System
                            </span>
                        </h1>
                    </>
                }
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 h-full w-full">
                     <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 w-full rounded-lg overflow-hidden shadow-lg">
        <div className="p-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5">
              <Package className="w-4 h-4 text-blue-400" />
              <span className="text-white font-bold text-xs">StockFlow</span>
            </div>
            <button className="bg-white text-gray-900 px-2.5 py-1 rounded text-[8px] font-semibold">Login</button>
          </div>
          
          <div className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full text-[7px] font-semibold mb-2 inline-block">
            Real-time Inventory Tracking
          </div>
          <h1 className="text-base font-bold text-white mb-1.5 leading-tight">
            Smart Inventory Management Built for Your Business
          </h1>
          <p className="text-gray-400 text-[8px] mb-2.5 leading-relaxed">
            Track stock levels, automate reordering, and manage multiple warehouses with our custom-built solution.
          </p>
          
          <div className="flex gap-2 mb-3">
            <button className="bg-white text-gray-900 px-3 py-1.5 rounded text-[8px] font-semibold hover:bg-gray-100">
              Start Free Trial
            </button>
            <button className="bg-gray-800 text-white px-3 py-1.5 rounded text-[8px] font-semibold hover:bg-gray-700">
              Watch Demo
            </button>
          </div>
          
          {/* Dashboard Preview */}
          <div className="bg-gray-950 rounded-lg p-2 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[7px] text-gray-400">Total Stock Value</span>
              <span className="text-[8px] text-white font-bold">$ 824,444.68</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              <div className="bg-gray-800/50 rounded p-1.5 text-center">
                <div className="text-[7px] text-gray-400">In Stock</div>
                <div className="text-[9px] text-white font-bold">12,547</div>
              </div>
              <div className="bg-gray-800/50 rounded p-1.5 text-center">
                <div className="text-[7px] text-gray-400">Low Stock</div>
                <div className="text-[9px] text-orange-400 font-bold">234</div>
              </div>
              <div className="bg-gray-800/50 rounded p-1.5 text-center">
                <div className="text-[7px] text-gray-400">Out of Stock</div>
                <div className="text-[9px] text-red-400 font-bold">12</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Purchase Orders - Light theme with cards */}
      <div className="bg-white w-full rounded-lg overflow-hidden shadow-sm border-2 border-gray-200">
        <div className="p-3">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-sm font-bold text-gray-900 mb-0.5">Purchase Order System,</div>
              <div className="flex items-center gap-1">
                <span className="text-purple-600 text-xs">📋</span>
                <span className="text-sm font-bold">built for efficiency.</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2 text-[7px] text-purple-600 font-semibold mb-3">
            <span>+2,000 Orders/Month</span>
            <span className="text-gray-400">|</span>
            <span>Trusted by 200+ Companies</span>
          </div>
          
          <p className="text-gray-500 text-[8px] mb-3 leading-relaxed">
            Streamline procurement from request to approval. Vendor management, approval workflows, and spend analytics in one system.
          </p>
          
          {/* Feature Cards Grid */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-purple-100 rounded-lg p-2.5">
              <div className="text-[7px] text-gray-700 mb-1">Automated</div>
              <div className="bg-black text-white px-2.5 py-1 rounded-full text-[8px] font-semibold inline-block">
                Approval Workflow
              </div>
            </div>
            <div className="bg-blue-100 rounded-lg p-2.5">
              <div className="text-[7px] text-gray-700 mb-1">Centralized</div>
              <div className="bg-black text-white px-2.5 py-1 rounded-full text-[8px] font-semibold inline-block">
                Vendor Database
              </div>
            </div>
            <div className="bg-green-100 rounded-lg p-2.5">
              <div className="text-[7px] text-gray-700 mb-1">Real-time</div>
              <div className="bg-black text-white px-2.5 py-1 rounded-full text-[8px] font-semibold inline-block">
                Spend Analytics
              </div>
            </div>
            <div className="bg-orange-100 rounded-lg p-2.5">
              <div className="text-[7px] text-gray-700 mb-1">Digital</div>
              <div className="bg-black text-white px-2.5 py-1 rounded-full text-[8px] font-semibold inline-block">
                Document Storage
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mechanic System - Dark minimalist */}
      <div className="bg-black w-full rounded-lg overflow-hidden shadow-lg hidden md:block">
        <div className="p-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5">
              <Wrench className="w-4 h-4 text-orange-400" />
              <span className="text-white font-bold text-xs">AutoFix Pro</span>
            </div>
            <div className="flex gap-1.5">
              <button className="text-white px-2 py-1 text-[8px]">Login</button>
              <button className="bg-white text-black px-2.5 py-1 rounded text-[8px] font-semibold">Sign Up</button>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-full px-2.5 py-1 inline-flex items-center gap-1.5 mb-3">
            <span className="text-[8px] text-gray-300">Introducing AI-Powered Scheduling</span>
            <span className="text-[8px] text-gray-500">→</span>
          </div>
          
          <h1 className="text-base font-bold text-white mb-1.5 leading-tight">
            Complete Workshop Management for Auto Repair Shops
          </h1>
          <p className="text-gray-400 text-[8px] mb-3 leading-relaxed">
            Job scheduling, parts inventory, customer management, and service history tracking. Everything your workshop needs in one system.
          </p>
          
          <div className="flex gap-2 mb-3">
            <button className="bg-white text-black px-3 py-1.5 rounded text-[8px] font-semibold hover:bg-gray-100">
              Start Free Trial
            </button>
            <button className="text-white px-3 py-1.5 text-[8px] font-semibold hover:text-gray-300">
              Request Demo
            </button>
          </div>
          
          {/* Job Management Interface Mock */}
          <div className="bg-gray-950 rounded-lg border border-gray-800 overflow-hidden hidden md:block">
            <div className="bg-gray-900 px-2 py-1.5 border-b border-gray-800 flex items-center justify-between">
              <span className="text-[8px] text-white font-semibold">Today's Jobs</span>
              <div className="flex gap-1">
                <div className="bg-gray-800 rounded px-1.5 py-0.5 text-[7px] text-gray-300">Active</div>
                <div className="bg-gray-800 rounded px-1.5 py-0.5 text-[7px] text-gray-300">Completed</div>
              </div>
            </div>
            <div className="p-2 space-y-1.5">
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded bg-orange-600 flex items-center justify-center text-[7px] text-white">🔧</div>
                <div className="flex-1">
                  <div className="text-[8px] text-white font-medium">Oil Change - Honda Civic</div>
                  <div className="text-[7px] text-gray-400">Bay 2 • Estimated: 30 min</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Doctor Appointments - Light dashboard */}
      <div className="bg-gray-50 w-full rounded-lg overflow-hidden shadow-sm border border-gray-200 hidden md:block">
        <div className="p-3">
          <div className="text-center mb-3">
            <h1 className="text-base font-bold text-gray-900 mb-1">
              Modern Appointment Scheduling for Healthcare Providers
            </h1>
            <p className="text-gray-500 text-[8px] mb-2">
              Patient portal, automated reminders, EHR integration, and telehealth capabilities. Reduce no-shows by 40%.
            </p>
            <button className="bg-green-600 text-white px-3 py-1 rounded text-[8px] font-semibold">
              Schedule Demo
            </button>
          </div>
          
          {/* Tabs */}
          <div className="flex gap-2 mb-2 text-[7px] border-b border-gray-200 pb-2">
            <span className="text-gray-900 font-semibold">📊 Overview</span>
            <span className="text-gray-400">Appointments</span>
            <span className="text-gray-400">Patients</span>
          </div>
          
          {/* Dashboard Cards */}
          <div className="bg-white rounded-lg border border-gray-200 p-2 mb-2">
            <div className="grid grid-cols-3 gap-2 mb-2">
              <div>
                <div className="text-[7px] text-gray-500 mb-0.5">Today's Appointments</div>
                <div className="text-sm font-bold text-gray-900">24</div>
                <div className="text-[7px] text-green-600">↗ 12%</div>
              </div>
              <div>
                <div className="text-[7px] text-gray-500 mb-0.5">No-Show Rate</div>
                <div className="text-sm font-bold text-gray-900">3.2%</div>
                <div className="text-[7px] text-green-600">↘ 2.1%</div>
              </div>
              <div>
                <div className="text-[7px] text-gray-500 mb-0.5">Avg Wait Time</div>
                <div className="text-sm font-bold text-gray-900">8 min</div>
                <div className="text-[7px] text-green-600">↘ 15%</div>
              </div>
            </div>
            
            {/* Chart placeholder */}
            <div className="h-12 bg-gradient-to-r from-green-100 via-blue-100 to-green-100 rounded"></div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white rounded border border-gray-200 p-2">
              <div className="text-[7px] text-gray-500">New Patients</div>
              <div className="text-xs font-bold text-gray-900">+127</div>
            </div>
            <div className="bg-white rounded border border-gray-200 p-2">
              <div className="text-[7px] text-gray-500">Patient Satisfaction</div>
              <div className="text-xs font-bold text-gray-900">4.8/5</div>
            </div>
          </div>
        </div>
      </div>

      {/* Lending Management - Gradient hero */}
      <div className="bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600 w-full rounded-lg overflow-hidden shadow-lg hidden md:block">
        <div className="p-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5">
              <DollarSign className="w-4 h-4 text-white" />
              <span className="text-white font-bold text-xs">LendFlow</span>
            </div>
            <button className="bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[8px] font-semibold">Login</button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-2.5 py-1 inline-block mb-2">
            <span className="text-[8px] text-white">AI-Powered Credit Assessment →</span>
          </div>
          
          <h1 className="text-base font-bold text-white mb-1.5 leading-tight">
            End-to-End Lending Management Platform
          </h1>
          <p className="text-white/80 text-[8px] mb-3 leading-relaxed">
            From application to repayment, manage your entire lending portfolio. Automated credit checks, payment tracking, and compliance built-in.
          </p>
          
          <div className="flex gap-2 mb-3">
            <button className="bg-white text-orange-600 px-3 py-1.5 rounded text-[8px] font-semibold">
              Start Free Trial
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-3 py-1.5 rounded text-[8px] font-semibold">
              Watch Demo
            </button>
          </div>
          
          {/* Analytics Preview */}
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-2 border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[7px] text-white/60">Portfolio Performance</span>
              <span className="text-[8px] text-white font-bold">$2.4M Active Loans</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="bg-white/5 rounded p-1.5">
                <div className="text-[7px] text-white/60">Approval Rate</div>
                <div className="text-[9px] text-white font-bold">87%</div>
              </div>
              <div className="bg-white/5 rounded p-1.5">
                <div className="text-[7px] text-white/60">Default Rate</div>
                <div className="text-[9px] text-white font-bold">2.1%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Property Management - Clean modern */}
      <div className="bg-white w-full rounded-lg overflow-hidden shadow-sm border border-gray-200 hidden md:block">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-2 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Building2 className="w-3 h-3 text-white" />
            <span className="text-white font-bold text-[10px]">PropManager</span>
          </div>
          <button className="bg-white text-indigo-600 px-2 py-0.5 rounded text-[8px] font-semibold">Sign Up</button>
        </div>
        
        <div className="p-3">
          <div className="inline-block bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded-full text-[7px] font-semibold mb-1.5">
            All-in-One Property Suite
          </div>
          <h1 className="text-sm font-bold text-gray-900 mb-1 leading-tight">
            Complete Property Management System for Landlords
          </h1>
          <p className="text-gray-600 text-[8px] mb-2 leading-relaxed">
            Tenant portal, maintenance tracking, automated rent collection, and financial reporting. Manage unlimited properties with ease.
          </p>
          
          <div className="flex gap-1.5 mb-2.5">
            <button className="bg-white border border-gray-300 text-gray-700 px-2.5 py-1 rounded text-[8px] font-medium hover:border-gray-400">
              Learn More
            </button>
            <button className="bg-orange-500 text-white px-2.5 py-1 rounded text-[8px] font-semibold hover:bg-orange-600">
              Get Started Free
            </button>
          </div>
          
          <div className="border border-gray-200 rounded overflow-hidden">
            <div className="bg-gray-50 px-2 py-1 flex items-center gap-2 border-b border-gray-200">
              <span className="text-[7px] text-gray-500 font-medium">Properties:</span>
              <div className="flex gap-1">
                <div className="bg-white border border-gray-200 rounded px-1.5 py-0.5 text-[7px] text-gray-600">All</div>
                <div className="bg-white border border-gray-200 rounded px-1.5 py-0.5 text-[7px] text-gray-600">Occupied</div>
              </div>
            </div>
            <div className="bg-white">
              <div className="flex items-center px-2 py-1 border-b border-gray-100">
                <div className="w-1 h-1 rounded-full bg-green-500 mr-1.5"></div>
                <span className="text-[8px] text-gray-900 flex-1">123 Main St • Unit A</span>
                <span className="text-[7px] text-green-600">Paid</span>
              </div>
              <div className="flex items-center px-2 py-1 border-b border-gray-100">
                <div className="w-1 h-1 rounded-full bg-yellow-500 mr-1.5"></div>
                <span className="text-[8px] text-gray-900 flex-1">456 Oak Ave • Unit B</span>
                <span className="text-[7px] text-yellow-600">Pending</span>
              </div>
              <div className="flex items-center px-2 py-1">
                <div className="w-1 h-1 rounded-full bg-blue-500 mr-1.5"></div>
                <span className="text-[8px] text-gray-900 flex-1">789 Pine Rd • Unit C</span>
                <span className="text-[7px] text-blue-600">Vacant</span>
              </div>
            </div>
          </div>
        </div>
      </div>

 
                </div>
            </ContainerScroll>
        </div>

        <div className="relative bg-[#030303]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-violet-500/[0.03] blur-3xl" />
            
            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.2}
                    width={450}
                    height={110}
                    rotate={-15}
                    gradient="from-indigo-500/[0.12]"
                    className="left-[-12%] top-[25%] hidden md:block"
                />
                <ElegantShape
                    delay={0.4}
                    width={380}
                    height={95}
                    rotate={12}
                    gradient="from-violet-500/[0.12]"
                    className="right-[-10%] top-[55%] hidden md:block"
                />
                <ElegantShape
                    delay={0.3}
                    width={280}
                    height={75}
                    rotate={-22}
                    gradient="from-purple-500/[0.12]"
                    className="left-[18%] bottom-[12%] hidden md:block"
                />
            </div>
            
            <TestimonialsSection
                title="Trusted by business owners"
                description="Join business owners who are already using sytem tailored for their needs."
                testimonials={testimonials}
            />
        </div>

        <FooterSection/>
      </>
    );
}

export { Home }