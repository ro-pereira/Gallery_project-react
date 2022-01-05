import foto1 from '../assets/gallery/image 1.png';
import foto2 from '../assets/gallery/image 2.png';
import foto3 from '../assets/gallery/image 3.png';
import foto4 from '../assets/gallery/image 4.png';
import foto5 from '../assets/gallery/image 5.png';
import foto6 from '../assets/gallery/image 6.png';
import foto7 from '../assets/gallery/image 7.png';
import foto8 from '../assets/gallery/image 8.png';
import foto9 from '../assets/gallery/image 9.png';
import foto10 from '../assets/gallery/image 10.png';

import actvLike from '../assets/like.svg';
import inactiveLike from '../assets/inactive-like.svg';

import iconOpenMenu from '../assets/closed-menu.svg';
import iconClose from '../assets/open-menu.svg';
import iconHome from '../assets/active-home.svg';
import iconSettings from '../assets/inactive-settings.svg';

export const iconsLike = {
  actvLike,
  inactiveLike
} 

export const icons = [
 {image: iconHome,
  title: 'Home'},
 {image: inactiveLike,
  title: 'Favoritos'},
 {image: iconSettings,
  title: 'Configurações'}
]

export const iconsOpenAndClose = {
  iconOpenMenu,
  iconClose
}

export const fotos = [
    {
        id: 1,
        picture: foto1,
        select: false,
        iconLikeDeslike: inactiveLike
      },
      {
        id: 2,
        picture: foto2,
        select: false,
        iconLikeDeslike: inactiveLike
      },
      {
        id: 3,
        picture: foto3,
        select: false,
        iconLikeDeslike: inactiveLike
      },
      {
        id: 4,
        picture: foto4,
        select: false,
        iconLikeDeslike: inactiveLike
      },
      {
        id: 5,
        picture: foto5,
        select: false,
        iconLikeDeslike: inactiveLike
      },
      {
        id: 6,
        picture: foto6,
        select: false,
        iconLikeDeslike: inactiveLike
      },
      {
        id: 7,
        picture: foto7,
        select: false,
        iconLikeDeslike: inactiveLike
      },
      {
        id: 8,
        picture: foto8,
        select: false,
        iconLikeDeslike: inactiveLike
      },
      {
        id: 9,
        picture: foto9,
        select: false,
        iconLikeDeslike: inactiveLike
      },
      {
        id: 10,
        picture: foto10,
        select: false,
        iconLikeDeslike: inactiveLike
      }
]