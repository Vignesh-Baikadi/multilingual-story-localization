import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/v1";

export const uploadStory = async (file: File) => {
  const formData = new FormData();

  formData.append("file", file);

  const response = await axios.post(
    `${API_BASE_URL}/stories/upload`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

export const getStories = async () => {
  const response = await axios.get(
    `${API_BASE_URL}/stories`
  );

  return response.data;
};