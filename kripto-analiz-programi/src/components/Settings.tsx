import React, { useState } from 'react';

const Settings: React.FC = () => {
    const [apiKey, setApiKey] = useState('');
    const [dataProvider, setDataProvider] = useState('CoinMarketCap');
    const [scanOptions, setScanOptions] = useState({
        minVolume: 50000,
        maxVolume: 1500000,
        minPriceChange: 25,
        timeFrame: '2 hours',
    });

    const handleApiKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setApiKey(event.target.value);
    };

    const handleDataProviderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setDataProvider(event.target.value);
    };

    const handleScanOptionChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setScanOptions((prevOptions) => ({
            ...prevOptions,
            [name]: value,
        }));
    };

    const saveSettings = () => {
        // Logic to save settings (e.g., to local storage or a backend)
        console.log('Settings saved:', { apiKey, dataProvider, scanOptions });
    };

    return (
        <div className="settings-container">
            <h2>Ayarlar</h2>
            <div className="setting-item">
                <label htmlFor="apiKey">API Anahtarı:</label>
                <input
                    type="text"
                    id="apiKey"
                    value={apiKey}
                    onChange={handleApiKeyChange}
                />
            </div>
            <div className="setting-item">
                <label htmlFor="dataProvider">Veri Sağlayıcı:</label>
                <select
                    id="dataProvider"
                    value={dataProvider}
                    onChange={handleDataProviderChange}
                >
                    <option value="CoinMarketCap">CoinMarketCap</option>
                    <option value="CoinGecko">CoinGecko</option>
                    {/* Add more data providers as needed */}
                </select>
            </div>
            <div className="setting-item">
                <h3>Taramayı Ayarla</h3>
                <label>
                    Minimum Günlük Hacim (USD):
                    <input
                        type="number"
                        name="minVolume"
                        value={scanOptions.minVolume}
                        onChange={handleScanOptionChange}
                    />
                </label>
                <label>
                    Maksimum Günlük Hacim (USD):
                    <input
                        type="number"
                        name="maxVolume"
                        value={scanOptions.maxVolume}
                        onChange={handleScanOptionChange}
                    />
                </label>
                <label>
                    Minimum Beklenen Fiyat Değişimi (%):
                    <input
                        type="number"
                        name="minPriceChange"
                        value={scanOptions.minPriceChange}
                        onChange={handleScanOptionChange}
                    />
                </label>
                <label>
                    Değişim Fiyat/Zaman Aralığı:
                    <select
                        name="timeFrame"
                        value={scanOptions.timeFrame}
                        onChange={handleScanOptionChange}
                    >
                        <option value="15 minutes">15 Dakika</option>
                        <option value="4 hours">4 Saat</option>
                        <option value="1 day">1 Gün</option>
                        <option value="1 week">1 Hafta</option>
                    </select>
                </label>
            </div>
            <button onClick={saveSettings}>Ayarları Kaydet</button>
        </div>
    );
};

export default Settings;