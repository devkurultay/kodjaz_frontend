export interface Login {
  email: string;
  password: string;
}

export interface Register {
  email: string;
  password1: string;
  password2: string;
}

export interface User {
  email: string;
  name: string;
  user_id: number;
  username: string;
}
