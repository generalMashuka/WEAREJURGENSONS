import User from './User';

type AuthState = {
  authChecked: boolean;
  error?: string;
  user?: User;
  loadError?: string;
};

export default AuthState;
