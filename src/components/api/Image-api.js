const API_KEY = '19008489-eef4c530baed43ae206c47500';

function fetchImages(searchQueary, page) {
  return fetch(
    `https://pixabay.com/api/?&key=${API_KEY}&q=${searchQueary}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(
      new Error(`We can't find any images by your key-word`)
    );
  });
}

const api = { fetchImages };

export default api;
