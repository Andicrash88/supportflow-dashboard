// Services stay thin during setup so API integration can replace seed data cleanly in phase 2.
export const authService = {
  login: async (payload) => Promise.resolve(payload),
};
