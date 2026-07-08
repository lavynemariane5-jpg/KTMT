/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
}

export interface LearnItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ForWhoItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ComparisonItem {
  text: string;
  isPositive: boolean;
}

export interface KitItem {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  features: string[];
  isPopular: boolean;
  color: 'blue' | 'green';
  buttonText: string;
}

export interface BonusItem {
  id: string;
  title: string;
  value: number;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  tag: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
