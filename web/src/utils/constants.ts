export enum colors {
    lightSkin = "#FFF4EE",
    white = "#FFFFFF",
    black = "#000000",
    darkGrey = "#7E7E7E",
    lightGrey = "#D9D9D9",
    lightBlue = "#E6F3FF",
    darkBlue = "#2D9CDB",
  }
  
  export enum dashboardSections {
    profile = "Profile",
    bookings = "Bookings",
    services = "Services",
    calendar = "Calendar",
    payments = "Payments",
  }
  
  export type dashboardSectionType = keyof typeof dashboardSections;
  