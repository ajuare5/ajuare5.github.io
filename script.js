// ==========================================
// PROJECT DATA
// ==========================================
const projects = [
  {
    title: "Medical Insurance Analytics",
    description: "Claim cost prediction, customer segmentation, and volume forecasting on a large insurance dataset — Three-problem framework using regression, clustering, and gradient boosting.",
    category: "ml",
    categoryLabel: "Machine Learning",
    tags: ["Python", "scikit-learn", "XGBoost", "Clustering"],
    github: "https://github.com/ajuare5/medical-insurance-analytics",
    team: "Team of 5"
  },
  {
    title: "Sephora Skincare Analytics",
    description: "NLP pipeline analyzing 87K+ customer reviews with a custom 40+ attribute lexicon, sentence-level sentiment scoring, and brand-level lift analysis by skin type.",
    category: "ml",
    categoryLabel: "Machine Learning & NLP",
    tags: ["Python", "NLP", "Sentiment Analysis", "Regex"],
    github: "https://github.com/ajuare5/sephora-skincare-analytics",
    team: "Team of 6"
  },
  {
    title: "Austin Housing Prediction",
    description: "Ensemble ML models to predict residential prices in Austin, TX — Random Forest and Bagging with feature engineering on geographic, structural, and listing data.",
    category: "ml",
    categoryLabel: "Machine Learning",
    tags: ["R", "Python", "Random Forest", "Ensemble"],
    github: "https://github.com/ajuare5/austin-housing-prediction",
    team: "Team of 4"
  },
  {
    title: "CVaR Portfolio Optimization",
    description: "Multi-part portfolio optimization using Conditional Value-at-Risk with Gurobi — single-period LP, beta sweep across confidence levels, and rolling monthly re-optimization.",
    category: "optimization",
    categoryLabel: "Optimization",
    tags: ["Python", "Gurobi", "LP", "Finance"],
    github: "https://github.com/ajuare5/cvar-portfolio-optimization",
    team: null
  },
  {
    title: "Marketing Budget Allocation",
    description: "Integer programming model allocating a $10M budget across 10 ad platforms with piecewise ROI tiers, business constraints, and a 12-month dynamic reinvestment model.",
    category: "optimization",
    categoryLabel: "Optimization",
    tags: ["Python", "Gurobi", "MIP", "Marketing"],
    github: "https://github.com/ajuare5/marketing-budget-allocation",
    team: null
  },
  {
    title: "Newsvendor Pricing Optimization",
    description: "Joint price & order quantity optimization via quadratic programming with bootstrap sensitivity analysis — outperforms the traditional critical fractile approach by 7.1%.",
    category: "optimization",
    categoryLabel: "Optimization",
    tags: ["Python", "Gurobi", "QP", "Operations Research"],
    github: "https://github.com/ajuare5/newsvendor-pricing-optimization",
    team: "Team of 4"
  },
  {
    title: "Avocado Price Forecasting",
    description: "Time series forecasting of avocado prices and sales volumes across 54 U.S. markets — ARIMA outperformed baselines with 7.3% MAPE, yielding ~$20K/week savings per retailer.",
    category: "data-eng",
    categoryLabel: "Data & Analytics",
    tags: ["R", "ARIMA", "Time Series", "Supply Chain"],
    github: "https://github.com/ajuare5/avocado-price-forecasting",
    team: "Team of 4"
  },
  {
    title: "Coffee Data Lakehouse",
    description: "End-to-end data lakehouse on Snowflake for coffee retail analytics — raw ingestion through dimensional modeling to business KPIs using Cortex AI.",
    category: "data-eng",
    categoryLabel: "Data Engineering",
    tags: ["Snowflake", "SQL", "Data Engineering", "Cortex AI"],
    github: "https://github.com/ajuare5/coffee-data-lakehouse",
    team: "Team of 3"
  },
  {
    title: "Connect-4 AI",
    description: "AI agent for Connect-4 using CNN and Transformer models with Monte Carlo Tree Search, containerized with Docker and served via a web frontend.",
    category: "ai",
    categoryLabel: "AI & Engineering",
    tags: ["Python", "PyTorch", "MCTS", "Docker"],
    github: "https://github.com/ajuare5/connect-4",
    team: null
  }
];

// ==========================================
// RENDER PROJECTS
// ==========================================
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = '';

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  filtered.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div>
        <div class="project-category">${project.categoryLabel}</div>
        <div class="project-title">${project.title}</div>
      </div>
      <p class="project-description">${project.description}</p>
      <div class="project-tags">
        ${project.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
      </div>
      ${project.team ? `<div class="project-team">${project.team}</div>` : ''}
      <a href="${project.github}" target="_blank" class="project-link">
        View on GitHub
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
    `;
    grid.appendChild(card);
  });
}

// ==========================================
// FILTER BUTTONS
// ==========================================
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
});

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ==========================================
// MOBILE NAV TOGGLE
// ==========================================
document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// ==========================================
// INIT
// ==========================================
renderProjects();
