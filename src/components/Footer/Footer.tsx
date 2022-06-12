import { Flex, HStack, Icon, Text } from '@chakra-ui/react';
import { FaBlogger, FaGithub } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

type FooterProps = {};

const Footer = ({}: FooterProps) => {
  return (
    <Flex as="footer" maxW="4xl" align="center" justify="space-between" px={[4, 12]}>
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
  );
};

export default Footer;
