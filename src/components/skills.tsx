'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Cloud,
  Code2,
  Cpu,
  Shield,
  Users,
} from 'lucide-react';
import { SectionHeader } from './section-header';
import { skills } from '@/data/portfolio';
import { useState, useMemo } from 'react';

const categoryIcons: Record<string, typeof Brain> = {
  ai: Brain,
  cloud: Cloud,
  development: Code2,
  architecture: Cpu,
  security: Shield,
  leadership: Users,
};

const categoryColors: Record<string, { text: string; hex: string; glow: string }> = {
  ai: { text: 'text-violet-500', hex: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.4)' },
  cloud: { text: 'text-blue-500', hex: '#3b82f6', glow: 'rgba(59, 130, 246, 0.4)' },
  development: { text: 'text-emerald-500', hex: '#10b981', glow: 'rgba(16, 185, 129, 0.4)' },
  architecture: { text: 'text-orange-500', hex: '#f97316', glow: 'rgba(249, 115, 22, 0.4)' },
  security: { text: 'text-red-500', hex: '#ef4444', glow: 'rgba(239, 68, 68, 0.4)' },
  leadership: { text: 'text-pink-500', hex: '#ec4899', glow: 'rgba(236, 72, 153, 0.4)' },
};

const categoryTitles: Record<string, string> = {
  leadership: 'Leadership & Strategy',
  cloud: 'Cloud & Infrastructure',
  architecture: 'Architecture & Design',
  ai: 'AI & Machine Learning',
  security: 'Security & Compliance',
  development: 'Development & Engineering',
};

interface SkillNode {
  id: string;
  name: string;
  category: string;
  x: number;
  y: number;
  angle: number;
  orbit: number;
}

interface Connection {
  from: string;
  to: string;
  strength: number;
}

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Create skill nodes with positioned coordinates in a constellation pattern
  const skillNodes = useMemo<SkillNode[]>(() => {
    const nodes: SkillNode[] = [];
    const categoryGroups = skills.reduce((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    }, {} as Record<string, typeof skills>);

    // Define orbital rings for each category with angular offsets for visual interest
    const categoryOrbits: Record<string, { orbit: number; startAngle: number }> = {
      leadership: { orbit: 1, startAngle: 0 },
      cloud: { orbit: 2, startAngle: 30 },
      architecture: { orbit: 3, startAngle: 60 },
      ai: { orbit: 1.5, startAngle: 180 },
      security: { orbit: 2.5, startAngle: 210 },
      development: { orbit: 3.5, startAngle: 240 },
    };

    Object.entries(categoryGroups).forEach(([category, categorySkills]) => {
      const { orbit, startAngle } = categoryOrbits[category];
      const angleStep = 360 / categorySkills.length;

      categorySkills.forEach((skill, index) => {
        const angle = startAngle + (index * angleStep);
        const radius = orbit * 80; // Base radius multiplied by orbit number

        // Convert polar to cartesian coordinates (centered at viewBox center)
        const x = 500 + radius * Math.cos((angle * Math.PI) / 180);
        const y = 400 + radius * Math.sin((angle * Math.PI) / 180);

        nodes.push({
          id: `${skill.category}-${skill.name}`,
          name: skill.name,
          category: skill.category,
          x,
          y,
          angle,
          orbit,
        });
      });
    });

    return nodes;
  }, []);

  // Create connections between related skills
  const connections = useMemo<Connection[]>(() => {
    const conns: Connection[] = [];

    // Connect skills within the same category
    skillNodes.forEach((node, i) => {
      skillNodes.slice(i + 1).forEach((otherNode) => {
        if (node.category === otherNode.category) {
          // Connect neighboring skills in the same category
          const angleDiff = Math.abs(node.angle - otherNode.angle);
          if (angleDiff < 100 || angleDiff > 260) {
            conns.push({
              from: node.id,
              to: otherNode.id,
              strength: 0.3,
            });
          }
        }
      });
    });

    // Add some cross-category connections for visual interest
    const crossConnections = [
      ['leadership', 'cloud'],
      ['cloud', 'architecture'],
      ['architecture', 'ai'],
      ['ai', 'development'],
      ['security', 'cloud'],
      ['development', 'architecture'],
    ];

    crossConnections.forEach(([cat1, cat2]) => {
      const nodes1 = skillNodes.filter(n => n.category === cat1);
      const nodes2 = skillNodes.filter(n => n.category === cat2);

      if (nodes1.length && nodes2.length) {
        // Connect one random node from each category
        const node1 = nodes1[Math.floor(Math.random() * nodes1.length)];
        const node2 = nodes2[Math.floor(Math.random() * nodes2.length)];

        conns.push({
          from: node1.id,
          to: node2.id,
          strength: 0.15,
        });
      }
    });

    return conns;
  }, [skillNodes]);

  // Filter connections based on hover state
  const visibleConnections = useMemo(() => {
    if (!hoveredSkill) return connections;

    return connections.filter(
      conn => conn.from === hoveredSkill || conn.to === hoveredSkill
    );
  }, [hoveredSkill, connections]);

  // Determine which nodes should be highlighted
  const getNodeOpacity = (nodeId: string) => {
    if (!hoveredSkill) return 1;

    if (nodeId === hoveredSkill) return 1;

    // Check if connected to hovered node
    const isConnected = connections.some(
      conn =>
        (conn.from === hoveredSkill && conn.to === nodeId) ||
        (conn.to === hoveredSkill && conn.from === nodeId)
    );

    return isConnected ? 0.6 : 0.2;
  };

  return (
    <section id="skills" className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Expertise"
          title="Skills & Expertise"
          subtitle="A decade of experience across cloud architecture, AI/ML, and engineering leadership."
          align="center"
        />

        {/* Category Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(categoryTitles).map(([category, title]) => {
            const Icon = categoryIcons[category];
            const color = categoryColors[category];

            return (
              <div
                key={category}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm"
              >
                <Icon className={`w-4 h-4 ${color.text}`} />
                <span className="text-xs font-medium">{title}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Interactive Constellation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative w-full overflow-hidden rounded-2xl border border-border bg-card/30 backdrop-blur-sm p-4 md:p-8"
          style={{ minHeight: '600px' }}
        >
          <svg
            viewBox="0 0 1000 800"
            className="w-full h-full"
            style={{ maxHeight: '700px' }}
          >
            {/* Define glow filters for each category */}
            <defs>
              {Object.entries(categoryColors).map(([category, { glow }]) => (
                <filter key={category} id={`glow-${category}`} x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              ))}

              {/* Stronger glow for hover */}
              {Object.entries(categoryColors).map(([category, { glow }]) => (
                <filter key={`${category}-hover`} id={`glow-${category}-hover`} x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              ))}
            </defs>

            {/* Connection lines */}
            <g className="constellation-lines">
              {visibleConnections.map((conn, index) => {
                const fromNode = skillNodes.find(n => n.id === conn.from);
                const toNode = skillNodes.find(n => n.id === conn.to);

                if (!fromNode || !toNode) return null;

                const isHighlighted = hoveredSkill === conn.from || hoveredSkill === conn.to;

                return (
                  <motion.line
                    key={`${conn.from}-${conn.to}`}
                    x1={fromNode.x}
                    y1={fromNode.y}
                    x2={toNode.x}
                    y2={toNode.y}
                    stroke={categoryColors[fromNode.category]?.hex || '#888'}
                    strokeWidth={isHighlighted ? 2 : 1}
                    strokeOpacity={isHighlighted ? 0.5 : conn.strength}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: 1,
                      opacity: isHighlighted ? 0.5 : conn.strength,
                      strokeWidth: isHighlighted ? 2 : 1,
                    }}
                    transition={{
                      duration: 1,
                      delay: index * 0.01,
                      opacity: { duration: 0.3 },
                      strokeWidth: { duration: 0.3 },
                    }}
                    className="transition-all duration-300"
                  />
                );
              })}
            </g>

            {/* Skill nodes */}
            <g className="constellation-nodes">
              {skillNodes.map((node, index) => {
                const color = categoryColors[node.category];
                const Icon = categoryIcons[node.category];
                const isHovered = hoveredSkill === node.id;
                const opacity = getNodeOpacity(node.id);

                return (
                  <motion.g
                    key={node.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity,
                      scale: isHovered ? 1.3 : 1,
                    }}
                    transition={{
                      delay: index * 0.02,
                      duration: 0.3,
                      scale: { duration: 0.2 },
                    }}
                    onMouseEnter={() => setHoveredSkill(node.id)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="cursor-pointer"
                  >
                    {/* Outer glow circle */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isHovered ? 16 : 12}
                      fill={color.hex}
                      fillOpacity={0.2}
                      filter={`url(#glow-${node.category}${isHovered ? '-hover' : ''})`}
                      className="transition-all duration-300"
                    />

                    {/* Main node circle */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isHovered ? 10 : 7}
                      fill={color.hex}
                      fillOpacity={0.9}
                      stroke={color.hex}
                      strokeWidth={isHovered ? 2 : 1}
                      className="transition-all duration-300"
                    />

                    {/* Pulsing animation for hovered node */}
                    {isHovered && (
                      <motion.circle
                        cx={node.x}
                        cy={node.y}
                        r={10}
                        fill="none"
                        stroke={color.hex}
                        strokeWidth={2}
                        strokeOpacity={0}
                        animate={{
                          r: [10, 20],
                          strokeOpacity: [0.6, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      />
                    )}

                    {/* Skill label (shown on hover) */}
                    {isHovered && (
                      <motion.g
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Label background */}
                        <rect
                          x={node.x - 80}
                          y={node.y - 40}
                          width={160}
                          height={30}
                          rx={6}
                          fill="hsl(var(--card))"
                          fillOpacity={0.95}
                          stroke="hsl(var(--border))"
                          strokeWidth={1}
                          filter={`url(#glow-${node.category})`}
                        />

                        {/* Label text */}
                        <text
                          x={node.x}
                          y={node.y - 21}
                          textAnchor="middle"
                          fill="hsl(var(--foreground))"
                          fontSize="11"
                          fontWeight="600"
                          className="select-none"
                        >
                          {node.name.length > 28
                            ? node.name.substring(0, 25) + '...'
                            : node.name}
                        </text>
                      </motion.g>
                    )}
                  </motion.g>
                );
              })}
            </g>
          </svg>

          {/* Hover instruction */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredSkill ? 0 : 0.6 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground text-center pointer-events-none"
          >
            Hover over nodes to explore connections
          </motion.div>
        </motion.div>

        {/* Skill count summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          <span className="font-mono">{skills.length}</span> skills across{' '}
          <span className="font-mono">{Object.keys(categoryTitles).length}</span> domains
        </motion.div>
      </div>
    </section>
  );
}
