import type React from 'react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
}

export interface Achievement {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface Activity {
    icon: React.ReactNode;
    title: string;
    description: string;
}

// FIX: Add missing Skill interface required by SkillBar.tsx
export interface Skill {
  name: string;
  level: number;
}