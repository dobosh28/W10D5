import { NavLink } from "react-router-dom";
import './GalleryNavigation.css';

const GalleryNavigation = props => {

    const galleries = Object.values(props)[0];
 
    const galleriesList = galleries.map(gallery => {
        return (
        
            <NavLink to={`/galleries/${gallery.id}`} className='gallery-item' key={gallery.id}>{gallery.name}</NavLink>
        
        )
    })
    
    return (
        <nav>
            <NavLink to="/" className="home-page">Home</NavLink>
            <h1>Galleries </h1>
            <ul className="gallery-list">
                {galleriesList}
            </ul>
        </nav>
    )

}

export default GalleryNavigation;