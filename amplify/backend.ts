import { defineBackend } from '@aws-amplify/backend';
import { defineFunction } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { data } from './data/resource.js';
defineBackend({
  auth,
  data,
  sendAppointmentEmail: defineFunction({
    entry: './lambda/sendAppointmentEmail/sendAppointmentEmail.ts'
  })
});

