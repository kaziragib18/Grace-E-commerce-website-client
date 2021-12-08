import axios from "axios";

const BASE_URL = "https://powerful-spire-49241.herokuapp.com/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWZhYzUxNWMxMjE0OTcxNWVhNmM4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODE4MTIwNSwiZXhwIjoxNjM4NDQwNDA1fQ.Yg6ekrtL072GklrrZcANQWdAt1rGECg3Ih52VBzL62s";

export const publicRequest = axios.create({
      baseURL: BASE_URL,
});

export const userRequest = axios.create({
      baseURL: BASE_URL,
      header: { token: `Bearer ${TOKEN}` },
});