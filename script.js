// ==========================================
// PROJECT DATA
// ==========================================
const projects = [
  {
    title: "Medical Insurance Analytics",
    description: "Three-problem ML framework tackling claim cost prediction, customer segmentation, and volume forecasting on a 100K-row insurance dataset. Applied Two-Part Model, Tweedie Regression, and Gradient Boosting to outperform standard baselines.",
    category: "ml",
    categoryLabel: "Machine Learning",
    tags: ["Python", "scikit-learn", "XGBoost", "Clustering"],
    github: "https://github.com/ajuare5/medical-insurance-analytics",
    team: "Team of 5"
  },
  {
    title: "Sephora Skincare Analytics",
    description: "NLP pipeline analyzing 87K+ Sephora customer reviews using a custom 40+ attribute lexicon with negation detection. Hybrid sentiment scoring weighted by review helpfulness, with brand-level lift analysis by skin type.",
    category: "ml",
    categoryLabel: "Machine Learning & NLP",
    tags: ["Python", "NLP", "Sentiment Analysis", "Regex"],
    github: "https://github.com/ajuare5/sephora-skincare-analytics",
    team: "Team of 6"
  },
  {
    title: "Austin Housing Prediction",
    description: "Ensemble models predicting residential prices across Austin, TX using geographic, structural, and listing features. Combined Random Forest, Bagging, and XGBoost with feature engineering including luxury keyword extraction and ratio-based metrics.",
    category: "ml",
    categoryLabel: "Machine Learning",
    tags: ["R", "Python", "Random Forest", "Ensemble"],
    github: "https://github.com/ajuare5/austin-housing-prediction",
    team: "Team of 4"
  },
  {
    title: "CVaR Portfolio Optimization",
    description: "Multi-part portfolio framework minimizing Conditional Value-at-Risk using Gurobi on Nasdaq return data (2019-2020). Includes beta sweep across confidence levels and rolling monthly re-optimization with 252-day training windows.",
    category: "optimization",
    categoryLabel: "Optimization",
    tags: ["Python", "Gurobi", "LP", "Finance"],
    github: "https://github.com/ajuare5/cvar-portfolio-optimization",
    team: null
  },
  {
    title: "Marketing Budget Allocation",
    description: "Multi-channel budget optimization model allocating $10M across 10 ad platforms with piecewise ROI tiers and binary tier-activation constraints. A 12-month dynamic reinvestment model achieved $7.08M total return at 5.12% ROI.",
    category: "optimization",
    categoryLabel: "Optimization",
    tags: ["Python", "Gurobi", "MIP", "Marketing"],
    github: "https://github.com/ajuare5/marketing-budget-allocation",
    team: null
  },
  {
    title: "Newsvendor Pricing Optimization",
    description: "Joint price and order quantity optimization using quadratic programming with price-sensitive stochastic demand. Outperformed the traditional critical fractile approach by 7.1%, validated through a 100-replicate bootstrap analysis.",
    category: "optimization",
    categoryLabel: "Optimization",
    tags: ["Python", "Gurobi", "QP", "Operations Research"],
    github: "https://github.com/ajuare5/newsvendor-pricing-optimization",
    team: "Team of 4"
  },
  {
    title: "Avocado Price Forecasting",
    description: "Time series forecasting of avocado prices and sales volumes across 54 U.S. markets using ARIMA, Exponential Smoothing, and Bayesian AR(1) on 169 weeks of retail data. ARIMA achieved 7.3% MAPE, estimated at $20K per week in savings per retailer.",
    category: "data-eng",
    categoryLabel: "Data & Analytics",
    tags: ["R", "ARIMA", "Time Series", "Supply Chain"],
    github: "https://github.com/ajuare5/avocado-price-forecasting",
    team: "Team of 4"
  },
  {
    title: "Coffee Data Lakehouse",
    description: "End-to-end cloud data lakehouse on Snowflake built using medallion architecture across raw, staging, and analytics layers. Includes dimensional models, SQL transformation pipelines, and Snowflake Cortex AI for KPI reporting.",
    category: "data-eng",
    categoryLabel: "Data Engineering",
    tags: ["Snowflake", "SQL", "Data Engineering", "Cortex AI"],
    github: "https://github.com/ajuare5/coffee-data-lakehouse",
    team: "Team of 3"
  },
  {
    title: "Connect-4 AI",
    description: "Generated 1.4M+ board positions via MCTS (2,000 simulations per move) to train AlphaZero-style CNN and Transformer models. Transformer achieved 77% top-1 move accuracy using 18x fewer parameters than the CNN. Deployed via Anvil, Docker, and AWS Lightsail.",
    category: "ai",
    categoryLabel: "AI & Engineering",
    tags: ["Python", "PyTorch", "MCTS", "Docker", "AWS"],
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
      <div class="project-front">
        <div class="project-category">${project.categoryLabel}</div>
        <div class="project-title">${project.title}</div>
        <div class="project-hint">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
          See more
        </div>
      </div>
      <div class="project-details">
        <div class="project-details-inner">
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
        </div>
      </div>
    `;
    card.addEventListener('click', () => card.classList.toggle('revealed'));
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
// PIT LANE ANIMATION
// ==========================================
let pitTriggered = false;
window.addEventListener('scroll', () => {
  if (!pitTriggered && window.scrollY > 60) {
    pitTriggered = true;
    ['f1Car', 'f1Car2', 'f1Car3', 'f1Car4', 'f1Car5'].forEach(id => {
      document.getElementById(id).classList.add('driving');
    });
    setTimeout(() => {
      document.getElementById('soccerBall').classList.add('launched');
    }, 150);
  }
}, { passive: true });

// ==========================================
// INIT
// ==========================================
renderProjects();
