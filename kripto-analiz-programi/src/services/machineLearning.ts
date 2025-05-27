// This file implements machine learning algorithms to analyze historical data and improve prediction accuracy for cryptocurrency price movements.

import { DataPoint, PredictionResult } from '../types';
import { calculateConfidenceInterval, trainModel, predictPrice } from '../utils/helpers';

class MachineLearningService {
    private model: any;

    constructor() {
        this.model = null;
    }

    public async train(data: DataPoint[]): Promise<void> {
        this.model = await trainModel(data);
    }

    public predict(data: DataPoint[]): PredictionResult {
        if (!this.model) {
            throw new Error("Model has not been trained yet.");
        }
        const prediction = predictPrice(this.model, data);
        const confidenceInterval = calculateConfidenceInterval(prediction);
        return {
            predictedPrice: prediction,
            confidenceInterval: confidenceInterval,
        };
    }

    public async updateModel(newData: DataPoint[]): Promise<void> {
        if (!this.model) {
            throw new Error("Model has not been trained yet.");
        }
        this.model = await trainModel([...this.model.data, ...newData]);
    }
}

export default new MachineLearningService();