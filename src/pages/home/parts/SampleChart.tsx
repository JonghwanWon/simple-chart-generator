import { Center, Container, HStack, VStack } from '@chakra-ui/react';
import { ChartType } from 'chart.js';
import { useState } from 'react';
import { Chart } from 'react-chartjs-2';

import ChartIconButton from '~/components/ChartIconButton';
import { samplingNumbers } from '~/utils/samplingNumbers';

type SampleChartProps = {};

const SampleChart = ({}: SampleChartProps) => {
  const [currentChartType, setCurrentChartType] = useState<ChartType>('line');
  const chartTypes: ChartType[] = ['bar', 'line'];

  return (
    <Container as="section" maxW="4xl">
      <VStack spacing="2">
        <HStack spacing="1">
          {chartTypes.map((type) => (
            <ChartIconButton
              key={type}
              chartType={type}
              isActive={type === currentChartType}
              onClick={() => setCurrentChartType(type)}
            />
          ))}
        </HStack>
        <Center maxW="xl" w="full" m="0 auto" p={4} borderWidth="1px" borderColor="gray.200" rounded="lg">
          <Chart
            key={currentChartType}
            type={currentChartType}
            options={{
              responsive: true,
              aspectRatio: 16 / 9,
              plugins: {
                title: {
                  display: true,
                  text: `${currentChartType.replace(/^./g, (t) => t.toUpperCase())} Chart`,
                  font: { size: 16 },
                },
              },
            }}
            data={{
              labels: ['a', 'b', 'c', 'd', 'e'],
              datasets: [
                {
                  label: 'Dataset 1',
                  data: samplingNumbers({ count: 5 }),
                  backgroundColor: 'rgba(255, 99, 132, 0.2)',
                  borderColor: 'rgba(255, 99, 132, 1)',
                },
                {
                  label: 'Dataset 2',
                  data: samplingNumbers({ count: 5 }),
                  backgroundColor: 'rgba(99, 102, 255, 0.2)',
                  borderColor: 'rgb(99, 102, 255, 1)',
                },
              ],
            }}
          />
        </Center>
      </VStack>
    </Container>
  );
};

export default SampleChart;
