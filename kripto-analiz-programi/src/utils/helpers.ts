// This file contains helper functions that assist with various tasks throughout the application.

// Function to format currency values
export const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value);
};

// Function to validate if a number is within a specified range
export const isWithinRange = (value: number, min: number, max: number): boolean => {
    return value >= min && value <= max;
};

// Function to calculate percentage change
export const calculatePercentageChange = (oldValue: number, newValue: number): number => {
    if (oldValue === 0) return 0; // Avoid division by zero
    return ((newValue - oldValue) / oldValue) * 100;
};

// Function to debounce a function call
export const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};

// Function to generate a unique ID
export const generateUniqueId = (): string => {
    return 'id-' + Math.random().toString(36).substr(2, 16);
};

export function calculateConfidenceInterval() {
  // Basit örnek fonksiyon, gerçek hesaplama eklenebilir
  return 0;
}

export function trainModel() {
  // Basit örnek fonksiyon, gerçek model eğitimi eklenebilir
  return null;
}

export function predictPrice() {
  // Basit örnek fonksiyon, gerçek tahmin eklenebilir
  return 0;
}