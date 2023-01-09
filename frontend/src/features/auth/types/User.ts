type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};

export type UserId = User['id'];

export default User;
