// Public integration settings from Rodeo Marketing → Website → Setup.
const marketingEndpoint = "https://55d2awfhxrxo3wbar24kh5vx4y0jeury.lambda-url.ap-south-1.on.aws";
export const websiteSiteKey = "rd_17hay4xxadbe";
export const websiteTrackingScript = `${marketingEndpoint}/t.js?k=${encodeURIComponent(websiteSiteKey)}`;
export const websiteBookingEndpoint = `${marketingEndpoint}/booking`;

export function isRodeoWebsiteOrigin(origin: string): boolean {
  return origin === "https://rodeodrive.qa" || origin === "https://www.rodeodrive.qa";
}
