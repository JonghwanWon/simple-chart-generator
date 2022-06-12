import { Container, Heading, Square, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';

type HeroSectionProps = {};

const HeroSection = ({}: HeroSectionProps) => {
  return (
    <Container as="section" maxW="4xl">
      <VStack spacing={4}>
        <Heading size="lg" color="orange.400">
          Draw Your Own Chart
        </Heading>
        <Text fontSize="lg">The simplest way to draw a chart.</Text>
        <Square size="64px" position="relative">
          <Image src="/images/chamomile.png" layout="fill" />
        </Square>
      </VStack>
    </Container>
  );
};

export default HeroSection;
