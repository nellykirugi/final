'use client'
import React,{useState} from 'react'


const page = () => {
    const [form,setForm] = useState({
        Email:'',
    
    })
    const inputs = [
        {
            name:'email',
            placeholder:'email.',
            type:'text',
        },

        
    ]
    const handleChange = (e) => {
        setForm({...form ,[e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.table(form)
    }

  return (

      
      <div className='bg-white text-black font-bold  p-4 relative flex flex-col justify-center space-y-4 items-center h-screen mb-6'>
        <div className='bg-transparent  border-2 border-black px-4 py-4 flex flex-col items-center shadow-black shadow-md
        '>
            <h2> Forgot Password?</h2>
           <p className='text-black font-semibold justify-center '> Please enter your email address and we will email you a link to set the password</p>
        <form 
        onSubmit={handleSubmit}
        className='w-[400px] grid gap-6'>
            {inputs.map((d,i) => (
                <div key={i}
                className='grid gap-2'
                >
                    <label 
                    className='capitalize'
                    htmlFor="">{d.name}</label>
                    <input
                    onChange={handleChange}
                    type={d.type}
                    placeholder={d.placeholder}
                    name={d.name}
                    className='py-1 px-2 border-black border-2 rounded-sm'
                    />
                </div>
            ))}
            <button type='submit' className='bg-lime-300 text-white py-1 w-[100%]  active:bg-slate-50/25'>Reset Password </button>
           
           <p className='text-blue-500 hover:bg-black cursor-pointer
           '> Back to login page</p>
        </form>
      </div>
      </div>
      
    
  )
}

export default page