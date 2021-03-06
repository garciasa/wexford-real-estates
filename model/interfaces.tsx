export interface House {
  id: string;
  url: string;
  price: string;
  title: string;
  beds: number;
  baths: number;
  provider: string;
  eircode: string;
  date_renewed: string;
  first_listed: string;
  property_id: string;
  photo: string;
}

export interface Stat {
  id: string;
  name: string;
  start_date: string;
  end_date: string;
}

export interface StatsApi{
    crawler: Stat;
    general: Record<string, any>;
}

export interface StatChart {
  year: number;
  month_str: string;
  houses: number;
}
