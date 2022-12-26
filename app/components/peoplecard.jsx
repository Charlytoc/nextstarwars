import Image from "next/image"
import Link from "next/link"

// import lucas from "../../public/luquilla.webp"
export default function People ({name, type, uid}) {
    // https://starwars-visualguide.com/assets/img/characters/3.jpg
    return <>
    <div className="cardashan">
                <h2>{name}</h2>
                <Image src={`https://starwars-visualguide.com/assets/img/${type}/${uid}.jpg`} width={200} height={200} alt=".." />
                <div>
                <Link href={`/${type}/${uid}`}>Learn more</Link>
                {/* <button>Add something</button> */}
                </div>
            </div></>
}