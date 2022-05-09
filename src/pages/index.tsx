import {
  Center,
  Container,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Square,
  Text,
  VStack,
  useToken,
} from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import { Chart } from 'react-chartjs-2';
import { FaBlogger, FaGithub } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Page = ({}) => {
  const [red700, gray200] = useToken('colors', ['red.700', 'gray.200']);

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
          <Center maxW="xl" w="full" m="0 auto" p={4} borderWidth="1px" borderColor="gray.200" rounded="lg">
            <Chart
              type="line"
              options={{
                responsive: true,
                aspectRatio: 16 / 9,
                plugins: {
                  title: {
                    display: true,
                    text: 'Line Chart',
                    color: red700,
                    font: { size: 16 },
                  },
                },
              }}
              data={{
                labels: ['a', 'b', 'c', 'd', 'e'],
                datasets: [
                  {
                    label: 'Dataset 1',
                    data: [12, 19, 3, 5, 2, 3],
                    fill: false,
                    // lineTension: 0.1,
                    tension: 0,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: red700,
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: red700,
                    pointHoverBorderColor: gray200,
                    pointHoverBorderWidth: 2,
                    pointRadius: 3,
                    pointHitRadius: 15,
                  },
                ],
              }}
            />
          </Center>
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
