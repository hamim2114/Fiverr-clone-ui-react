import axios from 'axios';

const CLOUDINARY_CLOUD_NAME = 'djbzjdlh8';
const CLOUDINARY_API_KEY = 892527133658945;
const CLOUDINARY_API_SECRET = 'qUsJBxPwHGlTupj98PSOTsprZ8k';
const CLOUDINARY_UPLOAD_PRESET = 'fiverr-clone';

export const upload = async (file) => {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  try {
    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      data
    );
    const {url} = res.data
    return url;
  } catch (error) {
    console.log(error);
  }
};
