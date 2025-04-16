interface UserData {
  token: string;
  [key: string]: any; // optional: if you expect other properties
}

export const getToken = (): string | null => {
  const stringifiedData = localStorage.getItem("user");

  if (stringifiedData) {
    try {
      const data: UserData = JSON.parse(stringifiedData);
      return data.token;
    } catch (error) {
      console.error("Failed to parse user data:", error);
      return null;
    }
  }

  return null;
};
