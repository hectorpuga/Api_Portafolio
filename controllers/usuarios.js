
const {response,request}=require('express');
const nodemailer=require('nodemailer');

const emailPost =async(req,res=response)=>{
const {email,name,message}=req.body;


const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "pugagarciah@gmail.com",
    pass: process.env.PASSWORD
  }
});

const info= await transport.sendMail({
    to:"pugagarciah@gmail.com",
    subject:`Nuevo trabajo`,
    html:`
    <h3><b>Reclutador: ${name}</b></h3>
    <h3><b>Email: ${email}</b></h3>
    <h3><b>Message:</b></h3>

    <b>${message}</b>`
  
});

console.log("Message sent: %s",info.messageId);

    res.json({"msg":"Status 200 ok"});

      }

    module.exports={emailPost}