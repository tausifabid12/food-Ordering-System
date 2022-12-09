export const uploadImg = (formData) => {
  let imgUrl;
  const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGEBB_API_KEY}`;

  fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((imgData) => {
      imgUrl = imgData?.data?.url;
    });

  return imgUrl;
};
