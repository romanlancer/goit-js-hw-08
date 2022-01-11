import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

import galleryTemplate from '../templates/gallery_template.hbs';
console.log(galleryTemplate(galleryItems));

const galleryEl = document.querySelector('.gallery');
const galleryCardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleryCardsMarkup);

function createGalleryCardsMarkup(galleryItems) {
  return galleryTemplate(galleryItems);
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
