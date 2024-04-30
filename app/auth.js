import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDB } from "./lib/utils";
import { User } from "./lib/models";
import bcrypt from "bcrypt"

const login = async (credentials)=>{
    try {
        connectToDB()
        const user = await User.findOne({username:credentials.username})
        if(!user) throw new Error("Wrong Credentials!")
        const isPasswordCorrect = await bcrypt.compare(credentials.password,user.password)
        if(!isPasswordCorrect) throw new Error("Wrong Credentials!")
        return user;
    } catch (error) {
        console.log(error)
        throw new Error("Failed to login")
    }
}
export default NextAuth({
    providers:[
        CredentialsProvider({
            async authorize(credentials){
                try {
                    const user = await login(credentials);
                    return user
                } catch (error) {
                    return null
                }
            }
        })
    ],callbacks:{
        async jwt({token,user}){
            if(user){
                token.username = user.username;
                token.img = user.img

            }
            return token
        },
        async session({session,token}){
            if(token){
                session.username = token.username;
                session.img = token.img

            }
            return session;
        },
    }
})