import { House } from '../model/interfaces';

export default function getAllHouses(): Promise<House[]> {
  return fetch('https://housecrawler.azurewebsites.net/api/v1/houses').then((resp) => resp.json());
}
