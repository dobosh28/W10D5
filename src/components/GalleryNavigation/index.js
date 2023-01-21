import { NavLink } from "react-router-dom";
import './GalleryNavigation.css';

const GalleryNavigation = props => {
    return (
        <nav>
            <h1 className="nav-h">Galleries </h1>
            <NavLink exact to="/" className="home-page">Home</NavLink>
            {props.galleries.map(gallery => {
                return (
                    <div key={gallery.id}>
                        <NavLink to={`/galleries/${gallery.id}`} className='gallery-item'>{gallery.name}</NavLink>
                    </div>
                )
            })}
        </nav>
    )
};

export default GalleryNavigation;