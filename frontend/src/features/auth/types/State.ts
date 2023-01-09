import User from './User';

type AuthState = {
  authChecked: boolean;
  user?: User;
  loadError?: string;
};

export default AuthState;
