export type User = {
  firstname: string;
  lastname: string;
  country: string;
  email: string;
  is_premium: boolean;
  is_admin: boolean;
  has_disk: boolean;
  disk: {
    id: string;
    name: string;
    serial_number: string;
  };
  avatar: string;
  created_at: string;
  updated_at: string;
  token: string;
};
