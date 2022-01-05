import './style.css';
import { fotos, iconsOpenAndClose } from '../galeria';
import { likePic } from '../utils'

function fotoModal(idItem) {
    const findPicture = fotos.find((e) => e.id === idItem)
    return findPicture
}

export default function ModalPicture({ allPictures, idItem, setAllPicturesState, setOpenModal }) {
    const foundPicture = fotoModal(idItem)


    function giveALike(event) {
        likePic(allPictures,
            idItem,
            setAllPicturesState
        )

        event.stopPropagation()
    }

    return (
        <div className='modal' onClick={() => setOpenModal(false)}>
            <img src={iconsOpenAndClose.iconClose} alt='icon close' className='modal__button-close' onClick={() => setOpenModal(false)} />
            {
                foundPicture &&
                <div className='foto' onClick={(e) => e.stopPropagation()}>
                    <img className='modal__image' src={foundPicture.picture} onDoubleClick={giveALike} alt='imagem' />
                    <img className='inactive-like' src={foundPicture.iconLikeDeslike} onClick={giveALike} alt='imagem like' />
                </div>
            }
        </div>
    )
}

