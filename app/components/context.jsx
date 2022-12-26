import { Children } from "react";

export default function Contextito () {
    const contextito = {
        store: {
            favorites: []
        },
        actions: {
            addFavorites: (it) => {
                this.store.favorites = [...favorites, it];
                console.log("TODO BIEN")
            }
        }
    }
    return <>
    </>

}