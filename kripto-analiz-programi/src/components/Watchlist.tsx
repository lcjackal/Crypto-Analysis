import React, { useState, useEffect } from 'react';
import { fetchWatchlistData } from '../services/dataCollector';
import { CryptoCurrency } from '../types';

const Watchlist: React.FC = () => {
    const [watchlist, setWatchlist] = useState<CryptoCurrency[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadWatchlistData = async () => {
            try {
                const data = await fetchWatchlistData();
                setWatchlist(data);
            } catch (err) {
                setError('Failed to load watchlist data');
            } finally {
                setLoading(false);
            }
        };

        loadWatchlistData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Watchlist</h2>
            <table>
                <thead>
                    <tr>
                        <th>Logo</th>
                        <th>Name</th>
                        <th>Current Price</th>
                        <th>Target Price</th>
                        <th>Potential Change</th>
                        <th>Daily Volume</th>
                        <th>Buy/Sell Pressure Ratio</th>
                        <th>Confidence Score</th>
                        <th>Estimated Time to Target</th>
                    </tr>
                </thead>
                <tbody>
                    {watchlist.map((crypto) => (
                        <tr key={crypto.id}>
                            <td><img src={crypto.logo} alt={crypto.name} /></td>
                            <td>{crypto.name}</td>
                            <td>{crypto.currentPrice}</td>
                            <td>{crypto.targetPrice}</td>
                            <td>{crypto.potentialChange}</td>
                            <td>{crypto.dailyVolume}</td>
                            <td>{crypto.buySellPressureRatio}</td>
                            <td>{crypto.confidenceScore}</td>
                            <td>{crypto.estimatedTimeToTarget}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Watchlist;