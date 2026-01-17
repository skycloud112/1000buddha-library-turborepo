export const getPostgresUrl = () => {
  return process.env.POSTGRES_URL!;
};

export const getIronSessionPassword = () => {
  return process.env.IRON_SESSION_PASSWORD!;
};

export const getLoginPassword = () => {
  return process.env.LOGIN_PASSWORD!;
};
