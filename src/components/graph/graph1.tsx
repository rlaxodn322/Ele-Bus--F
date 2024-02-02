import { ResponsiveLine } from '@nivo/line';

const MyResponsiveLine = () => {
  const data = [
    {
      id: 'A/S',
      color: 'hsl(281, 20%, 50%)',
      data: [
        {
          x: '11.01',
          y: 246,
        },
        {
          x: '11.02',
          y: 147,
        },
        {
          x: '11.03',
          y: 97,
        },
        {
          x: '11.04',
          y: 242,
        },
        {
          x: '11.05',
          y: 30,
        },
        {
          x: '11.06',
          y: 268,
        },
        {
          x: '11.07',
          y: 233,
        },
        // 나머지 데이터 항목들...
      ],
    },
    // 다른 국가들의 데이터도 추가
  ];

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 180, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'A/S 요청량 통계',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'count',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default MyResponsiveLine;
