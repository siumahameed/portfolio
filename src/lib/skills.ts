export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SkillGroup {
  name: string;
  categories: SkillCategory[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    categories: [
      { name: "Core", skills: ["Python", "SQL", "JavaScript"] },
    ],
  },
  {
    name: "Data Science",
    categories: [
      { name: "Analysis", skills: ["Pandas", "NumPy", "SciPy"] },
      { name: "Visualization", skills: ["Matplotlib", "Seaborn", "Plotly"] },
    ],
  },
  {
    name: "Machine Learning",
    categories: [
      { name: "ML", skills: ["Scikit-learn", "XGBoost", "Feature Engineering", "Model Evaluation"] },
    ],
  },
  {
    name: "AI Engineering",
    categories: [
      { name: "AI", skills: ["LLMs", "RAG", "AI Agents", "Embeddings"] },
    ],
  },
  {
    name: "Engineering",
    categories: [
      { name: "Backend", skills: ["FastAPI", "Node.js", "PostgreSQL", "REST APIs"] },
      { name: "Tools", skills: ["Git", "Docker", "Jupyter", "VS Code", "Google Colab"] },
    ],
  },
];

export const whatIBuild = [
  {
    number: "01",
    title: "Machine Learning",
    description: "Predictive models, classification, regression, clustering, feature engineering, and model evaluation.",
  },
  {
    number: "02",
    title: "Data Science",
    description: "Statistical analysis, EDA, experimentation, visualization, and predictive analytics.",
  },
  {
    number: "03",
    title: "AI Engineering",
    description: "AI applications, APIs, LLM workflows, RAG, and intelligent automation.",
  },
  {
    number: "04",
    title: "ML Systems",
    description: "Model serving, APIs, deployment, pipelines, and reproducibility.",
  },
];

export const workflowSteps = [
  {
    number: "01",
    title: "Data",
    description: "Collect and understand the raw data",
    icon: "database",
  },
  {
    number: "02",
    title: "Clean",
    description: "Handle missing values, outliers, and types",
    icon: "filter",
  },
  {
    number: "03",
    title: "Explore",
    description: "EDA, distributions, and correlations",
    icon: "search",
  },
  {
    number: "04",
    title: "Engineer",
    description: "Feature creation, selection, and scaling",
    icon: "wrench",
  },
  {
    number: "05",
    title: "Train",
    description: "Baseline models, cross-validation, tuning",
    icon: "brain",
  },
  {
    number: "06",
    title: "Evaluate",
    description: "Honest metrics, comparison, and analysis",
    icon: "check-circle",
  },
  {
    number: "07",
    title: "Deploy",
    description: "API, application, and monitoring",
    icon: "rocket",
  },
];

export const currentlyExploring = [
  { topic: "Deep Learning with PyTorch", items: ["Neural Networks", "CNNs", "Training Loops", "Optimization"] },
  { topic: "Transformers & LLMs", items: ["Attention Mechanisms", "GPT Architecture", "Fine-tuning"] },
  { topic: "Retrieval-Augmented Generation", items: ["Vector DBs", "Embeddings", "Semantic Search"] },
  { topic: "AI Agents", items: ["Tool Use", "Planning", "Memory", "Multi-Agent Systems"] },
  { topic: "MLOps", items: ["Experiment Tracking", "Model Registry", "CI/CD for ML"] },
  { topic: "Model Deployment", items: ["FastAPI", "Docker", "Cloud Deployment", "Monitoring"] },
];
