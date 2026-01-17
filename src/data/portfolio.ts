export const siteConfig = {
  name: 'Mostagir Bhuiyan',
  title: 'Engineering Leader & Builder',
  description:
    'Director and Principal Architect with 10+ years leading cloud, DevOps, and AI-driven distributed systems. Proven track record owning platform architecture, governance, and reliability for large-scale production systems. Dual background in Engineering (Dartmouth MEng) and Business (Cornell MBA).',
  email: 'mmostagirbhuiyan@gmail.com',
  github: 'mmostagirbhuiyan',
  avatar: '/avatar.png',
  social: {
    medium: 'https://medium.com/@mmostagirbhuiyan',
    researchGate: 'https://www.researchgate.net/profile/M-Mostagir-Bhuiyan',
    googleScholar: 'https://scholar.google.com/citations?user=RYJK2CcAAAAJ',
    applePodcast: 'https://podcasts.apple.com/us/podcast/the-practical-ai-digest/id1817015122',
  },
  googleAnalyticsId: 'G-SPZ51DJT2F',
};

export const skills = [
  { name: 'Platform Strategy & Governance', category: 'leadership' },
  { name: 'Cloud & DevOps Leadership', category: 'leadership' },
  { name: 'AI/ML Infrastructure & MLOps', category: 'ai' },
  { name: 'Distributed Systems Design', category: 'architecture' },
  { name: 'Kubernetes & Container Orchestration', category: 'cloud' },
  { name: 'AWS / Azure / GCP', category: 'cloud' },
  { name: 'CI/CD & GitOps', category: 'cloud' },
  { name: 'Cost Governance & FinOps', category: 'leadership' },
  { name: 'SOC 2 / FedRAMP Compliance', category: 'security' },
  { name: 'Observability & Reliability', category: 'architecture' },
  { name: 'Python, Go, Java, C++', category: 'development' },
  { name: 'Team Enablement & Advocacy', category: 'leadership' },
];

export const education = [
  {
    institution: 'Cornell University',
    degree: 'Master of Business Administration (MBA)',
    status: 'Now Attending',
    logo: '/logos/cornell.svg',
  },
  {
    institution: 'Dartmouth College',
    degree: 'Master of Engineering (MEng) - Computer Engineering',
    status: 'Graduated',
    logo: '/logos/dartmouth.svg',
  },
  {
    institution: 'Pennsylvania State University',
    degree: 'Bachelor of Science (BSc) - Software Engineering',
    status: 'Graduated',
    logo: '/logos/pennstate.svg',
  },
];

export const certifications = [
  {
    name: 'AWS Certified DevOps Engineer – Professional',
    issuer: 'Amazon Web Services',
    link: 'https://www.credly.com/badges/cb055a51-0868-4cd4-85ba-ed14921a1d33/public_url',
    badge: '/badges/aws-devops-pro.png',
  },
  {
    name: 'AWS Certified Solutions Architect – Professional',
    issuer: 'Amazon Web Services',
    link: 'https://www.credly.com/badges/09a2027b-2777-44b3-ad0e-64b3174545f3/public_url',
    badge: '/badges/aws-sa-pro.png',
  },
  {
    name: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services',
    link: 'https://www.credly.com/badges/d56cffb4-2c50-4af0-83eb-0edb37056411/public_url',
    badge: '/badges/aws-dev.png',
  },
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    link: 'https://www.credly.com/badges/6d27b665-72cf-4a8c-984e-fd2d2e64065e/public_url',
    badge: '/badges/aws-sa.png',
  },
  {
    name: 'AWS Certified SysOps Administrator – Associate',
    issuer: 'Amazon Web Services',
    link: 'https://www.credly.com/badges/2f716c65-0a8b-4eef-9771-7cd9376034e9/public_url',
    badge: '/badges/aws-sysops.png',
  },
  {
    name: 'Leading with Finance',
    issuer: 'Harvard Business School Online',
    link: 'https://online.hbs.edu/verify-certificate?dvid=BF6WTYU5',
    badge: '/badges/hbs.png',
  },
];

export const publications = [
  {
    title: 'Hypothetical Framework for CPU Micro Containerization: Bridging the Performance Gap with GPUs in AI',
    journal: 'TechRxiv',
    authors: 'M Mostagir Bhuiyan',
    link: 'https://doi.org/10.36227/techrxiv.171617385.50532539/v1',
    description:
      "This paper introduces a new method to maximize Central Processing Units (CPUs) through the use of a micro-containerization concept. The proposed approach theoretically dissects the CPU cores into isolated, efficient processing units called 'micro containers', making an effort to simulate GPU capabilities for parallel processing.",
  },
  {
    title: 'The Illusion of Boundless AI: Analyzing Limitations and Ethical Concerns',
    journal: 'TechRxiv',
    authors: 'M Mostagir Bhuiyan',
    link: 'https://doi.org/10.36227/techrxiv.171742375.53309794/v1',
    description:
      'This paper argues against the rhetoric of unlimited AI potential and looks at the serious constraints currently facing models of AI and machine learning, particularly the finitude of the data on which they rely.',
  },
  {
    title: 'Retrieval-Native Language Models: Integrating Parametric and Vector Memory with Bayesian Attention',
    journal: 'TechRxiv',
    authors: 'M Mostagir Bhuiyan',
    link: 'https://doi.org/10.36227/techrxiv.174494725.56070193/v1',
    description:
      'We propose Retrieval-Native Language Models (RLLMs), a new paradigm that treats vector-based memory as a first-class component of the model with a unified architecture featuring three channels of knowledge.',
  },
  {
    title: 'Technological Adaptation Outpaces Climate Impacts on Aviation: Evidence from Three Decades of Warming',
    journal: 'EarthArXiv',
    authors: 'M Mostagir Bhuiyan & Rifa Rafia',
    link: '',
    description:
      'Analyzes the relationship between rising global temperatures and aviation efficiency, presenting evidence of technological adaptation outpacing climate impacts over a three-decade period.',
  },
];

export const patents = [
  {
    title: 'Micro-Containerized CPU Architecture for Efficient AI Workloads',
    office: 'USPTO',
    number: '19/262,056',
    year: '2025',
    status: 'Patent Pending',
    description:
      'US Utility Patent Filed – Application No. 19/262,056, Filed 07/2025. Originally filed as Provisional Application No. 63/794,191 (04/2025).',
  },
];

export const projects = {
  featured: [
    {
      title: 'MLOps & AI Infrastructure',
      description:
        'Built Bayesian neural network inference pipelines to quantify prediction uncertainty in production ML workflows. Scaled high-dimensional SVM models using kernel approximation to reduce compute cost. Developed a modular optimization framework comparing adaptive and second-order gradient methods.',
      tags: ['PyTorch', 'MLOps', 'Kubernetes', 'AWS'],
    },
    {
      title: 'Fault-Tolerant Distributed Systems',
      description:
        'Designed and evaluated Paxos, Raft, and Byzantine consensus protocols for leader election and fault tolerance. Built an event-driven transaction system using vector clocks and CRDTs for consistency under failure.',
      tags: ['Go', 'Distributed Systems', 'Consensus', 'CRDT'],
    },
    {
      title: 'FPGA-Accelerated AI Systems',
      description:
        'Implemented an FPGA-based inference accelerator using low-precision quantization and sparsity. Designed a high-speed SPI controller with correct clock-domain crossing and synchronization.',
      tags: ['FPGA', 'Verilog', 'AI Acceleration', 'Hardware'],
    },
  ],
  live: [
    {
      title: 'MULTI Fund Model',
      description:
        'A comprehensive real estate investment trust (REIT), 401k, Roth IRA, HSA, Brokerage analysis and modeling tool that helps investors evaluate and compare different investment opportunities.',
      link: 'https://mmostagirbhuiyan.com/multi-fund-model',
      tags: ['Finance', 'React', 'Data Analysis'],
    },
    {
      title: 'University Aggregator Rankings',
      description:
        'An innovative platform that aggregates and analyzes university rankings from multiple sources to provide comprehensive insights for prospective students.',
      link: 'https://www.mmostagirbhuiyan.com/university-ranking-aggregator/',
      tags: ['Education', 'Data Aggregation', 'React'],
    },
  ],
  github: {
    username: 'mmostagirbhuiyan',
    limit: 6,
    sortBy: 'stars' as const,
    excludeForks: true,
  },
};

export const podcast = {
  title: 'The Practical AI Digest',
  subtitle: 'Generative AI-Powered Podcast',
  description:
    'A generative AI-powered podcast where I distill advanced AI/ML topics into real-world insights. Built using tools like NotebookLM to synthesize research and simplify communication for practitioners.',
  platforms: [
    {
      name: 'Apple Podcasts',
      url: 'https://podcasts.apple.com/us/podcast/the-practical-ai-digest/id1817015122',
      icon: 'apple',
    },
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/show/61Q7vfkXDyNKJ1rIDJUf7x',
      icon: 'spotify',
    },
    {
      name: 'Amazon Music',
      url: 'https://music.amazon.com/podcasts/3b8e4c2a-3119-43d7-bc68-3c804147c2f2',
      icon: 'amazon',
    },
  ],
};

export const blog = {
  source: 'medium' as const,
  username: 'mmostagirbhuiyan',
  limit: 4,
};

export const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Open Source', href: '#contributions' },
  { name: 'Publications', href: '#publications' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];
