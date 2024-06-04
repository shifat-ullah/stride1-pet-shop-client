export const savedData=formData=>{
    fetch(`http://localhost:5000/user/${formData.email}`,{
        method:"PUT",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(formData)
    })
    .then(res=> res.json())
    .then(data=>{
        console.log(data)
    })
}