import { motion } from 'framer-motion';
import Loading from '../components/Loading';
import ProjectCard from '../components/ProjectCard';
import useProjects from '../hooks/useProjects';

const Projects = () => {
  const { projects, loading } = useProjects();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto px-4 py-16 mt-16 bg-white dark:bg-black">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
      >
        My Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 