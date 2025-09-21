import React, { useState, useEffect } from 'react';
import { DogBreed } from '../models/DogBreed';
import BreedCard from './BreedCard';
import { useDogService } from '../hooks/useDogService';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

const BreedList: React.FC = () => {
  const [breeds, setBreeds] = useState<DogBreed[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // Get the DogService instance with the apiUrl already set
  const dogService = useDogService();

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const data = await dogService.getBreeds();
        setBreeds(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch dog breeds. Please try again later.');
        setLoading(false);
      }
    };

    fetchBreeds();
  }, [dogService]);

  // Rest of the component remains the same
  const filteredBreeds = breeds.filter(breed => 
    breed.attributes.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="container mt-4">
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search dog breeds..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="row">
        {filteredBreeds.length > 0 ? (
          filteredBreeds.map(breed => (
            <div className="col-md-4" key={breed.id}>
              <BreedCard breed={breed} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <h3>No dog breeds found matching your search.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default BreedList;