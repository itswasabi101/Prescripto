import validator from "validator"
import bcrypt from 'bcrypt' 
import cloudinary from 'cloudinary'
import doctorModel from '../models/doctorModel.js'

const {v2:cloudinaryV2}=cloudinary;
//api for adding doctor

const addDoctor = async () => {
    try{
        const { name , email ,password , speciality , degree , experience , about , fees , address} = req.body
        const imageFile = req.File

        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees ||!address ){
            return resizeBy.json({success:false,message:"Missing Details"})
        }

        //checing email format
        if(validator.isEmail(email)){
            return resizeBy.json({success:false,message:"Enter valid email address"})
        }

        //check email format
        if(password.length<8){
            return resizeBy.json({success:false,message:"Enter strong password"})
        }

        //hashing doctors password
        const salt = await bcrypt.genSalt(10)
        const hashedPasword = await bcrypt.hash(password,salt)

        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
        const imageUrl = imageUpload.secure_url

        const doctorData = {
            name,
            email,
            image:imageUrl,
            password:hashedPasword,
            speciality,
            degree ,
            experience ,
            about ,
            fees ,
            address:JSON.parse(address) ,
            date:Date.now()
        }
        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()
        res.json({success:true,message:"Doctor Added"})
    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})

    }
}

export {addDoctor}