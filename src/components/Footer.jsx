import { motion } from 'framer-motion';
import usePersonalInfo from '../hooks/usePersonalInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { personalInfo } = usePersonalInfo();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-6 text-center text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="mb-2">&copy; {currentYear} {personalInfo?.name || 'Umut Ergut'}. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            {personalInfo?.github_url && (
              <a
                href={personalInfo.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-600 dark:text-blue-400"
              >
                GitHub
              </a>
            )}
            {personalInfo?.linkedin_url && (
              <a
                href={personalInfo.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-600 dark:text-blue-400"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer; 