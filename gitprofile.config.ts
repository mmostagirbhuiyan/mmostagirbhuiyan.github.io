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
      // To hide the `External Projects` section, keep it empty.
    },
  },
  seo: {
    title: 'Portfolio of M Mostagir Bhuiyan',
    description: 'Experienced Cloud Architect and DevOps Leader with over 10 years of expertise and 5+ AWS Certifications. Known for effectively reducing cloud operational costs and enhancing system efficiencies in high-stakes environments. Proficient in deploying AI/ML technologies to optimize cloud solutions, achieving notable cost savings and improvements in data processing scalability and reliability. Demonstrates a robust command of DevOps practices, including advanced CI/CD strategies and comprehensive cloud infrastructure engineering. Currently pursuing an Executive MBA from Cornell University, committed to delivering innovative cloud architecture solutions and leading transformative initiatives.',
    imageURL: '',
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
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
    'New Relic',
    'Change Management',
    'Disaster Recovery',
    'System Architecture',
  ],
  experiences: [],
  certifications: [
    {
      name: 'Leading with Finance',
      body: 'Harvard Business School Online',
      year: '',
      link: 'https://online.hbs.edu/verify-certificate?dvid=BF6WTYU5',
    },
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
  ],
  educations: [
    {
      institution: 'Cornell University',
      degree: 'Master of Business Administration (MBA)',
    },
    {
      institution: 'Pennsylvania State University',
      degree: 'Bachelor of Science in Software Engineering',
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
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: '', // to hide blog section, keep it empty
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
    defaultTheme: 'cupcake',

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
};

export default CONFIG;
