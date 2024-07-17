const user = {
    name : "Leo", 
    age : 22,


    showName(){
        console.log(this.name)
    }
}

console.log(user)


console.log(user.name)
console.log(user.age)
console.log("showName", user.showName)



class User{
    name: string = 'user-name'
    age : number = 10
    
    constructor(name: string, age : number){
        this.name = name 
        this.age = age
    }

    showName = () =>{
        console.log(this.name)
    }
}

const newUser = new User('Leo', 22)
newUser.showName()


