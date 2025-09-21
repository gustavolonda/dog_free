import { useEffect } from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import DogService from '../services/DogService';

export const useDogService = () => {
  const { apiUrl } = useGlobalContext();
  
  useEffect(() => {
    // Set the API URL from the context
    DogService.setApiUrl(apiUrl);
  }, [apiUrl]);

  return DogService;
};