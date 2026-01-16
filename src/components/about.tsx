'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { SectionHeader } from './section-header';
import { BentoCard } from './bento-card';
import { siteConfig } from '@/data/portfolio';

export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="About Me"
          subtitle="Director-level engineering leader focused on platform architecture, AI infrastructure, and building high-performing teams."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Card - Large */}
          <BentoCard colSpan={2} className="relative">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-32 h-32 rounded-2xl overflow-hidden ring-4 ring-primary/20">
                  <Image
                    src={siteConfig.avatar}
                    alt={siteConfig.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 p-2 bg-primary rounded-xl">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </motion.div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{siteConfig.name}</h3>
                <p className="text-primary font-medium mb-4">{siteConfig.title}</p>
                <p className="text-muted-foreground leading-relaxed">
                  I lead cloud, DevOps, and platform teams to deliver reliable, secure, and
                  cost-efficient systems at scale. Deep expertise in Kubernetes, MLOps, and
                  distributed systems. Now applying that to build AI-native products.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* Location Card */}
          <BentoCard delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium">Location</span>
            </div>
            <p className="text-muted-foreground">United States</p>
          </BentoCard>

          {/* Current Role Card */}
          <BentoCard delay={0.15}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium">Building</span>
            </div>
            <p className="text-muted-foreground">AI Infrastructure</p>
            <p className="text-sm text-muted-foreground mt-1">Stealth Mode</p>
          </BentoCard>

          {/* Education Quick View */}
          <BentoCard colSpan={2} delay={0.2}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium">Education Highlights</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl bg-secondary/50">
                <p className="font-semibold">Cornell</p>
                <p className="text-sm text-muted-foreground">MBA</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/50">
                <p className="font-semibold">Dartmouth</p>
                <p className="text-sm text-muted-foreground">MEng</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/50">
                <p className="font-semibold">Penn State</p>
                <p className="text-sm text-muted-foreground">BSc</p>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
