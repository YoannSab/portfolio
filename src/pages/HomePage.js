import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Container,
  Stack,
  Image,
  SimpleGrid,
  Icon,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaMobileAlt, FaLaptopCode, FaRobot, FaProjectDiagram } from 'react-icons/fa';
import projectsData from '../data/projectsData';
import resumeData from '../data/resumeData';
import ProjectCard from '../components/ProjectCard';
import { useLanguage, pick } from '../i18n/LanguageContext';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);

const HomePage = () => {
  const { t, language } = useLanguage();
  const featuredProjects = projectsData.filter(project => project.featured).slice(0, 3);
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const boxBgColor = useColorModeValue('white', 'gray.700');

  return (
    <Box>
      {/* Hero Section */}
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        pt="120px"
        pb="120px"
      >
        <Container maxW="container.xl">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="space-between"
            gap={10}
          >
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              flex="1"
            >
              <MotionHeading
                as="h1"
                size="2xl"
                fontWeight="bold"
                lineHeight="1.2"
                mb={4}
                bgGradient="linear(to-r, brand.500, purple.500)"
                bgClip="text"
              >
                Yoann Sabatier Montanaro
              </MotionHeading>
              <MotionText
                fontSize="xl"
                mb={6}
                color={textColor}
              >
                {t('home.subtitle')}
              </MotionText>
              <MotionText
                fontSize="md"
                mb={6}
                color={textColor}
              >
                {t('home.heroDescription')}
              </MotionText>

              <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
                <Button
                  as={RouterLink}
                  to="/projects"
                  size="lg"
                  colorScheme="brand"
                  bg="brand.500"
                  _hover={{ bg: 'brand.600' }}
                  rightIcon={<FaArrowRight />}
                >
                  {t('home.viewProjects')}
                </Button>
              </Stack>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              flex="1"
              display="flex"
              justifyContent="center"
            >
              <Box
                bg={boxBgColor}
                p={1}
                borderRadius="full"
                boxShadow="2xl"
                maxW="350px"
                overflow="hidden"
              >
                <Image
                  src="/portfolio/images/me.jpg"
                  alt="Yoann Sabatier"
                  borderRadius="full"
                />
              </Box>
            </MotionBox>
          </Flex>
        </Container>
      </Box>

      {/* About Me Section - Added from AboutPage */}
      <Box pb="80px">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Heading as="h2" size="xl" mb={6}>
                {t('home.aboutTitle')}
              </Heading>
              <Text fontSize="lg" mb={8} color={textColor} lineHeight="tall">
                {t('home.aboutText')}
              </Text>

              <Box mb={10}>
                <Heading as="h3" size="lg" mb={6}>
                  {t('home.journeyTitle')}
                </Heading>
                <Text fontSize="lg" lineHeight="tall" mb={4} color={textColor}>
                  {t('home.journeyText1')}
                </Text>
                <Text fontSize="lg" lineHeight="tall" color={textColor}>
                  {t('home.journeyText2')}
                </Text>
              </Box>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Heading as="h3" size="lg" mb={6}>
                {t('home.interestsTitle')}
              </Heading>
              <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={8}>
                <FeatureBox
                  icon={FaRobot}
                  title={t('home.features.ai.title')}
                  description={t('home.features.ai.description')}
                />
                <FeatureBox
                  icon={FaMobileAlt}
                  title={t('home.features.mobile.title')}
                  description={t('home.features.mobile.description')}
                />
                <FeatureBox
                  icon={FaProjectDiagram}
                  title={t('home.features.research.title')}
                  description={t('home.features.research.description')}
                />
                <FeatureBox
                  icon={FaLaptopCode}
                  title={t('home.features.fullstack.title')}
                  description={t('home.features.fullstack.description')}
                />
              </SimpleGrid>
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box bg={useColorModeValue('gray.50', 'gray.900')} pb="80px">
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <Box textAlign="center">
              <Heading as="h2" size="xl">
                {t('home.featuredProjects')}
              </Heading>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full">
              {featuredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </SimpleGrid>

            <Button
              as={RouterLink}
              to="/projects"
              size="lg"
              variant="outline"
              colorScheme="brand"
              rightIcon={<FaArrowRight />}
            >
              {t('home.viewAllProjects')}
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Education Section - Added from AboutPage */}
      <Box pb="80px">
        <Container maxW="container.xl">
          <Box mb={8}>
            <Heading as="h2" size="xl" mb={8} textAlign="center">
              {t('home.academicPath')}
            </Heading>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {resumeData.education.map((edu, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                p={6}
                borderRadius="lg"
                boxShadow="md"
                bg={boxBgColor}
              >
                <Heading as="h3" size="md" mb={2}>
                  {pick(edu.degree, language)}
                </Heading>
                <Text fontWeight="bold" color="brand.500" mb={2}>
                  {edu.institution}
                </Text>
                <Text mb={2} fontSize="sm">
                  {pick(edu.location, language)} | {edu.period}
                </Text>
                <Text color={textColor}>
                  {pick(edu.description, language)}
                </Text>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA Section
      <Box py={20} bg={useColorModeValue('gray.50', 'gray.900')}>
        <Container maxW="container.lg">
          <VStack
            spacing={8}
            p={10}
            bg={useColorModeValue('brand.50', 'gray.800')}
            borderRadius="xl"
            boxShadow="lg"
            textAlign="center"
          >
            <Heading size="lg">Intéressé par une collaboration ?</Heading>
            <Text fontSize="lg" maxW="md" mx="auto">
              Je suis à la recherche d'opportunités pour développer des solutions innovantes combinant IA et développement web. N'hésitez pas à me contacter pour discuter de vos projets.
            </Text>
            <Button
              as={RouterLink}
              to="/contact"
              size="lg"
              colorScheme="brand"
              bg="brand.500"
              _hover={{ bg: 'brand.600' }}
            >
              Prenons contact
            </Button>
          </VStack>
        </Container>
      </Box> */}
    </Box>
  );
};

const FeatureBox = ({ icon, title, description }) => {
  const featureBgColor = useColorModeValue('white', 'gray.700');
  const featureTextColor = useColorModeValue('gray.600', 'gray.400');
  
  return (
    <MotionFlex
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      direction="column"
      bg={featureBgColor}
      p={5}
      borderRadius="lg"
      boxShadow="md"
    >
      <Flex
        w={12}
        h={12}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'brand.500'}
        mb={4}
      >
        <Icon as={icon} w={6} h={6} />
      </Flex>
      <Text fontWeight={600} fontSize="lg" mb={2}>
        {title}
      </Text>
      <Text color={featureTextColor}>
        {description}
      </Text>
    </MotionFlex>
  );
};

export default HomePage;