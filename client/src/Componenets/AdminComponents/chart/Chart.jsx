import './chart.scss'
import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({ aspect, title, }) => {
    const data = [
        {
            name: 'Jan',
            total: 4000,

        },
        {
            name: 'Feb',
            total: 3000,

        },
        {
            name: 'Mar',
            total: 2000,

        },
        {
            name: 'Apr',
            total: 2780,

        },
        {
            name: 'May',
            total: 1890,

        },
        {
            name: 'Jun',
            total: 2390,

        },
    ];
    return (
        <div className="chart" style={{ padding: '10px' }}>
            <h1 className="title">{title}</h1>
            <ResponsiveContainer aspect={aspect}>

                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>

                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#colorTotal)" />

                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart