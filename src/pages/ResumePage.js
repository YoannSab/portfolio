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
import { FaDownload, FaBriefcase, FaGraduationCap, FaCheckCircle, FaAward, FaCode, FaUsers } from 'react-icons/fa';
import resumeData from '../data/resumeData';
import { Link } from 'react-router-dom';

const MotionBox = motion(Box);

const ResumePage = () => {
  const bgColor = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const experienceTextColor = useColorModeValue('gray.600', 'gray.400');
  const educationTextColor = useColorModeValue('gray.600', 'gray.400');
  const certificationTextColor = useColorModeValue('gray.600', 'gray.400');

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
              Curriculum Vitae
            </Heading>
            <Text fontSize="xl" color={textColor}>
              Mon parcours professionnel et académique
            </Text>
          </MotionBox>

          <Button
            leftIcon={<FaDownload />}
            colorScheme="brand"
            size="lg"
            onClick={() => {
              // Créer un lien invisible et déclencher le téléchargement
              const link = document.createElement('a');
              link.href = '/CV.pdf';
              link.download = 'Yoann_Sabatier_Montanaro_CV.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Télécharger CV
          </Button>
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
            {resumeData.title}
          </Text>
          <Text fontSize="lg" mb={4}>
            {resumeData.summary}
          </Text>
          <HStack spacing={4} flexWrap="wrap">
            <Text>
              <strong>Email:</strong>{' '}
              <Box as="a" href={`mailto:${resumeData.email}`} color="brand.500">
                {resumeData.email}
              </Box>
            </Text>
            <Text>
              <strong>LinkedIn:</strong>{' '}
              <Box as="a" href={resumeData.linkedin} target="_blank" color="brand.500">
                Profil LinkedIn
              </Box>
            </Text>
            {resumeData.github && (
              <Text>
                <strong>GitHub:</strong>{' '}
                <Box as="a" href={`https://github.com/${resumeData.github}`} target="_blank" color="brand.500">
                  {resumeData.github}
                </Box>
              </Text>
            )}
          </HStack>
        </Box>

        {/* Experience Section */}
        <Box mb={12}>
          <Flex align="center" mb={8}>
            <Icon as={FaBriefcase} w={8} h={8} color="brand.500" mr={4} />
            <Heading as="h2" size="lg">
              Expérience Professionnelle
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
                      {exp.position}
                    </Heading>
                    <Text fontWeight="bold" color="brand.500">
                      {exp.company}, {exp.location}
                    </Text>
                  </Box>
                  <Text
                    fontWeight="medium"
                    color={experienceTextColor}
                    mt={{ base: 2, md: 0 }}
                  >
                    {exp.period}
                  </Text>
                </Flex>
                <Text mb={4}>{exp.description}</Text>
                {exp.website && (
                  <Text mb={4}>
                    <Box as="a" href={exp.website} target="_blank" color="brand.500">
                      {exp.website}
                    </Box>
                  </Text>
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
              Formation
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
                      {edu.degree}
                    </Heading>
                    <Text fontWeight="bold" color="brand.500">
                      {edu.institution}, {edu.location}
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
                <Text>{edu.description}</Text>
              </MotionBox>
            ))}
          </VStack>
        </Box>

        {/* Activities Section */}
        {resumeData.activities && (
          <Box mb={12}>
            <Flex align="center" mb={8}>
              <Icon as={FaUsers} w={8} h={8} color="brand.500" mr={4} />
              <Heading as="h2" size="lg">
                Activités Extrascolaires
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
                        {activity.role}
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
                      {activity.period}
                    </Text>
                  </Flex>
                  <Text mb={4}>{activity.description}</Text>
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
              Projets
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
            <Text fontSize="lg" mb={4}>{resumeData.projectsRedirect.message}</Text>
            <Button
              as={Link}
              to={resumeData.projectsRedirect.path}
              // href={resumeData.projectsRedirect.path}
              colorScheme="brand"
              size="md"
            >
              Voir mes projets
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
                Compétences
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
                Compétences Techniques
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
                Langues
              </Heading>
              <List spacing={3} mb={6}>
                {resumeData.skills.languages.map((lang, index) => (
                  <ListItem key={index}>
                    <ListIcon as={FaCheckCircle} color="brand.500" />
                    {lang.name} ({lang.level})
                  </ListItem>
                ))}
              </List>

              {resumeData.skills.interests && (
                <>
                  <Divider my={6} />
                  <Heading as="h3" size="md" mb={4}>
                    Centres d'intérêt
                  </Heading>
                  <List spacing={3}>
                    {resumeData.skills.interests.map((interest, index) => (
                      <ListItem key={index}>
                        <ListIcon as={FaCheckCircle} color="brand.500" />
                        {interest}
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
                Certifications
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
                        {cert.name}
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
                          {cert.description}
                        </Text>
                      )}
                    </Box>
                  ))}
                </VStack>
              ) : (
                <Text>Aucune certification disponible pour le moment.</Text>
              )}
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ResumePage;