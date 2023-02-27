import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const createGalleryItem = item => {
  return `<a class="gallery__item" href="${item.original}">
  <img
  class="gallery__image"
  src="${item.preview}" 
  alt="${item.description}" />
</a>`;
};

const items = galleryItems.map(item => createGalleryItem(item)).join('');
gallery.innerHTML = items;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
