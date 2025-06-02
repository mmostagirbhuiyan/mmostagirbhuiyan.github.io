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
      header: 'Github Projects',
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
          description: 'Probabilistic Bayesian Neural Network (BNN) inference framework with HMC and variational inference; scalable SVM with kernel approximation; modular SGD suite with adaptive and second-order optimizers.',
        },
        {
          title: 'Fault-Tolerant Distributed Systems',
          description: 'Byzantine-resilient consensus protocols (Paxos, Raft, BFT-SMaRt); distributed transaction engine with vector clocks and CRDTs; quorum-consistent key-value store with tunable consistency.',
        },
        {
          title: 'FPGA-Accelerated AI Systems',
          description: 'FPGA-based AI accelerator with INT4/INT8 quantization and sparse matrix optimizations; high-performance SPI controller; custom RISC pipeline with branch prediction and out-of-order execution.',
        },
      ],
    },
    liveProjects: {
      display: true,
      projects: [
        {
          title: 'REIT Fund Model',
          description: 'A comprehensive real estate investment trust (REIT) analysis and modeling tool that helps investors evaluate and compare different REIT opportunities.',
          link: 'https://mmostagirbhuiyan.com/reit-fund-model',
        },
        {
          title: 'University Aggregator Rankings',
          description: 'An innovative platform that aggregates and analyzes university rankings from multiple sources to provide comprehensive insights for prospective students.',
          link: 'https://www.mmostagirbhuiyan.com/university-ranking-aggregator/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of M Mostagir Bhuiyan',
    description:
      'Experienced Cloud Architect and DevOps Leader with over 10 years of expertise and 5+ AWS Certifications. Known for effectively reducing cloud operational costs and enhancing system efficiencies in high-stakes environments. Proficient in deploying AI/ML technologies to optimize cloud solutions, achieving notable cost savings and improvements in data processing scalability and reliability. Demonstrates a robust command of DevOps practices, including advanced CI/CD strategies and comprehensive cloud infrastructure engineering. Currently pursuing an Executive MBA from Cornell University, committed to delivering innovative cloud architecture solutions and leading transformative initiatives.',
    imageURL: 'https://www.dropbox.com/scl/fi/wmfxd68i4bjp0v1os1y06/Avatar.png?rlkey=cewgvppwwkk9zlydn2asf5pxk&st=wm9hcoo0&dl=0',
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
    email: 'mo@mmostagirbhuiyan.com',
    applePodcast: 'https://podcasts.apple.com/us/podcast/the-practical-ai-digest/id1817015122',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Docker',
    'Kubernetes',
    'DevOps',
    'Site Reliability Engineering',
    'CI/CD',
    'Jenkins',
    'AWS',
    'Engineering Management',
    'Java',
    'JavaScript',
    'Python',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Cloud Computing',
    'Azure',
    'Scripting',
    'Software Development',
    'SDLC',
    'Project Management',
    'Agile',
    'Datadog',
    'Budgeting',
    'Cost Management',
    'Change Management',
    'Disaster Recovery',
    'System Architecture',
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
      status: 'Now Attending',
      degree: 'Master of Engineering (MEng)',
    },
    {
      institution: 'Pennsylvania State University',
      status: 'Graduated',
      degree: 'Bachelor of Science (BSc)',
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
        "The growing body of Artificial Intelligence (AI) and Machine Learning (ML) models increases the necessity for computational needs that put the onus on looking for new approaches so as to stray from the traditional reliance on Graphics Processing Units (GPUs). This paper introduces a new method to maximize Central Processing Units (CPUs) through the use of a micro-containerization concept. The proposed approach theoretically dissects the CPU cores into isolated, efficient processing units called 'micro containers', making an effort to simulate GPU capabilities for parallel processing in order to enhance processing efficiencies to supposedly compete with GPU-based environments. Through a theoretical study of the possibilities in architecture and dynamics of operations, the paper shows how micro containerization can contribute to the democratization of advanced computational resources. The presented micro containerization model has the potential to revolutionize the landscape of machine learning workloads for the same very reasons: it is scalable, cost-effective, and holds a promise of maybe even changing the way computation strategies currently deal with tasks that are data-intensive. This bridges the current constraints with the future needs of computation, making micro containerization the new paradigm in accessibility and sustainability of high-performance computing innovation for a wide class of AI applications.",
    },
    {
      title:
        'The Illusion of Boundless AI: Analyzing Limitations and Ethical Concerns',
      conferenceName: '',
      journalName: 'TechRxiv',
      authors: 'M Mostagir Bhuiyan',
      link: 'https://doi.org/10.36227/techrxiv.171742375.53309794/v1',
      description:
        "The narrative that emerges from the current development and training of the artificial intelligence models has a rhetoric of unlimited potential of AI in its current state. This paper argues against that very point and will be looking at the serious constraints currently facing models of AI and machine learning, particularly the finitude of the data on which they rely. Its not just that the results are limited by the data at hand, but also by a host of other constraints: diminishing returns in scaling up model size, imposing costs on training, and making models harder to run. These are increasingly observed when AI is clad upon complex, real-world tasks that involve genuine generalization and adaptability. The paper also critically examines the commercial motivations driving the focus on automating white-collar jobs, highlighting that such priorities often stem from immediate financial incentives rather than a comprehensive evaluation of AI's broader applications. These practices raise profound ethical issues, including concerns about transparency and the responsible deployment of AI technologies. By dispelling the myth of AI's unlimited potential, this paper advocates for a more grounded and ethical approach to AI development, stressing the urgent need for breakthrough technological advancements that move us closer to achieving artificial general intelligence (AGI).",
    },
    {
      title:
        'Retrieval-Native Language Models: Integrating Parametric and Vector Memory with Bayesian Attention',
      conferenceName: '',
      journalName: 'TechRxiv',
      authors: 'M Mostagir Bhuiyan',
      link: 'https://doi.org/10.36227/techrxiv.174494725.56070193/v1',
      description:
        "Large pre-trained language models (LLMs) have demonstrated remarkable ability to encode vast world knowledge in their parameters, but this static, implicit storage poses challenges for keeping models up-to-date and providing provenance for factual claims [1]. Retrieval-Augmented Generation (RAG) methods address these issues by equipping LLMs with external non-parametric memory (typically a vector database of documents) that can be queried at inference time [1][2]. However, in standard RAG pipelines the retrieval module is an external add-on, not a native part of the model architecture. We propose Retrieval-Native Language Models (RLLMs), a new paradigm that treats vector-based memory as a first-class component of the model. RLLM introduces a unified architecture with three channels of knowledge: (1) Parametric memory in the pretrained model weights (static knowledge); (2) a live retrieval channel that shares an embedding space with the generator for continual intake of external vectors; and (3) an internal Bayesian attention router that dynamically adjusts how information flows from retrieval into generation based on the estimated utility of retrieved results (e.g. relevance, correctness, recency). By tightly integrating retrieval into the model's multi-head attention layers and training the retriever and generator jointly, RLLMs align the model's representations with the memory index and enable endto-end learning of when to trust retrieved evidence. We present a theoretical analysis of how unified embedding alignment and multi-channel attention improve efficiency and reduce hallucination. We describe the RLLM architecture in detail, including pseudo-code for the retrieval-augmented attention mechanism and a Bayesian feedback loop that updates routing weights in light of retrieval success or failure signals. In experiments on knowledge-intensive QA benchmarks (NaturalQuestions, HotpotQA) and a streaming enterprise wiki scenario, RLLM outperforms traditional RAG baselines. It achieves higher answer accuracy with 30% fewer parameters than fully-parametric models by leveraging its vector memory, and quickly adapts to new information with minimal latency. This work demonstrates that making retrieval a native component of LLMs yields significant gains in knowledge access, interpretability, and continual learning, suggesting a new direction for building more flexible and powerful language models.",
    },
  ],
  patents: [
    {
      title: 'Micro-Containerized CPU Architecture for Efficient AI Workloads',
      patentOffice: 'USPTO',
      patentNumber: '63/794,191',
      year: '2025',
      link: '', // You can update with a link later if it gets published
      description:
        'Provisional Patent Filed – Application No. 63/794,191, Filed 04/2025. (Patent Pending)',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'mmostagirbhuiyan', // to hide blog section, keep it empty
    limit: 4, // How many articles to display. Max is 10.
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
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with ❤️ by Mostagir`,

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
