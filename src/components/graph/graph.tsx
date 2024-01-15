// BarChart.jsx

import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

interface BarChartProps {
  colorScheme: string[]; // 또는 다른 적절한 타입으로 지정
}

const BarChart: React.FC<BarChartProps> = ({ colorScheme }) => {
  // Example data
  const data = [
    { id: 'A', value: 10 },
    { id: 'B', value: 20 },
    { id: 'C', value: 30 },
    { id: 'D', value: 40 },
    { id: 'E', value: 50 },
    { id: 'F', value: 60 },
    { id: 'G', value: 70 },
    { id: 'H', value: 80 },
  ];

  return (
    <div style={{ height: 250 }}>
      <ResponsiveBar
        data={data}
        keys={['value']}
        indexBy="id"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={colorScheme}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default BarChart;
