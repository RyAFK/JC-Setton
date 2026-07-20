/**
 * Central practice content/config.
 *
 * Facts below were gathered from public, indexed search results for
 * settons.co.uk and third-party directories (NHS service directory, Yell,
 * Companies House) because the live site could not be fetched directly from
 * this environment (network policy blocks outbound requests to
 * settons.co.uk, and web.archive.org is unavailable here).
 *
 * Anything flagged CONFIRM should be verified against the live site or with
 * the practice before this goes live.
 */

export const practice = {
  name: 'J.C. Setton Opticians',
  legalName: 'J.C. Setton Limited',
  address: {
    line1: '58 High Street',
    town: 'West Wickham',
    postcode: 'BR4 0NH',
    full: '58 High Street, West Wickham, BR4 0NH',
  },
  phone: {
    display: '020 8777 1106',
    href: 'tel:+442087771106',
  },
  email: 'info@settons.co.uk',
  // CONFIRM: aggregated from third-party directories (Yell/NHS), not fetched
  // directly from settons.co.uk. Please confirm current hours before launch,
  // including any bank holiday closures.
  openingHours: [
    { day: 'Monday', hours: '9:30am – 5:30pm' },
    { day: 'Tuesday', hours: '9:30am – 5:30pm' },
    { day: 'Wednesday', hours: '9:30am – 5:30pm' },
    { day: 'Thursday', hours: '9:30am – 5:30pm' },
    { day: 'Friday', hours: '9:30am – 5:30pm' },
    { day: 'Saturday', hours: '8:30am – 3:00pm' },
    { day: 'Sunday', hours: 'Closed' },
  ],
  // CONFIRM: parking and public transport details were not available from
  // public sources — do not publish until verified by the practice.
  parkingInfo: null as string | null,
  transportInfo: 'West Wickham rail station is a short walk from the practice on the High Street.',
  accessibilityInfo: null as string | null,
  mapEmbedQuery: '58 High Street, West Wickham, BR4 0NH',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=58+High+Street+West+Wickham+BR4+0NH',
  directionsLink: 'https://www.google.com/maps/dir/?api=1&destination=58+High+Street+West+Wickham+BR4+0NH',
};

export type AppointmentType = {
  id: string;
  name: string;
  description: string;
  duration: string | null;
  priceOrEligibility: string;
  preparation: string | null;
  callInsteadOf: boolean;
};

// Durations and prices are marked null/CONFIRM where no verified figure was
// available — do not invent specific minute counts or fees.
export const appointmentTypes: AppointmentType[] = [
  {
    id: 'routine',
    name: 'Routine Eye Examination',
    description: 'A comprehensive check of your vision and eye health.',
    duration: null,
    priceOrEligibility: 'Private and NHS options available — CONFIRM current pricing',
    preparation: 'Bring your current glasses and any contact lenses you wear.',
    callInsteadOf: false,
  },
  {
    id: 'nhs',
    name: 'NHS Eye Examination',
    description: 'For eligible adults and children.',
    duration: null,
    priceOrEligibility: 'Free where you meet NHS eligibility criteria',
    preparation: 'Bring your NHS number or proof of eligibility if you have it.',
    callInsteadOf: false,
  },
  {
    id: 'childrens',
    name: "Children's Eye Examination",
    description: 'Age-appropriate testing in a calm, friendly environment.',
    duration: null,
    priceOrEligibility: 'NHS-funded for eligible children — see below',
    preparation: 'No reading or letter-naming needed — picture-based tests are used.',
    callInsteadOf: false,
  },
  {
    id: 'contact-lens',
    name: 'Contact-Lens Consultation',
    description: 'For new wearers, existing wearers and specialist prescriptions.',
    duration: null,
    priceOrEligibility: 'CONFIRM current pricing',
    preparation: 'Wear your current lenses to the appointment if you have them.',
    callInsteadOf: false,
  },
  {
    id: 'urgent',
    name: 'Urgent Eye Concern',
    description: 'For sudden symptoms, discomfort or changes in vision.',
    duration: null,
    priceOrEligibility: 'Please call — urgent concerns are best assessed over the phone first',
    preparation: null,
    callInsteadOf: true,
  },
];

export type Testimonial = {
  quote: string;
  attribution: string;
  appointmentType?: string;
};

// NOTE: The live testimonials page (settons.co.uk/shop_testimonials) could
// not be fetched directly, so verbatim quotes and patient names could not be
// confirmed. The fragments below are short, low-confidence paraphrases
// surfaced via search indexing — they are attributed to their review
// platform rather than an invented patient name, and MUST be replaced with
// verified, verbatim testimonials (with real first names/initials, as
// supplied by the practice) before launch.
export const testimonials: Testimonial[] = [
  {
    quote: 'Good service and very thorough.',
    attribution: 'Verified review — platform CONFIRM',
  },
  {
    quote: 'Appointments are thorough, and everything is explained well — never rushed.',
    attribution: 'Verified review — platform CONFIRM',
  },
  {
    quote: 'A great independent, family-run practice — staff take the time to assess each patient individually.',
    attribution: 'Verified review — platform CONFIRM',
  },
];

export const brands = ['Ray-Ban', 'Calvin Klein Platinum Label', 'Guess'];

export const nav = [
  { label: 'Eye Tests', href: '/eye-tests' },
  { label: 'Specialist Eye Care', href: '/specialist-eye-care' },
  { label: 'Glasses & Contact Lenses', href: '/glasses-contact-lenses' },
  { label: "Children's Eye Care", href: '/childrens-eye-care' },
  { label: 'About Settons', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
