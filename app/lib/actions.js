import { revalidatePath } from "next/cache"
import { User,Product } from "./models"
import { connectToDB } from "./utils"
import { redirect } from "next/navigation"
import bcrypt from "bcrypt"
export const addUser = async(fornData)=>{
    "use server"
    const {username,email,password,phone,address,isAdmin,isActive} = Object.fromEntries(fornData)
    try {
        connectToDB();
        const salt = await bcrypt.genSalt(10)
        const hashpassword = await bcrypt.hash(password,salt)
        const newUser = new User({
            username,
            email,
            password:hashpassword,
            phone,
            address,
            isAdmin,
            isActive
        })
        await newUser.save()
    } catch (error) {
        console.log(error)
        throw new Error("Faild to create user!")
    }
    revalidatePath('/dashboard/users')
    redirect('/dashboard/users')
}

export const addProduct = async(fornData)=>{
    "use server"
    const {title,desc,price,stock,color,size}=Object.fromEntries(fornData);
    try {
        connectToDB()
        const newProduct = new Product({
            title,
            desc,
            price,
            stock,
            color,
            size
        })
        await newProduct.save()
    } catch (error) {
        console.log(error)
        throw new Error("Faild to create user!")
    }
    revalidatePath('/dashboard/products')
    redirect('/dashboard/products')
}

export const deleteProduct = async(fornData)=>{
    "use server"
    const {id}=Object.fromEntries(fornData);
    try {
        connectToDB()
        await Product.findByIdAndDelete(id)
    } catch (error) {
        console.log(error)
        throw new Error("Faild to create user!")
    }
    revalidatePath('/dashboard/products')
    // redirect('/dashboard/products')
}