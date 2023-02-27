import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const createGalleryItem = item => {
  return `
    <div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
};

const items = galleryItems.map(item => createGalleryItem(item)).join('');
gallery.innerHTML = items;

gallery.addEventListener('click', element => {
  element.preventDefault();
  if (element.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${element.target.dataset.source}" alt="${element.target.alt}" width="800" height="600"/>`
  );

  instance.show();

  gallery.addEventListener('keyup', event => {
    if (event.key === 'Escape') {
      instance.close();
    }
  });
});
