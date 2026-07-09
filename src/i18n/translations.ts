export type Language = 'en' | 'he'

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
      toggleLang: 'Switch to Hebrew',
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
      toggleLang: 'Switch to English',
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
} as const

export type Translations = typeof translations['en']
