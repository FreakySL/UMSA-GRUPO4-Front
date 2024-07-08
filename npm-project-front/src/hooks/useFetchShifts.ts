import { useState, useEffect, useCallback } from 'react';
import { getShiftsByMedicSpecialistId } from '../api/shiftService';
import { Shift } from '../models/Shift';

const useFetchShifts = (medicSpecialistId: string) => {
  const [shifts, setShifts] = useState<Shift[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchShifts = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getShiftsByMedicSpecialistId(medicSpecialistId);
      setShifts(data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching shifts');
      setLoading(false);
    }
  }, [medicSpecialistId]);

  useEffect(() => {
    fetchShifts();
  }, [fetchShifts]);

  return { shifts, loading, error, refetch: fetchShifts };
};

export default useFetchShifts;
