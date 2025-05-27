// This file manages the integration with external APIs for data retrieval.

import axios from 'axios';

// Define API endpoints
const COINMARKETCAP_API_URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/coins/markets';

// Define API keys (replace with your actual API keys)
const COINMARKETCAP_API_KEY = 'YOUR_COINMARKETCAP_API_KEY';

// Function to fetch cryptocurrency data from CoinMarketCap
export const fetchCoinMarketCapData = async (limit = 100) => {
    try {
        const response = await axios.get(COINMARKETCAP_API_URL, {
            headers: {
                'X-CMC_PRO_API_KEY': COINMARKETCAP_API_KEY,
                'Accept': 'application/json'
            },
            params: {
                'start': 1,
                'limit': limit,
                'convert': 'USD'
            }
        });
        return response.data.data;
    } catch (error) {
        console.error('Error fetching data from CoinMarketCap:', error);
        throw error;
    }
};

// Function to fetch cryptocurrency data from CoinGecko
export const fetchCoinGeckoData = async (currency = 'usd', order = 'market_cap_desc', per_page = 100, page = 1) => {
    try {
        const response = await axios.get(COINGECKO_API_URL, {
            params: {
                vs_currency: currency,
                order: order,
                per_page: per_page,
                page: page,
                sparkline: false
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data from CoinGecko:', error);
        throw error;
    }
};

// Additional API integration functions can be added here as needed.