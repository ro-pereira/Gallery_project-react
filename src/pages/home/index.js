import { useState } from 'react';
import iconClose from "../../assets/close-modal.svg";
import Favorites from "../../components/Favoritos/index";
import { fotos } from '../../components/galeria';
import Header from "../../components/Header";
import ModalPicture from '../../components/ModalPicture';
import NavBar from '../../components/NavBar/index';
import ShowTheGalery from "../../components/ShowTheGalery";
import { filterFavorites } from '../../components/utils';
import './style.css';

export default function Main() {
    const [openFavoritesPics, setOpenFavoritesPic] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [allPicturesState, setAllPicturesState] = useState([]);
    const allPictures = [...fotos]
    const userFilterTrue = filterFavorites(allPicturesState);
    const [idItem, setIdItem] = useState(null)

    return (
        <>
            <NavBar setOpenFavoritesPic={setOpenFavoritesPic} />
            <main className={`main ${openFavoritesPics ? "overflor" : ""}`}>
                <Header title='Início' />
                <ShowTheGalery
                    openFavoritesPics={openFavoritesPics}
                    setAllPicturesState={setAllPicturesState}
                    allPictures={allPictures}
                    setIdItem={setIdItem}
                    setOpenModal={setOpenModal}
                />
            </main>

            {
                openFavoritesPics &&
                <section className='modal__favorites'>
                    <div className="container__favorites">
                        <Header
                            title='Fotos favoritas'
                        />
                        <img src={iconClose}
                            alt="icone fechar" className='icone__close'
                            onClick={() => setOpenFavoritesPic(false)} />
                        <Favorites
                            setAllPicturesState={setAllPicturesState}
                            allPictures={allPictures}
                            userFilterTrue={userFilterTrue}
                            setOpenFavoritesPic={setOpenFavoritesPic} />
                    </div>
                </section>
            }

            {
                openModal && <ModalPicture
                    idItem={idItem}
                    allPictures={allPictures}
                    setAllPicturesState={setAllPicturesState}
                    openModal={openModal}
                    setOpenModal={setOpenModal} />
            }
        </>
    )
}