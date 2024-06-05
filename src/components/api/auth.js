export const savedData=formData=>{
    fetch(`https://stride1-pet-shop-server.vercel.app/user/${formData.email}`,{
        method:"PUT",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(formData)
    })
    .then(res=> res.json())
    .then(data=>{
        localStorage.setItem('token', data?.token)
    })
}