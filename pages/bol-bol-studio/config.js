export const BB_FIRESTORE = {
  BOOKINGS_COLLECTION: "bb_bookings",
  PACKAGES_COLLECTION: "bb_packages",
  ACCOUNTS_COLLECTION: "bb_accounts",
  ADDS_COLLECTION: "bb_adds",
  ADDS_DOC_ID: "adds",
  PUBLIC_COLLECTION: "bb_public",
  PUBLIC_DOC_ID: "bol_bol_studio",
};

export const BB_DEFAULTS = {
  TIME_STEP_MINUTES: 30,
  TIMEZONE_LABEL: "WITA",
  OPENING_HOURS: {
    openMinutes: 11 * 60,
    closeMinutes: 21 * 60,
  },
  SOCIALS: {
    instagramUrl: "https://www.instagram.com/bolbol_studio",
    instagramHandle: "@bolbol_studio",
    tiktokUrl: "https://www.tiktok.com/",
    tiktokHandle: "@bolbol_studio",
    facebookUrl: "https://www.facebook.com/share/168ARZJr3N/?mibextid=wwXIfr",
    facebookLabel: "Bolbol Pss",
  },
  ADMIN_PHONE: "+6289503162551",
};

export const BB_PUBLIC_STUDIO_INFO_EXAMPLE = {
  openingHours: {
    openMinutes: BB_DEFAULTS.OPENING_HOURS.openMinutes,
    closeMinutes: BB_DEFAULTS.OPENING_HOURS.closeMinutes,
  },
  timezoneLabel: BB_DEFAULTS.TIMEZONE_LABEL,
  socials: {
    instagramUrl: BB_DEFAULTS.SOCIALS.instagramUrl,
    instagramHandle: BB_DEFAULTS.SOCIALS.instagramHandle,
    tiktokUrl: BB_DEFAULTS.SOCIALS.tiktokUrl,
    tiktokHandle: BB_DEFAULTS.SOCIALS.tiktokHandle,
    facebookUrl: BB_DEFAULTS.SOCIALS.facebookUrl,
    facebookLabel: BB_DEFAULTS.SOCIALS.facebookLabel,
  },
  adminPhone: BB_DEFAULTS.ADMIN_PHONE,
};

export function minutesSinceMidnight(date) {
  return date.getHours() * 60 + date.getMinutes();
}

export function withMinutesSinceMidnight(date, minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const d = new Date(date);
  d.setHours(hours, mins, 0, 0);
  return d;
}

export function startOfDay(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

export function timeOptions({ openMinutes, closeMinutes, stepMinutes }) {
  const opts = [];
  if (
    typeof openMinutes !== "number" ||
    typeof closeMinutes !== "number" ||
    typeof stepMinutes !== "number" ||
    stepMinutes <= 0
  ) {
    return opts;
  }

  for (let m = openMinutes; m < closeMinutes; m += stepMinutes) {
    opts.push(m);
  }

  return opts;
}

export function normalizeStudioInfo(raw) {
  const rawOpenMinutes = raw?.openingHours?.openMinutes;
  const rawCloseMinutes = raw?.openingHours?.closeMinutes;

  const openingHours = {
    openMinutes:
      typeof rawOpenMinutes === "number"
        ? rawOpenMinutes
        : BB_DEFAULTS.OPENING_HOURS.openMinutes,
    closeMinutes:
      typeof rawCloseMinutes === "number"
        ? rawCloseMinutes
        : BB_DEFAULTS.OPENING_HOURS.closeMinutes,
  };

  const timezoneLabel = raw?.timezoneLabel ?? BB_DEFAULTS.TIMEZONE_LABEL;

  const socials = {
    instagramUrl: raw?.socials?.instagramUrl ?? BB_DEFAULTS.SOCIALS.instagramUrl,
    instagramHandle:
      raw?.socials?.instagramHandle ?? BB_DEFAULTS.SOCIALS.instagramHandle,
    tiktokUrl: raw?.socials?.tiktokUrl ?? BB_DEFAULTS.SOCIALS.tiktokUrl,
    tiktokHandle: raw?.socials?.tiktokHandle ?? BB_DEFAULTS.SOCIALS.tiktokHandle,
    facebookUrl: raw?.socials?.facebookUrl ?? BB_DEFAULTS.SOCIALS.facebookUrl,
    facebookLabel: raw?.socials?.facebookLabel ?? BB_DEFAULTS.SOCIALS.facebookLabel,
  };

  const adminPhone = raw?.adminPhone ?? BB_DEFAULTS.ADMIN_PHONE;

  return {
    openingHours,
    timezoneLabel,
    socials,
    adminPhone,
  };
}

export async function getServerSideProps() {
  return {
    notFound: true,
  };
}

export default function Page() {
  return null;
}
