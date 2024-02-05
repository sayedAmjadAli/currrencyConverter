import { useState, useEffect } from "react"
function Github() {
    const [data, setData] = useState([])
    const [username, setUsername] = useState()
    const btnSearch = () => {
        const name = document.getElementById('username').value;
        setUsername(name)
        console.log(username)
    }

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`).then((res) => res.json()).then((res) => setData(res))
    }, [username])

    return (
        <>
            <div className="p-4 bg-gray-300 flex justify-between">
                <div className="p-3 bg-black text-white text-xl rounded-full">Welcome to our Website</div>
                <div className="p-3 "><  input className="p-2 rounded-full" id="username" type="text" />
                    <button className="bg-gray-400 p-2 rounded-full ml-2" onClick={btnSearch}>Search</button></div>
            </div>
            <div className="p-4  bg-gray-500 text-3xl text-center text-white flex   items-center">

                <div> <img className="rounded-full" src={data.avatar_url} alt="" width={300} /></div>
                <div className=" "> 
                <p>Name <span className="text-black">{data.login}</span></p>
                <p>GitHub Follower <span className="text-black ">{data.followers}</span></p> 
                <p>Location <span className="text-black ">{data.location}</span></p> 
                </div>
            </div>
        </>
    )
}
export default Github