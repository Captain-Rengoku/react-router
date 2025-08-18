import {useState, useEffect} from 'react'

const Home = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch('https://api.github.com/users/captain-rengoku')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setData(data)
    })
    .catch((err) => {
      console.log("Failed to fetch:",err)
    })
  }, [])

  if (!data) {
    return <>Loading...</>
  }
  
  return (
    <div className='flex m-4 bg-gray-600 text-white p-4 text-3xl'>
      <img src={data.avatar_url} alt="git-picture" width={300} />
      <div className='flex flex-col mx-4 p-4 gap-2'>
        <p>Github Name: <span className='text-green-400'>{data.name}</span></p>
        <p>Github Login: <span className='text-green-400'>{data.login}</span></p>
        <p>Github Bio: <span className='text-green-400'>{data.bio}</span></p>
        <p>Github Followers: <span className='text-green-400'>{data.followers}</span></p>
        <p>Github Following: <span className='text-green-400'>{data.following}</span></p>
      </div>
    </div>
  )
}

export default Home
