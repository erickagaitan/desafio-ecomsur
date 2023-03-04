export const getProduct = () => {
  const URL = `http://localhost:5000/api/products`;

  return fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    });
};

export const getProductId = (_id) => {
  const URL = `http://localhost:5000/api/products/${_id}`;

  return fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    });
};


