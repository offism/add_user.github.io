const UserModel = require('./models/UserModel')

let users = new UserModel()

async function main(){
	let res = await users.createUser('mirjalol' , 19)
    console.log(res)
} 
main()
