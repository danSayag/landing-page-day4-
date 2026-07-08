import { Fragment } from 'react'

export const features = [
  {
    slug: 'package-tracking',
    size: 'large',
    title: 'Package Tracking',
    description: 'Real-time status for every parcel, from pickup to doorstep.',
    detail:
      'Follow each package on a live map, share tracking links with customers, and get alerted the moment something goes off route.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
        <circle cx="12" cy="10" r="3" />
        <path d="M12 21c4-4 7-7.5 7-11a7 7 0 1 0-14 0c0 3.5 3 7 7 11Z" strokeLinejoin="round" />
      </svg>
    ),
    visual: (
      <Fragment>
        <svg
          viewBox="0 0 300 460"
          preserveAspectRatio="xMidYMid meet"
          className="h-full w-full"
          aria-hidden="true"
        >
          <rect x="164" y="312" width="62" height="78" rx="8" fill="#d1fae5" />
          <rect x="72" y="94" width="64" height="74" rx="8" fill="#e2e8f0" opacity="0.6" />
          <rect x="164" y="204" width="52" height="66" rx="8" fill="#e2e8f0" opacity="0.6" />
          <g stroke="#ffffff" strokeWidth="10" strokeLinecap="round">
            <path d="M-10 80 H310" />
            <path d="M-10 190 H310" />
            <path d="M-10 300 H310" />
            <path d="M-10 410 H310" />
            <path d="M60 -10 V470" />
            <path d="M150 -10 V470" />
            <path d="M240 -10 V470" />
          </g>
          <path
            id="trackingRoute"
            d="M60 410 V300 H150 V190 H240 V100"
            fill="none"
            stroke="#2563eb"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="2 9"
          />
          <circle cx="60" cy="410" r="6" fill="#ffffff" stroke="#2563eb" strokeWidth="3" />
          <path
            d="M240 70c-7 0-12 5-12 11.5C228 90 240 100 240 100s12-10 12-18.5C252 75 247 70 240 70Z"
            fill="#2563eb"
          />
          <circle cx="240" cy="82" r="4" fill="#ffffff" />
          <g>
            <circle r="10" fill="#60a5fa" opacity="0.35">
              <animate attributeName="r" values="6;15;6" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle r="5.5" fill="#2563eb" stroke="#ffffff" strokeWidth="2.5" />
            <animateMotion dur="8s" repeatCount="indefinite">
              <mpath href="#trackingRoute" />
            </animateMotion>
          </g>
        </svg>
        <span className="absolute top-2 left-2 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2 py-0.5 text-[11px] font-medium text-gray-700 shadow-sm backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          In transit
        </span>
      </Fragment>
    ),
  },
  {
    slug: 'mail-sorting',
    size: 'small',
    title: 'Package Sorting',
    description: 'Auto-route mail and packages to the right hub and driver.',
    detail:
      'Every inbound item is scanned and routed to the correct hub, dock, and driver automatically, cutting manual sorting time to zero.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
        <path d="M4 7h16M4 12h10M4 17h6" strokeLinecap="round" />
        <path d="m17 14 3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    visual: (
      <svg
        viewBox="0 0 220 110"
        preserveAspectRatio="xMidYMid meet"
        className="h-full w-full"
        aria-hidden="true"
      >
        <g fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 7">
          <path id="sortLaneTop" d="M14 55 H58 C82 55 84 22 108 22 H188" />
          <path id="sortLaneMid" d="M14 55 H188" />
          <path id="sortLaneBot" d="M14 55 H58 C82 55 84 88 108 88 H188" />
        </g>
        <g fill="#dbeafe" stroke="#bfdbfe" strokeWidth="1.5">
          <rect x="184" y="12" width="26" height="20" rx="5" />
          <rect x="184" y="45" width="26" height="20" rx="5" />
          <rect x="184" y="78" width="26" height="20" rx="5" />
        </g>
        {(['sortLaneTop', 'sortLaneMid', 'sortLaneBot'] as const).map((lane, i) => (
          <g key={lane}>
            <rect x="-6" y="-6" width="12" height="12" rx="2.5" fill="#2563eb" />
            <path d="M0 -6 V6" stroke="#ffffff" strokeWidth="2" />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.1;0.9;1"
              dur="4.8s"
              begin={`${-i * 1.6}s`}
              repeatCount="indefinite"
            />
            <animateMotion dur="4.8s" begin={`${-i * 1.6}s`} repeatCount="indefinite">
              <mpath href={`#${lane}`} />
            </animateMotion>
          </g>
        ))}
      </svg>
    ),
  },
  {
    slug: 'customer-notifications',
    size: 'small',
    title: 'Customer Notifications',
    description: 'Automatic SMS and email updates at every delivery step.',
    detail:
      'Recipients get proactive updates the moment a package ships, goes out for delivery, or arrives — no support tickets required.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
        <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" strokeLinejoin="round" />
        <path d="M10 21a2 2 0 0 0 4 0" strokeLinecap="round" />
      </svg>
    ),
    visual: (
      <svg
        viewBox="0 0 220 110"
        preserveAspectRatio="xMidYMid meet"
        className="h-full w-full"
        aria-hidden="true"
      >
        <g>
          <rect x="14" y="10" width="118" height="24" rx="12" fill="#ffffff" stroke="#e2e8f0" />
          <rect x="26" y="17" width="52" height="4" rx="2" fill="#cbd5e1" />
          <rect x="26" y="25" width="80" height="4" rx="2" fill="#e2e8f0" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.92;1" dur="6s" repeatCount="indefinite" />
        </g>
        <g>
          <rect x="14" y="42" width="134" height="24" rx="12" fill="#ffffff" stroke="#e2e8f0" />
          <rect x="26" y="49" width="64" height="4" rx="2" fill="#cbd5e1" />
          <rect x="26" y="57" width="92" height="4" rx="2" fill="#e2e8f0" />
          <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.25;0.33;0.92;1" dur="6s" repeatCount="indefinite" />
        </g>
        <g>
          <rect x="116" y="74" width="90" height="24" rx="12" fill="#2563eb" />
          <rect x="128" y="81" width="52" height="4" rx="2" fill="#bfdbfe" />
          <rect x="128" y="89" width="34" height="4" rx="2" fill="#bfdbfe" />
          <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.5;0.58;0.92;1" dur="6s" repeatCount="indefinite" />
        </g>
      </svg>
    ),
  },
  {
    slug: 'staff-management',
    size: 'small',
    title: 'Staff Management',
    description: 'Assign routes, track drivers, and manage shifts in one place.',
    detail:
      'See every driver, their assigned route, and shift status at a glance, and reassign work in a click when plans change.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5" strokeLinecap="round" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M16 15.5c2.8.2 5 2 5 4.5" strokeLinecap="round" />
      </svg>
    ),
    visual: (
      <svg
        viewBox="0 0 220 110"
        preserveAspectRatio="xMidYMid meet"
        className="h-full w-full"
        aria-hidden="true"
      >
        {[
          { cy: 20, start: 0.05 },
          { cy: 55, start: 0.35 },
          { cy: 90, start: 0.65 },
        ].map(({ cy, start }) => (
          <g key={cy}>
            <circle cx="20" cy={cy} r="10" fill="#dbeafe" />
            <circle cx="20" cy={cy - 3} r="3.5" fill="#60a5fa" />
            <rect x="14.5" y={cy + 1} width="11" height="6" rx="3" fill="#60a5fa" />
            <rect x="38" y={cy - 8} width="52" height="6" rx="3" fill="#e2e8f0" />
            <rect x="38" y={cy + 2} width="32" height="6" rx="3" fill="#eef2f7" />
            <rect x="104" y={cy - 5} width="76" height="10" rx="5" fill="#ffffff" stroke="#e2e8f0" />
            <rect x="107" y={cy - 2.5} height="5" rx="2.5" fill="#60a5fa">
              <animate
                attributeName="width"
                values="0;0;70;70"
                keyTimes={`0;${start};${start + 0.15};1`}
                dur="6.5s"
                repeatCount="indefinite"
              />
            </rect>
            <g>
              <circle cx="196" cy={cy} r="7.5" fill="#22c55e" />
              <path
                d={`M192.5 ${cy} l2.5 2.5 l5 -5`}
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <animate
                attributeName="opacity"
                values="0;0;1;1"
                keyTimes={`0;${start + 0.15};${start + 0.21};1`}
                dur="6.5s"
                repeatCount="indefinite"
              />
            </g>
          </g>
        ))}
      </svg>
    ),
  },
  {
    slug: 'delivery-status',
    size: 'small',
    title: 'Delivery Status',
    description: 'Live board showing delays, exceptions, and proof of delivery.',
    detail:
      'A single board shows every shipment’s stage, flags delays and exceptions early, and stores proof of delivery for every stop.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
        <path d="M22 11.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8.5" strokeLinecap="round" />
        <path d="m15 18 2.5 2.5L22 16" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 9h8M6 13h5" strokeLinecap="round" />
      </svg>
    ),
    visual: (
      <svg
        viewBox="0 0 220 110"
        preserveAspectRatio="xMidYMid meet"
        className="h-full w-full"
        aria-hidden="true"
      >
        <path d="M30 45 H190" fill="none" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
        <path
          d="M30 45 H190"
          fill="none"
          stroke="#2563eb"
          strokeWidth="4"
          strokeLinecap="round"
          pathLength={100}
          strokeDasharray="100"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="100;100;50;50;0;0"
            keyTimes="0;0.1;0.35;0.5;0.75;1"
            dur="7s"
            repeatCount="indefinite"
          />
        </path>
        <g>
          <circle r="5" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
          <animateMotion
            path="M30 45 H190"
            calcMode="linear"
            keyPoints="0;0;0.5;0.5;1;1"
            keyTimes="0;0.1;0.35;0.5;0.75;1"
            dur="7s"
            repeatCount="indefinite"
          />
        </g>
        {[
          { cx: 30, label: 'Picked up', at: 0.03 },
          { cx: 110, label: 'In transit', at: 0.37 },
          { cx: 190, label: 'Delivered', at: 0.77 },
        ].map(({ cx, label, at }) => (
          <g key={label}>
            <circle cx={cx} cy="45" r="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="3" />
            <g>
              <circle cx={cx} cy="45" r="8" fill="#2563eb" />
              <path
                d={`M${cx - 3.5} 45 l2.5 2.5 l5 -5`}
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <animate
                attributeName="opacity"
                values="0;0;1;1"
                keyTimes={`0;${at};${at + 0.06};1`}
                dur="7s"
                repeatCount="indefinite"
              />
            </g>
            <text x={cx} y="70" textAnchor="middle" fontSize="9" fill="#64748b">
              {label}
            </text>
          </g>
        ))}
      </svg>
    ),
  },
  {
    slug: 'reports-analytics',
    size: 'wide',
    title: 'Reports & Analytics',
    description: 'Track volume, delivery times, and team performance at a glance.',
    detail:
      'Weekly digests land straight in your inbox, with dashboards covering volume, on-time rate, and carrier performance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" strokeLinecap="round" />
      </svg>
    ),
    visual: (
      <Fragment>
        <svg
          viewBox="0 0 560 110"
          preserveAspectRatio="xMidYMid meet"
          className="h-full w-full"
          aria-hidden="true"
        >
          <g stroke="#e2e8f0" strokeWidth="1">
            <path d="M14 20 H546" />
            <path d="M14 45 H546" />
            <path d="M14 70 H546" />
            <path d="M14 95 H546" />
          </g>
          {[
            { x: 20, h: 28, start: 0.05 },
            { x: 75, h: 45, start: 0.09 },
            { x: 130, h: 38, start: 0.13 },
            { x: 185, h: 60, start: 0.17 },
            { x: 240, h: 50, start: 0.21 },
            { x: 295, h: 64, start: 0.25 },
            { x: 350, h: 42, start: 0.29 },
            { x: 405, h: 55, start: 0.33 },
            { x: 460, h: 48, start: 0.37 },
            { x: 515, h: 72, start: 0.41, highlight: true },
          ].map(({ x, h, start, highlight }) => (
            <rect key={x} x={x} width="26" rx="4" fill={highlight ? '#2563eb' : '#bfdbfe'}>
              <animate
                attributeName="height"
                values={`0;0;${h};${h}`}
                keyTimes={`0;${start};${start + 0.12};1`}
                dur="6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                values={`95;95;${95 - h};${95 - h}`}
                keyTimes={`0;${start};${start + 0.12};1`}
                dur="6s"
                repeatCount="indefinite"
              />
            </rect>
          ))}
        </svg>
        <span className="absolute top-2 right-2 rounded-full bg-white/90 px-2 py-0.5 text-[11px] font-semibold text-green-600 shadow-sm backdrop-blur">
          +24%
        </span>
      </Fragment>
    ),
  },
]
