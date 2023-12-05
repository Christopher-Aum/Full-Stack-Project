import { useParams, Navigate} from "react-router-dom";
export default function GalleryView({galleries}) {
  let { galleryId } = useParams();
  let gallery = galleries.find((gall) => (
    gall.id == galleryId
  ))

  return (
    <>
    {!gallery && (
      <Navigate to="/" replace={true}/>
    )}
      <h1>Hello from GalleryView</h1>
      <h2>{gallery && (gallery.name)}</h2>
    </>
  )
}
