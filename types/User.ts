export type User = {
  name: string;
  email: string;
  // password: string;
  is_premium: boolean;
  is_admin: boolean;
  has_disk: boolean;
  disk: {
    id: string;
    name: string;
    serial_number: string;
  };
  avatar: string;
  createdAt: string;
  updatedAt: string;
  token: string;
};
