import React from 'react';

interface Coin {
    logo: string;
    name: string;
    currentPrice: number;
    targetPrice: number;
    potentialChange: number;
    dailyVolume: number;
    buySellPressureRatio: number;
    confidenceScore: number;
    estimatedTimeToTarget: string;
}

interface PotansiyelFirsatlarTableProps {
    coins: Coin[];
}

const PotansiyelFirsatlarTable: React.FC<PotansiyelFirsatlarTableProps> = ({ coins }) => {
    return (
        <div>
            <h2>Potansiyel Fırsatlar</h2>
            <table>
                <thead>
                    <tr>
                        <th>Logo</th>
                        <th>İsim</th>
                        <th>Mevcut Fiyat</th>
                        <th>Hedef Fiyat</th>
                        <th>Potansiyel Değişim</th>
                        <th>Günlük Hacim</th>
                        <th>Alış/Satış Baskı Oranı</th>
                        <th>Güven Skoru</th>
                        <th>Tahmini Süre</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map((coin, index) => (
                        <tr key={index}>
                            <td><img src={coin.logo} alt={`${coin.name} logo`} width="30" /></td>
                            <td>{coin.name}</td>
                            <td>{coin.currentPrice.toFixed(2)} USD</td>
                            <td>{coin.targetPrice.toFixed(2)} USD</td>
                            <td>{coin.potentialChange.toFixed(2)} %</td>
                            <td>{coin.dailyVolume.toLocaleString()} USD</td>
                            <td>{coin.buySellPressureRatio.toFixed(2)}</td>
                            <td>{coin.confidenceScore.toFixed(2)}</td>
                            <td>{coin.estimatedTimeToTarget}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PotansiyelFirsatlarTable;