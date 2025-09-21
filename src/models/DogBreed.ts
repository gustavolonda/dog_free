export interface DogBreedAttributes {
  name: string;
  description: string | null;
  life: {
    min: number;
    max: number;
  };
  male_weight?: {
    min: number;
    max: number;
  };
  female_weight?: {
    min: number;
    max: number;
  };
}

export interface DogBreed {
  id: string;
  type: string;
  attributes: DogBreedAttributes;
}

export interface ApiResponse {
  data: DogBreed[];
}