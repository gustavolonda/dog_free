import React from 'react';
import { DogBreed } from '../models/DogBreed';

interface BreedCardProps {
  breed: DogBreed;
}

const BreedCard: React.FC<BreedCardProps> = ({ breed }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{breed.attributes.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {breed.attributes.description ? 'Description available' : 'No description available'}
        </h6>
        {breed.attributes.description && (
          <p className="card-text">{breed.attributes.description}</p>
        )}
        <div className="mt-3">
          <strong>Life Span:</strong> {breed.attributes.life.min} - {breed.attributes.life.max} years
        </div>
        {breed.attributes.male_weight && (
          <div>
            <strong>Male Weight:</strong> {breed.attributes.male_weight.min} - {breed.attributes.male_weight.max} kg
          </div>
        )}
        {breed.attributes.female_weight && (
          <div>
            <strong>Female Weight:</strong> {breed.attributes.female_weight.min} - {breed.attributes.female_weight.max} kg
          </div>
        )}
      </div>
    </div>
  );
};

export default BreedCard;