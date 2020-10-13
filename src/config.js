
const AUTH = process.env.REACT_APP_AUTH;
export const AUTH_HEADER = token => ({ Authorization: `Token ${token}` });
export const JWT_HEADER = token => ({ Authorization: `Bearer ${token}` });

export const API = {
  auth: {
    register: `${AUTH}register`,
    authenticate: `${AUTH}authenticate`,
    
  },
  
};