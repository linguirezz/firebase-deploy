import { useEffect,useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Credential from './components/credential'
import { db } from './firebase'
import { collection,addDoc } from 'firebase/firestore'
function App() {
  const [credential, setCredential] = useState('')
  async function handleSubmit(e){
    e.preventDefault()
    console.log(credential)
    try {
      const docRef = await addDoc(collection(db,'user'),credential)
      console.log(docRef)
    } catch (error) {
      console.log(error)
    }
  }
  function handleChange(e){
    setCredential({...credential,[e.target.name]:e.target.value})
  }
  // useEffect(()=>{
    
  // },[credential])
  return (
    <>
      <div className ="flex flex-col border rounded-md w-[300px] h-[400px] mx-auto p-3 " onSubmit={handleSubmit}>
        <h1 className="font-semibold text-xl capitalize my-1">Register</h1>
        <form className=' h-full flex flex-col justify-evenly'>
       <Credential onChange={handleChange} placeHolder="input your name first" label="name"/>
       <Credential onChange={handleChange} placeHolder="input your email" label="email" type="email"/>
       <Credential onChange={handleChange} placeHolder="create your password" label="password" type="password"/>
       <button type="input" className="bg-blue-700 py-2 rounded-md text-white font-semibold" >Input</button>
        </form>


      </div>
    </>
  )
}

export default App
