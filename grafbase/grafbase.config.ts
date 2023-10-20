import { g, auth, config } from '@grafbase/sdk';

const User = g.model('User', {
  name: g.string().length({ min: 2, max: 30 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.relation(),
});

export default config({
  schema: g,
});
