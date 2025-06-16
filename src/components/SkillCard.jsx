import React from 'react';
import * as FaIcons from 'react-icons/fa';

const SkillCard = ({ skill, index }) => {
  const IconComponent = FaIcons[skill.icon] || null;
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-6">
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
        <span className="text-sm text-gray-500 capitalize">
          {skill.category}
        </span>
      </div>
    </div>
  );
};

export default SkillCard; 