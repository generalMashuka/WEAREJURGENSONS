type User = {
  id: number;
  login: string;
};

export type SuggestionId = User['id'];

export default User;
