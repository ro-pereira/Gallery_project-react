import { likePic } from "../utils";
import './style.css';

function CardPicture({ giveALike, actionModal, iconLikeDeslike, picture, id, allPictures, setAllPicturesState, setOpenModal, setIdItem }) {
    function giveALike(e) {
        e.stopPropagation()
        likePic(
            allPictures,
            id,
            setAllPicturesState
        )
    }

    function actionModal() {
        setOpenModal(true)
        setIdItem(id)
    }
    
    return (
        <div className='card__pictures'>
            <img className='inactive-like' alt='icon Like/deslike' src={iconLikeDeslike} onClick={giveALike} />

            <img src={picture} 
            onClick={actionModal} className='picture' alt="imagem animal" />

            <div className='infos'>
                <figcaption>Lorem Ipson</figcaption>
            </div>

        </div>
    )
}

export default function ShowTheGalery({
    setAllPicturesState,
    allPictures,
    setIdItem,
    setOpenModal
}) {


    return (
    <div className='conateiner__pictures'>
        {
            allPictures.map((image) => {
                return <CardPicture 
                key={image.id}
                setAllPicturesState={setAllPicturesState}
                allPictures={allPictures}
                setIdItem={setIdItem}
                setOpenModal={setOpenModal}
                {...image} />
            })
        }
    </div>
    )
}