import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
    })
    // ✅ keep it public (guest) without API keys
    .authorization((allow) => [allow.guest().to(["create", "read", "update", "delete"])]),

  Appointment: a
    .model({
      name: a.string(),
      email: a.string(),
      phone: a.string(),

      carModel: a.string(),
      services: a.string().array(),

      date: a.string(),
      time: a.string(), // "hh:mm AM/PM"
    })
    // ✅ guest can create + read (list)
    .authorization((allow) => [allow.guest().to(["create", "read"])]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    // ✅ NO API KEY anywhere
    defaultAuthorizationMode: "identityPool",
  },
});
