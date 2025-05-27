// This file defines TypeScript types and interfaces used throughout the application, ensuring type safety and clarity in the codebase.

export interface CryptoCurrency {
    id: string;
    name: string;
    symbol: string;
    currentPrice: number;
    priceChangePercentage24h: number;
    dailyVolume: number;
    buyPressure: number;
    sellPressure: number;
    buySellPressureRatio: number;
    targetPrice?: number; // Optional, used in Tespit Edilen Hareketler and Potansiyel Fırsatlar
    potentialChange?: number; // Optional, used in Tespit Edilen Hareketler and Potansiyel Fırsatlar
    confidenceScore?: number; // Optional, used for assessing the reliability of predictions
    estimatedTimeToTarget?: string; // Optional, used for time estimation to reach target price
}

export interface FilterOptions {
    minDailyVolume: number;
    maxDailyVolume: number;
    minExpectedPriceChange: number;
    priceChangeTimeFrame: '15m' | '4h' | '1d' | '1w'; // Time frame options
}

export interface WatchlistItem {
    currency: CryptoCurrency;
    addedAt: Date;
}

export interface DataCollectionMethod {
    methodName: string;
    description: string;
    isRealTime: boolean;
    dataTypes: string[];
}

export interface AlgorithmSettings {
    confidenceThreshold: number; // Minimum confidence score for predictions
    historicalDataWeight: number; // Weighting for historical data in predictions
    anomalyDetectionEnabled: boolean; // Flag to enable/disable anomaly detection
}

export interface CoinData {
  id: string;
  name: string;
  symbol: string;
  currentPrice: number;
  targetPrice?: number;
  logo?: string;
}

export interface TespitEdilenHareketlerData {
  id: string;
  hareket: string;
  tarih: string;
}

export interface DataPoint {
  x: number;
  y: number;
}

export interface PredictionResult {
  value: number;
  confidence: number;
}