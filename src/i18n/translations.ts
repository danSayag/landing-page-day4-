export type Language = 'en' | 'he' | 'fr'

export const translations = {
  en: {
    dir: 'ltr' as const,
    lang: 'en',
    nav: {
      home: 'Home',
      features: 'Features',
      testimonials: 'Testimonials',
      pricing: 'Pricing',
      faq: 'FAQ',
      getStarted: 'Get started',
      skipToMain: 'Skip to main content',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      toggleLang: 'Switch language',
      language: 'Language',
    },
    hero: {
      badge: 'Built for high-volume shippers',
      headline1: 'Every package. Every update.',
      headline2: 'One dashboard.',
      description:
        'Nova helps large companies send mail and packages faster. Automate labels, pick the best carrier every time, and track every shipment in real time — because time is money.',
      ctaPrimary: 'Start free trial',
      ctaSecondary: 'See how it works',
      sources: {
        Carriers: 'Carriers',
        Stores: 'Stores',
        Warehouses: 'Warehouses',
        Marketplaces: 'Marketplaces',
        Returns: 'Returns',
      },
      dashboardName: 'Nova dashboard',
      dashboardTagline: 'Every shipment, one organized view',
      trustedPrefix: 'Trusted by',
      trustedCount: '12,000+',
      trustedSuffix: 'companies worldwide',
    },
    trustedBy: {
      label: 'Who we work with',
    },
    howItWorks: {
      sectionLabel: 'How it works',
      sectionTitle: 'Getting started is simple',
      sectionDescription: 'From our first conversation to real time savings — in three easy steps.',
      steps: [
        {
          title: 'We meet',
          description: 'We start with a short call to understand your workflow, your shipping volume, and exactly what is slowing your team down.',
        },
        {
          title: 'I build it for you',
          description: 'I set everything up for your operation — carriers, automations, and dashboards — so it works from day one, with nothing for you to configure.',
        },
        {
          title: 'You start saving time',
          description: 'Your team ships faster with far less manual work, and you get hours back every single week.',
        },
      ],
    },
    features: {
      sectionLabel: 'Features',
      sectionTitle: 'Everything your operation needs',
      sectionDescription:
        'One platform for your entire shipping operation — from mailroom to doorstep.',
      items: {
        'package-tracking': {
          title: 'Package Tracking',
          description: 'Real-time status for every parcel, from pickup to doorstep.',
        },
        'mail-sorting': {
          title: 'Package Sorting',
          description: 'Auto-route mail and packages to the right hub and driver.',
        },
        'customer-notifications': {
          title: 'Customer Notifications',
          description: 'Automatic SMS and email updates at every delivery step.',
        },
        'staff-management': {
          title: 'Staff Management',
          description: 'Assign routes, track drivers, and manage shifts in one place.',
        },
        'delivery-status': {
          title: 'Delivery Status',
          description: 'Live delivery status board for your entire fleet.',
        },
        'reports-analytics': {
          title: 'Reports & Analytics',
          description: 'Actionable insights on volume, cost, and carrier performance.',
        },
      },
    },
    testimonials: {
      sectionLabel: 'Testimonials',
      sectionTitle: 'Loved by operations teams everywhere',
      starsLabel: '5 out of 5 stars',
      items: [
        {
          quote:
            'Nova cut our shipping prep from two days to two hours. The bulk label builder alone paid for itself in the first month.',
          name: 'Sarah Chen',
          role: 'Head of Logistics, Linear Labs',
        },
        {
          quote:
            'The best operations decision we made this year. We ship twice as many packages with the same team, and nothing gets lost anymore.',
          name: 'Marcus Reid',
          role: 'VP of Operations, Brightflow',
        },
        {
          quote:
            'We replaced three separate carrier portals with Nova in a single afternoon. Every package, every update — one dashboard.',
          name: 'Elena Novak',
          role: 'Mailroom Manager, Framewise',
        },
      ],
    },
    faq: {
      sectionTitle: 'Frequently asked questions',
      items: [
        {
          question: 'How does the free trial work?',
          answer:
            'You get full access to all Pro features for 14 days — no credit card required. At the end of the trial you can pick a plan or continue on the free Starter tier.',
        },
        {
          question: 'Can I change plans later?',
          answer:
            'Absolutely. You can upgrade, downgrade, or cancel at any time from your billing settings. Changes take effect immediately and we prorate any differences.',
        },
        {
          question: 'Do you offer discounts for startups or nonprofits?',
          answer:
            'Yes! Early-stage startups and registered nonprofits get 50% off Pro for the first year. Reach out to our sales team to apply.',
        },
        {
          question: 'Is my data secure?',
          answer:
            'Security is our top priority. We are SOC 2 Type II certified, encrypt all data in transit and at rest, and offer SSO and audit logs on Enterprise plans.',
        },
        {
          question: 'Which carriers do you support?',
          answer:
            'Nova connects with 100+ carriers worldwide including FedEx, UPS, DHL, and USPS. You can also plug in your own carrier contracts or build custom integrations with our REST API.',
        },
      ],
    },
    faqPage: {
      title: 'Frequently asked questions',
      subtitle: 'Everything you need to know about Nova. Can’t find an answer? Talk to our team.',
      items: [
        {
          question: 'How does the free trial work?',
          answer:
            'You get full access to all Pro features for 14 days — no credit card required. At the end of the trial you can pick a plan or continue on the free Starter tier.',
        },
        {
          question: 'Can I change plans later?',
          answer:
            'Absolutely. You can upgrade, downgrade, or cancel at any time from your billing settings. Changes take effect immediately and we prorate any differences.',
        },
        {
          question: 'Do you offer discounts for startups or nonprofits?',
          answer:
            'Yes! Early-stage startups and registered nonprofits get 50% off Pro for the first year. Reach out to our sales team to apply.',
        },
        {
          question: 'Is my data secure?',
          answer:
            'Security is our top priority. We are SOC 2 Type II certified, encrypt all data in transit and at rest, and offer SSO and audit logs on Enterprise plans.',
        },
        {
          question: 'Which carriers do you support?',
          answer:
            'Nova connects with 100+ carriers worldwide including FedEx, UPS, DHL, and USPS. You can also plug in your own carrier contracts or build custom integrations with our REST API.',
        },
        {
          question: 'How long does setup take?',
          answer:
            'Most teams are up and running the same day. We handle the configuration for you — carriers, automations, and dashboards — so there is nothing technical for you to set up.',
        },
        {
          question: 'Do you integrate with my existing tools?',
          answer:
            'Yes. Nova connects with popular e-commerce platforms, ERPs, and warehouse systems, and our REST API and webhooks let you wire up anything custom.',
        },
        {
          question: 'Can I track shipments across multiple carriers in one place?',
          answer:
            'Absolutely. Every shipment from every carrier appears on a single dashboard with real-time status, so your team never juggles separate portals again.',
        },
        {
          question: 'Is there a limit on team members?',
          answer:
            'Starter includes one seat, Pro includes up to 20, and Enterprise is unlimited. You can add or remove seats at any time and we prorate the change.',
        },
        {
          question: 'What kind of support do you offer?',
          answer:
            'Starter gets community support, Pro gets priority support with fast response times, and Enterprise gets a dedicated success manager and a guaranteed SLA.',
        },
        {
          question: 'Can customers track their own packages?',
          answer:
            'Yes. Customers receive automatic SMS and email updates at every step and can follow their package on a live tracking page — which cuts “where is my order?” tickets dramatically.',
        },
        {
          question: 'How do I get started?',
          answer:
            'Start your free 14-day trial — no credit card required. Book a short onboarding call and we will have your operation fully set up before the trial ends.',
        },
      ],
    },
    cta: {
      title: 'Ready to ship faster?',
      description:
        'Join 12,000+ companies already shipping with Nova. Start your free 14-day trial today — no credit card required.',
      primary: 'Start free trial',
      secondary: 'Talk to sales',
    },
    pricing: {
      sectionLabel: 'Pricing',
      sectionTitle: 'Simple, transparent pricing',
      sectionDescription: "Start free, upgrade when you're ready. No hidden fees, cancel anytime.",
      mostPopular: 'Most popular',
      plans: [
        {
          name: 'Starter',
          price: '$0',
          period: '/month',
          description: 'For small teams getting started.',
          features: [
            'Up to 50 shipments/month',
            '1 team member',
            'Community support',
            'Basic tracking',
          ],
          cta: 'Start for free',
          highlighted: false,
        },
        {
          name: 'Pro',
          price: '$29',
          period: '/month',
          description: 'For growing companies shipping at scale.',
          features: [
            'Unlimited shipments',
            'Up to 20 team members',
            'Priority support',
            'Advanced analytics',
            'Automation builder',
            'Discounted carrier rates',
          ],
          cta: 'Start free trial',
          highlighted: true,
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          period: '',
          description: 'For organizations with advanced needs.',
          features: [
            'Everything in Pro',
            'Unlimited team members',
            'SSO & audit logs',
            'Dedicated success manager',
            'SLA & custom contracts',
          ],
          cta: 'Contact sales',
          highlighted: false,
        },
      ],
    },
    footer: {
      description:
        'The platform that helps large companies send mail and packages faster. Every package. Every update. One dashboard.',
      copyright: `© ${new Date().getFullYear()} Nova Inc. All rights reserved.`,
      columns: [
        {
          title: 'Product',
          links: ['Features', 'Pricing', 'Integrations', 'Changelog', 'Roadmap'],
        },
        {
          title: 'Company',
          links: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
        },
        {
          title: 'Resources',
          links: ['Documentation', 'API Reference', 'Community', 'Status', 'Help Center'],
        },
        {
          title: 'Legal',
          links: ['Privacy', 'Terms', 'Security', 'Cookies'],
        },
      ],
    },
    pricingTable: {
      title: 'Compare plans',
      subtitle: 'Everything you get with each tier, side by side.',
      columns: { features: 'Features', starter: 'Starter', pro: 'Pro', enterprise: 'Enterprise' },
      sections: [
        {
          title: 'Shipping',
          rows: [
            { feature: 'Monthly shipments', starter: 'Up to 50', pro: 'Unlimited', enterprise: 'Unlimited' },
            { feature: 'Bulk label creation', starter: false, pro: true, enterprise: true },
            { feature: 'Scheduled pickups', starter: true, pro: true, enterprise: true },
            { feature: 'Automatic carrier selection', starter: false, pro: true, enterprise: true },
            { feature: 'Discounted carrier rates', starter: false, pro: true, enterprise: 'Custom rates' },
          ],
        },
        {
          title: 'Tracking & analytics',
          rows: [
            { feature: 'Real-time tracking', starter: true, pro: true, enterprise: true },
            { feature: 'Delivery alerts', starter: false, pro: true, enterprise: true },
            { feature: 'Advanced analytics', starter: false, pro: true, enterprise: true },
            { feature: 'Carrier performance reports', starter: false, pro: true, enterprise: true },
          ],
        },
        {
          title: 'Team & security',
          rows: [
            { feature: 'Team members', starter: '1', pro: 'Up to 20', enterprise: 'Unlimited' },
            { feature: 'Automation builder', starter: false, pro: true, enterprise: true },
            { feature: 'Role-based access control', starter: false, pro: true, enterprise: true },
            { feature: 'SSO & audit logs', starter: false, pro: false, enterprise: true },
          ],
        },
        {
          title: 'Support',
          rows: [
            { feature: 'Support level', starter: 'Community', pro: 'Priority', enterprise: 'Dedicated manager' },
            { feature: 'SLA & custom contracts', starter: false, pro: false, enterprise: true },
          ],
        },
      ],
    },
    accessibilityPage: {
      title: 'Accessibility Statement',
      commitment: {
        heading: 'Our Commitment',
        body: 'Nova is committed to making its website accessible to people with disabilities, in accordance with the Equal Rights for Persons with Disabilities Regulations (Service Accessibility Adjustments), 2013 and Israeli Standard IS 5568, which is based on WCAG 2.0 Level AA.',
      },
      compliance: {
        heading: 'Compliance Status',
        body: 'This website aims to conform to WCAG 2.0 Level AA (Israeli Standard IS 5568). The following accessibility features are implemented:',
        items: [
          'Skip to main content link (keyboard users)',
          'Semantic HTML landmarks: header, nav, main, footer',
          'All interactive elements are keyboard accessible',
          'Visible focus indicators on all focusable elements',
          'ARIA labels on navigation and interactive components',
          'aria-current="page" indicating the active page',
          'Sufficient color contrast (minimum 4.5:1 for normal text)',
          'Responsive design supporting zoom up to 200%',
          'All images and icons include alternative text or are marked decorative',
        ],
      },
      known: {
        heading: 'Known Limitations',
        body: 'We are continuously working to improve accessibility. If you encounter any barrier not listed here, please contact us.',
      },
      contact: {
        heading: 'Accessibility Contact',
        body: 'If you experience any accessibility barrier on this website, or require content in an alternative format, please contact our accessibility coordinator:',
        nameLabel: 'Name:',
        nameValue: 'Nova Accessibility Coordinator',
        emailLabel: 'Email:',
        phoneLabel: 'Phone:',
        responseNote: 'We aim to respond to accessibility requests within 2 business days.',
      },
      date: {
        heading: 'Statement Date',
        reviewedOn: 'This accessibility statement was last reviewed on',
        value: 'July 8, 2026',
      },
    },
    featuresPage: {
      badge: 'Features',
      title: 'Everything your operation needs',
      subtitle: 'Six features, one dashboard. Scroll to see each one exactly as your team will.',
      startTrial: 'Start free trial',
      seePricing: 'See pricing',
      seePricingArrow: 'See pricing →',
      scrollToExplore: 'Scroll to explore ↓',
      dashboardName: 'Nova Dashboard',
      sidebar: ['Overview', 'Tracking', 'Sorting', 'Notifications', 'Staff', 'Deliveries', 'Reports'],
      barsBadge: '+24% this week',
      closing: {
        title: 'All of it works together, out of the box',
        text: 'Every feature feeds the same dashboard — no integrations to glue together.',
      },
      stories: {
        'package-tracking': [
          { title: 'Every parcel on a live map', text: 'The Tracking tab shows all active routes in real time. Watch each driver move across the city and spot problems before they reach the customer.', panel: { kind: 'map' } },
          { title: 'Live status for every package', text: 'Each shipment updates the second it changes — picked up, at hub, out for delivery. No calls to drivers, no guessing.', panel: { kind: 'table', rows: [
            { main: 'PKG-3821', sub: 'New York → Boston', badge: 'In transit', tone: 'blue' },
            { main: 'PKG-5504', sub: 'Chicago → Detroit', badge: 'Out for delivery', tone: 'green' },
            { main: 'PKG-0193', sub: 'Austin → Dallas', badge: 'At hub', tone: 'amber' },
          ] } },
          { title: 'Your numbers, always current', text: 'The overview tiles update themselves as packages move, so your morning starts with real data instead of yesterday’s export.', panel: { kind: 'stats', items: [
            { value: '1,248', label: 'In transit' },
            { value: '98.6%', label: 'On time' },
            { value: '312', label: 'Delivered today' },
          ] } },
        ],
        'mail-sorting': [
          { title: 'All incoming mail in one queue', text: 'Every letter and parcel that enters the depot is scanned once and lands in a single queue on the dashboard.', panel: { kind: 'bubbles', items: [
            { title: 'Invoice #4421', sub: 'Sarah M. · Zone North', accent: true },
            { title: 'Certified letter', sub: 'USPS · Zone Center' },
            { title: 'Return request', sub: 'Tom Wren · Zone Docks' },
          ] } },
          { title: 'Auto-routed to the right hub', text: 'Sorting rules send each item down the right lane automatically — by zip, route, or service level. You watch every lane live.', panel: { kind: 'sort' } },
          { title: 'Nothing gets misplaced', text: 'Misroutes show up on the board immediately, so they get fixed at the depot — not at an angry customer’s door.', panel: { kind: 'stats', items: [
            { value: '2,431', label: 'Sorted today' },
            { value: '3', label: 'Hubs synced' },
            { value: '0', label: 'Misplaced' },
          ] } },
        ],
        'customer-notifications': [
          { title: 'Automatic SMS & email updates', text: 'Write your message templates once. From then on, every status change sends the right message to the right customer — automatically.', panel: { kind: 'bubbles', items: [
            { title: 'Your package is out for delivery', sub: 'SMS · +1 555-0142', accent: true },
            { title: 'Delivered — photo attached', sub: 'Email · anna@example.com' },
            { title: 'Pickup scheduled for 9:00', sub: 'SMS · +1 555-0198' },
          ] } },
          { title: 'Triggered by real delivery events', text: 'Notifications fire exactly when the parcel moves — not on a timer. Customers see the same truth your dispatchers see.', panel: { kind: 'timeline', done: 2, labels: ['Picked up', 'In transit', 'Delivered'] } },
          { title: 'Fewer “where is my package?” calls', text: 'When customers already know, they stop calling. Your team gets its day back.', panel: { kind: 'stats', items: [
            { value: '-62%', label: 'Support calls' },
            { value: '4.9★', label: 'Delivery rating' },
            { value: '100%', label: 'Customers informed' },
          ] } },
        ],
        'staff-management': [
          { title: 'Your whole team in one view', text: 'Drivers, sorters, and dispatchers — who’s on shift, what they’re carrying, and where they are right now.', panel: { kind: 'roster', rows: [
            { name: 'James R.', role: 'Van · #V-14', pct: 100 },
            { name: 'Maria L.', role: 'Truck · #T-07', pct: 75 },
            { name: 'Priya S.', role: 'Truck · #T-03', pct: 45 },
          ] } },
          { title: 'Assign routes in seconds', text: 'Drag a route onto a driver and they get it on their phone instantly — with stops, packages, and directions.', panel: { kind: 'table', rows: [
            { main: 'James R.', sub: 'Route 12 · North', badge: 'Assigned', tone: 'green' },
            { main: 'Maria L.', sub: 'Route 4 · Docks', badge: 'Assigned', tone: 'green' },
            { main: 'David K.', sub: 'Route 9 · Center', badge: 'Pending', tone: 'amber' },
          ] } },
          { title: 'Shifts planned ahead', text: 'Coverage gaps and double-bookings are flagged before they happen, not discovered at 6 AM.', panel: { kind: 'stats', items: [
            { value: '12', label: 'Drivers on shift' },
            { value: '98%', label: 'Route coverage' },
            { value: '0', label: 'Conflicts' },
          ] } },
        ],
        'delivery-status': [
          { title: 'A live board of every delivery', text: 'One board shows each delivery moving through its stages. Green means moving, and everything else gets your attention.', panel: { kind: 'timeline', done: 3, labels: ['Picked up', 'In transit', 'Delivered'] } },
          { title: 'Delays flagged before customers notice', text: 'Exceptions and delays bubble to the top of the board automatically, so dispatch fixes them while there’s still time.', panel: { kind: 'table', rows: [
            { main: 'PKG-7741', sub: 'Seattle → Portland', badge: 'On time', tone: 'green' },
            { main: 'PKG-2290', sub: 'Miami → Orlando', badge: 'Delayed 20m', tone: 'rose' },
            { main: 'PKG-5504', sub: 'Chicago → Detroit', badge: 'Exception', tone: 'amber' },
          ] } },
          { title: 'Proof of delivery, attached', text: 'Signatures and photos are stored with each delivery, so disputes end with a link instead of a phone chain.', panel: { kind: 'stats', items: [
            { value: '312', label: 'Delivered today' },
            { value: '307', label: 'Signatures' },
            { value: '5', label: 'Photo proof' },
          ] } },
        ],
        'reports-analytics': [
          { title: 'Your week at a glance', text: 'Volume, on-time rate, and team performance — charted live on the Reports tab, no spreadsheet required.', panel: { kind: 'bars' } },
          { title: 'Spot trends before they cost you', text: 'Week-over-week changes are computed for you. When a route slows down or costs creep up, you see it first.', panel: { kind: 'table', rows: [
            { main: 'On-time rate', sub: 'vs last week', badge: '+1.2%', tone: 'green' },
            { main: 'Avg delivery time', sub: 'vs last week', badge: '-4 min', tone: 'green' },
            { main: 'Cost per package', sub: 'vs last week', badge: '-$0.11', tone: 'green' },
          ] } },
          { title: 'A digest in your inbox every Monday', text: 'The numbers that matter, summarized and delivered — before your first coffee.', panel: { kind: 'bubbles', items: [
            { title: 'Weekly digest', sub: '8,240 packages delivered', accent: true },
            { title: 'Top route', sub: 'North · 1,204 stops' },
            { title: 'Needs attention', sub: '3 routes ran late twice' },
          ] } },
        ],
      },
    },
    accessibility: {
      buttonLabel: 'Accessibility statement',
      widget: {
        title: 'Accessibility settings',
        open: 'Open accessibility settings',
        close: 'Close accessibility settings',
        fontSize: 'Font size',
        decrease: 'Decrease font size',
        increase: 'Increase font size',
        highContrast: 'High contrast',
        underlineLinks: 'Underline links',
        stopAnimations: 'Stop animations',
        reset: 'Reset settings',
      },
    },
  },

  he: {
    dir: 'rtl' as const,
    lang: 'he',
    nav: {
      home: 'בית',
      features: 'תכונות',
      testimonials: 'המלצות',
      pricing: 'מחירים',
      faq: 'שאלות נפוצות',
      getStarted: 'התחל עכשיו',
      skipToMain: 'דלג לתוכן הראשי',
      openMenu: 'פתח תפריט ניווט',
      closeMenu: 'סגור תפריט ניווט',
      toggleLang: 'החלף שפה',
      language: 'שפה',
    },
    hero: {
      badge: 'בנוי לשולחי חבילות בנפח גבוה',
      headline1: 'כל חבילה. כל עדכון.',
      headline2: 'לוח בקרה אחד.',
      description:
        'נובה עוזרת לחברות גדולות לשלוח דואר וחבילות מהר יותר. אוטומציה של תוויות, בחירת המוביל הטוב ביותר בכל פעם, ומעקב אחר כל משלוח בזמן אמת — כי זמן הוא כסף.',
      ctaPrimary: 'התחל ניסיון חינמי',
      ctaSecondary: 'ראה איך זה עובד',
      sources: {
        Carriers: 'מובילים',
        Stores: 'חנויות',
        Warehouses: 'מחסנים',
        Marketplaces: 'שווקים',
        Returns: 'החזרות',
      },
      dashboardName: 'לוח הבקרה של Nova',
      dashboardTagline: 'כל משלוח, בתצוגה מסודרת אחת',
      trustedPrefix: 'בשימוש',
      trustedCount: '12,000+',
      trustedSuffix: 'חברות ברחבי העולם',
    },
    trustedBy: {
      label: 'עם מי אנחנו עובדים',
    },
    howItWorks: {
      sectionLabel: 'איך זה עובד',
      sectionTitle: 'להתחיל זה פשוט',
      sectionDescription: 'מהשיחה הראשונה ועד חיסכון אמיתי בזמן — בשלושה צעדים קלים.',
      steps: [
        {
          title: 'נפגשים',
          description: 'מתחילים בשיחה קצרה כדי להבין את תהליך העבודה שלכם, את נפח המשלוחים, ובדיוק מה מעכב את הצוות.',
        },
        {
          title: 'אני בונה עבורכם',
          description: 'אני מקים את כל המערכת עבור התפעול שלכם — מובילים, אוטומציות ולוחות בקרה — כך שהכול עובד מהיום הראשון, בלי שתצטרכו להגדיר דבר.',
        },
        {
          title: 'אתם מתחילים לחסוך זמן',
          description: 'הצוות שלכם שולח מהר יותר עם הרבה פחות עבודה ידנית, ואתם מרוויחים שעות בחזרה בכל שבוע.',
        },
      ],
    },
    features: {
      sectionLabel: 'תכונות',
      sectionTitle: 'כל מה שהתפעול שלך צריך',
      sectionDescription: 'פלטפורמה אחת לכל מערך המשלוחים שלך — מחדר הדואר ועד הדלת.',
      items: {
        'package-tracking': {
          title: 'מעקב חבילות',
          description: 'סטטוס בזמן אמת לכל חבילה, מהאיסוף ועד הדלת.',
        },
        'mail-sorting': {
          title: 'מיון חבילות',
          description: 'ניתוב אוטומטי של דואר וחבילות לעמדה ולנהג הנכון.',
        },
        'customer-notifications': {
          title: 'עדכונים ללקוחות',
          description: 'עדכוני SMS ואימייל אוטומטיים בכל שלב במשלוח.',
        },
        'staff-management': {
          title: 'ניהול צוות',
          description: 'הקצה מסלולים, עקוב אחר נהגים, ונהל משמרות במקום אחד.',
        },
        'delivery-status': {
          title: 'סטטוס משלוח',
          description: 'לוח סטטוס משלוחים חי לכל הצי שלך.',
        },
        'reports-analytics': {
          title: 'דוחות ואנליטיקה',
          description: 'תובנות מעשיות על נפח, עלויות וביצועי מובילים.',
        },
      },
    },
    testimonials: {
      sectionLabel: 'המלצות',
      sectionTitle: 'אהוב על צוותי תפעול בכל מקום',
      starsLabel: '5 מתוך 5 כוכבים',
      items: [
        {
          quote:
            'נובה קיצרה את זמן הכנת המשלוח שלנו משני ימים לשעתיים. בונה התוויות הגדול לבדו החזיר את עצמו תוך חודש ראשון.',
          name: 'Sarah Chen',
          role: 'ראש לוגיסטיקה, Linear Labs',
        },
        {
          quote:
            'ההחלטה התפעולית הטובה ביותר שעשינו השנה. אנחנו שולחים פי שניים חבילות עם אותו צוות, ולא מאבדים כלום.',
          name: 'Marcus Reid',
          role: 'סמנכ"ל פעולות, Brightflow',
        },
        {
          quote:
            'החלפנו שלושה פורטלים נפרדים של מובילים בנובה בצהריים אחד. כל חבילה, כל עדכון — לוח בקרה אחד.',
          name: 'Elena Novak',
          role: 'מנהלת חדר הדואר, Framewise',
        },
      ],
    },
    faq: {
      sectionTitle: 'שאלות נפוצות',
      items: [
        {
          question: 'איך עובד הניסיון החינמי?',
          answer:
            'תקבל גישה מלאה לכל תכונות ה-Pro למשך 14 יום — ללא כרטיס אשראי. בסיום הניסיון תוכל לבחור תוכנית או להמשיך בשכבת Starter החינמית.',
        },
        {
          question: 'האם ניתן לשנות תוכניות מאוחר יותר?',
          answer:
            'בהחלט. ניתן לשדרג, לשנמך, או לבטל בכל עת מהגדרות החיוב. שינויים נכנסים לתוקף מיד ואנו מחשבים פרופורציה לכל הפרשים.',
        },
        {
          question: 'האם אתם מציעים הנחות לסטארטאפים או ארגונים ללא מטרת רווח?',
          answer:
            'כן! סטארטאפים בשלב מוקדם וארגונים ללא מטרת רווח מקבלים 50% הנחה על Pro לשנה הראשונה. פנו לצוות המכירות שלנו להגשת בקשה.',
        },
        {
          question: 'האם הנתונים שלי מאובטחים?',
          answer:
            'אבטחה היא העדיפות העליונה שלנו. אנחנו מוסמכים SOC 2 Type II, מצפינים את כל הנתונים במעבר ובמנוחה, ומציעים SSO ויומני ביקורת בתוכניות Enterprise.',
        },
        {
          question: 'באילו מובילים אתם תומכים?',
          answer:
            'נובה מתחברת ל-100+ מובילים ברחבי העולם כולל FedEx, UPS, DHL ו-USPS. ניתן גם לחבר את חוזי המוביל שלך או לבנות אינטגרציות מותאמות אישית עם ה-REST API שלנו.',
        },
      ],
    },
    faqPage: {
      title: 'שאלות נפוצות',
      subtitle: 'כל מה שצריך לדעת על נובה. לא מצאתם תשובה? דברו עם הצוות שלנו.',
      items: [
        {
          question: 'איך עובד הניסיון החינמי?',
          answer:
            'תקבל גישה מלאה לכל תכונות ה-Pro למשך 14 יום — ללא כרטיס אשראי. בסיום הניסיון תוכל לבחור תוכנית או להמשיך בשכבת Starter החינמית.',
        },
        {
          question: 'האם ניתן לשנות תוכניות מאוחר יותר?',
          answer:
            'בהחלט. ניתן לשדרג, לשנמך, או לבטל בכל עת מהגדרות החיוב. שינויים נכנסים לתוקף מיד ואנו מחשבים פרופורציה לכל הפרשים.',
        },
        {
          question: 'האם אתם מציעים הנחות לסטארטאפים או ארגונים ללא מטרת רווח?',
          answer:
            'כן! סטארטאפים בשלב מוקדם וארגונים ללא מטרת רווח מקבלים 50% הנחה על Pro לשנה הראשונה. פנו לצוות המכירות שלנו להגשת בקשה.',
        },
        {
          question: 'האם הנתונים שלי מאובטחים?',
          answer:
            'אבטחה היא העדיפות העליונה שלנו. אנחנו מוסמכים SOC 2 Type II, מצפינים את כל הנתונים במעבר ובמנוחה, ומציעים SSO ויומני ביקורת בתוכניות Enterprise.',
        },
        {
          question: 'באילו מובילים אתם תומכים?',
          answer:
            'נובה מתחברת ל-100+ מובילים ברחבי העולם כולל FedEx, UPS, DHL ו-USPS. ניתן גם לחבר את חוזי המוביל שלך או לבנות אינטגרציות מותאמות אישית עם ה-REST API שלנו.',
        },
        {
          question: 'כמה זמן לוקחת ההקמה?',
          answer:
            'רוב הצוותים מתחילים לעבוד עוד באותו יום. אנחנו מבצעים עבורכם את כל ההגדרה — מובילים, אוטומציות ולוחות בקרה — כך שאין שום דבר טכני שאתם צריכים להגדיר.',
        },
        {
          question: 'האם אתם משתלבים עם הכלים הקיימים שלי?',
          answer:
            'כן. נובה מתחברת לפלטפורמות מסחר פופולריות, מערכות ERP ומערכות מחסן, וה-REST API וה-webhooks שלנו מאפשרים לחבר כל דבר מותאם אישית.',
        },
        {
          question: 'האם אפשר לעקוב אחר משלוחים ממספר מובילים במקום אחד?',
          answer:
            'בהחלט. כל משלוח מכל מוביל מופיע בלוח בקרה אחד עם סטטוס בזמן אמת, כך שהצוות שלכם לא מתלבט יותר בין פורטלים נפרדים.',
        },
        {
          question: 'האם יש הגבלה על מספר חברי הצוות?',
          answer:
            'Starter כולל משתמש אחד, Pro כולל עד 20, ו-Enterprise ללא הגבלה. ניתן להוסיף או להסיר משתמשים בכל עת ואנו מחשבים את ההפרש באופן יחסי.',
        },
        {
          question: 'איזה סוג תמיכה אתם מציעים?',
          answer:
            'ב-Starter מקבלים תמיכת קהילה, ב-Pro תמיכה מועדפת עם זמני תגובה מהירים, וב-Enterprise מנהל הצלחה ייעודי ו-SLA מובטח.',
        },
        {
          question: 'האם הלקוחות יכולים לעקוב אחר החבילות שלהם בעצמם?',
          answer:
            'כן. הלקוחות מקבלים עדכוני SMS ואימייל אוטומטיים בכל שלב ויכולים לעקוב אחר החבילה בעמוד מעקב חי — מה שמפחית משמעותית פניות "איפה ההזמנה שלי?".',
        },
        {
          question: 'איך מתחילים?',
          answer:
            'התחילו את הניסיון החינמי של 14 יום — ללא כרטיס אשראי. קבעו שיחת הטמעה קצרה ואנחנו נקים עבורכם את כל המערכת עוד לפני שהניסיון מסתיים.',
        },
      ],
    },
    cta: {
      title: 'מוכן לשלוח מהר יותר?',
      description:
        'הצטרף ל-12,000+ חברות שכבר שולחות עם נובה. התחל את הניסיון החינמי של 14 יום היום — ללא כרטיס אשראי.',
      primary: 'התחל ניסיון חינמי',
      secondary: 'דבר עם המכירות',
    },
    pricing: {
      sectionLabel: 'מחירים',
      sectionTitle: 'תמחור פשוט ושקוף',
      sectionDescription: 'התחל בחינם, שדרג כשאתה מוכן. ללא עמלות נסתרות, ביטול בכל עת.',
      mostPopular: 'הכי פופולרי',
      plans: [
        {
          name: 'Starter',
          price: '$0',
          period: '/חודש',
          description: 'לצוותים קטנים שמתחילים.',
          features: [
            'עד 50 משלוחים/חודש',
            'חבר צוות 1',
            'תמיכת קהילה',
            'מעקב בסיסי',
          ],
          cta: 'התחל בחינם',
          highlighted: false,
        },
        {
          name: 'Pro',
          price: '$29',
          period: '/חודש',
          description: 'לחברות צומחות שמשלחות בהיקף.',
          features: [
            'משלוחים ללא הגבלה',
            'עד 20 חברי צוות',
            'תמיכה מועדפת',
            'אנליטיקה מתקדמת',
            'בונה אוטומציה',
            'תעריפי מובילים מוזלים',
          ],
          cta: 'התחל ניסיון חינמי',
          highlighted: true,
        },
        {
          name: 'Enterprise',
          price: 'מותאם',
          period: '',
          description: 'לארגונים עם צרכים מתקדמים.',
          features: [
            'כל מה שב-Pro',
            'חברי צוות ללא הגבלה',
            'SSO ויומני ביקורת',
            'מנהל הצלחה ייעודי',
            'SLA וחוזים מותאמים',
          ],
          cta: 'צור קשר עם המכירות',
          highlighted: false,
        },
      ],
    },
    footer: {
      description:
        'הפלטפורמה שעוזרת לחברות גדולות לשלוח דואר וחבילות מהר יותר. כל חבילה. כל עדכון. לוח בקרה אחד.',
      copyright: `© ${new Date().getFullYear()} Nova Inc. כל הזכויות שמורות.`,
      columns: [
        {
          title: 'מוצר',
          links: ['תכונות', 'מחירים', 'אינטגרציות', 'יומן שינויים', 'מפת דרכים'],
        },
        {
          title: 'חברה',
          links: ['אודות', 'בלוג', 'קריירה', 'עיתונות', 'צור קשר'],
        },
        {
          title: 'משאבים',
          links: ['תיעוד', 'עיון API', 'קהילה', 'סטטוס', 'מרכז עזרה'],
        },
        {
          title: 'משפטי',
          links: ['פרטיות', 'תנאים', 'אבטחה', 'עוגיות'],
        },
      ],
    },
    pricingTable: {
      title: 'השוואת תוכניות',
      subtitle: 'כל מה שמקבלים בכל רמה, זו לצד זו.',
      columns: { features: 'תכונות', starter: 'Starter', pro: 'Pro', enterprise: 'Enterprise' },
      sections: [
        {
          title: 'משלוחים',
          rows: [
            { feature: 'משלוחים חודשיים', starter: 'עד 50', pro: 'ללא הגבלה', enterprise: 'ללא הגבלה' },
            { feature: 'יצירת תוויות בכמות', starter: false, pro: true, enterprise: true },
            { feature: 'איסופים מתוזמנים', starter: true, pro: true, enterprise: true },
            { feature: 'בחירת מוביל אוטומטית', starter: false, pro: true, enterprise: true },
            { feature: 'תעריפי מובילים מוזלים', starter: false, pro: true, enterprise: 'תעריפים מותאמים' },
          ],
        },
        {
          title: 'מעקב ואנליטיקה',
          rows: [
            { feature: 'מעקב בזמן אמת', starter: true, pro: true, enterprise: true },
            { feature: 'התראות משלוח', starter: false, pro: true, enterprise: true },
            { feature: 'אנליטיקה מתקדמת', starter: false, pro: true, enterprise: true },
            { feature: 'דוחות ביצועי מובילים', starter: false, pro: true, enterprise: true },
          ],
        },
        {
          title: 'צוות ואבטחה',
          rows: [
            { feature: 'חברי צוות', starter: '1', pro: 'עד 20', enterprise: 'ללא הגבלה' },
            { feature: 'בונה אוטומציה', starter: false, pro: true, enterprise: true },
            { feature: 'בקרת גישה מבוססת תפקידים', starter: false, pro: true, enterprise: true },
            { feature: 'SSO ויומני ביקורת', starter: false, pro: false, enterprise: true },
          ],
        },
        {
          title: 'תמיכה',
          rows: [
            { feature: 'רמת תמיכה', starter: 'קהילה', pro: 'מועדפת', enterprise: 'מנהל ייעודי' },
            { feature: 'SLA וחוזים מותאמים', starter: false, pro: false, enterprise: true },
          ],
        },
      ],
    },
    accessibilityPage: {
      title: 'הצהרת נגישות',
      commitment: {
        heading: 'המחויבות שלנו',
        body: 'נובה מחויבת להנגשת האתר שלה לאנשים עם מוגבלויות, בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013, ולתקן הישראלי ת"י 5568 המבוסס על WCAG 2.0 ברמה AA.',
      },
      compliance: {
        heading: 'מצב עמידה בתקן',
        body: 'אתר זה שואף לעמוד ב-WCAG 2.0 ברמה AA (תקן ישראלי ת"י 5568). התכונות הבאות מיושמות באתר:',
        items: [
          'קישור לדילוג לתוכן הראשי (למשתמשי מקלדת)',
          'אזורי ניווט סמנטיים ב-HTML: header, nav, main, footer',
          'כל הרכיבים האינטראקטיביים נגישים באמצעות מקלדת',
          'סימוני מיקוד גלויים על כל רכיב שניתן למקד',
          'תוויות ARIA על ניווט ורכיבים אינטראקטיביים',
          'aria-current="page" לציון העמוד הפעיל',
          'ניגודיות צבעים מספקת (מינימום 4.5:1 לטקסט רגיל)',
          'עיצוב רספונסיבי התומך בהגדלה עד 200%',
          'כל התמונות והאייקונים כוללים טקסט חלופי או מסומנים כדקורטיביים',
        ],
      },
      known: {
        heading: 'מגבלות ידועות',
        body: 'אנו פועלים באופן מתמיד לשיפור הנגישות. אם נתקלתם במחסום נגישות שאינו מופיע כאן, אנא צרו עמנו קשר.',
      },
      contact: {
        heading: 'יצירת קשר בנושא נגישות',
        body: 'אם נתקלתם במחסום נגישות כלשהו באתר זה, או שאתם זקוקים לתוכן בפורמט חלופי, אנא פנו לרכז הנגישות שלנו:',
        nameLabel: 'שם:',
        nameValue: 'רכז הנגישות של נובה',
        emailLabel: 'דוא"ל:',
        phoneLabel: 'טלפון:',
        responseNote: 'אנו שואפים להשיב לפניות בנושא נגישות בתוך 2 ימי עסקים.',
      },
      date: {
        heading: 'תאריך ההצהרה',
        reviewedOn: 'הצהרת נגישות זו נבדקה לאחרונה בתאריך',
        value: '8 ביולי 2026',
      },
    },
    featuresPage: {
      badge: 'תכונות',
      title: 'כל מה שהתפעול שלך צריך',
      subtitle: 'שש תכונות, לוח בקרה אחד. גללו כדי לראות כל אחת בדיוק כפי שהצוות שלכם יראה.',
      startTrial: 'התחל ניסיון חינמי',
      seePricing: 'צפה במחירים',
      seePricingArrow: 'צפה במחירים ←',
      scrollToExplore: 'גללו כדי לגלות ↓',
      dashboardName: 'לוח הבקרה של Nova',
      sidebar: ['סקירה', 'מעקב', 'מיון', 'התראות', 'צוות', 'משלוחים', 'דוחות'],
      barsBadge: '+24% השבוע',
      closing: {
        title: 'הכול עובד יחד, מהקופסה',
        text: 'כל תכונה מזינה את אותו לוח בקרה — אין אינטגרציות להרכיב יחד.',
      },
      stories: {
        'package-tracking': [
          { title: 'כל חבילה על מפה חיה', text: 'לשונית המעקב מציגה את כל המסלולים הפעילים בזמן אמת. עקבו אחר כל נהג בתנועה ברחבי העיר וזהו תקלות עוד לפני שהן מגיעות ללקוח.', panel: { kind: 'map' } },
          { title: 'סטטוס חי לכל חבילה', text: 'כל משלוח מתעדכן ברגע שמשהו משתנה — נאסף, בעמדה, יצא למשלוח. בלי שיחות לנהגים, בלי לנחש.', panel: { kind: 'table', rows: [
            { main: 'PKG-3821', sub: 'New York → Boston', badge: 'בדרך', tone: 'blue' },
            { main: 'PKG-5504', sub: 'Chicago → Detroit', badge: 'יצא למשלוח', tone: 'green' },
            { main: 'PKG-0193', sub: 'Austin → Dallas', badge: 'בעמדה', tone: 'amber' },
          ] } },
          { title: 'הנתונים שלכם, תמיד מעודכנים', text: 'אריחי הסקירה מתעדכנים מעצמם ככל שהחבילות נעות, כך שהבוקר שלכם מתחיל בנתונים אמיתיים במקום בייצוא של אתמול.', panel: { kind: 'stats', items: [
            { value: '1,248', label: 'בדרך' },
            { value: '98.6%', label: 'בזמן' },
            { value: '312', label: 'נמסרו היום' },
          ] } },
        ],
        'mail-sorting': [
          { title: 'כל הדואר הנכנס בתור אחד', text: 'כל מכתב וחבילה שנכנסים למחסן נסרקים פעם אחת ונוחתים בתור יחיד בלוח הבקרה.', panel: { kind: 'bubbles', items: [
            { title: 'חשבונית #4421', sub: 'Sarah M. · אזור צפון', accent: true },
            { title: 'מכתב רשום', sub: 'USPS · אזור מרכז' },
            { title: 'בקשת החזרה', sub: 'Tom Wren · אזור הנמל' },
          ] } },
          { title: 'ניתוב אוטומטי לעמדה הנכונה', text: 'כללי המיון שולחים כל פריט לנתיב הנכון באופן אוטומטי — לפי מיקוד, מסלול או רמת שירות. אתם צופים בכל נתיב בזמן אמת.', panel: { kind: 'sort' } },
          { title: 'שום דבר לא הולך לאיבוד', text: 'ניתובים שגויים מופיעים על הלוח מיד, כך שהם מתוקנים במחסן — ולא בדלת של לקוח כועס.', panel: { kind: 'stats', items: [
            { value: '2,431', label: 'מוינו היום' },
            { value: '3', label: 'עמדות מסונכרנות' },
            { value: '0', label: 'אבדו' },
          ] } },
        ],
        'customer-notifications': [
          { title: 'עדכוני SMS ואימייל אוטומטיים', text: 'כתבו את תבניות ההודעה פעם אחת. מאותו רגע, כל שינוי סטטוס שולח את ההודעה הנכונה ללקוח הנכון — באופן אוטומטי.', panel: { kind: 'bubbles', items: [
            { title: 'החבילה שלך יצאה למשלוח', sub: 'SMS · +1 555-0142', accent: true },
            { title: 'נמסר — צורפה תמונה', sub: 'אימייל · anna@example.com' },
            { title: 'איסוף נקבע ל-9:00', sub: 'SMS · +1 555-0198' },
          ] } },
          { title: 'מופעל על ידי אירועי משלוח אמיתיים', text: 'ההתראות נשלחות בדיוק כשהחבילה זזה — לא לפי טיימר. הלקוחות רואים את אותה תמונה שהסדרנים שלכם רואים.', panel: { kind: 'timeline', done: 2, labels: ['נאסף', 'בדרך', 'נמסר'] } },
          { title: 'פחות שיחות "איפה החבילה שלי?"', text: 'כשהלקוחות כבר יודעים, הם מפסיקים להתקשר. הצוות שלכם מקבל את היום שלו בחזרה.', panel: { kind: 'stats', items: [
            { value: '-62%', label: 'שיחות תמיכה' },
            { value: '4.9★', label: 'דירוג משלוח' },
            { value: '100%', label: 'לקוחות מעודכנים' },
          ] } },
        ],
        'staff-management': [
          { title: 'כל הצוות שלכם בתצוגה אחת', text: 'נהגים, ממיינים וסדרנים — מי במשמרת, מה הם נושאים, ואיפה הם נמצאים בדיוק עכשיו.', panel: { kind: 'roster', rows: [
            { name: 'James R.', role: 'רכב · #V-14', pct: 100 },
            { name: 'Maria L.', role: 'משאית · #T-07', pct: 75 },
            { name: 'Priya S.', role: 'משאית · #T-03', pct: 45 },
          ] } },
          { title: 'הקצאת מסלולים בשניות', text: 'גררו מסלול על נהג והוא מקבל אותו לטלפון מיד — עם עצירות, חבילות והוראות הגעה.', panel: { kind: 'table', rows: [
            { main: 'James R.', sub: 'מסלול 12 · צפון', badge: 'הוקצה', tone: 'green' },
            { main: 'Maria L.', sub: 'מסלול 4 · נמל', badge: 'הוקצה', tone: 'green' },
            { main: 'David K.', sub: 'מסלול 9 · מרכז', badge: 'ממתין', tone: 'amber' },
          ] } },
          { title: 'משמרות מתוכננות מראש', text: 'פערי כיסוי והזמנות כפולות מסומנים לפני שהם קורים, לא מתגלים ב-6 בבוקר.', panel: { kind: 'stats', items: [
            { value: '12', label: 'נהגים במשמרת' },
            { value: '98%', label: 'כיסוי מסלולים' },
            { value: '0', label: 'התנגשויות' },
          ] } },
        ],
        'delivery-status': [
          { title: 'לוח חי של כל משלוח', text: 'לוח אחד מציג כל משלוח נע דרך השלבים שלו. ירוק אומר בתנועה, וכל השאר מקבל את תשומת ליבכם.', panel: { kind: 'timeline', done: 3, labels: ['נאסף', 'בדרך', 'נמסר'] } },
          { title: 'עיכובים מסומנים לפני שהלקוחות מבחינים', text: 'חריגים ועיכובים עולים לראש הלוח באופן אוטומטי, כך שהסדרנים מתקנים אותם בעוד יש זמן.', panel: { kind: 'table', rows: [
            { main: 'PKG-7741', sub: 'Seattle → Portland', badge: 'בזמן', tone: 'green' },
            { main: 'PKG-2290', sub: 'Miami → Orlando', badge: 'עיכוב 20 דק׳', tone: 'rose' },
            { main: 'PKG-5504', sub: 'Chicago → Detroit', badge: 'חריגה', tone: 'amber' },
          ] } },
          { title: 'אישור מסירה, מצורף', text: 'חתימות ותמונות נשמרות עם כל מסירה, כך שמחלוקות מסתיימות בקישור במקום בשרשרת טלפונים.', panel: { kind: 'stats', items: [
            { value: '312', label: 'נמסרו היום' },
            { value: '307', label: 'חתימות' },
            { value: '5', label: 'הוכחה בתמונה' },
          ] } },
        ],
        'reports-analytics': [
          { title: 'השבוע שלכם במבט אחד', text: 'נפח, שיעור עמידה בזמנים וביצועי צוות — משורטטים בזמן אמת בלשונית הדוחות, בלי צורך בגיליון אלקטרוני.', panel: { kind: 'bars' } },
          { title: 'זיהוי מגמות לפני שהן עולות לכם', text: 'שינויים משבוע לשבוע מחושבים עבורכם. כשמסלול מאט או שעלויות מטפסות, אתם רואים את זה ראשונים.', panel: { kind: 'table', rows: [
            { main: 'שיעור עמידה בזמנים', sub: 'מול שבוע שעבר', badge: '+1.2%', tone: 'green' },
            { main: 'זמן משלוח ממוצע', sub: 'מול שבוע שעבר', badge: '-4 דק׳', tone: 'green' },
            { main: 'עלות לחבילה', sub: 'מול שבוע שעבר', badge: '-$0.11', tone: 'green' },
          ] } },
          { title: 'תקציר בתיבת הדואר שלכם בכל יום שני', text: 'המספרים שחשובים, מסוכמים ונשלחים — לפני הקפה הראשון שלכם.', panel: { kind: 'bubbles', items: [
            { title: 'תקציר שבועי', sub: '8,240 חבילות נמסרו', accent: true },
            { title: 'המסלול המוביל', sub: 'צפון · 1,204 עצירות' },
            { title: 'דורש תשומת לב', sub: '3 מסלולים איחרו פעמיים' },
          ] } },
        ],
      },
    },
    accessibility: {
      buttonLabel: 'הצהרת נגישות',
      widget: {
        title: 'הגדרות נגישות',
        open: 'פתח הגדרות נגישות',
        close: 'סגור הגדרות נגישות',
        fontSize: 'גודל גופן',
        decrease: 'הקטן גודל גופן',
        increase: 'הגדל גודל גופן',
        highContrast: 'ניגודיות גבוהה',
        underlineLinks: 'קו תחתון לקישורים',
        stopAnimations: 'עצירת אנימציות',
        reset: 'איפוס הגדרות',
      },
    },
  },

  fr: {
    dir: 'ltr' as const,
    lang: 'fr',
    nav: {
      home: 'Accueil',
      features: 'Fonctionnalités',
      testimonials: 'Témoignages',
      pricing: 'Tarifs',
      faq: 'FAQ',
      getStarted: 'Commencer',
      skipToMain: 'Passer au contenu principal',
      openMenu: 'Ouvrir le menu de navigation',
      closeMenu: 'Fermer le menu de navigation',
      toggleLang: 'Changer de langue',
      language: 'Langue',
    },
    hero: {
      badge: 'Conçu pour les expéditeurs à grand volume',
      headline1: 'Chaque colis. Chaque mise à jour.',
      headline2: 'Un seul tableau de bord.',
      description:
        'Nova aide les grandes entreprises à envoyer courrier et colis plus rapidement. Automatisez les étiquettes, choisissez le meilleur transporteur à chaque fois et suivez chaque envoi en temps réel — car le temps, c’est de l’argent.',
      ctaPrimary: 'Démarrer l’essai gratuit',
      ctaSecondary: 'Voir comment ça marche',
      sources: {
        Carriers: 'Transporteurs',
        Stores: 'Boutiques',
        Warehouses: 'Entrepôts',
        Marketplaces: 'Marketplaces',
        Returns: 'Retours',
      },
      dashboardName: 'Tableau de bord Nova',
      dashboardTagline: 'Chaque envoi, une vue organisée',
      trustedPrefix: 'Approuvé par',
      trustedCount: '12 000+',
      trustedSuffix: 'entreprises dans le monde',
    },
    trustedBy: {
      label: 'Avec qui nous travaillons',
    },
    howItWorks: {
      sectionLabel: 'Comment ça marche',
      sectionTitle: 'Commencer est simple',
      sectionDescription: 'De notre première conversation à un réel gain de temps — en trois étapes faciles.',
      steps: [
        {
          title: 'Nous discutons',
          description: 'Nous commençons par un court appel pour comprendre votre flux de travail, votre volume d’expédition et ce qui ralentit exactement votre équipe.',
        },
        {
          title: 'Je le construis pour vous',
          description: 'Je configure tout pour votre exploitation — transporteurs, automatisations et tableaux de bord — pour que tout fonctionne dès le premier jour, sans rien à paramétrer.',
        },
        {
          title: 'Vous gagnez du temps',
          description: 'Votre équipe expédie plus vite avec beaucoup moins de travail manuel, et vous récupérez des heures chaque semaine.',
        },
      ],
    },
    features: {
      sectionLabel: 'Fonctionnalités',
      sectionTitle: 'Tout ce dont votre exploitation a besoin',
      sectionDescription:
        'Une seule plateforme pour toute votre exploitation d’expédition — de la salle du courrier jusqu’à la porte.',
      items: {
        'package-tracking': {
          title: 'Suivi des colis',
          description: 'Statut en temps réel pour chaque colis, de la prise en charge à la porte.',
        },
        'mail-sorting': {
          title: 'Tri des colis',
          description: 'Routage automatique du courrier et des colis vers le bon centre et le bon chauffeur.',
        },
        'customer-notifications': {
          title: 'Notifications clients',
          description: 'Mises à jour SMS et e-mail automatiques à chaque étape de livraison.',
        },
        'staff-management': {
          title: 'Gestion du personnel',
          description: 'Attribuez des tournées, suivez les chauffeurs et gérez les horaires au même endroit.',
        },
        'delivery-status': {
          title: 'Statut de livraison',
          description: 'Tableau de statut de livraison en direct pour toute votre flotte.',
        },
        'reports-analytics': {
          title: 'Rapports et analyses',
          description: 'Des informations exploitables sur le volume, le coût et la performance des transporteurs.',
        },
      },
    },
    testimonials: {
      sectionLabel: 'Témoignages',
      sectionTitle: 'Adoré par les équipes d’exploitation partout',
      starsLabel: '5 étoiles sur 5',
      items: [
        {
          quote:
            'Nova a réduit notre préparation d’expédition de deux jours à deux heures. Le générateur d’étiquettes en masse s’est rentabilisé dès le premier mois.',
          name: 'Sarah Chen',
          role: 'Directrice de la logistique, Linear Labs',
        },
        {
          quote:
            'La meilleure décision opérationnelle de l’année. Nous expédions deux fois plus de colis avec la même équipe, et plus rien ne se perd.',
          name: 'Marcus Reid',
          role: 'VP des opérations, Brightflow',
        },
        {
          quote:
            'Nous avons remplacé trois portails de transporteurs distincts par Nova en un seul après-midi. Chaque colis, chaque mise à jour — un seul tableau de bord.',
          name: 'Elena Novak',
          role: 'Responsable de la salle du courrier, Framewise',
        },
      ],
    },
    faq: {
      sectionTitle: 'Questions fréquentes',
      items: [
        {
          question: 'Comment fonctionne l’essai gratuit ?',
          answer:
            'Vous bénéficiez d’un accès complet à toutes les fonctionnalités Pro pendant 14 jours — sans carte bancaire. À la fin de l’essai, vous pouvez choisir un forfait ou continuer avec l’offre Starter gratuite.',
        },
        {
          question: 'Puis-je changer de forfait plus tard ?',
          answer:
            'Absolument. Vous pouvez passer à un forfait supérieur ou inférieur, ou annuler à tout moment depuis vos paramètres de facturation. Les modifications prennent effet immédiatement et nous calculons les différences au prorata.',
        },
        {
          question: 'Offrez-vous des réductions pour les startups ou les associations ?',
          answer:
            'Oui ! Les startups en phase de démarrage et les associations enregistrées bénéficient de 50 % de réduction sur Pro la première année. Contactez notre équipe commerciale pour en faire la demande.',
        },
        {
          question: 'Mes données sont-elles sécurisées ?',
          answer:
            'La sécurité est notre priorité absolue. Nous sommes certifiés SOC 2 Type II, chiffrons toutes les données en transit et au repos, et proposons le SSO et les journaux d’audit sur les forfaits Enterprise.',
        },
        {
          question: 'Quels transporteurs prenez-vous en charge ?',
          answer:
            'Nova se connecte à plus de 100 transporteurs dans le monde, dont FedEx, UPS, DHL et USPS. Vous pouvez aussi intégrer vos propres contrats de transporteur ou créer des intégrations personnalisées avec notre API REST.',
        },
      ],
    },
    faqPage: {
      title: 'Questions fréquentes',
      subtitle: 'Tout ce que vous devez savoir sur Nova. Vous ne trouvez pas de réponse ? Parlez à notre équipe.',
      items: [
        {
          question: 'Comment fonctionne l’essai gratuit ?',
          answer:
            'Vous bénéficiez d’un accès complet à toutes les fonctionnalités Pro pendant 14 jours — sans carte bancaire. À la fin de l’essai, vous pouvez choisir un forfait ou continuer avec l’offre Starter gratuite.',
        },
        {
          question: 'Puis-je changer de forfait plus tard ?',
          answer:
            'Absolument. Vous pouvez passer à un forfait supérieur ou inférieur, ou annuler à tout moment depuis vos paramètres de facturation. Les modifications prennent effet immédiatement et nous calculons les différences au prorata.',
        },
        {
          question: 'Offrez-vous des réductions pour les startups ou les associations ?',
          answer:
            'Oui ! Les startups en phase de démarrage et les associations enregistrées bénéficient de 50 % de réduction sur Pro la première année. Contactez notre équipe commerciale pour en faire la demande.',
        },
        {
          question: 'Mes données sont-elles sécurisées ?',
          answer:
            'La sécurité est notre priorité absolue. Nous sommes certifiés SOC 2 Type II, chiffrons toutes les données en transit et au repos, et proposons le SSO et les journaux d’audit sur les forfaits Enterprise.',
        },
        {
          question: 'Quels transporteurs prenez-vous en charge ?',
          answer:
            'Nova se connecte à plus de 100 transporteurs dans le monde, dont FedEx, UPS, DHL et USPS. Vous pouvez aussi intégrer vos propres contrats de transporteur ou créer des intégrations personnalisées avec notre API REST.',
        },
        {
          question: 'Combien de temps prend la configuration ?',
          answer:
            'La plupart des équipes sont opérationnelles le jour même. Nous nous chargeons de la configuration pour vous — transporteurs, automatisations et tableaux de bord — vous n’avez rien de technique à paramétrer.',
        },
        {
          question: 'Vous intégrez-vous à mes outils existants ?',
          answer:
            'Oui. Nova se connecte aux plateformes e-commerce, ERP et systèmes d’entrepôt les plus courants, et notre API REST et nos webhooks vous permettent de brancher tout ce qui est sur mesure.',
        },
        {
          question: 'Puis-je suivre des envois de plusieurs transporteurs au même endroit ?',
          answer:
            'Absolument. Chaque envoi de chaque transporteur apparaît sur un seul tableau de bord avec un statut en temps réel, pour que votre équipe ne jongle plus jamais entre des portails distincts.',
        },
        {
          question: 'Y a-t-il une limite au nombre de membres d’équipe ?',
          answer:
            'Starter inclut un siège, Pro jusqu’à 20 et Enterprise est illimité. Vous pouvez ajouter ou retirer des sièges à tout moment et nous calculons la différence au prorata.',
        },
        {
          question: 'Quel type de support proposez-vous ?',
          answer:
            'Starter bénéficie du support communautaire, Pro d’un support prioritaire avec des temps de réponse rapides, et Enterprise d’un responsable de la réussite dédié et d’un SLA garanti.',
        },
        {
          question: 'Les clients peuvent-ils suivre leurs propres colis ?',
          answer:
            'Oui. Les clients reçoivent des mises à jour SMS et e-mail automatiques à chaque étape et peuvent suivre leur colis sur une page de suivi en direct — ce qui réduit fortement les tickets « où est ma commande ? ».',
        },
        {
          question: 'Comment commencer ?',
          answer:
            'Démarrez votre essai gratuit de 14 jours — sans carte bancaire. Réservez un court appel d’intégration et nous configurerons entièrement votre exploitation avant la fin de l’essai.',
        },
      ],
    },
    cta: {
      title: 'Prêt à expédier plus vite ?',
      description:
        'Rejoignez plus de 12 000 entreprises qui expédient déjà avec Nova. Démarrez votre essai gratuit de 14 jours dès aujourd’hui — sans carte bancaire.',
      primary: 'Démarrer l’essai gratuit',
      secondary: 'Parler aux ventes',
    },
    pricing: {
      sectionLabel: 'Tarifs',
      sectionTitle: 'Une tarification simple et transparente',
      sectionDescription: 'Commencez gratuitement, passez à la vitesse supérieure quand vous êtes prêt. Aucuns frais cachés, annulez à tout moment.',
      mostPopular: 'Le plus populaire',
      plans: [
        {
          name: 'Starter',
          price: '0 $',
          period: '/mois',
          description: 'Pour les petites équipes qui débutent.',
          features: [
            'Jusqu’à 50 envois/mois',
            '1 membre d’équipe',
            'Support communautaire',
            'Suivi de base',
          ],
          cta: 'Commencer gratuitement',
          highlighted: false,
        },
        {
          name: 'Pro',
          price: '29 $',
          period: '/mois',
          description: 'Pour les entreprises en croissance qui expédient à grande échelle.',
          features: [
            'Envois illimités',
            'Jusqu’à 20 membres d’équipe',
            'Support prioritaire',
            'Analyses avancées',
            'Générateur d’automatisations',
            'Tarifs transporteurs réduits',
          ],
          cta: 'Démarrer l’essai gratuit',
          highlighted: true,
        },
        {
          name: 'Enterprise',
          price: 'Sur mesure',
          period: '',
          description: 'Pour les organisations aux besoins avancés.',
          features: [
            'Tout ce qui est dans Pro',
            'Membres d’équipe illimités',
            'SSO et journaux d’audit',
            'Responsable de la réussite dédié',
            'SLA et contrats sur mesure',
          ],
          cta: 'Contacter les ventes',
          highlighted: false,
        },
      ],
    },
    footer: {
      description:
        'La plateforme qui aide les grandes entreprises à envoyer courrier et colis plus rapidement. Chaque colis. Chaque mise à jour. Un seul tableau de bord.',
      copyright: `© ${new Date().getFullYear()} Nova Inc. Tous droits réservés.`,
      columns: [
        {
          title: 'Produit',
          links: ['Fonctionnalités', 'Tarifs', 'Intégrations', 'Journal des modifications', 'Feuille de route'],
        },
        {
          title: 'Entreprise',
          links: ['À propos', 'Blog', 'Carrières', 'Presse', 'Contact'],
        },
        {
          title: 'Ressources',
          links: ['Documentation', 'Référence API', 'Communauté', 'Statut', 'Centre d’aide'],
        },
        {
          title: 'Mentions légales',
          links: ['Confidentialité', 'Conditions', 'Sécurité', 'Cookies'],
        },
      ],
    },
    pricingTable: {
      title: 'Comparer les forfaits',
      subtitle: 'Tout ce que vous obtenez avec chaque niveau, côte à côte.',
      columns: { features: 'Fonctionnalités', starter: 'Starter', pro: 'Pro', enterprise: 'Enterprise' },
      sections: [
        {
          title: 'Expédition',
          rows: [
            { feature: 'Envois mensuels', starter: 'Jusqu’à 50', pro: 'Illimités', enterprise: 'Illimités' },
            { feature: 'Création d’étiquettes en masse', starter: false, pro: true, enterprise: true },
            { feature: 'Enlèvements planifiés', starter: true, pro: true, enterprise: true },
            { feature: 'Sélection automatique du transporteur', starter: false, pro: true, enterprise: true },
            { feature: 'Tarifs transporteurs réduits', starter: false, pro: true, enterprise: 'Tarifs sur mesure' },
          ],
        },
        {
          title: 'Suivi et analyses',
          rows: [
            { feature: 'Suivi en temps réel', starter: true, pro: true, enterprise: true },
            { feature: 'Alertes de livraison', starter: false, pro: true, enterprise: true },
            { feature: 'Analyses avancées', starter: false, pro: true, enterprise: true },
            { feature: 'Rapports de performance des transporteurs', starter: false, pro: true, enterprise: true },
          ],
        },
        {
          title: 'Équipe et sécurité',
          rows: [
            { feature: 'Membres d’équipe', starter: '1', pro: 'Jusqu’à 20', enterprise: 'Illimités' },
            { feature: 'Générateur d’automatisations', starter: false, pro: true, enterprise: true },
            { feature: 'Contrôle d’accès basé sur les rôles', starter: false, pro: true, enterprise: true },
            { feature: 'SSO et journaux d’audit', starter: false, pro: false, enterprise: true },
          ],
        },
        {
          title: 'Support',
          rows: [
            { feature: 'Niveau de support', starter: 'Communauté', pro: 'Prioritaire', enterprise: 'Responsable dédié' },
            { feature: 'SLA et contrats sur mesure', starter: false, pro: false, enterprise: true },
          ],
        },
      ],
    },
    accessibilityPage: {
      title: 'Déclaration d’accessibilité',
      commitment: {
        heading: 'Notre engagement',
        body: 'Nova s’engage à rendre son site web accessible aux personnes en situation de handicap, conformément à la réglementation israélienne sur l’égalité des droits des personnes handicapées (adaptations d’accessibilité des services), 2013, et à la norme israélienne IS 5568, fondée sur les WCAG 2.0 niveau AA.',
      },
      compliance: {
        heading: 'État de conformité',
        body: 'Ce site vise à se conformer aux WCAG 2.0 niveau AA (norme israélienne IS 5568). Les fonctionnalités d’accessibilité suivantes sont mises en œuvre :',
        items: [
          'Lien « Passer au contenu principal » (utilisateurs du clavier)',
          'Repères sémantiques HTML : header, nav, main, footer',
          'Tous les éléments interactifs sont accessibles au clavier',
          'Indicateurs de focus visibles sur tous les éléments focusables',
          'Étiquettes ARIA sur la navigation et les composants interactifs',
          'aria-current="page" indiquant la page active',
          'Contraste de couleur suffisant (minimum 4,5:1 pour le texte normal)',
          'Conception responsive prenant en charge un zoom jusqu’à 200 %',
          'Toutes les images et icônes incluent un texte alternatif ou sont marquées comme décoratives',
        ],
      },
      known: {
        heading: 'Limitations connues',
        body: 'Nous travaillons en permanence à améliorer l’accessibilité. Si vous rencontrez un obstacle non mentionné ici, veuillez nous contacter.',
      },
      contact: {
        heading: 'Contact accessibilité',
        body: 'Si vous rencontrez un obstacle d’accessibilité sur ce site, ou si vous avez besoin d’un contenu dans un format alternatif, veuillez contacter notre coordinateur d’accessibilité :',
        nameLabel: 'Nom :',
        nameValue: 'Coordinateur d’accessibilité de Nova',
        emailLabel: 'E-mail :',
        phoneLabel: 'Téléphone :',
        responseNote: 'Nous nous efforçons de répondre aux demandes d’accessibilité dans un délai de 2 jours ouvrés.',
      },
      date: {
        heading: 'Date de la déclaration',
        reviewedOn: 'Cette déclaration d’accessibilité a été révisée pour la dernière fois le',
        value: '8 juillet 2026',
      },
    },
    featuresPage: {
      badge: 'Fonctionnalités',
      title: 'Tout ce dont votre exploitation a besoin',
      subtitle: 'Six fonctionnalités, un seul tableau de bord. Faites défiler pour voir chacune exactement comme votre équipe la verra.',
      startTrial: 'Démarrer l’essai gratuit',
      seePricing: 'Voir les tarifs',
      seePricingArrow: 'Voir les tarifs →',
      scrollToExplore: 'Faites défiler pour explorer ↓',
      dashboardName: 'Tableau de bord Nova',
      sidebar: ['Aperçu', 'Suivi', 'Tri', 'Notifications', 'Personnel', 'Livraisons', 'Rapports'],
      barsBadge: '+24 % cette semaine',
      closing: {
        title: 'Tout fonctionne ensemble, dès le départ',
        text: 'Chaque fonctionnalité alimente le même tableau de bord — aucune intégration à assembler.',
      },
      stories: {
        'package-tracking': [
          { title: 'Chaque colis sur une carte en direct', text: 'L’onglet Suivi affiche toutes les tournées actives en temps réel. Regardez chaque chauffeur se déplacer dans la ville et repérez les problèmes avant qu’ils n’atteignent le client.', panel: { kind: 'map' } },
          { title: 'Statut en direct pour chaque colis', text: 'Chaque envoi se met à jour à la seconde où il change — pris en charge, au centre, en cours de livraison. Aucun appel aux chauffeurs, aucune supposition.', panel: { kind: 'table', rows: [
            { main: 'PKG-3821', sub: 'New York → Boston', badge: 'En transit', tone: 'blue' },
            { main: 'PKG-5504', sub: 'Chicago → Detroit', badge: 'En cours de livraison', tone: 'green' },
            { main: 'PKG-0193', sub: 'Austin → Dallas', badge: 'Au centre', tone: 'amber' },
          ] } },
          { title: 'Vos chiffres, toujours à jour', text: 'Les tuiles d’aperçu se mettent à jour d’elles-mêmes à mesure que les colis se déplacent, pour que votre matinée commence avec de vraies données plutôt qu’avec l’export d’hier.', panel: { kind: 'stats', items: [
            { value: '1 248', label: 'En transit' },
            { value: '98,6 %', label: 'À l’heure' },
            { value: '312', label: 'Livrés aujourd’hui' },
          ] } },
        ],
        'mail-sorting': [
          { title: 'Tout le courrier entrant dans une seule file', text: 'Chaque lettre et colis qui entre au dépôt est scanné une fois et atterrit dans une file unique sur le tableau de bord.', panel: { kind: 'bubbles', items: [
            { title: 'Facture #4421', sub: 'Sarah M. · Zone Nord', accent: true },
            { title: 'Lettre recommandée', sub: 'USPS · Zone Centre' },
            { title: 'Demande de retour', sub: 'Tom Wren · Zone Docks' },
          ] } },
          { title: 'Routage automatique vers le bon centre', text: 'Les règles de tri envoient automatiquement chaque article dans la bonne voie — par code postal, tournée ou niveau de service. Vous suivez chaque voie en direct.', panel: { kind: 'sort' } },
          { title: 'Rien ne se perd', text: 'Les erreurs de routage apparaissent immédiatement sur le tableau, elles sont donc corrigées au dépôt — et non à la porte d’un client mécontent.', panel: { kind: 'stats', items: [
            { value: '2 431', label: 'Triés aujourd’hui' },
            { value: '3', label: 'Centres synchronisés' },
            { value: '0', label: 'Égarés' },
          ] } },
        ],
        'customer-notifications': [
          { title: 'Mises à jour SMS et e-mail automatiques', text: 'Rédigez vos modèles de message une seule fois. Ensuite, chaque changement de statut envoie le bon message au bon client — automatiquement.', panel: { kind: 'bubbles', items: [
            { title: 'Votre colis est en cours de livraison', sub: 'SMS · +1 555-0142', accent: true },
            { title: 'Livré — photo jointe', sub: 'E-mail · anna@example.com' },
            { title: 'Enlèvement prévu à 9h00', sub: 'SMS · +1 555-0198' },
          ] } },
          { title: 'Déclenchées par de vrais événements de livraison', text: 'Les notifications se déclenchent exactement quand le colis bouge — pas selon une minuterie. Les clients voient la même réalité que vos répartiteurs.', panel: { kind: 'timeline', done: 2, labels: ['Pris en charge', 'En transit', 'Livré'] } },
          { title: 'Moins d’appels « où est mon colis ? »', text: 'Quand les clients savent déjà, ils arrêtent d’appeler. Votre équipe récupère sa journée.', panel: { kind: 'stats', items: [
            { value: '-62 %', label: 'Appels au support' },
            { value: '4,9★', label: 'Note de livraison' },
            { value: '100 %', label: 'Clients informés' },
          ] } },
        ],
        'staff-management': [
          { title: 'Toute votre équipe en une seule vue', text: 'Chauffeurs, trieurs et répartiteurs — qui est en poste, ce qu’ils transportent et où ils se trouvent en ce moment.', panel: { kind: 'roster', rows: [
            { name: 'James R.', role: 'Camionnette · #V-14', pct: 100 },
            { name: 'Maria L.', role: 'Camion · #T-07', pct: 75 },
            { name: 'Priya S.', role: 'Camion · #T-03', pct: 45 },
          ] } },
          { title: 'Attribuez des tournées en quelques secondes', text: 'Glissez une tournée sur un chauffeur et il la reçoit instantanément sur son téléphone — avec les arrêts, les colis et les itinéraires.', panel: { kind: 'table', rows: [
            { main: 'James R.', sub: 'Tournée 12 · Nord', badge: 'Attribuée', tone: 'green' },
            { main: 'Maria L.', sub: 'Tournée 4 · Docks', badge: 'Attribuée', tone: 'green' },
            { main: 'David K.', sub: 'Tournée 9 · Centre', badge: 'En attente', tone: 'amber' },
          ] } },
          { title: 'Des horaires planifiés à l’avance', text: 'Les manques de couverture et les doubles réservations sont signalés avant qu’ils ne surviennent, pas découverts à 6h du matin.', panel: { kind: 'stats', items: [
            { value: '12', label: 'Chauffeurs en poste' },
            { value: '98 %', label: 'Couverture des tournées' },
            { value: '0', label: 'Conflits' },
          ] } },
        ],
        'delivery-status': [
          { title: 'Un tableau en direct de chaque livraison', text: 'Un seul tableau montre chaque livraison progresser dans ses étapes. Vert signifie en mouvement, et tout le reste attire votre attention.', panel: { kind: 'timeline', done: 3, labels: ['Pris en charge', 'En transit', 'Livré'] } },
          { title: 'Retards signalés avant que les clients ne s’en aperçoivent', text: 'Les exceptions et les retards remontent automatiquement en haut du tableau, pour que la répartition les corrige tant qu’il est encore temps.', panel: { kind: 'table', rows: [
            { main: 'PKG-7741', sub: 'Seattle → Portland', badge: 'À l’heure', tone: 'green' },
            { main: 'PKG-2290', sub: 'Miami → Orlando', badge: 'Retard 20 min', tone: 'rose' },
            { main: 'PKG-5504', sub: 'Chicago → Detroit', badge: 'Exception', tone: 'amber' },
          ] } },
          { title: 'Preuve de livraison, jointe', text: 'Signatures et photos sont enregistrées avec chaque livraison, pour que les litiges se terminent par un lien plutôt que par une chaîne d’appels.', panel: { kind: 'stats', items: [
            { value: '312', label: 'Livrés aujourd’hui' },
            { value: '307', label: 'Signatures' },
            { value: '5', label: 'Preuve photo' },
          ] } },
        ],
        'reports-analytics': [
          { title: 'Votre semaine en un coup d’œil', text: 'Volume, taux de ponctualité et performance de l’équipe — représentés en direct dans l’onglet Rapports, sans tableur.', panel: { kind: 'bars' } },
          { title: 'Repérez les tendances avant qu’elles ne vous coûtent', text: 'Les variations d’une semaine à l’autre sont calculées pour vous. Quand une tournée ralentit ou que les coûts grimpent, vous le voyez en premier.', panel: { kind: 'table', rows: [
            { main: 'Taux de ponctualité', sub: 'vs semaine dernière', badge: '+1,2 %', tone: 'green' },
            { main: 'Délai de livraison moyen', sub: 'vs semaine dernière', badge: '-4 min', tone: 'green' },
            { main: 'Coût par colis', sub: 'vs semaine dernière', badge: '-0,11 $', tone: 'green' },
          ] } },
          { title: 'Un résumé dans votre boîte mail chaque lundi', text: 'Les chiffres qui comptent, résumés et livrés — avant votre premier café.', panel: { kind: 'bubbles', items: [
            { title: 'Résumé hebdomadaire', sub: '8 240 colis livrés', accent: true },
            { title: 'Tournée principale', sub: 'Nord · 1 204 arrêts' },
            { title: 'Nécessite attention', sub: '3 tournées en retard deux fois' },
          ] } },
        ],
      },
    },
    accessibility: {
      buttonLabel: 'Déclaration d’accessibilité',
      widget: {
        title: 'Paramètres d’accessibilité',
        open: 'Ouvrir les paramètres d’accessibilité',
        close: 'Fermer les paramètres d’accessibilité',
        fontSize: 'Taille de police',
        decrease: 'Diminuer la taille de police',
        increase: 'Augmenter la taille de police',
        highContrast: 'Contraste élevé',
        underlineLinks: 'Souligner les liens',
        stopAnimations: 'Arrêter les animations',
        reset: 'Réinitialiser les paramètres',
      },
    },
  },
} as const

export type Translations = typeof translations['en']
