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

const storyService = {
  uploadStory,
  getStories,
};

/*
Returns one story.
*/
export async function getStory(id: number) {
    const response = await axios.get(`${API_BASE_URL}/stories/${id}`);
    return response.data;
}

/*
Returns cached AI analysis.
Returns null if analysis does not exist.
*/
export async function getAIAnalysis(id: number) {
    const response = await axios.get(
        `${API_BASE_URL}/stories/${id}/ai-analysis`
    );

    return response.data;
}

/*
Generates AI analysis and stores it.
*/
export async function generateAIAnalysis(id: number) {
    const response = await axios.post(
        `${API_BASE_URL}/stories/${id}/ai-analysis`
    );

    return response.data;
}


/*
Returns story preview.
*/
export async function getStoryPreview(id: number) {
    const response = await axios.get(
        `${API_BASE_URL}/stories/${id}/preview`
    );

    return response.data;
}

/*
Returns localized story.
*/
export async function localizeStory(
    id: number,
    language: string
) {
    const response = await axios.get(
        `${API_BASE_URL}/stories/${id}/localize/${language}`
    );

    return response.data;
}
export default storyService;