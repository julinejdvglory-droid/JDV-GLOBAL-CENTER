// Shared Types
export interface User {
  id: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  country: string;
  currency: string;
  language: string;
  role: UserRole;
  kycStatus: KYCStatus;
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
  INDIVIDUAL = 'INDIVIDUAL',
  BUSINESS = 'BUSINESS',
  SELLER = 'SELLER',
  MERCHANT = 'MERCHANT',
  PROVIDER = 'PROVIDER',
  DRIVER = 'DRIVER',
  COURIER = 'COURIER',
  AGENT = 'AGENT',
  DOCTOR = 'DOCTOR',
  PHARMACIST = 'PHARMACIST',
  FARMER = 'FARMER',
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT',
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
}

export enum KYCStatus {
  PENDING = 'PENDING',
  VERIFIED = 'VERIFIED',
  REJECTED = 'REJECTED',
  EXPIRED = 'EXPIRED',
}

// Shared Constants
export const COUNTRIES = [
  'Benin', 'Burkina Faso', 'Cameroon', 'Côte d\'Ivoire', 'Ghana',
  'Kenya', 'Nigeria', 'Senegal', 'South Africa', 'Tanzania',
];

export const CURRENCIES = {
  'XOF': 'West African CFA franc',
  'XAF': 'Central African CFA franc',
  'ZAR': 'South African rand',
  'KES': 'Kenyan shilling',
  'GHS': 'Ghanaian cedi',
  'NGN': 'Nigerian naira',
};

export const LANGUAGES = [
  'en', 'fr', 'pt', 'es', 'ar', 'zu', 'sw',
];
