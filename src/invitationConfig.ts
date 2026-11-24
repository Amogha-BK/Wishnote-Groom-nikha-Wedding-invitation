import { entranceMedia } from "./invitation/entranceMedia.ts";

export type Celebration = {
  id: "nikah" | "reception";
  shortName: string;
  title: string;
  dateLabel: string;
  timeLabel?: string;
  venue?: string;
  address?: string;
  supportingLine: string;
  start: string;
  calendarTitle: string;
  image: string;
  scene: "lanterns" | "fire" | "candlelight";
  mapUrl?: string;
  compact?: boolean;
  wishesFrom?: string;
  hostAddress?: string;
};

const hyderabadVenue = {
  name: "Ashiana Banquet & Conference",
  address: "Road No. 1, Banjara Hills, Hyderabad – 500034",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Ashiana+Banquet+and+Conference+Road+No.+1+Banjara+Hills+Hyderabad+500034",
};

const groomParents = "Mrs and Mr Abbas Nellikavil";

export const invitationConfig = {
  couple: {
    first: "Fareen",
    second: "Javeed",
    groomFullName: "Nellikavil Mohammed Javeed",
    brideFullName: "Dr. Shaik Fareen Banu",
    brideQualification: "MBBS",
    groomQualification: "B.E I.T",
    groomParents: `s/o ${groomParents}`,
    brideParents: "D/o Dr. H. Zeenath Banu [AH Dept] and Shaik Sohail Ahmed",
    brideGrandparents: "Grand D/o Late Mrs. Hameeda Banu & P. Mohammed Hanief",
    groomGrandparents: "Grand s/o Late T.K.M Koya & Late Ahmed Kutty",
  },
  weddingLabel: "9 January 2027",
  countdownTarget: "2027-01-09T00:00:00+05:30",
  islamicInvocation: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  invitationLine: "Together with their families, Nellikavil Mohammed Javeed and Dr. Shaik Fareen Banu request the honour of your presence and duas as they celebrate their wedding.",
  blessingLine: "Your presence, blessings, and duas mean the world to us as we unite under the grace of Almighty Allah.",
  closingBlessing: "We look forward to celebrating this special occasion with you. Your presence and blessings will make our celebration complete.",
  homeAddress: "Migh Colony, Hyderabad",
  hosts: "",
  rsvp: "",
  wishesFrom: groomParents,
  monogram: "/assets/monogram-aa.png",
  artwork: entranceMedia.courtyard,
  venue: hyderabadVenue,
  contacts: [] as string[],
  optional: {
    travel: "",
    stay: "",
    contact: "",
    musicUrl: "/assets/kudmayi.m4a",
    whatsappHostNumber: "",
  },
  celebrations: [
    {
      id: "nikah",
      shortName: "Nikah",
      title: "Nikah",
      dateLabel: "Saturday, 9 January 2027",
      timeLabel: "",
      venue: hyderabadVenue.name,
      address: hyderabadVenue.address,
      supportingLine: "Nikah after Maghrib, followed by dinner.",
      start: "2027-01-09T00:00:00+05:30",
      calendarTitle: "Javeed & Fareen · Nikah Ceremony",
      image: "/assets/wedding-ceremony-hd-opt.webp",
      scene: "candlelight",
      mapUrl: hyderabadVenue.mapUrl,
    },
    {
      id: "reception",
      shortName: "Wedding Ceremony",
      title: "Wedding Ceremony",
      dateLabel: "Saturday, 16 January 2027",
      timeLabel: "11 AM to 3 PM",
      venue: "Avoki Centro Arena",
      address: "Kottakadavu, Kadalundi, Calicut, Kerala – 673302",
      supportingLine: "",
      start: "2027-01-16T11:00:00+05:30",
      calendarTitle: "Javeed & Fareen · Wedding Ceremony",
      image: "/assets/reception-hd-opt.webp",
      scene: "lanterns",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Avoki+Centro+Arena+Kottakadavu+Kadalundi+Calicut+Kerala+673302",
      compact: true,
      wishesFrom: groomParents,
      hostAddress: "Abbas Nellikavil, Thoufeeq, TPS Road, Chaliyam, Calicut",
    },
  ] satisfies Celebration[],
  calendar: { timezone: "Asia/Kolkata" },
} as const;
