import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css"
export default function GalleryNavigation({galleries}) {
  return (
    <nav>
      <h1>Galleries</h1>
      <NavLink to="/">Home</NavLink>
      {/* {galleries.map((gallery) => (
        <NavLink to={`galleries/${gallery.id}`}>{gallery.name} </NavLink>
      ))} */}
      {galleries.map((gallery) => {
        return <NavLink key={gallery.galleryid} to={`galleries/${gallery.id}`}>{gallery.name} </NavLink>
      })}
    </nav>
  )
}
