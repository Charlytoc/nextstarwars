
import Image from "next/image"
import Link from "next/link"
import AddFavButton from "./addFavorite"

// import lucas from "../../public/luquilla.webp"
export default function People ({name, type, uid}) {
    return <>
    <div className="cardashan">
                <h2>{name}</h2>
                <Image src={`https://starwars-visualguide.com/assets/img/${type}/${uid}.jpg`} width={200} height={200} alt=".." />
                <div>
                <Link href={`/${type}/${uid}`}>Learn more</Link>
                <AddFavButton type={type} uid={uid} name={name} />
                </div>
            </div></>
}