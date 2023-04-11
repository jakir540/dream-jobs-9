const addToDb =(id)=>{
    let jobsCart = getjobsCart();
    let quantity = jobsCart[id];
    if (!quantity) {
        jobsCart[id] = 1;
        
    }else{
        const newQuantity = quantity +1;
        jobsCart[id] = newQuantity;
    }
    localStorage.setItem('jobs-cart', JSON.stringify(jobsCart))
    

}

const removeFromDb =(id)=>{
    const jobsCart = getjobsCart();
    if (id in jobsCart) {
        delete jobsCart[id];
        localStorage.setItem('jobs-cart', JSON.stringify(jobsCart));
    }

}

//get the jobs cart from the local storage
const getjobsCart =()=>{
let jobsCart = {};
const storeCart = localStorage.getItem('jobs-cart');
if (storeCart) {
    jobsCart = JSON.parse(storeCart);
    
}
return jobsCart;

}

const deletejobsCart =()=>{
    localStorage.removeItem('jobs-cart')
}











export {
    addToDb,
    deletejobsCart,
    getjobsCart,
    removeFromDb,
   
}