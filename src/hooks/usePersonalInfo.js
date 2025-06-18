import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const usePersonalInfo = () => {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPersonalInfo = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(`${API_BASE_URL}/api/personal-info/`);
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