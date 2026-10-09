export interface SalesAgent {
  id: string;
  number: string;
  title: string;
  role: string;
  subtitle: string;
  category: 'orchestration' | 'prospecting' | 'outreach' | 'inbound' | 'logistics' | 'human' | 'revops';
  controlType: 'AI-executed' | 'You own it';
  isHuman: boolean;
  description: string;
  longDescription: string;
  tools: string[];
  files: string[];
  specs: [string, string][];
  samplePrompt?: string;
  heightOffset: number;
}

export interface PipelineSimulationEvent {
  step: number;
  agentId: string;
  agentName: string;
  status: 'pending' | 'active' | 'completed' | 'waiting_approval' | 'rejected';
  action: string;
  details: string;
  timestamp: string;
  badge?: string;
}

export interface LeadScenario {
  id: string;
  name: string;
  company: string;
  dealSize: string;
  channel: 'Inbound Webhook' | 'Apollo Outbound' | 'LinkedIn Signal';
  intent: 'High Intent' | 'Warm Discovery' | 'Enterprise RFQ';
  contact: {
    name: string;
    email: string;
    title: string;
  };
}
