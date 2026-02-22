 const dateSnapshot = new Date()
  
 console.log(dateSnapshot.toString())
 console.log(`Copyright ${dateSnapshot.getFullYear().toString()} all rights reserved.`)
 console.log(dateSnapshot.getMonth() + 1);
console.log(dateSnapshot.getDay());
console.log(dateSnapshot.getDate());

const getTimeStamp = () => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
