'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  Github,
  BookOpen,
  FileText,
  ArrowUpRight,
  Send,
  Linkedin,
} from 'lucide-react';
import { SectionHeader } from './section-header';
import { siteConfig } from '@/data/portfolio';

const socialLinks = [
  {
    name: 'Email',
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    description: 'Get in touch directly',
    color: 'from-red-500 to-orange-500',
  },
  {
    name: 'GitHub',
    href: `https://github.com/${siteConfig.github}`,
    icon: Github,
    description: 'Check out my code',
    color: 'from-gray-600 to-gray-800',
  },
  {
    name: 'Medium',
    href: siteConfig.social.medium,
    icon: BookOpen,
    description: 'Read my articles',
    color: 'from-green-500 to-emerald-600',
  },
  {
    name: 'Google Scholar',
    href: siteConfig.social.googleScholar,
    icon: FileText,
    description: 'Academic research',
    color: 'from-blue-500 to-indigo-600',
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Let's Connect"
          subtitle="Open to discussing leadership roles, advisory opportunities, or collaborations in cloud, AI, and platform engineering."
          align="center"
        />

        <div className="max-w-4xl mx-auto">
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-12 text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6">
              <Send className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Let's Talk
            </h3>

            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Looking for engineering leadership, platform strategy, or AI infrastructure expertise?
              I'd be glad to connect and explore how I can help.
            </p>

            <motion.a
              href={`mailto:${siteConfig.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              <Mail className="w-5 h-5" />
              Send Me an Email
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Social Links Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card rounded-2xl p-6 text-center group"
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {link.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">{link.description}</p>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
