import React from 'react';
import { useState } from 'react';

const Sidebar: React.FC = () => {
    const [filters, setFilters] = useState({
        minVolume: 50000,
        maxVolume: 1500000,
        minPriceChange: 25,
        timeRange: '2 hours',
    });

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value,
        });
    };

    const handleScanStart = () => {
        // Logic to start scanning based on filters
    };

    return (
        <div className="sidebar">
            <h2>Kripto Analiz Programı</h2>
            <div className="navigation">
                <button onClick={() => {/* Logic to show Panel */}}>Panel</button>
                <button onClick={() => {/* Logic to show İzleme Listesi */}}>İzleme Listesi</button>
                <button onClick={() => {/* Logic to show Ayarlar */}}>Ayarlar</button>
            </div>
            <div className="filter-options">
                <h3>Filtreleme Seçenekleri</h3>
                <label>
                    Minimum Günlük Hacim (USD):
                    <input type="number" name="minVolume" value={filters.minVolume} onChange={handleFilterChange} />
                </label>
                <label>
                    Maksimum Günlük Hacim (USD):
                    <input type="number" name="maxVolume" value={filters.maxVolume} onChange={handleFilterChange} />
                </label>
                <label>
                    Minimum Beklenen Fiyat Değişimi (%):
                    <input type="number" name="minPriceChange" value={filters.minPriceChange} onChange={handleFilterChange} />
                </label>
                <label>
                    Değişim Fiyat/Zaman Aralığı:
                    <input type="text" name="timeRange" value={filters.timeRange} onChange={handleFilterChange} />
                </label>
                <button onClick={handleScanStart}>Tarama Başlat</button>
            </div>
            <footer>
                <p>Geliştirici: Jackal</p>
            </footer>
        </div>
    );
};

export default Sidebar;