import React from 'react';
import { Table } from 'antd';
import { TespitEdilenHareketlerData } from '../../types';

interface TespitEdilenHareketlerTableProps {
    data: TespitEdilenHareketlerData[];
}

const TespitEdilenHareketlerTable: React.FC<TespitEdilenHareketlerTableProps> = ({ data }) => {
    const columns = [
        {
            title: 'Logo',
            dataIndex: 'logo',
            render: (text: string) => <img src={text} alt="coin logo" style={{ width: 30, height: 30 }} />,
        },
        {
            title: 'İsim',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Mevcut Fiyat',
            dataIndex: 'currentPrice',
            key: 'currentPrice',
        },
        {
            title: 'Hedef Fiyat',
            dataIndex: 'targetPrice',
            key: 'targetPrice',
        },
        {
            title: 'Potansiyel Değişim',
            dataIndex: 'potentialChange',
            key: 'potentialChange',
        },
        {
            title: 'Günlük Hacim',
            dataIndex: 'dailyVolume',
            key: 'dailyVolume',
        },
        {
            title: 'Alış/Satış Baskı Oranı',
            dataIndex: 'buySellPressureRatio',
            key: 'buySellPressureRatio',
        },
        {
            title: 'Güven Skoru',
            dataIndex: 'confidenceScore',
            key: 'confidenceScore',
        },
        {
            title: 'Tahmini Süre',
            dataIndex: 'estimatedTime',
            key: 'estimatedTime',
        },
    ];

    return (
        <Table
            columns={columns}
            dataSource={data}
            rowKey="name"
            pagination={{ pageSize: 10 }}
        />
    );
};

export default TespitEdilenHareketlerTable;