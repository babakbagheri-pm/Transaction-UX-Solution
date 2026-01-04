
export type CategoryKey = 
  | 'BASIC' 
  | 'COMPUTED' 
  | 'ACCOUNT' 
  | 'CARD' 
  | 'TRANSFER' 
  | 'TIMESTAMP' 
  | 'BALANCE' 
  | 'INVESTMENT' 
  | 'LOAN' 
  | 'REVERSAL' 
  | 'RESTRAINT' 
  | 'CORPORATE' 
  | 'ACCESS';

export interface CategoryInfo {
  label: string;
  styles: string;
}

export interface Variable {
  name: string;
  description: string;
  category: CategoryKey;
  dataType: string;
  sampleValue: string;
  alwaysAvailable: boolean;
}

export interface Template {
  title: string;
  content: string;
}

export interface TransactionType {
  value: string;
  label: string;
  color: string;
  templates: Template[];
}

export interface ValidationResult {
  valid: boolean;
  errors: string[];
  sampleOutput: string | null;
}
