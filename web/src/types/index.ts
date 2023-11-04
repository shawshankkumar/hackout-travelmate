type User = {
  name: string;
  username: string;
  email: string;
  given_name: string;
  family_name: string;
  picture: string;
  createdAt: string;
}

type DayAvailability = {
  enabled: boolean;
  slots: string[];
}

type Service = {
  enabled: boolean;
  amount: number;
  timeslot: string;
  description: string;
  name: string;
  id: string;
  next_available: string;
  availability: {
    "sun" : DayAvailability;
    "mon" : DayAvailability;
    "tue" : DayAvailability;
    "wed" : DayAvailability;
    "thur" : DayAvailability;
    "fri" : DayAvailability;
    "sat" : DayAvailability;
  };
}