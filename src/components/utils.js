import { iconsLike, fotos } from "./galeria";

export function likePic( allPictures, id, setAllPicturesState ) {
    const fotoCurtida = fotos[id - 1]

    const item = allPictures.find((a) => a == fotoCurtida)

    item.select = !item.select;

    item.select == true ? item.iconLikeDeslike = iconsLike.actvLike : item.iconLikeDeslike = iconsLike.inactiveLike
    setAllPicturesState(allPictures)
}

export function filterFavorites (allPicturesState) {
    const filterTrue = allPicturesState.filter((t) => t.select === true)
    return filterTrue
  }