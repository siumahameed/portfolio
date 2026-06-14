export interface Project {
  category: "ml" | "eda" | "app";
  title: string;
  desc: string;
  tags: string[];
  github?: string;
  live?: string;
}

export const projectsData: Project[] = [
  {
    category: "ml",
    title: "Rock and Mine Prediction for Sonar",
    desc: "Predicting whether an object is a mine or rock under the sea using Logistic Regression analyzing sonar radar data.",
    tags: ["Python", "Scikit-learn", "Logistic Regression", "Classification"],
    github: "https://github.com/siumahameed/ml_projects/tree/main/submarine_sonar_project",
  },
  {
    category: "ml",
    title: "Spam SMS Detection",
    desc: "NLP project to detect spam messages using text classification and machine learning.",
    tags: ["Python", "NLP", "Text Classification", "Scikit-learn"],
    github: "https://github.com/siumahameed/ml_projects/tree/main/spam_sms_detection",
  },
  {
    category: "ml",
    title: "Ad Click Prediction",
    desc: "Predicting user ad clicks using machine learning classification models for better targeting.",
    tags: ["Python", "Scikit-learn", "ML", "Classification"],
    github: "https://github.com/siumahameed/ml_projects/tree/main/Ad_click_project",
  },
  {
    category: "ml",
    title: "Energy Consumption Prediction",
    desc: "Forecasting energy consumption using regression models for better resource planning.",
    tags: ["Python", "ML", "Regression", "Data Analysis"],
    github: "https://github.com/siumahameed/ml_projects/tree/main/Energy%20Consumption%20Project",
  },
  {
    category: "ml",
    title: "Loan Prediction",
    desc: "Predicting loan approval status based on applicant details using classification algorithms.",
    tags: ["Python", "Scikit-learn", "Classification", "Finance"],
    github: "https://github.com/siumahameed/ml_projects/tree/main/Loand%20Prediction",
  },
  {
    category: "ml",
    title: "Heart Disease Prediction",
    desc: "Predicting heart disease risk using classification algorithms on patient medical data.",
    tags: ["Python", "ML", "Healthcare", "Classification"],
    github: "https://github.com/siumahameed/ml_projects/tree/main/heart_disease_prediction",
  },
  {
    category: "eda",
    title: "BD Cricket Analysis",
    desc: "Exploratory data analysis of Bangladesh cricket statistics and performance metrics.",
    tags: ["Python", "Pandas", "Data Visualization", "EDA"],
    github: "https://github.com/siumahameed/Eda-projects-basic-/tree/main/BD%20Cricket%20Analysis",
  },
  {
    category: "eda",
    title: "BD Road Accident Analysis",
    desc: "Analyzing road accident patterns in Bangladesh to identify key causes and safety recommendations.",
    tags: ["Python", "Pandas", "Matplotlib", "EDA"],
    github: "https://github.com/siumahameed/Eda-projects-basic-/tree/main/BD%20Road%20Accident%20Analysis",
  },
  {
    category: "eda",
    title: "BD Temperature & Rain Analysis",
    desc: "Analyzing temperature and rainfall patterns across Bangladesh to identify seasonal and regional trends.",
    tags: ["Python", "Pandas", "Matplotlib", "EDA"],
    github: "https://github.com/siumahameed/Eda-projects-basic-/tree/main/Bangladesh%20Temperature%20and%20Rain%20Analysis",
  },
  {
    category: "eda",
    title: "Diwali Sales Analysis",
    desc: "Analyzing Diwali sales data to understand customer purchasing patterns and product trends.",
    tags: ["Python", "Pandas", "Matplotlib", "EDA"],
    github: "https://github.com/siumahameed/Eda-projects-basic-/tree/main/Diwali%20Sales%20Analysis",
  },
  {
    category: "eda",
    title: "IPL Data Analysis",
    desc: "Comprehensive analysis of Indian Premier League cricket data to extract team and player insights.",
    tags: ["Python", "Pandas", "Visualization", "EDA"],
    github: "https://github.com/siumahameed/Eda-projects-basic-/tree/main/IPL%20Data%20Analysis",
  },
  {
    category: "eda",
    title: "Shop Data Analysis",
    desc: "Analyzing US retail shop data to understand sales patterns and customer behavior.",
    tags: ["Python", "Pandas", "Tableau", "EDA"],
    github: "https://github.com/siumahameed/Eda-projects-basic-/tree/main/Us%20shop%20data%20analysis",
  },
  {
    category: "eda",
    title: "Lego Data Analysis",
    desc: "Exploratory analysis of Lego product datasets to explore sets, themes, and trends.",
    tags: ["Python", "Pandas", "Data Visualization", "EDA"],
    github: "https://github.com/siumahameed/Eda-projects-basic-/tree/main/lego%20analysis",
  },
  {
    category: "app",
    title: "AgriTech",
    desc: "AI-powered agricultural advisory platform for Bangladeshi farmers — Bengali chatbot, crop recommendations, disease detection via image upload, fertilizer calculator, and government subsidy info.",
    tags: ["Node.js", "AI", "Tailwind CSS", "JavaScript"],
    live: "https://agritech-fwib.onrender.com/",
    github: "https://github.com/siumahameed/ml_projects/tree/main/submarine_sonar_project",
  },
  {
    category: "app",
    title: "VocabPro",
    desc: "SaaS platform delivering 10 daily English vocabulary words with Bengali meanings via WhatsApp and email. Includes AI chatbot with 6 personas, weekly quiz contests, streaks, and 15 Tk/month subscription.",
    tags: ["FastAPI", "PostgreSQL", "WhatsApp API", "AI", "Email"],
    live: "https://vocabpro-dgow.onrender.com/",
    github: "https://github.com/siumahameed/ml_projects/tree/main/submarine_sonar_project",
  },
  {
    category: "app",
    title: "StatWise",
    desc: "Automated statistical reporting platform for SMEs — upload Excel/CSV data, get comprehensive analysis with descriptive stats, trend analysis, forecasting, and downloadable PDF reports.",
    tags: ["FastAPI", "scikit-learn", "pandas", "PostgreSQL", "Tailwind CSS"],
    live: "https://statwise-te5z.onrender.com/",
    github: "https://github.com/siumahameed/ml_projects/tree/main/submarine_sonar_project",
  },
];
