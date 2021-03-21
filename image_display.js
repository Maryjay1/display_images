function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then((e) => e.json())
    .then((data) => {
      let array = data.slice(0, 50);
      array.forEach((item) => displayAlbum(item));
    });
}

function displayAlbum(album) {
  const container = document.getElementById('container');
  const div = document.createElement('div');
  const img = document.createElement('img');
  const h3 = document.createElement('h3');
  const title = document.createTextNode(album.title);
  const link = album.thumbnailUrl;
  img.src = link;
  div.className = 'divs';
  div.addEventListener('click', function(event) {
    openImage(link, album.title)
  })
  container.appendChild(div);
  div.appendChild(img);
  div.appendChild(h3);
  h3.appendChild(title);
}

function openImage(imageLink, title) {
  const modalContainer = document.getElementById("modal-container");
  const modalImage = document.getElementById("modal-image");
  const modalHeading = document.getElementById("modal-heading");
  modalImage.src = imageLink;
  modalHeading.innerHTML = title;
  modalContainer.style.display = "block";
}

function modalClose() {
  const modalContainer = document.getElementById("modal-container");
  modalContainer.style.display = "none";
}
