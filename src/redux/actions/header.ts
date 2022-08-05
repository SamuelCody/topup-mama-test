import { loadToken } from "../token";

const headers: any = () => {
  const authenticated = loadToken();
  if (!authenticated) return null;
  return {
    headers: {
      Authorization: `Bearer ${loadToken()}`,
    },
  };
};

export default headers;
