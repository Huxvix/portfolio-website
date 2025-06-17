import { useState, useEffect } from 'react';
import axios from 'axios';

const usePersonalInfo = () => {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPersonalInfo = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get('http://localhost:8000/api/personal-info/');
        setPersonalInfo(response.data);
      } catch (error) {
        console.error('Error fetching personal info:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPersonalInfo();
  }, []);

  return { personalInfo, loading, error };
};

export default usePersonalInfo; 