import { Link, useParams } from "react-router-dom"

export default function ArtImageTile({art}) {
// console.log(art)
let artId = art.imageid;
  return (
    <Link to={`art/${artId}`}>
      <img src={art.baseimageurl}/>
    </Link>
  )
}
