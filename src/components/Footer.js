import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  IconButton,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  // Define color values at the component level, not inside conditional or callback functions
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const hoverBgColor = useColorModeValue('gray.200', 'gray.700');
  
  // Define handlers outside of JSX to avoid React Hook rule violations
  const handleGithubClick = () => window.open('https://github.com/YoannSab', '_blank');
  const handleLinkedInClick = () => window.open('https://www.linkedin.com/in/yoann-sabatier-montanaro/', '_blank');
  const handleEmailClick = () => window.location.href = 'mailto:sabatieryoann@gmail.com';
  
  return (
    <Box
      bg={bgColor}
      color={textColor}
      mt="auto"
      py={10}
    >
      <Container
        as={Stack}
        maxW={'container.xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <Text fontSize="2xl" fontWeight="bold" fontFamily="heading">
          YSM
        </Text>
        <Stack direction={'row'} spacing={6}>
          <Link href={'#/'}>{t('nav.home')}</Link>
          <Link href={'#/projects'}>{t('nav.projects')}</Link>
          <Link href={'#/resume'}>{t('nav.resume')}</Link>
        </Stack>
      </Container>

      <Box borderTopWidth={1} borderStyle={'solid'} borderColor={borderColor}>
        <Container
          as={Stack}
          maxW={'container.xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© {new Date().getFullYear()} Yoann Sabatier. {t('footer.rights')}</Text>
          <Flex justify="center" align="center" gap={4}>
            <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              size="md"
              color={textColor}
              variant="ghost"
              _hover={{
                bg: hoverBgColor,
                transform: 'translateY(-2px)',
              }}
              onClick={handleGithubClick}
            />
            <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              size="md"
              color={textColor}
              variant="ghost"
              _hover={{
                bg: hoverBgColor,
                transform: 'translateY(-2px)',
              }}
              onClick={handleLinkedInClick}
            />
            <IconButton
              aria-label="Email"
              icon={<FaEnvelope />}
              size="md"
              color={textColor}
              variant="ghost"
              _hover={{
                bg: hoverBgColor,
                transform: 'translateY(-2px)',
              }}
              onClick={handleEmailClick}
            />
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;