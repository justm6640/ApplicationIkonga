export type Phase = 'detox' | 'equilibre' | 'consolidation' | 'entretien';

export interface Identifiable {
  id: string;
  title: string;
  description?: string;
}
