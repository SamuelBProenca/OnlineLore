import { useState } from "react"

function handleClientGeter(){
    return
}

export function HeaderRendering(){

    const [user,setUser] = useState();
    handleClientGeter();

    return <>
        <p id="title">HeadSetStore</p>
        <input placeholder="pesquise a marca"></input>
        {user}
    </>
}