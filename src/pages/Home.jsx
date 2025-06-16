import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Loading from '../components/Loading';
import * as FaIcons from 'react-icons/fa';

const BACKEND_URL = 'http://localhost:8000';

const Home = () => {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [infoResponse, skillsResponse] = await Promise.all([
          axios.get(`${BACKEND_URL}/api/personal-info/`),
          axios.get(`${BACKEND_URL}/api/skills/`),
        ]);
        setPersonalInfo(infoResponse.data);
        setSkills(skillsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  // Helper to get full URL for media files
  const getMediaUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${BACKEND_URL}${url}`;
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
            href={getMediaUrl(personalInfo.resume_file)}
            download
            className="inline-block mt-4 px-6 py-2 bg-primary dark:bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-primary/90 dark:hover:bg-blue-700 transition-colors"
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
          {skills.map((skill, index) => {
            const IconComponent = FaIcons[skill.icon] || null;
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  {IconComponent && (
                    <IconComponent className="w-8 h-8 mr-3 text-primary dark:text-blue-400" />
                  )}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {skill.description}
                </p>
                <div className="mt-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
};

export default Home; 