import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Flex,
  Icon,
  Button,
  Divider,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
  Tag,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaDownload, FaBriefcase, FaGraduationCap, FaCheckCircle, FaAward, FaCode, FaUsers, FaBook } from 'react-icons/fa';
import resumeData from '../data/resumeData';
import { Link } from 'react-router-dom';
import { useLanguage, pick } from '../i18n/LanguageContext';

const MotionBox = motion(Box);

const ResumePage = () => {
  const { t, language } = useLanguage();
  const bgColor = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const experienceTextColor = useColorModeValue('gray.600', 'gray.400');
  const educationTextColor = useColorModeValue('gray.600', 'gray.400');
  const certificationTextColor = useColorModeValue('gray.600', 'gray.400');

  const downloadCv = (fileName, downloadName) => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/${fileName}`;
    link.download = downloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box pt="100px" pb="50px">
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center" mb={10}>
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading as="h1" size="2xl" mb={2}>
              {t('resume.title')}
            </Heading>
            <Text fontSize="xl" color={textColor}>
              {t('resume.subtitle')}
            </Text>
          </MotionBox>

          <HStack spacing={3} flexWrap="wrap">
            <Button
              leftIcon={<FaDownload />}
              colorScheme="brand"
              size="lg"
              onClick={() => downloadCv('cv_fr_2026.pdf', 'Yoann_Sabatier_Montanaro_CV_FR.pdf')}
            >
              {t('resume.downloadFr')}
            </Button>
            <Button
              leftIcon={<FaDownload />}
              colorScheme="brand"
              variant="outline"
              size="lg"
              onClick={() => downloadCv('cv_en_2026.pdf', 'Yoann_Sabatier_Montanaro_CV_EN.pdf')}
            >
              {t('resume.downloadEn')}
            </Button>
          </HStack>
        </Flex>

        {/* Personal Information */}
        <Box
          bg={bgColor}
          p={8}
          borderRadius="lg"
          boxShadow="md"
          mb={10}
          borderLeft="4px solid"
          borderColor="brand.500"
        >
          <Heading as="h2" size="xl" mb={4}>
            {resumeData.name}
          </Heading>
          <Text fontSize="xl" fontWeight="medium" color="brand.500" mb={6}>
            {pick(resumeData.title, language)}
          </Text>
          <Text fontSize="lg" mb={4}>
            {pick(resumeData.summary, language)}
          </Text>
          <HStack spacing={4} flexWrap="wrap">
            <Text>
              <strong>{t('resume.emailLabel')}:</strong>{' '}
              <Box as="a" href={`mailto:${resumeData.email}`} color="brand.500">
                {resumeData.email}
              </Box>
            </Text>
            <Text>
              <strong>{t('resume.linkedinLabel')}:</strong>{' '}
              <Box as="a" href={resumeData.linkedin} target="_blank" color="brand.500">
                {t('resume.linkedinText')}
              </Box>
            </Text>
            {resumeData.github && (
              <Text>
                <strong>{t('resume.githubLabel')}:</strong>{' '}
                <Box as="a" href={`https://github.com/${resumeData.github}`} target="_blank" color="brand.500">
                  {resumeData.github}
                </Box>
              </Text>
            )}
          </HStack>
        </Box>

        <Box mb={12}>
          <Flex align="center" mb={8}>
            <Icon as={FaBriefcase} w={8} h={8} color="brand.500" mr={4} />
            <Heading as="h2" size="lg">
              {t('resume.experienceTitle')}
            </Heading>
          </Flex>

          <VStack spacing={6} align="stretch">
            {resumeData.experience.map((exp, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                bg={bgColor}
                p={6}
                borderRadius="md"
                boxShadow="md"
                borderLeft="4px solid"
                borderColor="brand.500"
              >
                <Flex
                  direction={{ base: 'column', md: 'row' }}
                  justify="space-between"
                  align={{ base: 'flex-start', md: 'center' }}
                  mb={4}
                >
                  <Box>
                    <Heading as="h3" size="md">
                      {pick(exp.position, language)}
                    </Heading>
                    <Text fontWeight="bold" color="brand.500">
                      {exp.company}, {pick(exp.location, language)}
                    </Text>
                  </Box>
                  <Text
                    fontWeight="medium"
                    color={experienceTextColor}
                    mt={{ base: 2, md: 0 }}
                  >
                    {pick(exp.period, language)}
                  </Text>
                </Flex>
                <Text mb={4}>{pick(exp.description, language)}</Text>
                {exp.website && (
                  <VStack align="flex-start" mb={4} spacing={2}>
                    {exp.website.map((link, linkIndex) => (
                      <Box as="a" key={linkIndex} href={link} target="_blank" color="brand.500">
                        {link}
                      </Box>
                    ))}
                  </VStack>
                )}
                <Flex flexWrap="wrap" gap={2}>
                  {exp.technologies && exp.technologies.map((tech, techIndex) => (
                    <Tag key={techIndex} colorScheme="brand" size="sm">
                      {tech}
                    </Tag>
                  ))}
                </Flex>
              </MotionBox>
            ))}
          </VStack>
        </Box>

        {/* Education Section */}
        <Box mb={12}>
          <Flex align="center" mb={8}>
            <Icon as={FaGraduationCap} w={8} h={8} color="brand.500" mr={4} />
            <Heading as="h2" size="lg">
              {t('resume.educationTitle')}
            </Heading>
          </Flex>

          <VStack spacing={6} align="stretch">
            {resumeData.education.map((edu, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                bg={bgColor}
                p={6}
                borderRadius="md"
                boxShadow="md"
                borderLeft="4px solid"
                borderColor="brand.500"
              >
                <Flex
                  direction={{ base: 'column', md: 'row' }}
                  justify="space-between"
                  align={{ base: 'flex-start', md: 'center' }}
                  mb={4}
                >
                  <Box>
                    <Heading as="h3" size="md">
                      {pick(edu.degree, language)}
                    </Heading>
                    <Text fontWeight="bold" color="brand.500">
                      {edu.institution}, {pick(edu.location, language)}
                    </Text>
                  </Box>
                  <Text
                    fontWeight="medium"
                    color={educationTextColor}
                    mt={{ base: 2, md: 0 }}
                  >
                    {edu.period}
                  </Text>
                </Flex>
                <Text>{pick(edu.description, language)}</Text>
              </MotionBox>
            ))}
          </VStack>
        </Box>

        {/* Publications Section */}
        {resumeData.publications && resumeData.publications.length > 0 && (
          <Box mb={12}>
            <Flex align="center" mb={8}>
              <Icon as={FaBook} w={8} h={8} color="brand.500" mr={4} />
              <Heading as="h2" size="lg">
                {t('resume.publicationsTitle')}
              </Heading>
            </Flex>

            <VStack spacing={6} align="stretch">
              {resumeData.publications.map((pub, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  bg={bgColor}
                  p={6}
                  borderRadius="md"
                  boxShadow="md"
                  borderLeft="4px solid"
                  borderColor="brand.500"
                >
                  <Text fontWeight="medium" mb={2}>
                    {pick(pub.citation, language)}
                  </Text>
                  <Text color={textColor} mb={pub.link ? 4 : 0}>
                    {pick(pub.description, language)}
                  </Text>
                  {pub.link && (
                    <Box as="a" href={pub.link} target="_blank" color="brand.500">
                      {pub.link}
                    </Box>
                  )}
                </MotionBox>
              ))}
            </VStack>
          </Box>
        )}

        {/* Activities Section */}
        {resumeData.activities && (
          <Box mb={12}>
            <Flex align="center" mb={8}>
              <Icon as={FaUsers} w={8} h={8} color="brand.500" mr={4} />
              <Heading as="h2" size="lg">
                {t('resume.activitiesTitle')}
              </Heading>
            </Flex>

            <VStack spacing={6} align="stretch">
              {resumeData.activities.map((activity, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  bg={bgColor}
                  p={6}
                  borderRadius="md"
                  boxShadow="md"
                  borderLeft="4px solid"
                  borderColor="brand.500"
                >
                  <Flex
                    direction={{ base: 'column', md: 'row' }}
                    justify="space-between"
                    align={{ base: 'flex-start', md: 'center' }}
                    mb={4}
                  >
                    <Box>
                      <Heading as="h3" size="md">
                        {pick(activity.role, language)}
                      </Heading>
                      {activity.organization && (
                        <Text fontWeight="bold" color="brand.500">
                          {activity.organization}
                        </Text>
                      )}
                    </Box>
                    <Text
                      fontWeight="medium"
                      color={experienceTextColor}
                      mt={{ base: 2, md: 0 }}
                    >
                      {pick(activity.period, language)}
                    </Text>
                  </Flex>
                  {activity.description && (
                    pick(activity.description, language).split('\n').map((line, lineIndex) => (
                      <Text key={lineIndex} mb={2}>
                        {line}
                      </Text>
                    ))
                  )}
                  {activity.link && (
                    <Text mb={4}>
                      <Box as="a" href={activity.link} target="_blank" color="brand.500">
                        {activity.link}
                      </Box>
                    </Text>
                  )}
                </MotionBox>
              ))}
            </VStack>
          </Box>
        )}

        {/* Projects Section - Replaced with Redirect */}
        <Box mb={12}>
          <Flex align="center" mb={8}>
            <Icon as={FaCode} w={8} h={8} color="brand.500" mr={4} />
            <Heading as="h2" size="lg">
              {t('resume.projectsTitle')}
            </Heading>
          </Flex>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            bg={bgColor}
            p={6}
            borderRadius="md"
            boxShadow="md"
            borderLeft="4px solid"
            borderColor="brand.500"
          >
            <Text fontSize="lg" mb={4}>{pick(resumeData.projectsRedirect.message, language)}</Text>
            <Button
              as={Link}
              to={resumeData.projectsRedirect.path}
              // href={resumeData.projectsRedirect.path}
              colorScheme="brand"
              size="md"
            >
              {t('resume.viewProjects')}
            </Button>
          </MotionBox>
        </Box>

        {/* Skills & Certifications */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {/* Skills Section */}
          <Box>
            <Flex align="center" mb={8}>
              <Icon as={FaCheckCircle} w={8} h={8} color="brand.500" mr={4} />
              <Heading as="h2" size="lg">
                {t('resume.skillsTitle')}
              </Heading>
            </Flex>

            <Box
              bg={bgColor}
              p={6}
              borderRadius="md"
              boxShadow="md"
              borderLeft="4px solid"
              borderColor="brand.500"
            >
              <Heading as="h3" size="md" mb={4}>
                {t('resume.technicalSkills')}
              </Heading>
              <List spacing={3} mb={6}>
                {resumeData.skills.technical.map((skill, index) => (
                  <ListItem key={index}>
                    <ListIcon as={FaCheckCircle} color="brand.500" />
                    {skill}
                  </ListItem>
                ))}
              </List>

              <Divider my={6} />

              <Heading as="h3" size="md" mb={4}>
                {t('resume.languagesTitle')}
              </Heading>
              <List spacing={3} mb={6}>
                {resumeData.skills.languages.map((lang, index) => (
                  <ListItem key={index}>
                    <ListIcon as={FaCheckCircle} color="brand.500" />
                    {pick(lang.name, language)} ({pick(lang.level, language)})
                  </ListItem>
                ))}
              </List>

              {resumeData.skills.interests && (
                <>
                  <Divider my={6} />
                  <Heading as="h3" size="md" mb={4}>
                    {t('resume.interestsTitle')}
                  </Heading>
                  <List spacing={3}>
                    {resumeData.skills.interests.map((interest, index) => (
                      <ListItem key={index}>
                        <ListIcon as={FaCheckCircle} color="brand.500" />
                        {pick(interest, language)}
                      </ListItem>
                    ))}
                  </List>
                </>
              )}
            </Box>
          </Box>

          {/* Certifications Section */}
          <Box>
            <Flex align="center" mb={8}>
              <Icon as={FaAward} w={8} h={8} color="brand.500" mr={4} />
              <Heading as="h2" size="lg">
                {t('resume.certificationsTitle')}
              </Heading>
            </Flex>

            <Box
              bg={bgColor}
              p={6}
              borderRadius="md"
              boxShadow="md"
              borderLeft="4px solid"
              borderColor="brand.500"
              height="fit-content"
            >
              {resumeData.certifications && resumeData.certifications.length > 0 ? (
                <VStack align="stretch" spacing={4}>
                  {resumeData.certifications.map((cert, index) => (
                    <Box key={index} p={4} borderRadius="md" border="1px solid" borderColor={borderColor}>
                      <Heading as="h3" size="sm" mb={2}>
                        {pick(cert.name, language)}
                      </Heading>
                      <Flex justify="space-between" flexWrap="wrap">
                        <Text fontWeight="medium" color="brand.500">
                          {cert.issuer}
                        </Text>
                        <Text fontSize="sm" color={certificationTextColor}>
                          {cert.date}
                        </Text>
                      </Flex>
                      {cert.description && (
                        <Text fontSize="sm" mt={2} color={textColor}>
                          {pick(cert.description, language)}
                        </Text>
                      )}
                    </Box>
                  ))}
                </VStack>
              ) : (
                <Text>{t('resume.noCertifications')}</Text>
              )}
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ResumePage;