import { SalesAgent, LeadScenario } from '../types';

export const SALES_AGENTS: SalesAgent[] = [
  {
    id: 'cso-orchestrator',
    number: '01',
    title: 'CSO & Lead Router',
    role: 'Chief Sales Officer / Pipeline Orchestrator',
    subtitle: 'Claude Code routes every lead over MCP',
    category: 'orchestration',
    controlType: 'AI-executed',
    isHuman: false,
    description: 'Autonomous central routing engine coordinating all 7 sales agents.',
    longDescription: 'The layer on top. Claude Code evaluates inbound signals, checks lead intent against the company ICP memory, dispatches specialized agents, and maintains continuous state across HubSpot and Gmail via MCP.',
    tools: ['Claude Code', 'Model Context Protocol (MCP)', 'LangGraph', 'pgvector', 'HubSpot API'],
    files: ['sales-cso.md', 'icp-matrix.md', 'routing-rules.md', 'active-leads/'],
    specs: [
      ['Routing Model', 'Deterministic + LLM Hybrid'],
      ['Context Window', '200k Token Shared State'],
      ['Protocol', 'MCP (JSON-RPC over stdio/SSE)'],
      ['Duty Cycle', '24/7 Real-Time Event Bus']
    ],
    samplePrompt: 'Evaluate inbound company payload against icp-matrix.md. If fit > 85%, dispatch Agent 02 for deep dossier enrichment.',
    heightOffset: 240
  },
  {
    id: 'deep-prospecting',
    number: '02',
    title: 'Prospecting & Research',
    role: 'Autonomous Account Research & Enrichment',
    subtitle: 'Finds the angle before anyone reaches out',
    category: 'prospecting',
    controlType: 'AI-executed',
    isHuman: false,
    description: 'Enriches raw domains with verified decision-maker dossiers and tech stack telemetry.',
    longDescription: 'Monitors corporate hiring spikes, funding announcements, tech-stack migrations, and news signals. Extracts verified emails, LinkedIn profiles, and pain points into an executive briefing dossier.',
    tools: ['Apollo.io', 'LinkedIn Sales Nav', 'Crunchbase', 'Clay', 'BuiltWith'],
    files: ['account-dossier.md', 'buying-committee.md', 'tech-signals.md'],
    specs: [
      ['Data Accuracy', '99.4% Verified SMTP + DNS'],
      ['Enrichment Latency', '< 3.2s per target account'],
      ['Signal Triggers', 'Hiring, Tech-stack, Funding'],
      ['Target Persona', 'VP / C-Level Decision Makers']
    ],
    samplePrompt: 'Query Apollo & Crunchbase for Series A-C SaaS in Healthcare. Extract CTO and VP Eng contact points with verified direct emails.',
    heightOffset: 200
  },
  {
    id: 'cold-outreach',
    number: '03',
    title: 'Multichannel Outreach',
    role: 'Hyper-Personalized Cold Outreach Sequencer',
    subtitle: 'Cold emails that sound like a thoughtful peer',
    category: 'outreach',
    controlType: 'AI-executed',
    isHuman: false,
    description: 'Drafts bespoke 1-to-1 outreach messages personalized to recent company news.',
    longDescription: 'Writes hyper-personalized cold emails and LinkedIn connection notes. Never uses generic templates; every line references specific public accomplishments, podcast appearances, or tech migrations.',
    tools: ['Smartlead.ai', 'Gmail API', 'Instantly', 'SendGrid', 'LinkedIn API'],
    files: ['tone-of-voice.md', 'value-propositions.md', 'sequence-playbook.md'],
    specs: [
      ['Deliverability', '99.1% Inbox Placement (SPF/DKIM/DMARC)'],
      ['Warmup Rotation', '15 Connected Secondary Domains'],
      ['Channels', 'Email, LinkedIn InMail, Twitter DM'],
      ['Follow-up Logic', '3-Touch Behavioral Cadence']
    ],
    samplePrompt: 'Craft 3-sentence outreach referencing recent SOC2 compliance announcement. Frame value around local sovereign data privacy.',
    heightOffset: 160
  },
  {
    id: 'inbound-sdr',
    number: '04',
    title: 'Inbound SDR & Qualification',
    role: 'Instant Response & Objection Handler',
    subtitle: 'Answers inbound leads in under 60 seconds',
    category: 'inbound',
    controlType: 'AI-executed',
    isHuman: false,
    description: 'Engages inbound contact requests immediately, scoring BANT criteria 24/7.',
    longDescription: 'Interprets inbound demo requests and live chat queries within 60 seconds. Analyzes budget, authority, need, and timeline (BANT), and answers technical questions grounded strictly in company documentation.',
    tools: ['HubSpot Webhooks', 'Slack Bot', 'Cal.com Webhook', 'Zendesk'],
    files: ['objection-library.md', 'faq-knowledgebase.md', 'bant-scoring.md'],
    specs: [
      ['Response Latency', '< 45 Seconds (Global 24/7)'],
      ['Qualification Framework', 'BANT & MEDDPICC'],
      ['Objection Win-Rate', '74% Resolved without escalation'],
      ['Source Attribution', 'UTM + Organic + Referral']
    ],
    samplePrompt: 'Lead requested pricing for 50 users. Acknowledge company size, verify enterprise tier requirements, and offer calendar link.',
    heightOffset: 120
  },
  {
    id: 'meeting-booker',
    number: '05',
    title: 'Call Logistics & Booker',
    role: 'Calendar Orchestrator & Dossier Prep',
    subtitle: 'Fills the calendar without back-and-forth friction',
    category: 'logistics',
    controlType: 'AI-executed',
    isHuman: false,
    description: 'Coordinates meeting times across timezones and prepares call briefings.',
    longDescription: 'Handles timezone math, calendar conflict detection, rescheduling requests, and calendar invites. Prepares an executive pre-call dossier 15 minutes before the meeting for the human closer.',
    tools: ['Cal.com', 'Google Calendar', 'Zoom API', 'Google Meet', 'Tldv.io'],
    files: ['calendar-rules.md', 'pre-call-dossier-template.md', 'buffer-policies.md'],
    specs: [
      ['No-Show Reduction', 'Automated SMS & Calendar reminders'],
      ['Buffer Guard', 'Strict 15-min breathers between calls'],
      ['Timezone Handling', 'Auto-converted UTC/PST/EST/CET'],
      ['Briefing Delivery', 'Delivered to Slack 15m prior to call']
    ],
    samplePrompt: 'Book 30-min discovery call for Thursday afternoon EST. Generate pre-call brief summarizing their current cloud spend.',
    heightOffset: 80
  },
  {
    id: 'human-closer',
    number: '06',
    title: 'Closer Co-Pilot (YOU)',
    role: 'Human-in-the-Loop Sign-Off & Deal Closer',
    subtitle: 'Nothing ships or signs without your explicit yes',
    category: 'human',
    controlType: 'You own it',
    isHuman: true,
    description: 'The green sovereign checkpoint where human leadership retains 100% control.',
    longDescription: 'The one human layer in the hardware appliance. High-stakes custom quotes, non-standard enterprise MSAs, contract discounts, and the master kill switch live here. The AI does the heavy lifting, but you sign the deal.',
    tools: ['Human Sign-Off Queue', 'Emergency Kill Switch', 'Contract Pricing Guard'],
    files: ['approval-matrix.md', 'discount-limits.md', 'deal-signoff-log.md'],
    specs: [
      ['Human Authority', 'Mandatory for deals > $10,000'],
      ['Kill Switch', 'Hardware instant freeze toggle'],
      ['Audit Integrity', 'Cryptographically logged approvals'],
      ['Response Window', 'Async approval with Slack notification']
    ],
    samplePrompt: 'PROPOSAL PENDING: $48,000/yr Custom License for Acme Corp. Requires Founder Sign-Off for 12% multi-year discount.',
    heightOffset: 40
  },
  {
    id: 'revops-sync',
    number: '07',
    title: 'RevOps & CRM Auto-Sync',
    role: 'CRM State Reconciler & Post-Sale Logistics',
    subtitle: 'Pushes records, invoices, and handoffs without manual entry',
    category: 'revops',
    controlType: 'AI-executed',
    isHuman: false,
    description: 'Keeps HubSpot, Salesforce, Stripe, and customer success in lockstep.',
    longDescription: 'Following a closed deal or recorded call, automatically updates deal stage, logs meeting notes, provisions customer access, generates Stripe invoices, and notifies customer onboarding in Slack.',
    tools: ['HubSpot CRM', 'Salesforce API', 'Stripe Billing', 'Slack Webhooks', 'DocuSign'],
    files: ['crm-pipeline-stages.md', 'invoice-automation.md', 'handoff-checklist.md'],
    specs: [
      ['CRM Update Latency', 'Instant (< 1.5s post-call webhook)'],
      ['Data Drift', 'Zero field drift with schema enforcement'],
      ['Invoice Generation', 'Stripe automated subscription minting'],
      ['Notifications', '#sales-wins Slack celebrations']
    ],
    samplePrompt: 'Deal won: Update HubSpot deal to Closed-Won. Generate Stripe invoice for $48k and trigger Slack celebration alert in #wins.',
    heightOffset: 0
  }
];

export const DEMO_SCENARIOS: LeadScenario[] = [
  {
    id: 'scenario-enterprise-inbound',
    name: 'Enterprise Healthcare Platform',
    company: 'Apex Health Systems',
    dealSize: '$72,000 / yr',
    channel: 'Inbound Webhook',
    intent: 'High Intent',
    contact: {
      name: 'Dr. Sarah Lin',
      email: 'sarah.lin@apexhealth.org',
      title: 'Chief Information Officer'
    }
  },
  {
    id: 'scenario-outbound-fintech',
    name: 'FinTech Growth Stage Scale-up',
    company: 'Veloce Capital Technologies',
    dealSize: '$48,000 / yr',
    channel: 'Apollo Outbound',
    intent: 'Warm Discovery',
    contact: {
      name: 'Marcus Vance',
      email: 'm.vance@velocecapital.io',
      title: 'VP of Product Engineering'
    }
  },
  {
    id: 'scenario-linkedin-signal',
    name: 'Series B AI Infrastructure',
    company: 'HyperScale Tensor Labs',
    dealSize: '$120,000 / yr',
    channel: 'LinkedIn Signal',
    intent: 'Enterprise RFQ',
    contact: {
      name: 'Elena Rostova',
      email: 'elena@hyperscaletensor.ai',
      title: 'Head of Infrastructure Architecture'
    }
  }
];

export const INTERRUPTS = [
  {
    title: 'Prospect requests custom multi-tier pricing',
    description: 'Agent 04 flags non-standard pricing request and halts automated sequence. Escalates directly to Agent 06 (You) with full context and margin calculation.',
    tools: 'Claude · HubSpot · You',
    badge: 'Human Escalation'
  },
  {
    title: 'Lead unsubscribes or changes role',
    description: 'Agent 03 detects bounced email or opt-out signal within 2 seconds. Automatically marks CRM contact, halts all active sequences, and triggers Agent 02 to locate the replacement VP.',
    tools: 'Smartlead · Apollo · HubSpot',
    badge: 'Auto-Remediated'
  },
  {
    title: 'Competitor mentioned in negotiation',
    description: 'Agent 04 indexes the competitor name from the email thread, pulls competitive battlecards from memory, and formulates high-trust differentiation bullet points.',
    tools: 'Vector Store · Claude · Gmail',
    badge: 'Knowledge Retrieval'
  },
  {
    title: 'Discovery call rescheduled at last minute',
    description: 'Agent 05 intercepts the cancellation notification, sends a friendly warm re-booking link within 3 minutes, and releases calendar hold for other prospects.',
    tools: 'Cal.com · Google Calendar · Slack',
    badge: 'Zero Friction'
  },
  {
    title: 'Budget cap or contract risk detected',
    description: 'Agent 06 hardware guardrail prevents unauthorized discount codes. High-tier redlines trigger immediate approval modal with founder signature requirement.',
    tools: 'Contract Guard · You Own It',
    badge: 'Sovereign Guard'
  },
  {
    title: 'Intent spike detected on company website',
    description: 'Agent 02 catches 6 engineers from target enterprise browsing security & SOC2 documentation. Auto-initiates relevant personalized outreach within the hour.',
    tools: 'RB2B · Apollo · LinkedIn',
    badge: 'Real-time Signal'
  },
  {
    title: 'Contract signed in DocuSign',
    description: 'Agent 07 captures webhook, transitions deal in HubSpot to 100% Closed-Won, drafts welcome email, and triggers customer success Slack channel creation.',
    tools: 'DocuSign · HubSpot · Stripe · Slack',
    badge: 'RevOps Automation'
  },
  {
    title: 'Emergency pause or kill switch toggled',
    description: 'Physical or virtual kill switch freezes all outbound webhooks, active queues, and email sends in under 120 milliseconds while logging cryptographic state.',
    tools: 'Hardware Guard · Local Memory',
    badge: 'Instant Kill Switch'
  }
];
