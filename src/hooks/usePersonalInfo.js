import { useState, useEffect } from 'react';
import axios from 'axios';

// Reads the API base URL from Vite env variables; falls back to localhost for development
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
        const res = await axios.get(`${API_BASE_URL}/api/personal-info/`);
        setPersonalInfo(res.data);
      } catch (err) {
        console.error('Error fetching personal info:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPersonalInfo();
  }, []);

  return { personalInfo, loading, error };
};

export default usePersonalInfo; 