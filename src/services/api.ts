import axios, { AxiosResponse } from 'axios';
import { PeopleAxiosResponse } from '../interfaces/people-axios-response';

export const getPeople =
  async (): Promise<PeopleAxiosResponse> => {
    const response: AxiosResponse<PeopleAxiosResponse> =
      await axios.get(
        'https://swapi.dev/api/people',
      );

    return response.data;
  };