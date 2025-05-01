import React from 'react';
import {
  Box,
  Image,
  Text,
  Heading,
  Badge,
  useColorModeValue,
  Flex,
  IconButton,
  Tag,
  TagLabel,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaLock, FaCalendarAlt } from 'react-icons/fa';

const MotionBox = motion(Box);

const ProjectCard = ({ project }) => {
  const {
    id,
    title,
    description,
    technologies,
    imageUrl,
    githubUrl,
    liveUrl,
    contribution,
    private: isPrivate,
    projectType,
    year,
  } = project;

  // Move useColorModeValue calls to the component level
  const bgColor = useColorModeValue('white', 'gray.700');

  // Détermine la couleur du badge en fonction du type de projet
  const getProjectTypeColor = (type) => {
    switch(type) {
      case 'Projet Perso': return 'green';
      case 'Projet Scolaire': return 'blue';
      case 'Projet Pro': return 'orange';
      default: return 'gray';
    }
  };

  return (
    <MotionBox
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={bgColor}
      boxShadow="lg"
      h="100%"
      display="flex"
      flexDirection="column"
      onClick={() => window.open(`#/project/${id}`, '_self')}
      _hover={{ cursor: 'pointer' }}
    >
      <Box position="relative">
        <Image
          src={`/portfolio/${imageUrl}`}
          alt={title}
          // height="300px"
          // width="100%"
          objectFit="cover"
        />
        <Flex
          position="absolute"
          top={2}
          right={2}
          gap={2}
          // opacity={0.8}
        >

          {projectType && (
            <Badge colorScheme={getProjectTypeColor(projectType)} variant="solid" fontSize="0.8em" px={2} py={1}>
              {projectType}
            </Badge>
          )}
          {contribution && (
            <Badge colorScheme="purple" variant="solid" fontSize="0.8em" px={2} py={1}>
              Contribution
            </Badge>
          )}
          {isPrivate && (
            <Badge colorScheme="red" variant="solid" fontSize="0.8em" px={2} py={1}>
              Privé
            </Badge>
          )}
        </Flex>
      </Box>

      <Box p={6} flexGrow={1} display="flex" flexDirection="column">
        <Heading fontSize="xl" fontWeight="bold" mb={2}>
          {title}
        </Heading>

        <Text fontSize="md" mb={4} flexGrow={1}>
          {description}
        </Text>

        <Wrap spacing={2} mb={4}>
          {technologies.map((tech, index) => (
            <WrapItem key={index}>
              <Tag
                size="md"
                borderRadius="full"
                variant="solid"
                colorScheme="brand"
                bg="brand.500"
              >
                <TagLabel>{tech}</TagLabel>
              </Tag>
            </WrapItem>
          ))}
        </Wrap>

        <Flex mt="auto" justify="space-between" align="center">
          <Flex gap={2}>
            {githubUrl && (
              <IconButton
                aria-label="GitHub Repository"
                icon={<FaGithub />}
                size="md"
                variant="ghost"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  window.open(githubUrl, '_blank');
                }}
              />
            )}
            {liveUrl && (
              <IconButton
                aria-label="Live Demo"
                icon={<FaExternalLinkAlt />}
                size="md"
                variant="ghost"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  window.open(liveUrl, '_blank');
                }}
              />
            )}
            {isPrivate && !liveUrl && (
              <IconButton
                aria-label="Private Project"
                icon={<FaLock />}
                size="md"
                variant="ghost"
                isDisabled
              />
            )}
          </Flex>
          
          {year && (
            <Flex align="center" gap={1}>
              <FaCalendarAlt color="gray.500" />
              <Text fontSize="sm" color="gray.500" fontWeight="medium">
                {year}
              </Text>
            </Flex>
          )}
        </Flex>
      </Box>
    </MotionBox>
  );
};

export default ProjectCard;