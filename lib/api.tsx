import { House, Stat } from '../model/interfaces';

const API_URL = 'https://housecrawler.azurewebsites.net/api/v1';

export function getAllHouses(): Promise<House[]> {
  return fetch(`${API_URL}/houses`).then((resp) => resp.json());
}

export function getLastHouses(): Promise<House[]> {
  return fetch(`${API_URL}/houses/last`).then((resp) => resp.json());
}

export function getStats(): Promise<Stat[]> {
  return fetch(`${API_URL}/stats`).then((resp) => resp.json());
}