import { useParams, Navigate} from "react-router-dom";
import ArtImageTile from "../ArtImageTile/ArtImageTile";
export default function GalleryView({galleries}) {
  let { galleryId } = useParams();
  let gallery = galleries.find((gall) => (
    gall.id == galleryId
  ))
  let pictures = gallery.objects.map((obj) => (
    obj.images[0]
  ))
    console.log(galleries)
    // console.log(pictures)
  return (
    <>
    {!gallery && (
      <Navigate to="/" replace={true}/>
    )}
      <h1>Hello from GalleryView</h1>
      <h2>{gallery && (gallery.name)}</h2>
      {pictures && (pictures.map((picture) => {
        if (picture) return <ArtImageTile key={picture.imageid} art={picture}/>
      }))}

    </>
  )
}
