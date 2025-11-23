let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};
 //using nested destructuring 
 let{address:{city,pin}}=user;
 console.log(city);
 console.log(pin);