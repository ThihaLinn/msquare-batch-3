import bodyParser, { json } from 'body-parser';
import express, { Request, Response } from 'express';
import cookie from 'cookie-parser'
import fs from 'fs'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


const server = express()
const PORT = 5000

server.use(bodyParser.urlencoded({extended:true}))
server.use(cookie())
server.use(json())

let users:{email:string,password:string}[] = []

try{
    let userData =  fs.readFileSync("./user.json",'utf-8')
    users = JSON.parse(userData)
}catch(err){
    users=[]
}

server.post("/register",(req:Request,res:Response) => {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).send("Email and password are required");
    }
  
    // Hash the password using bcryptjs
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
  
    const newUser = { email, password: hash };
    users.push(newUser);
  
    // Save the updated user list to users.json
    fs.writeFileSync("./users.json", JSON.stringify(users, null, 2));
  
    res.status(201).send("User registered successfully");

})

server.post('/signin',(req:Request,res:Response) => {
    const {email,password} = req.body

    if(!email || !password){
        return "Email and password are required"
    }

    const user = users.find(user => user.email==email)

    if(!user){
        return res.status(401).send("User not found")
    }
    
    const passwordMatch = bcrypt.compare(user.password,password)

    if(!passwordMatch){
        return res.status(401).send("Invalid Crendials")
    }

    const token = jwt.sign(email,"dfsafbsadifuasdffde2q43",{
        expiresIn:"1hr"
    })

    localStorage.setItem("token",token) 
    res.redirect("/")

})

server.listen(PORT,() => console.log("Server have been started"))