import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),

  Appointment: a
    .model({
      name: a.string(),
      email: a.string(),
      phone: a.string(),

      carModel: a.string(), // ✅ NEW
      services: a.string().array(),  // ✅ NEW

      date: a.string(),
      time: a.string(),     // will store "hh:mm AM/PM"
    })
    .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: { expiresInDays: 30 },
  },
});
