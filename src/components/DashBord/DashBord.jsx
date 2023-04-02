import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const DashBord = () => {

    const students = [
        {
          name: 'John Doe',
          id: '123456',
          phy: 56,
          math: 55,
          cha: 90
        },
        {
          name: 'Jane Doe',
          id: '789012',
          phy: 85,
          math: 92,
          cha: 78
        },
        {
          name: 'Bob Smith',
          id: '345678',
          phy: 67,
          math: 75,
          cha: 80
        },
        {
          name: 'Alice Johnson',
          id: '901234',
          phy: 90,
          math: 88,
          cha: 95
        },
        {
          name: 'Tom Wilson',
          id: '567890',
          phy: 72,
          math: 82,
          cha: 68
        },
        {
          name: 'Sarah Lee',
          id: '234567',
          phy: 85,
          math: 90,
          cha: 92
        },
        {
          name: 'Mike Davis',
          id: '890123',
          phy: 80,
          math: 78,
          cha: 75
        },
        {
          name: 'Samantha Brown',
          id: '456789',
          phy: 95,
          math: 92,
          cha: 87
        },
        {
          name: 'Timothy Johnson',
          id: '012345',
          phy: 62,
          math: 68,
          cha: 72
        },
        {
          name: 'Emily Wang',
          id: '678901',
          phy: 88,
          math: 90,
          cha: 85
        },
        {
          name: 'David Chen',
          id: '234567',
          phy: 76,
          math: 80,
          cha: 78
        },
        {
          name: 'Karen Liu',
          id: '789012',
          phy: 95,
          math: 96,
          cha: 98
        }
      ];
      


    return (
        <div>
            <LineChart
            
            width={1400}
            height={300}
            data={students}

            >
                <XAxis dataKey="name" />
          <YAxis />
               <Line dataKey='phy'></Line>
               <Line dataKey='math' stroke="#82ca9d"></Line>
               <Line dataKey='cha' stroke="#8884d8"></Line>
               <Tooltip />
            </LineChart>
        </div>
    );
};

export default DashBord;