export interface LoginResponse {
  full_name: string;
  home_page: string;
  message: string;
}

export interface LoginRequest {
  usr: string;
  pwd: string;
}

export interface AuthResponse {
  message: string;
}
