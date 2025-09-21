import axios from 'axios';
import { DogBreed, ApiResponse } from '../models/DogBreed';

// Create a singleton class that can be configured with the API URL
class DogService {
  private static instance: DogService;
  private apiUrl: string = '';

  private constructor() {}

  public static getInstance(): DogService {
    if (!DogService.instance) {
      DogService.instance = new DogService();
    }
    return DogService.instance;
  }

  public setApiUrl(url: string): void {
    this.apiUrl = url;
  }

  public async getBreeds(): Promise<DogBreed[]> {
    if (!this.apiUrl) {
      throw new Error('API URL not set. Call setApiUrl before making requests.');
    }

    try {
      const response = await axios.get<ApiResponse>(this.apiUrl);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching dog breeds:', error);
      throw error;
    }
  }
}

export default DogService.getInstance();