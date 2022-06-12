import { Center, Container, Divider, Flex, HStack, Heading, Icon, Square, Text, VStack } from '@chakra-ui/react';
import { ChartType } from 'chart.js';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { Chart } from 'react-chartjs-2';
import { FaBlogger, FaGithub } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

import ChartIconButton from '~/components/ChartIconButton';
import { samplingNumbers } from '~/utils/samplingNumbers';

const Page = ({}) => {
  const [currentChartType, setCurrentChartType] = useState<ChartType>('line');
  const chartTypes: ChartType[] = ['bar', 'line'];

  return (
    <>
      <Head>
        <title>Simple Chart Generator</title>
      </Head>
      <Container as="main" maxW="4xl">
        <VStack spacing={16} py={12} align="stretch" divider={<Divider />}>
          <VStack spacing={4}>
            <Heading size="lg" color="orange.400">
              Draw Your Own Chart
            </Heading>
            <Text fontSize="lg">The simplest way to draw a chart.</Text>
            <Square size="64px" position="relative">
              <Image src="/images/chamomile.png" layout="fill" />
            </Square>
          </VStack>
          <VStack spacing="2">
            <HStack spacing="1">
              {chartTypes.map((type) => (
                <ChartIconButton
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
          <Flex as="footer" align="center" justify="space-between" px={[4, 12]}>
            <Text fontSize="sm">All rights reserved. by JonghwanWon 2022</Text>
            <HStack>
              <a href="https://github.com/jonghwanwon" target="_blank">
                <Icon as={FaGithub} />
              </a>
              <a href="mailto:jh.wwwon@gmail.com">
                <Icon as={IoMdMail} />
              </a>
              <a href="https://frontj.com" target="_blank">
                <Icon as={FaBlogger} />
              </a>
            </HStack>
          </Flex>
        </VStack>
      </Container>
    </>
  );
};

export default Page;
