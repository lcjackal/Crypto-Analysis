import React from 'react';

interface CoinData {
    logo: string;
    name: string;
    currentPrice: number;
    change24h: number;
    dailyVolume: number;
    buyPressure: number;
    sellPressure: number;
    buySellPressureRatio: number;
}

interface YukselisRadariTableProps {
    data: CoinData[];
}

const YukselisRadariTable: React.FC<YukselisRadariTableProps> = ({ data }) => {
    return (
        <div className="yukselis-radari-table">
            <h2>Yükseliş Radarı</h2>
            <table>
                <thead>
                    <tr>
                        <th>Logo</th>
                        <th>İsim</th>
                        <th>Mevcut Fiyat</th>
                        <th>Değişim 24%</th>
                        <th>Günlük Hacim</th>
                        <th>Alış Baskısı</th>
                        <th>Satış Baskısı</th>
                        <th>Alış/Satış Baskı Oranı</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((coin, index) => (
                        <tr key={index}>
                            <td><img src={coin.logo} alt={coin.name} /></td>
                            <td>{coin.name}</td>
                            <td>{coin.currentPrice.toFixed(2)} USD</td>
                            <td>{coin.change24h.toFixed(2)}%</td>
                            <td>{coin.dailyVolume.toLocaleString()} USD</td>
                            <td>{coin.buyPressure}</td>
                            <td>{coin.sellPressure}</td>
                            <td>{coin.buySellPressureRatio.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default YukselisRadariTable;