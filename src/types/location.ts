export interface LocationRoot {
  current_country_id: number;
  locations: ILocation[];
  wp_total: number;
  total: number;
  success: boolean;
}
export interface ILocation {
  id: string;
  title: string;
  content?: string;
  opened?: boolean;
  mask?: "required" | "recommended";
  towel?: "required" | "recommended";
  fountain?: "not_allowed" | "partial";
  locker_room?: "closed" | "allowed" | "partial";
  schedules?: ILocationSchedule[];
  street?: string;
  region?: string;
  city_name?: string;
  state_name?: string;
  uf?: string;
}

interface ILocationSchedule {
  weekdays: string;
  hour: string;
}
