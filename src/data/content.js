export const PROFILE = {
  name: 'Sallal Haider',
  role: 'Software & AI Engineer',
  intro:
    'I build AI systems and backend software that keep working after launch. Four years across .NET, Python, React and Azure, a Master’s in Artificial Intelligence from London, and a habit of checking what the model actually returned.',
  location: 'Based in Lahore, Pakistan. Open to remote work and relocation to the UAE, Saudi Arabia and Qatar.',
  email: 'sallalhaider8@gmail.com',
  phone: '+92 326 4944021',
  phoneHref: 'tel:+923264944021',
  linkedin: 'https://linkedin.com/in/sallal-haider-597386202',
  github: 'https://github.com/sallalhaider18',
  cv: '/Sallal_Haider_CV.pdf',
}

export const STATS = [
  { value: 4, suffix: '+', label: 'years building software' },
  { value: 8, label: 'projects shipped or researched' },
  { value: 212, label: 'automated tests on MarketMind AI' },
  { value: 91.4, decimals: 1, suffix: '%', label: 'best accuracy in my Master’s project' },
]

export const STACK = ['C#', '.NET', 'ASP.NET Core', 'Python', 'FastAPI', 'TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL',
  'SQL Server', 'Azure', 'AWS S3', 'OpenAI', 'Groq', 'WhisperX', 'PyTorch', 'TensorFlow', 'Dynamics 365', 'Power Platform']

export const PRINCIPLES = [
  { title: 'Check what the AI returns', text: 'Model output is untrusted input. In Dark Phoenix, validation between the LLM and the video cutter caught duplicate and impossible clips before users ever saw them.' },
  { title: 'Measure honestly', text: 'In MarketMind AI, every strategy was judged on data it had never seen, with real costs. When nothing held up, I said so and published it.' },
  { title: 'Own it in production', text: 'I don’t stop at the demo. I deploy, monitor and fix live systems myself, from quota limits to blocked downloads and platform outages.' },
]

const GH = 'https://github.com/sallalhaider18'

const MODELS = [
  ['Logistic Regression', 97.5, 83.2, 77.1, 85.9], ['Decision Tree', 93.0, 72.9, 71.6, 79.2],
  ['Random Forest', 96.5, 83.2, 76.2, 85.3], ['AdaBoost', 95.6, 79.9, 75.8, 83.8],
  ['Support Vector Machine', 97.4, 84.1, 76.6, 86.0], ['K-Nearest Neighbors', 96.5, 84.1, 72.7, 84.4],
  ['Simple Neural Network', 99.6, 91.8, 80.9, 90.8], ['Deep Neural Network', 99.5, 93.5, 81.3, 91.4],
]

export const PROJECTS = [
  {
    slug: 'dark-phoenix', name: 'Dark Phoenix', kind: 'Full-stack AI video pipeline', cats: ['ai', 'web', 'backend'],
    ctx: 'Freelance, for LUNARTECH (USA)', when: '2024 to now', role: 'Designed, built and run it end to end', featured: true, showPipeline: true,
    blurb: 'Paste a YouTube link, get publish-ready vertical clips with captions. Fully automated, from URL to Google Drive, with zero manual editing.',
    tags: ['Next.js 15', 'TypeScript', 'Python', 'WhisperX large-v2', 'Groq Llama 3.3 70B', 'FFmpeg', 'Modal L40S GPUs', 'Inngest', 'Supabase (PostgreSQL)', 'AWS S3', 'Google Drive OAuth2', 'Vercel'],
    sections: [
      { title: 'What it does', p: ['Long videos hide a few great moments, and finding and cutting them by hand takes hours. Dark Phoenix does it automatically: a user pastes a YouTube URL into the dashboard and gets vertical 9:16 clips with styled captions and a watermark, uploaded straight to their Google Drive and shown back in the dashboard. No manual steps in between.'] },
      { title: 'How the pipeline works', flow: [
        ['Submit', 'The user pastes a YouTube URL into the Next.js 15 dashboard on Vercel.'],
        ['Download', 'A residential download worker fetches the video, because YouTube blocks bots on cloud IP addresses.'],
        ['Transcribe', 'WhisperX (large-v2) transcribes the full video with word-level timestamps on Modal L40S GPUs.'],
        ['Find the moments', 'Groq’s Llama 3.3 70B reads the transcript and picks the strongest question-and-answer moments.'],
        ['Validate', 'Every pick is checked: duplicates and overlaps are removed and timestamps must match the transcript.'],
        ['Cut', 'FFmpeg produces vertical 9:16 clips with styled captions and a watermark.'],
        ['Deliver', 'Clips go to AWS S3, are uploaded to Google Drive through OAuth2 and appear in the dashboard.'],
      ], after: 'Each stage runs as an Inngest background job with retries, and Supabase (PostgreSQL) tracks every job and clip.' },
      { title: 'Problems I solved along the way', incidents: [
        ['YouTube blocked cloud servers', 'YouTube’s bot detection blocked downloads from cloud IPs. I built a residential download worker so the pipeline could keep fetching videos.'],
        ['Gemini quota limits mid-build', 'The analysis step started on the Gemini API and hit quota limits. I moved it to Groq’s Llama 3.3 70B without stopping the project.'],
        ['Corrupted TalkNet model files', 'The speaker-detection model files for vertical framing were corrupted. Instead of getting stuck, I replaced that step with an FFmpeg-based vertical scaling solution.'],
        ['A Modal platform outage under time pressure', 'I debugged and kept the work moving through an outage of the GPU platform during a deadline.'],
        ['Duplicate clips and wrong timestamps', 'The code trusted the LLM’s picks as-is, which produced repeated clips and cuts in the wrong place. I added validation between the LLM and FFmpeg, plus tests built from the real failures.'],
      ] },
      { title: 'The result', p: ['A fully automated, production-ready pipeline: submit a URL, get publish-ready clips. It taught me to treat every LLM response as untrusted input and to plan for every external service failing at some point.'] },
    ],
  },
  {
    slug: 'marketmind-ai', name: 'MarketMind AI', kind: 'Real-time crypto research and paper-trading platform', cats: ['ai', 'backend'],
    ctx: 'Personal project', when: '2026', role: 'Designed and built it', featured: true, showBook: true,
    link: GH + '/marketmind-ai', linkLabel: 'View the code on GitHub',
    blurb: 'When price reaches my level, will it break or reverse? A live order-flow engine for BTC and ETH, with 130+ strategies tested honestly and 212 automated tests.',
    tags: ['Python', 'FastAPI', 'WebSockets', 'pandas', 'NumPy', 'PyArrow', 'scikit-learn', 'PyTorch', 'React', 'Vite', 'TradingView Lightweight Charts', 'pytest'],
    sections: [
      { title: 'The question', p: ['Every support and resistance trader faces the same moment: price reaches the level, and you have to decide whether it will break or reverse. Candles show what already happened. The order book and the stream of trades show what is happening now. MarketMind AI turns that live data into a plain answer and measures how often it was right.'] },
      { title: 'What I built', flow: [
        ['Live data engine', 'Streams trades and order-book depth for BTC and ETH perpetual futures on MEXC over WebSockets, and keeps a self-correcting local order book with sequence checks, crossed-book detection, auto-reconnect and stale-feed detection.'],
        ['S/R order-flow analyzer', 'Every second it measures how orders defending a level are consumed, cancelled or replenished, plus aggressive buying and selling, CVD, price response per $1M traded and failed breakouts.'],
        ['Plain signals', 'Turns those measures into breakout and reversal scores and signals: LONG or SHORT, BREAKOUT or REVERSAL, STRONG, GET READY or NO TRADE.'],
        ['Feed-quality gate', 'Blocks signals when the data can’t be trusted, such as book resyncs, late trades or a PC clock offset.'],
        ['Paper trading and replay', 'Paper-trading engines with full decision logs, labelled outcomes, replay of recorded market data and per-filter ablation tests, to measure which signals really add value.'],
        ['Dashboard', 'A React dashboard with TradingView-style charts, position boxes and order-book and order-flow panels.'],
      ] },
      { title: 'How I tested 130+ strategies', checks: [
        'No look-ahead: trades act on the next bar, levels use only closed candles',
        'Pessimistic fills: if stop and target are hit in the same bar, it counts as a loss',
        'Real fees, slippage and funding',
        'A time-based split: tuned on earlier data, judged once on later data',
        'I tested the tester: on random data it picks nothing, and on a planted pattern it finds it',
      ] },
      { title: 'Results', ledger: [
        ['36 pullback and breakout setups (1m, 15m, 1h, 3 targets, BTC and ETH)', false],
        ['96 New York opening-range breakout variations', false],
        ['Breakouts filtered by a gradient-boosted model', false],
        ['Gradient-boosted trees and an LSTM direction model', false],
        ['Live data engine, quality gate, analyzer and 212 automated tests', true],
      ], after: 'None of the strategies showed a reliable edge after costs, and the project says so openly. The main lesson: measuring honestly matters more than finding a signal that only looks good on past data.' },
    ],
  },
  {
    slug: 'sap-dynamics-365', name: 'SAP to Dynamics 365 ESB', kind: 'Enterprise Service Bus on Azure', cats: ['backend'],
    ctx: 'Allied Consultants, for Blaser Swisslube (Switzerland)', when: '2022 to 2023', role: 'Development Lead and Solution Architect', featured: true,
    blurb: 'Event-driven data synchronisation between SAP ERP and Dynamics CRM (Dataverse), plus a full data migration from SAP for a Swiss metalworking fluids company.',
    tags: ['Azure Logic Apps', 'Azure Functions', 'Azure Service Bus', 'Azure Key Vault', 'On-Premises Data Gateway', 'Liquid maps', 'Dataverse', 'Model-Driven Power Apps', 'Power Automate', 'Azure DevOps', 'ARM Templates', 'XrmToolBox', 'Ribbon Workbench'],
    sections: [
      { title: 'What it does', p: ['Blaser Swisslube, a Swiss metalworking fluids corporation, needed SAP ERP and Microsoft Dynamics CRM (Dataverse) to stay in sync. I built an Enterprise Service Bus that moves data between them as events happen, with Model-Driven Power Apps as the business-facing entry point. The project also included a full data migration from SAP ERP into Dataverse.'] },
      { title: 'How it’s built', flow: [
        ['Azure integration services', 'Azure Logic Apps, Azure Functions and Azure Service Bus carry events between systems, with Azure Key Vault for secrets.'],
        ['Reaching on-premises SAP', 'An On-Premises Data Gateway connects the cloud flows to the on-prem systems.'],
        ['Transforming data', 'Liquid transformation maps convert SAP data into the Dataverse model and back.'],
        ['Power Platform', 'Model-Driven Apps, Power Automate flows and business rules, with environments managed in XrmToolBox and Ribbon Workbench.'],
        ['Delivery', 'Azure DevOps CI/CD pipelines and ARM templates for repeatable deployments.'],
      ] },
      { title: 'My role', p: ['As Development Lead and Solution Architect, I covered the full lifecycle: requirements analysis, technical design, building the integration and migration flows, testing against real business use cases, client demos and post-production support.'] },
    ],
  },
  {
    slug: 'smartfolders', name: 'SmartFolders', kind: 'Document management system', cats: ['web'],
    ctx: 'smartfolders.co.uk', when: '', role: 'Development Lead and Solution Architect', featured: true,
    link: 'https://smartfolders.co.uk', linkLabel: 'Visit smartfolders.co.uk',
    blurb: 'One central home for Word, Excel, PowerPoint, emails, PDFs and scans, with Google-inspired search and access control down to each document.',
    tags: ['Software architecture', 'Team leadership', 'React', 'UX design', 'Requirements analysis', 'Access control', 'Search'],
    sections: [
      { title: 'What it does', p: ['SmartFolders captures, tracks and stores electronic documents, including Word, Excel and PowerPoint files, emails, PDFs and scanned images, in one central digital repository. Basic and advanced search, inspired by how Google search works, lets people find a document instantly, even years after it was created. Access control works at both folder and document level, with separate view, edit and delete permissions.'] },
      { title: 'My role', checks: [
        'Led the design and architecture of the platform as Development Lead and Solution Architect',
        'Managed and supervised the development team throughout the project',
        'Ran requirements analysis and assessed design and technical feasibility',
        'Reworked the layout to match current market trends and UX best practice, and fixed key UX issues',
        'Supported the React development team during handover',
        'Tested features against real business use cases and demonstrated progress directly to the client',
      ] },
    ],
  },
  {
    slug: 'disease-prediction', name: 'Disease prediction system', kind: 'Machine learning for early detection', cats: ['ai'],
    ctx: 'Master’s project, London South Bank University', when: '2024 to 2025', role: 'Researched, built and evaluated it',
    link: GH + '/Early_Detection_of_Diabetes_Heart_Disease_and_Cancer-', linkLabel: 'View the code on GitHub',
    blurb: 'Estimates the likelihood of diabetes, heart disease and breast cancer from patient data. 8 models compared, best average accuracy 91.4%.',
    tags: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'TensorFlow', 'Keras', 'Jupyter Notebook', 'Tkinter'],
    sections: [
      { title: 'Why it matters', p: ['Detecting diabetes, heart disease and breast cancer early can significantly improve treatment outcomes. The aim was a simple, reliable screening tool for clinicians and patients, built as my Master’s in Artificial Intelligence project.'] },
      { title: 'What I did', flow: [
        ['Data', 'Worked with three public medical datasets: Pima Indians Diabetes, Cleveland Heart Disease and Breast Cancer Wisconsin (Diagnostic).'],
        ['Preparation', 'Cleaned and preprocessed the data and explored it to understand the key health indicators for each disease.'],
        ['Models', 'Trained and compared 8 classification models in Python, from logistic regression to deep neural networks, with 10-fold cross-validation.'],
        ['App', 'Built an interactive app where a user enters their details and instantly gets a prediction.'],
      ] },
      { title: 'Average accuracy across all three diseases', bars: MODELS },
      { title: 'Full results', table: MODELS },
      { title: 'Honest limitations', p: ['The datasets are small, and the neural network scores are likely somewhat optimistic because of how cross-validation was set up. For medical screening, recall matters more than accuracy. This is a research project, not a medical device.'] },
    ],
  },
  {
    slug: 'auto-reply-outlook', name: 'Auto Reply', kind: 'AI-powered Outlook add-in', cats: ['ai', 'backend'],
    ctx: 'Allied Consultants', when: '2022 to 2023', role: 'Built it',
    blurb: 'Reads an incoming email and drafts a context-aware, ready-to-send reply with the ChatGPT API, right inside Outlook.',
    tags: ['C#', '.NET', 'Outlook Add-in', 'OpenAI API', 'LLMs', 'NLP', 'Prompt engineering'],
    sections: [
      { title: 'What it does', p: ['Auto Reply is an AI-powered Outlook add-in that automates professional email replies. It reads an incoming email and uses the ChatGPT API to generate a contextually accurate, ready-to-send reply, so people spend less time typing and managing their inbox.'] },
      { title: 'Key features', checks: [
        'Automated reply generation powered by large language models',
        'Context-aware drafts that match the tone and style of the original email',
        'Customisable responses before sending',
        'Native integration with Microsoft Outlook',
        'A privacy-first design that keeps email data secure and confidential',
      ] },
      { title: 'Why it matters', p: ['For individuals and teams handling a high volume of email, it turns a repetitive daily task into a reliable, automated one, while keeping communication consistent and professional.'] },
    ],
  },
  {
    slug: 'hr-onboarding', name: 'HR onboarding system', kind: 'Model-Driven Power App', cats: ['backend', 'web'],
    ctx: 'Allied Consultants', when: '2022 to 2023', role: 'Project lead and architect',
    blurb: 'One system for new-hire details, salary and interview records, built around designations and employee details.',
    tags: ['Power Apps', 'Model-Driven Apps', 'Dataverse', 'Power Pipelines', 'Power Platform', 'Requirements analysis'],
    sections: [
      { title: 'What it does', p: ['An HR onboarding system that helps organisations manage employee data in one place: new-hire information, salary details and interview records, all centred on two core entities, designations and employee details.'] },
      { title: 'How it’s built', p: ['A Microsoft Power Apps Model-Driven App backed by Microsoft Dataverse, deployed with Power Pipelines. I owned the architecture end to end, designing for scalability and robustness from the start, with intuitive navigation so onboarding feels simple for HR teams.'] },
      { title: 'My role', checks: [
        'Ran a full requirements analysis with the client before building from scratch',
        'Assessed feasibility and applied current best practice to technical decisions',
        'Led and guided the development team to deliver on time',
        'Oversaw the Power Pipelines deployment, making sure data stayed accurate across the system',
      ] },
    ],
  },
  {
    slug: 'petsone', name: 'PetsOne.pk', kind: 'E-commerce platform', cats: ['web', 'backend'],
    ctx: 'Online pet store, Pakistan', when: '', role: 'Led development',
    blurb: 'A full-featured online store with product showcases, secure payments and role-based access for the PetsOne.pk team.',
    tags: ['ASP.NET MVC', 'C#', '.NET Framework', 'Payment gateway', 'Role-based access control'],
    sections: [
      { title: 'What it does', p: ['A full-featured e-commerce web application that lets PetsOne.pk showcase and sell its product range online, with intuitive navigation, engaging product pages and a smooth path from browsing to checkout.'] },
      { title: 'How it’s built', p: ['ASP.NET MVC with C#, chosen for efficiency, scalability and long-term maintainability. It includes secure payment gateway integration and role-based access control, so the PetsOne.pk team can manage permissions and work together securely.'] },
      { title: 'My role', p: ['I led development from start to finish: requirements analysis with the client, design, backend development, payment integration and deployment of a production-ready store for a real business.'] },
    ],
  },
]

export const EXPERIENCE = [
  { when: 'Jan 2024 – now', title: 'Freelance Software Engineer', org: 'LUNARTECH, USA (remote)', link: ['dark-phoenix', 'Read the Dark Phoenix case study'],
    points: ['Designed, built and run Dark Phoenix, a live AI video pipeline, end to end', 'Own requirements, architecture, deployment, monitoring and production support', 'Work directly with the client to turn requirements into features'] },
  { when: 'Oct 2023 – Jan 2025', title: 'Master’s in Artificial Intelligence', org: 'London South Bank University, London', link: ['disease-prediction', 'Read about the final project'],
    points: ['Machine learning, deep learning, neural networks, data structures, algorithms and databases', 'Final project: disease prediction with 8 models and 10-fold cross-validation'] },
  { when: 'Aug 2022 – Aug 2023', title: 'Software Engineer', org: 'Allied Consultants, Lahore', link: ['sap-dynamics-365', 'Read the integration case study'],
    points: ['Development Lead and Solution Architect for the SAP to Dynamics 365 ESB on Azure', 'Built REST APIs in C# and ASP.NET Core over SQL Server, connecting CRM, ERP and third-party systems', 'Built Auto Reply, an AI Outlook add-in on the ChatGPT API', 'Led the HR onboarding system and guided its development team', 'Released through Azure DevOps CI/CD and supported clients after go-live'] },
  { when: 'Dec 2021 – Jun 2022', title: 'Frontend Developer', org: 'Centillion Solutions, Lahore',
    points: ['Built responsive, reusable React components with state management', 'Integrated REST APIs using TypeScript and JavaScript'] },
]

export const SKILLS = [
  ['AI and machine learning', ['LLM integration (OpenAI, Gemini, Groq)', 'Prompt engineering', 'LLM output validation', 'WhisperX speech-to-text', 'scikit-learn', 'PyTorch', 'TensorFlow and Keras', 'Model evaluation and cross-validation']],
  ['Backend', ['C#', 'ASP.NET Core and MVC', 'Python', 'FastAPI', 'Flask', 'Node.js', 'REST APIs', 'WebSockets', 'Background jobs (Inngest)', 'Event-driven design', 'OAuth2']],
  ['Frontend', ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'HTML and CSS']],
  ['Data', ['PostgreSQL', 'SQL Server', 'Azure SQL', 'MySQL', 'Supabase', 'MongoDB', 'pandas and NumPy', 'Data modelling', 'Data migration']],
  ['Cloud and delivery', ['Azure Functions', 'Logic Apps', 'Service Bus', 'Key Vault', 'AWS S3', 'Vercel', 'Modal GPUs', 'Azure DevOps CI/CD', 'ARM Templates', 'Git', 'pytest']],
  ['Enterprise', ['Dynamics 365', 'Dataverse', 'SAP ERP integration', 'Power Apps', 'Power Automate', 'Power BI', 'XrmToolBox']],
]
