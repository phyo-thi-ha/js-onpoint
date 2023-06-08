class Dog{
    constructor(name){
        this.name = name
    }
    run(){
        console.log(`${this.name} is running...`)
    }
}
let dog1 = new Dog()
// dog1.name = "Poppy"
dog1.run()