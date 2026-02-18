 const collectedData = {
  name: "John",
  age: 30,
  city: "New York"
};

 const anotherData = {
  name: "Jane",
  age: 25,
  city: "Los Angeles"
};

export {collectedData, anotherData};

export default function newdata (){
    return {
        name: "Default",
        age: 0,
        city: "Unknown"
    };
}