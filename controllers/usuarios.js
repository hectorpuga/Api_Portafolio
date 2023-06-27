
const {response,request}=require('express');
const nodemailer=require('nodemailer');

const emailPost =async(req,res=response)=>{
const {email,name,}=req.body;


const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "pugagarciah@gmail.com",
    pass: process.env.PASSWORD
  }
});

const info= await transport.sendMail({
    from:'"Fred Foo"<foo@example.com>',

    to: email,
    subject:`Hola ${name} Bienvenido a la comunidad`,
    html:"<b>Hello mundo</b>"
});

console.log("Message sent: %s",info.messageId);

    res.json({"msg":"Status 200 ok"});

      }

    module.exports={emailPost}