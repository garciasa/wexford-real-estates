import { House, StatsApi, StatChart } from '../model/interfaces';

const API_URL = 'https://housecrawler.azurewebsites.net/api/v1';

export function getAllHouses(): Promise<House[]> {
  return fetch(`${API_URL}/houses`).then((resp) => resp.json());
}

export function getLastHouses(): Promise<House[]> {
  return fetch(`${API_URL}/houses/last`).then((resp) => resp.json());
}

export function getStats(): Promise<StatsApi> {
  return fetch(`${API_URL}/stats`).then((resp) => resp.json());
}

// react-query is passing the key as first parameter !!!
export function getDataChart(key: string, beds:number=4): Promise<StatChart[]> {
  return fetch(`${API_URL}/stats/chart?beds=${beds}`).then((resp) => resp.json());
}