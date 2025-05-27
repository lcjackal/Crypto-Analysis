import React, { useState } from 'react';
import YukselisRadariTable from './tables/YukselisRadariTable';
import TespitEdilenHareketlerTable from './tables/TespitEdilenHareketlerTable';
import PotansiyelFirsatlarTable from './tables/PotansiyelFirsatlarTable';

const MainPanel = () => {
    const [activeTab, setActiveTab] = useState('yukselisRadari');

    const renderTable = () => {
        switch (activeTab) {
            case 'yukselisRadari':
                return <YukselisRadariTable data={[]} />;
            case 'tespitEdilenHareketler':
                return <TespitEdilenHareketlerTable data={[]} />;
            case 'potansiyelFirsatlar':
                return <PotansiyelFirsatlarTable coins={[]} />;
            default:
                return <YukselisRadariTable data={[]} />;
        }
    };

    return (
        <div className="main-panel">
            <div className="tab-buttons">
                <button onClick={() => setActiveTab('yukselisRadari')}>Yükseliş Radarı</button>
                <button onClick={() => setActiveTab('tespitEdilenHareketler')}>Tespit Edilen Hareketler</button>
                <button onClick={() => setActiveTab('potansiyelFirsatlar')}>Potansiyel Fırsatlar</button>
            </div>
            <div className="table-content">
                {renderTable()}
            </div>
        </div>
    );
};

export default MainPanel;