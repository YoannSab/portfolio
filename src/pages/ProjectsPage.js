import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  Tag,
  TagLabel,
  Button,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchIcon } from '@chakra-ui/icons';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projectsData';

const MotionBox = motion(Box);

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedProjectTypes, setSelectedProjectTypes] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [projectTypes, setProjectTypes] = useState([]);
  
  // Define colors outside of conditionals
  const emptyStatesBgColor = useColorModeValue('gray.50', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const inputBgColor = useColorModeValue('white', 'gray.700');

  // Extract all unique technology tags and project types across all projects
  useEffect(() => {
    const tags = new Set();
    const types = new Set();
    
    projectsData.forEach(project => {
      project.technologies.forEach(tech => tags.add(tech));
      if (project.projectType) {
        types.add(project.projectType);
      }
    });
    
    setAllTags(Array.from(tags).sort());
    setProjectTypes(Array.from(types).sort());
  }, []);

  // Filter projects based on search term, selected project types, and selected tags
  useEffect(() => {
    let result = projectsData;

    // Filter by project types
    if (selectedProjectTypes.length > 0) {
      result = result.filter(project => 
        selectedProjectTypes.includes(project.projectType)
      );
    }

    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        project =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.technologies.some(tech =>
            tech.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    // Filter by selected tags
    if (selectedTags.length > 0) {
      result = result.filter(project =>
        selectedTags.every(tag => project.technologies.includes(tag))
      );
    }

    setFilteredProjects(result.sort((a, b) => {
      const aYear = a.year || 0;
      const bYear = b.year || 0;
      return bYear - aYear; // Sort by year descending
    }));
  }, [searchTerm, selectedProjectTypes, selectedTags]);

  // Toggle tag selection
  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  // Toggle project type selection
  const toggleProjectType = (type) => {
    setSelectedProjectTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };

  // Get color scheme for project type buttons
  const getProjectTypeColor = (type) => {
    switch(type) {
      case 'Projet Perso': return 'green';
      case 'Projet Scolaire': return 'blue';
      case 'Projet Pro': return 'orange';
      default: return 'gray';
    }
  };

  return (
    <Box pt="100px" pb="50px">
      <Container maxW="container.xl">
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          mb={10}
        >
          <Heading as="h1" size="2xl" mb={4}>
            Mes Projets
          </Heading>
          <Text fontSize="xl" color={textColor}>
            Découvrez l'ensemble de mes travaux et contributions dans le développement web et la data science.
          </Text>
        </MotionBox>

        {/* Search filter */}
        <Flex 
          direction={{ base: 'column', md: 'row' }} 
          mb={8} 
          gap={4}
          align={{ base: 'stretch', md: 'center' }}
        >
          <InputGroup maxW={{ base: 'full', md: '400px' }}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.400" />
            </InputLeftElement>
            <Input
              placeholder="Rechercher un projet..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              bg={inputBgColor}
            />
          </InputGroup>
        </Flex>

        {/* Project type filters */}
        <Box mb={6}>
          <Heading as="h3" size="md" mb={3}>
            Types de projets
          </Heading>
          <Wrap spacing={3} mb={4}>
            {projectTypes.map(type => (
              <WrapItem key={type}>
                <Tag
                  size="lg"
                  borderRadius="full"
                  variant={selectedProjectTypes.includes(type) ? "solid" : "outline"}
                  colorScheme={getProjectTypeColor(type)}
                  cursor="pointer"
                  onClick={() => toggleProjectType(type)}
                  py={2}
                  px={4}
                >
                  <TagLabel>{type}</TagLabel>
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Box>

        {/* Technology tags */}
        <Box mb={8}>
          <Heading as="h3" size="md" mb={3}>
            Technologies
          </Heading>
          <Wrap spacing={3}>
            {allTags.map(tag => (
              <WrapItem key={tag}>
                <Tag
                  size="md"
                  borderRadius="full"
                  variant={selectedTags.includes(tag) ? "solid" : "outline"}
                  colorScheme="brand"
                  cursor="pointer"
                  onClick={() => toggleTag(tag)}
                  py={1.5}
                  px={3}
                >
                  <TagLabel>{tag}</TagLabel>
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Box>

        {/* Active filters display and reset button */}
        {(selectedTags.length > 0 || selectedProjectTypes.length > 0 || searchTerm) && (
          <Flex justify="flex-end" mb={4}>
            <Button 
              size="sm" 
              variant="outline" 
              colorScheme="gray"
              onClick={() => {
                setSearchTerm('');
                setSelectedProjectTypes([]);
                setSelectedTags([]);
              }}
            >
              Réinitialiser les filtres
            </Button>
          </Flex>
        )}

        {/* Projects grid */}
        <AnimatePresence>
          {filteredProjects.length > 0 ? (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} mb={10}>
              {filteredProjects.map(project => (
                <MotionBox
                  key={project.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  layout
                >
                  <ProjectCard project={project} />
                </MotionBox>
              ))}
            </SimpleGrid>
          ) : (
            <Flex
              direction="column"
              align="center"
              justify="center"
              py={20}
              bg={emptyStatesBgColor}
              borderRadius="lg"
            >
              <Heading size="md" mb={4}>Aucun projet ne correspond à votre recherche</Heading>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedProjectTypes([]);
                setSelectedTags([]);
              }}>
                Réinitialiser les filtres
              </Button>
            </Flex>
          )}
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default ProjectsPage;