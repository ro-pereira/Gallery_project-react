import { iconsLike } from '../galeria';
import { likePic } from '../utils';
import './style.css'

function CardFavorites({ picture, setAllPicturesState,
    allPictures, id }) {
        console.log(allPictures)

    function giveALike(e) {
        e.stopPropagation()
        likePic(allPictures,
            id,
            setAllPicturesState
        )
    }

    return (
    <div className='card__pictures'>
        <img src={picture} alt="imagens" />
        <img className='like' onClick={giveALike} src={iconsLike.actvLike} alt='icon Like/deslike' />
        <div className='infos'>
            <figcaption>
                Lorem Ipson
            </figcaption>
        </div>
    </div>)
}

export default function Favorites({
    setAllPicturesState,
    allPictures,
    userFilterTrue
}) {

    return (
        <div className='conateiner__picture'>
        {
            userFilterTrue.map((e) => {
                    return <CardFavorites
                        key={e.id}
                        {...e}
                        allPictures={allPictures}
                        setAllPicturesState={setAllPicturesState} />
            })
            
        }
        </div>

    )
}