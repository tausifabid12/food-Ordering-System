export const handleDelete = (id) => {
  fetch(`http://localhost:5000/allRestaurants/${id}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify({ approved: true }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.status) {
        refetch();
        toast.success("restaurant approved", {
          position: "top-center",
        });
      }
    });
};
