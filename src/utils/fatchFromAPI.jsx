import axios from "axios";

// const baseURL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "972c80ccefmsh80505ac3b22c8d4p1b76d4jsnd9ff234a1248",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const featchDate = async (url) => {
  try {
    const result = await axios.get(`${baseURL}/${url}`, options);
    console.log("🚀 ~ featchDate ~ result:", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
