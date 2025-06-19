import { motion } from 'framer-motion';
import Loading from '../components/Loading';
import SkillCard from '../components/SkillCard';
import usePersonalInfo from '../hooks/usePersonalInfo';
import useSkills from '../hooks/useSkills';

// Reads the API base URL from Vite env variables; falls back to localhost for development
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const Home = () => {
  const {
    personalInfo,
    loading: loadingPersonalInfo,
  } = usePersonalInfo();

  const {
    skills,
    loading: loadingSkills,
  } = useSkills();

  const loading = loadingPersonalInfo || loadingSkills;

  if (loading) {
    return <Loading />;
  }

  // Helper to get full URL for media files
  const getMediaUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${API_BASE_URL}${url}`;
  };

  return (
    <div className="container mx-auto px-4 py-16 mt-16 bg-white dark:bg-black">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        {personalInfo?.profile_picture && (
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            src={getMediaUrl(personalInfo.profile_picture)}
            alt={personalInfo.name}
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-gray-200 dark:border-gray-700"
          />
        )}
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {personalInfo?.name}
        </h1>
        <h2 className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          {personalInfo?.title}
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-6">
          {personalInfo?.bio}
        </p>
        {personalInfo?.resume_file && (
          <a
            href={getMediaUrl(personalInfo.resume_url)}
            download
            className="inline-block mt-4 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors"
          >
            Download my CV!
          </a>
        )}
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <SkillCard skill={skill} index={index} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Home; 