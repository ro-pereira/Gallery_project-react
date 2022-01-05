import { useState } from "react";
import { icons, iconsOpenAndClose } from "../galeria";
import './style.css';

function IconsNavBar({ image, title, setOpenFavoritesPic, isclosed }) {
  return (
    <div className="buttons__aside">
        <button>
          {
            title === "Home" &&
            <img src={image} alt="icon-menu" onClick={() => setOpenFavoritesPic(false)} /> 
          }
        </button>

        <button>
          {
            title === "Favoritos" &&
            <img src={image} alt="icon-menu" className="mb-auto" onClick={() => setOpenFavoritesPic(true)} />
          }
        </button>
  
        <button>
        {
          title === "Configurações" &&
          <img src={image} alt="icon-menu" />
        }
        </button>
    {
        isclosed &&
        <span>
          {title}
        </span>
      }
    </div>
  )
}

export default function NavBar({ setOpenFavoritesPic }) {
  const [isclosed, setIsClosed] = useState(false);
  const [iconsMenu, setIconsMenu] = useState(iconsOpenAndClose.iconOpenMenu);

  function openNavBar() {
    isclosed === false ? setIconsMenu(iconsOpenAndClose.iconClose) : setIconsMenu(iconsOpenAndClose.iconOpenMenu)

    setIsClosed(!isclosed)
  }
  return (
    <aside className='nav-bar aside'>
      <div className="icon">
        <button className='button__nav-bar'>
          <img src={iconsMenu} onClick={openNavBar} alt="icon-menu" />
        </button>

        {
          icons.map((e) => {
            return <IconsNavBar
              isclosed={isclosed}
              setIsClosed={setIsClosed}
              setOpenFavoritesPic={setOpenFavoritesPic}
              key={e.title}
              {...e} />
          })
        }

      </div>
    </aside>
  )
}
