import { Divider, VStack } from '@chakra-ui/react';
import Head from 'next/head';

import Footer from '~/components/Footer';

import HeroSection from './parts/HeroSection';
import SampleChart from './parts/SampleChart';

const Page = ({}) => {
  return (
    <main>
      <Head>
        <title>Simple Chart Generator</title>
      </Head>
      <VStack spacing={16} py={12} align="stretch" divider={<Divider />}>
        <HeroSection />
        <SampleChart />
        <Footer />
      </VStack>
    </main>
  );
};

export default Page;
