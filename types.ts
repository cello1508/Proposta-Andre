import React from 'react';

export interface TimelineWeek {
  week: string;
  title: string;
  focus: string;
  deliverables: string[];
}

export interface ProposalSection {
  id: string;
  title: string;
  content: string;
  icon?: React.ElementType;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  projected?: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum AppView {
  DASHBOARD = 'DASHBOARD',
  PROPOSAL = 'PROPOSAL',
  TIMELINE = 'TIMELINE',
  AI_CONSULTANT = 'AI_CONSULTANT'
}