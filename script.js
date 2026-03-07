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
    title: "Beer Recommender System",
    description: "Scraped 8,750 reviews across 250 beers from BeerAdvocate using Selenium, then built an attribute-based recommender using POS tagging, lift ratios, and VADER sentiment. Compared Bag-of-Words, spaCy embeddings, and custom Word2Vec, finding BOW best for domain-specific flavor matching. Validated that high ratings do not predict flavor preferences.",
    category: "ml",
    categoryLabel: "Machine Learning & NLP",
    tags: ["Python", "NLP", "Selenium", "Word2Vec", "spaCy"],
    github: "https://github.com/ajuare5/beer-recommender-system",
    team: "Team of 6"
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
    categoryLabel: "AI",
    tags: ["Python", "PyTorch", "MCTS", "Docker", "AWS"],
    github: "https://github.com/ajuare5/connect-4",
    demo: "https://youtu.be/h-xMCMP6j2I",
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
          <div class="project-links-row">
            <a href="${project.github}" target="_blank" class="project-link">
              View on GitHub
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            ${project.demo ? `<a href="${project.demo}" target="_blank" class="project-link project-link-demo">
              Watch Demo
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </a>` : ''}
          </div>
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
// WORLD MAP
// ==========================================
function initWorldMap() {
  // ISO 3166-1 numeric codes
  const visited = [
    { name: 'United States', id: 840 },
    { name: 'Mexico',        id: 484 },
    { name: 'Canada',        id: 124 },
    { name: 'UK',            id: 826 },
    { name: 'Spain',         id: 724 },
    { name: 'France',        id: 250 },
    { name: 'Italy',         id: 380 },
    { name: 'Netherlands',   id: 528 },
    { name: 'Germany',       id: 276 },
    { name: 'Portugal',      id: 620 },
    { name: 'Greece',        id: 300 },
    { name: 'Bahamas',       id:  44 },
  ];

  const bucketList = [
    { name: 'Japan',       id: 392 },
    { name: 'Brazil',      id:  76 },
    { name: 'Switzerland', id: 756 },
    { name: 'Australia',   id:  36 },
    { name: 'Chile',       id: 152 },
    { name: 'Costa Rica',  id: 188 },
    { name: 'Peru',        id: 604 },
    { name: 'Colombia',    id: 170 },
    { name: 'Aruba',       id: 533 },
    { name: 'South Korea', id: 410 },
  ];

  const visitedIds  = new Set(visited.map(c => c.id));
  const bucketIds   = new Set(bucketList.map(c => c.id));
  const nameMap     = {};
  [...visited, ...bucketList].forEach(c => { nameMap[c.id] = c.name; });

  // Fallback markers for small islands not in 110m dataset
  const fallbacks = {
     44: { name: 'Bahamas',  coords: [25.03, -77.40], type: 'visited'  },
    533: { name: 'Aruba',    coords: [12.52, -69.97], type: 'bucket'   },
  };

  const map = L.map('world-map', {
    center: [20, 10],
    zoom: 1,
    scrollWheelZoom: false,
    zoomControl: false,
    dragging: true,
    doubleClickZoom: false,
    touchZoom: false,
    keyboard: false,
    boxZoom: false,
    minZoom: 1,
    maxZoom: 1,
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 6,
  }).addTo(map);

  const foundIds = new Set();

  // Force Leaflet to recalculate container size after layout settles
  setTimeout(() => map.invalidateSize(), 250);

  fetch('assets/countries-110m.json')
    .then(r => r.json())
    .then(world => {
      const countries = topojson.feature(world, world.objects.countries);

      L.geoJSON(countries, {
        style: feature => {
          const id = +feature.id;
          if (visitedIds.has(id)) {
            foundIds.add(id);
            return { fillColor: '#BF5700', color: '#ff9a45', weight: 1, fillOpacity: 0.75, opacity: 1 };
          }
          if (bucketIds.has(id)) {
            foundIds.add(id);
            return { fillColor: '#3b82f6', color: '#93c5fd', weight: 1, fillOpacity: 0.65, opacity: 1 };
          }
          return { fillColor: 'transparent', color: 'rgba(255,255,255,0.06)', weight: 0.5, fillOpacity: 0, opacity: 0.4 };
        },
        onEachFeature: (feature, layer) => {
          const id = +feature.id;
          if (visitedIds.has(id) || bucketIds.has(id)) {
            const label = nameMap[id] || '';
            layer.bindTooltip(label, { className: 'map-tooltip', direction: 'top', sticky: true });
            layer.on('mouseover', function() { this.setStyle({ fillOpacity: 0.95 }); });
            layer.on('mouseout',  function() { this.setStyle({ fillOpacity: visitedIds.has(id) ? 0.75 : 0.65 }); });
          }
        }
      }).addTo(map);

      // Add circle markers for islands missing from 110m dataset
      Object.entries(fallbacks).forEach(([id, { name, coords, type }]) => {
        if (!foundIds.has(+id)) {
          const isVisited = type === 'visited';
          L.circleMarker(coords, {
            radius: 6,
            fillColor: isVisited ? '#BF5700' : '#3b82f6',
            color:     isVisited ? '#ff9a45' : '#93c5fd',
            weight: 2, opacity: 1, fillOpacity: 0.8,
          }).addTo(map).bindTooltip(name, { className: 'map-tooltip', direction: 'top', offset: [0, -4] });
        }
      });
    });
}

// ==========================================
// INIT
// ==========================================
renderProjects();
initWorldMap();
