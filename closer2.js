function makeFunc() {
    name : "Mozilla",
    semi = function displayName() {
      console.log(`${this.name}`);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();