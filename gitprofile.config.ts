// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'mmostagirbhuiyan', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 14, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'mmostagirbhuiyan/studentcentral-1 ',
          'mmostagirbhuiyan/ZtM-Job-Board ',
          'mmostagirbhuiyan/udemy-docker-mastery',
          'mmostagirbhuiyan/Ecommerce-Nodejs',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'MLOps & AI Infrastructure',
          description:
            'Probabilistic Bayesian Neural Network (BNN) inference framework with HMC and variational inference; scalable SVM with kernel approximation; modular SGD suite with adaptive and second-order optimizers.',
        },
        {
          title: 'Fault-Tolerant Distributed Systems',
          description:
            'Byzantine-resilient consensus protocols (Paxos, Raft, BFT-SMaRt); distributed transaction engine with vector clocks and CRDTs; quorum-consistent key-value store with tunable consistency.',
        },
        {
          title: 'FPGA-Accelerated AI Systems',
          description:
            'FPGA-based AI accelerator with INT4/INT8 quantization and sparse matrix optimizations; high-performance SPI controller; custom RISC pipeline with branch prediction and out-of-order execution.',
        },
      ],
    },
    liveProjects: {
      display: true,
      projects: [
        {
          title: 'MULTI Fund Model',
          description:
            'A comprehensive real estate investment trust (REIT), 401k, Roth IRA, HSA, Brokerage analysis and modeling tool that helps investors evaluate and compare different INVESTMENT opportunities.',
          link: 'https://mmostagirbhuiyan.com/multi-fund-model',
        },
        {
          title: 'University Aggregator Rankings',
          description:
            'An innovative platform that aggregates and analyzes university rankings from multiple sources to provide comprehensive insights for prospective students.',
          link: 'https://www.mmostagirbhuiyan.com/university-ranking-aggregator/',
        },
      ],
    },
  },
  seo: {
    title: 'Mostagir Bhuiyan | Director of AI Engineering & Cloud Architecture',
    description:
      'Visionary Technology Leader & Principal Architect with an Ivy League pedigree (Cornell MBA, Dartmouth MEng) and 10+ years of driving digital transformation. specialized in reducing cloud spend by 60% and slashing inference latency by 45% through cutting-edge Generative AI, MLOps, and Distributed Systems. Proven track record of leading high-performance engineering teams to deliver scalable, FedRAMP-compliant platforms that align technical innovation with strategic business growth.',
    imageURL:
      'https://drive.google.com/uc?export=view&id=1O0-uaBf7rhlmRyvDD3ipixMG-z1Q3Gyb',
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    researchGate: 'M-Mostagir-Bhuiyan',
    googleScholar: 'RYJK2CcAAAAJ',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'mmostagirbhuiyan',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'mmostagirbhuiyan@gmail.com',
    applePodcast:
      'https://podcasts.apple.com/us/podcast/the-practical-ai-digest/id1817015122',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Generative AI',
    'LLM Ops',
    'Strategic Leadership',
    'Enterprise Architecture',
    'Cloud Governance (FinOps)',
    'Kubernetes & Docker',
    'AWS / Azure / GCP',
    'Distributed Systems',
    'Python & PyTorch',
    'React & TypeScript',
    'CI/CD & DevOps',
    'Engineering Management',
    'Agile & Scrum',
    'System Design',
    'Cybersecurity (SOC2/FedRAMP)',
  ],
  experiences: [],
  certifications: [
    {
      name: 'AWS Certified DevOps Engineer – Professional',
      body: 'Amazon Web Services',
      year: '',
      link: 'https://www.credly.com/badges/cb055a51-0868-4cd4-85ba-ed14921a1d33/public_url',
    },
    {
      name: 'AWS Certified Solutions Architect – Professional',
      body: 'Amazon Web Services',
      year: '',
      link: 'https://www.credly.com/badges/09a2027b-2777-44b3-ad0e-64b3174545f3/public_url',
    },
    {
      name: 'AWS Certified Developer – Associate',
      body: 'Amazon Web Services',
      year: '',
      link: 'https://www.credly.com/badges/d56cffb4-2c50-4af0-83eb-0edb37056411/public_url',
    },
    {
      name: 'AWS Certified Solutions Architect – Associate',
      body: 'Amazon Web Services',
      year: '',
      link: 'https://www.credly.com/badges/6d27b665-72cf-4a8c-984e-fd2d2e64065e/public_url',
    },
    {
      name: 'AWS Certified SysOps Administrator – Associate',
      body: 'Amazon Web Services',
      year: '',
      link: 'https://www.credly.com/badges/2f716c65-0a8b-4eef-9771-7cd9376034e9/public_url',
    },
    {
      name: 'Leading with Finance',
      body: 'Harvard Business School Online',
      year: '',
      link: 'https://online.hbs.edu/verify-certificate?dvid=BF6WTYU5',
    },
  ],
  educations: [
    {
      institution: 'Cornell University',
      status: 'Now Attending',
      degree: 'Master of Business Administration (MBA)',
    },
    {
      institution: 'Dartmouth College',
      status: 'Graduated',
      degree: 'Master of Engineering (MEng) - Computer Engineering',
    },
    {
      institution: 'Pennsylvania State University',
      status: 'Graduated',
      degree: 'Bachelor of Science (BSc) - Electrical Engineering',
    },
  ],
  publications: [
    {
      title:
        'Hypothetical Framework for CPU Micro Containerization: Bridging the Performance Gap with GPUs in AI',
      conferenceName: '',
      journalName: 'TechRxiv',
      authors: 'M Mostagir Bhuiyan',
      link: 'https://doi.org/10.36227/techrxiv.171617385.50532539/v1',
      description:
        "The growing body of Artificial Intelligence (AI) and Machine Learning (ML) models increases the necessity for computational needs that put the onus on looking for new approaches so as to stray from the traditional reliance on Graphics Processing Units (GPUs). This paper introduces a new method to maximize Central Processing Units (CPUs) through the use of a micro-containerization concept. The proposed approach theoretically dissects the CPU cores into isolated, efficient processing units called 'micro containers', making an effort to simulate GPU capabilities for parallel processing.",
    },
    {
      title:
        'The Illusion of Boundless AI: Analyzing Limitations and Ethical Concerns',
      conferenceName: '',
      journalName: 'TechRxiv',
      authors: 'M Mostagir Bhuiyan',
      link: 'https://doi.org/10.36227/techrxiv.171742375.53309794/v1',
      description:
        "The narrative that emerges from the current development and training of the artificial intelligence models has a rhetoric of unlimited potential of AI in its current state. This paper argues against that very point and will be looking at the serious constraints currently facing models of AI and machine learning, particularly the finitude of the data on which they rely. It critically examines the commercial motivations driving the focus on automating white-collar jobs.",
    },
    {
      title:
        'Retrieval-Native Language Models: Integrating Parametric and Vector Memory with Bayesian Attention',
      conferenceName: '',
      journalName: 'TechRxiv',
      authors: 'M Mostagir Bhuiyan',
      link: 'https://doi.org/10.36227/techrxiv.174494725.56070193/v1',
      description:
        "We propose Retrieval-Native Language Models (RLLMs), a new paradigm that treats vector-based memory as a first-class component of the model. RLLM introduces a unified architecture with three channels of knowledge: (1) Parametric memory in the pretrained model weights; (2) a live retrieval channel that shares an embedding space with the generator; and (3) an internal Bayesian attention router that dynamically adjusts how information flows from retrieval into generation.",
    },
  ],
  patents: [
    {
      title: "Micro-Containerized CPU Architecture for Efficient AI Workloads",
      patentOffice: "USPTO",
      patentNumber: "19/262,056",
      year: "2025",
      link: "", // Optional: Add public link if published later
      description:
        "US Utility Patent Filed – Application No. 19/262,056, Filed 07/2025. (Patent Pending)\nOriginally filed as Provisional Application No. 63/794,191 (04/2025)."
    }
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'mmostagirbhuiyan', // to hide blog section, keep it empty
    limit: 5, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-SPZ51DJT2F', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'procyon',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'procyon',
      'light',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#7c3aed',
      secondary: '#3b82f6',
      accent: '#ec4899',
      neutral: '#0f172a',
      'base-100': 'rgba(15, 23, 42, 0.3)', // Semi-transparent for glass effect
      '--rounded-box': '1rem',
      '--rounded-btn': '0.5rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `© ${new Date().getFullYear()} Mostagir Bhuiyan. All rights reserved.`,

  enablePWA: true,

  podcasts: [
    {
      title: 'The Practical AI Digest (Generative AI–Powered Podcast)',
      description: `A generative AI–powered podcast where I distill advanced AI/ML topics into real-world insights. Built using tools like NotebookLM to synthesize research and simplify communication for practitioners.`,
      links: [
        {
          name: 'Apple Podcasts',
          url: 'https://podcasts.apple.com/us/podcast/the-practical-ai-digest/id1817015122',
        },
        {
          name: 'Spotify',
          url: 'https://open.spotify.com/show/61Q7vfkXDyNKJ1rIDJUf7x',
        },
        {
          name: 'Amazon Music',
          url: 'https://music.amazon.com/podcasts/3b8e4c2a-3119-43d7-bc68-3c804147c2f2',
        },
      ],
    },
  ],
};

export default CONFIG;
