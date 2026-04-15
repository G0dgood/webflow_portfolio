export interface Project {
  title: string;
  subtitle: string;
  tech: string;
  image: string;
  level?: 'Newbie' | 'Junior' | 'Intermediate' | 'Advanced';
  link?: string;
}

export const projects: Project[] = [
  // Existing Projects
  {
    title: "Next Basket - Full-Stack E-commerce",
    subtitle: "Web Application",
    tech: "Next.js & Strapi",
    image: "/projectImages/NextBasket.png",
    level: "Advanced",
    link: "https://next-basket-app.vercel.app/"
  },
  {
    title: "Product list with cart",
    subtitle: "E-commerce UI",
    tech: "HTML, CSS, JS",
    image: "/projectImages/product-list-cart.png",
    level: "Junior",
    link: "https://product-list-with-cart-lilac.vercel.app/"
  },
  {
    title: "Outcess - Enterprise Communication",
    subtitle: "Corporate Solutions",
    tech: "MERN Stack",
    image: "/projectImages/outcess.png",
    level: "Advanced",
    link: "https://outcess.netlify.app/"
  },
  {
    title: "Ramos Analytics - Data Visualization",
    subtitle: "Interactive Dashboard",
    tech: "React & TypeScript",
    image: "/projectImages/ramos.png",
    level: "Advanced",
    link: "https://ramos-drab.vercel.app/"
  },
  // New Frontend Mentor Challenges
  {
    title: "REST Countries API",
    subtitle: "Color theme switcher",
    tech: "HTML, CSS, JS, API",
    image: "/projectImages/rest-countries.png",
    level: "Advanced",
    link: "https://rest-countries-api-with-color-theme-wine.vercel.app/"
  },
  {
    title: "Intro component with sign-up form",
    subtitle: "Form validation",
    tech: "HTML, CSS, JS",
    image: "/projectImages/intro-signup.png",
    level: "Newbie",
    link: "https://intro-component-with-sign-up-form-taupe-five.vercel.app/"
  },
  {
    title: "URL shortening API landing page",
    subtitle: "API Landing Page",
    tech: "HTML, CSS, JS, API",
    image: "/projectImages/url-shortener.png",
    level: "Intermediate",
    link: "https://url-shortening-api-landing-page-lac.vercel.app/"
  },
  {
    title: "Rock, Paper, Scissors game",
    subtitle: "Interactive Game",
    tech: "HTML, CSS, JS",
    image: "/projectImages/rock-paper-scissors.png",
    level: "Advanced",
    link: "https://rock-paper-scissors-game-lemon-one.vercel.app/"
  },
  {
    title: "Digital bank landing page",
    subtitle: "Landing Page",
    tech: "HTML, JS, CSS",
    image: "/projectImages/digital-bank.png",
    level: "Intermediate",
    link: "https://digital-bank-landing-page-three-ashy.vercel.app/"
  },
  {
    title: "Job listings with filtering",
    subtitle: "Job Board",
    tech: "HTML, CSS, JS",
    image: "/projectImages/job-listings.png",
    level: "Intermediate",
    link: "https://job-listings-with-filtering-orpin.vercel.app/"
  },
  {
    title: "Chat app CSS illustration",
    subtitle: "CSS Art",
    tech: "HTML, CSS",
    image: "/projectImages/chat-app-css.png",
    level: "Intermediate",
    link: "https://chat-app-css-illustration-wheat.vercel.app/"
  },
  {
    title: "IP Address Tracker",
    subtitle: "API Tracker",
    tech: "HTML, CSS, JS, API",
    image: "/projectImages/ip-tracker.png",
    level: "Intermediate",
    link: "https://ip-address-tracker-xi-three.vercel.app/"
  },
  {
    title: "Room homepage",
    subtitle: "Landing Page with Slider",
    tech: "HTML, CSS, JS",
    image: "/projectImages/room-homepage.png",
    level: "Intermediate",
    link: "https://room-homepage-ten-eta.vercel.app/"
  },
  {
    title: "Todo app",
    subtitle: "Productivity App",
    tech: "HTML, CSS, JS",
    image: "/projectImages/todo-app.png",
    level: "Intermediate",
    link: "https://todo-app-nine-nu-15.vercel.app/"
  },
  {
    title: "Launch countdown timer",
    subtitle: "Utility Page",
    tech: "HTML, CSS, JS",
    image: "/projectImages/countdown-timer.png",
    level: "Intermediate",
    link: "https://launch-countdown-timer-tau-lyart.vercel.app/"
  },
  {
    title: "Calculator app",
    subtitle: "Utility App",
    tech: "HTML, CSS, JS",
    image: "/projectImages/calculator-app.png",
    level: "Intermediate",
    link: "https://calculator-app-rho-dun.vercel.app/"
  },
  {
    title: "Tip calculator app",
    subtitle: "Utility App",
    tech: "HTML, CSS, JS",
    image: "/projectImages/tip-calculator.png",
    level: "Junior",
    link: "https://tip-calculator-app-gold-six.vercel.app/"
  },
  {
    title: "E-commerce product page",
    subtitle: "Product Showcase",
    tech: "HTML, CSS, JS",
    image: "/projectImages/ecommerce-product.png",
    level: "Intermediate",
    link: "https://ecommerce-product-page-main-nine-mauve.vercel.app/"
  },
  {
    title: "Space tourism website",
    subtitle: "Multi-page Website",
    tech: "HTML, CSS, JS",
    image: "/projectImages/space-tourism.png",
    level: "Intermediate",
    link: "https://space-tourism-multi-page-website-pi.vercel.app/"
  },
  {
    title: "Interactive comments section",
    subtitle: "CRUD App",
    tech: "HTML, CSS, JS",
    image: "/projectImages/comments-section.png",
    level: "Intermediate",
    link: "https://interactive-comments-section-beta-rust.vercel.app/"
  },
  {
    title: "Intro section with dropdown",
    subtitle: "Navigation Pattern",
    tech: "HTML, CSS, JS",
    image: "/projectImages/dropdown-nav.png",
    level: "Junior",
    link: "https://intro-section-with-dropdown-navigat-bice.vercel.app/"
  },
  {
    title: "Expenses chart component",
    subtitle: "Data Visualization",
    tech: "HTML, CSS, JS",
    image: "/projectImages/expenses-chart.png",
    level: "Junior",
    link: "https://expenses-chart-component-blue-three.vercel.app/"
  },
  {
    title: "Interactive card details form",
    subtitle: "Form Experience",
    tech: "HTML, CSS, JS",
    image: "/projectImages/card-details.png",
    level: "Junior",
    link: "https://interactive-card-details-form-gamma-dun.vercel.app/"
  },
  {
    title: "Notifications page",
    subtitle: "UI Component",
    tech: "HTML, CSS, JS",
    image: "/projectImages/notifications.png",
    level: "Junior",
    link: "https://notifications-page-main-rho-plum.vercel.app/"
  },
  {
    title: "News homepage",
    subtitle: "Grid Layout",
    tech: "HTML, CSS, JS",
    image: "/projectImages/news-homepage.png",
    level: "Junior",
    link: "https://news-homepage-kappa-sand.vercel.app/"
  },
  {
    title: "Multi-step form",
    subtitle: "Advanced Form",
    tech: "HTML, CSS, JS",
    image: "/projectImages/multi-step-form.png",
    level: "Advanced",
    link: "https://multi-step-form-main-two-eta.vercel.app/"
  },
  {
    title: "Results summary component",
    subtitle: "Dashboard UI",
    tech: "HTML, CSS",
    image: "/projectImages/results-summary.png",
    level: "Newbie",
    link: "https://results-summary-component-one-lake.vercel.app/"
  },
  {
    title: "Age calculator app",
    subtitle: "Date Utility",
    tech: "HTML, CSS, JS",
    image: "/projectImages/age-calculator.png",
    level: "Junior",
    link: "https://age-calculator-app-nine-beta.vercel.app/"
  },
  {
    title: "Newsletter sign-up form",
    subtitle: "Form & Success State",
    tech: "HTML, CSS, JS",
    image: "/projectImages/newsletter-signup.png",
    level: "Junior",
    link: "https://newsletter-sign-up-form-with-succes-three.vercel.app/"
  },
  {
    title: "FAQ accordion",
    subtitle: "Interactive UI",
    tech: "HTML, CSS, JS",
    image: "/projectImages/faq-accordion.png",
    level: "Newbie",
    link: "https://faqsaccordions.netlify.app/"
  },
  {
    title: "Blog preview card",
    subtitle: "Layout Basics",
    tech: "HTML, CSS",
    image: "/projectImages/blog-preview.png",
    level: "Newbie",
    link: "https://voluble-clafoutis-c0bcda.netlify.app/"
  },
  {
    title: "Contact form",
    subtitle: "Form & Validation",
    tech: "HTML, CSS, JS",
    image: "/projectImages/contact-form.png",
    level: "Junior",
    link: "https://contact-forms-beta.vercel.app/"
  },
  {
    title: "Mortgage repayment calculator",
    subtitle: "Finance Utility",
    tech: "HTML, CSS, JS",
    image: "/projectImages/mortgage-calculator.png",
    level: "Junior",
    link: "https://mortgage-repayment-calculator-sandy.vercel.app/"
  },
  {
    title: "Medical Advance - Healthcare Portal",
    subtitle: "Management System",
    tech: "React & Node.js",
    image: "/projectImages/Hotel_Website copy.png",
    level: "Advanced",
    link: "https://medical-advance-platform.vercel.app/"
  },


  {
    title: "Browser extension manager",
    subtitle: "Manager UI",
    tech: "HTML, CSS, JS",
    image: "/projectImages/extension-manager.png",
    level: "Junior",
    link: "https://browser-extension-manager-ui-flax.vercel.app/"
  },
  {
    title: "Weather app",
    subtitle: "API App",
    tech: "HTML, CSS, JS, API",
    image: "/projectImages/weather-app.png",
    level: "Intermediate",
    link: "https://weather-app-blond-two-51.vercel.app/"
  },
  {
    title: "Typing speed test",
    subtitle: "Interactive Tool",
    tech: "HTML, CSS, JS",
    image: "/projectImages/typing-speed-test.png",
    level: "Junior",
    link: "https://typing-speed-test-livid-two.vercel.app/"
  },
  // Additional Projects
  {
    title: "Portfolio",
    subtitle: "Design Samples",
    tech: "Next.js, Tailwind",
    image: "/projectImages/portfolio.png",
    level: "Advanced",
    link: "https://good-portfolio.vercel.app/"
  },


  {
    title: "Random User",
    subtitle: "API Documentation",
    tech: "HTML, CSS, JS",
    image: "/projectImages/random-user.png",
    level: "Junior",
    link: "https://codelap-omega.vercel.app/"
  },
  {
    title: "Weather Application",
    subtitle: "Atmospheric Tracker",
    tech: "HTML, CSS, JS, API",
    image: "/projectImages/weather-v2.png",
    level: "Intermediate",
    link: "https://real-weather-rouge.vercel.app/"
  },
  {
    title: "Super Leads",
    subtitle: "Lead Management",
    tech: "React, Node.js",
    image: "/projectImages/super-leads.png",
    level: "Intermediate",
    link: "https://task-leads.vercel.app/"
  },
  {
    title: "Task Flow",
    subtitle: "Task Management",
    tech: "React, DND",
    image: "/projectImages/task-flow.png",
    level: "Advanced",
    link: "https://task-flow-vert.vercel.app/"
  },
  {
    title: "Loan Application",
    subtitle: "Sample Application",
    tech: "HTML, CSS, JS",
    image: "/projectImages/loan-app.png",
    level: "Junior",
    link: "https://client-module.netlify.app/"
  }
];
