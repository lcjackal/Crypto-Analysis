// src/services/dataCollector.ts

import axios from 'axios';
import { CoinData, FilterOptions } from '../types';

class DataCollector {
    private apiEndpoints: string[];

    constructor(apiEndpoints: string[]) {
        this.apiEndpoints = apiEndpoints;
    }

    public async collectData(filterOptions: FilterOptions): Promise<CoinData[]> {
        const collectedData: CoinData[] = [];

        for (const endpoint of this.apiEndpoints) {
            try {
                const response = await axios.get(endpoint);
                const data = this.processData(response.data, filterOptions);
                collectedData.push(...data);
            } catch (error) {
                console.error(`Error fetching data from ${endpoint}:`, error);
            }
        }

        return collectedData;
    }

    private processData(data: any, filterOptions: FilterOptions): CoinData[] {
        // Implement filtering logic based on filterOptions
        const filteredData: CoinData[] = [];

        // Example filtering logic (to be customized)
        for (const coin of data) {
            if (this.meetsFilterCriteria(coin, filterOptions)) {
                filteredData.push(coin);
            }
        }

        return filteredData;
    }

    private meetsFilterCriteria(coin: any, filterOptions: FilterOptions): boolean {
        // Implement criteria checks based on filterOptions
        return true; // Placeholder for actual logic
    }
}

export default DataCollector;