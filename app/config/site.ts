export const SITE = {
  name: "Rodeo Drive",
  addressShort: "Doha, Qatar",
  phoneDisplay: "+974 3320 2409",
  phoneTel: "+97433202409",
  whatsappNumber: "97433202409",
  whatsappUrl: "https://wa.me/97433202409",
  // Header review button URL (update this when you share the final link)
  reviewUrl: "https://g.page/r/CXy-4EOOnRCwEAI/review",
  // Your Google listing (supports reviews + directions)
  googleMapsUrl: "https://maps.app.goo.gl/ieCJzCSYdFnR946h6",
  instagramUrl: "https://www.instagram.com/rodeo.drive.qtr/",
} as const;

export function toWhatsAppUrl(message: string) {
  return `${SITE.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export function telUrl() {
  return `tel:${SITE.phoneTel}`;
}
