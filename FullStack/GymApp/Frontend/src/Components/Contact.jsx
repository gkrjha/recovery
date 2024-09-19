import { useState,React } from "react"
import {ClipLoader} from "react-spinners"
const Contact = () => {
  const [name,setName] = useState("")
  const [email,SetEmail] = useState("")
  const [message,setMessege] = useState("")
  const [loading,setLoading] = useState(false)

  
  return (
    <section className='contact'>
      <form>
        <h1>CONTACT US</h1>
        <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <label>Email</label>
        <input type="email" value={email} onChange={(e)=>SetEmail(e.target.value)}/>
        <label>Message</label>
        <textarea rows="4" cols="50" onChange={(e)=>setMessege(e.target.value)}/>
        <button type="submit" disabled={loading} style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
         gap:"15px"
        }} >
          {
            loading && <ClipLoader size={20} color="white" /> 
          }
          Send Messege</button>
        </div>

      </form>
    </section>
  )
}

export default Contact
