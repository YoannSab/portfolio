import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Button,
  Flex,
  SimpleGrid,
  Tag,
  TagLabel,
  Stack,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { FaGithub, FaExternalLinkAlt, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import projectsData from '../data/projectsData';
import { useLanguage, pick } from '../i18n/LanguageContext';

const MotionBox = motion(Box);

const ProjectDetailPage = () => {
  const { t, language } = useLanguage();
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Define all color mode values at the top level
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const detailsTextColor = useColorModeValue('gray.700', 'gray.300');
  const screenshotsBgColor = useColorModeValue('gray.50', 'gray.800');
  const screenshotsTextColor = useColorModeValue('gray.600', 'gray.400');

  useEffect(() => {
    // Find the project by ID
    const projectId = parseInt(id);
    const foundProject = projectsData.find((p) => p.id === projectId);

    if (foundProject) {
      setProject(foundProject);
    }
    setLoading(false);
  }, [id]);

  // Handle project not found
  if (!loading && !project) {
    return (
      <Box pt="100px" pb="50px">
        <Container maxW="container.xl" textAlign="center">
          <Heading mb={4}>{t('projectDetail.notFoundTitle')}</Heading>
          <Text mb={6}>{t('projectDetail.notFoundText')}</Text>
          <Button
            onClick={() => navigate('/projects')}
            colorScheme="brand"
            leftIcon={<ArrowBackIcon />}
          >
            {t('projectDetail.back')}
          </Button>
        </Container>
      </Box>
    );
  }

  if (loading || !project) {
    return (
      <Box pt="100px" pb="50px">
        <Container maxW="container.xl" textAlign="center">
          <Heading>{t('projectDetail.loading')}</Heading>
        </Container>
      </Box>
    );
  }

  const {
    title,
    description,
    details,
    technologies,
    imageUrl,
    githubUrl,
    liveUrl,
    contribution,
    private: isPrivate,
  } = project;

  return (
    <Box pt="100px" pb="50px">
      <Container maxW="container.xl">
        <Button
          mb={8}
          leftIcon={<ArrowBackIcon />}
          onClick={() => navigate('/projects')}
          variant="ghost"
        >
          {t('projectDetail.back')}
        </Button>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box position="relative" borderRadius="xl" overflow="hidden" boxShadow="xl">
              <Image
                src={`/portfolio/${imageUrl}`}
                alt={title}
                w="100%"
                h="auto"
                maxH="500px"
                objectFit="cover"
              />
              <Flex
                position="absolute"
                top={4}
                right={4}
                gap={2}
              >
                {/* <Tag colorScheme="blue" variant="solid" size="lg">
                  <TagLabel>{technologies.join(', ')}</TagLabel> */}
                {contribution && (
                  <Tag colorScheme="purple" variant="solid" size="lg">
                    <TagLabel>{t('projectCard.contribution')}</TagLabel>
                  </Tag>
                )}
                {isPrivate && (
                  <Tag colorScheme="red" variant="solid" size="lg">
                    <TagLabel>{t('projectCard.private')}</TagLabel>
                  </Tag>
                )}
                

              </Flex>
            </Box>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Heading as="h1" size="2xl" mb={4}>
              {title}
            </Heading>
            <Text fontSize="xl" color={textColor} mb={6}>
              {pick(description, language)}
            </Text>

            <Stack direction="row" mb={6} flexWrap="wrap" gap={2}>
              {technologies.map((tech, index) => (
                <Tag
                  key={index}
                  size="md"
                  borderRadius="full"
                  variant="solid"
                  colorScheme="brand"
                  bg="brand.500"
                >
                  <TagLabel>{tech}</TagLabel>
                </Tag>
              ))}
            </Stack>

            <Flex gap={4} mb={8}>
              {githubUrl && (
                <Button
                  leftIcon={<FaGithub />}
                  onClick={() => window.open(githubUrl, '_blank')}
                  colorScheme="gray"
                >
                  {t('projectDetail.sourceCode')}
                </Button>
              )}
              {liveUrl && (
                <Button
                  leftIcon={<FaExternalLinkAlt />}
                  onClick={() => window.open(liveUrl, '_blank')}
                  colorScheme="brand"
                >
                  {t('projectDetail.liveDemo')}
                </Button>
              )}
              {isPrivate && !liveUrl && (
                <Button
                  leftIcon={<FaLock />}
                  isDisabled
                  colorScheme="gray"
                >
                  {t('projectDetail.privateProject')}
                </Button>
              )}
            </Flex>
          </MotionBox>
        </SimpleGrid>

        <Divider my={12} />

        <Box>
          <Heading as="h2" size="xl" mb={6}>
            {t('projectDetail.aboutTitle')}
          </Heading>
          <Text
            fontSize="lg"
            lineHeight="tall"
            color={detailsTextColor}
          >
            {pick(details, language)}
          </Text>
        </Box>

        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          mt={12}
        >
          <Box
            bg={screenshotsBgColor}
            p={8}
            borderRadius="xl"
            boxShadow="md"
          >
            <Heading as="h3" size="lg" mb={4}>
              {t('projectDetail.screenshotsTitle')}
            </Heading>
            <Text mb={6} color={screenshotsTextColor}>
              {t('projectDetail.screenshotsSubtitle')} {title}
            </Text>

            {project.screenshots && project.screenshots.length > 0 ? (
              <SimpleGrid columns={1} spacing={6}>
                {project.screenshots.map((screenshot, index) => (
                  <Box key={index} borderRadius="md" overflow="hidden" boxShadow="md">
                    <Image
                      src={`/portfolio/${screenshot}`}
                      alt={`${title} screenshot ${index + 1}`}
                    />
                  </Box>
                ))}
              </SimpleGrid>
            ) : (
              <Text color={screenshotsTextColor} fontStyle="italic">
                {t('projectDetail.noScreenshots')}
              </Text>
            )}
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default ProjectDetailPage;