// src/hooks/useMedicSpecialists.ts
import { useState, useEffect } from 'react';
import { getMedicSpecialists, MedicSpecialist } from '../api/medicSpecialistService';

const useMedicSpecialists = () => {
  const [specialists, setSpecialists] = useState<MedicSpecialist[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getMedicSpecialists();
        setSpecialists(result);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { specialists, loading, error };
};

export default useMedicSpecialists;
