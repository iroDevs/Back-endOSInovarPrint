const express = require('express');
const router = express.Router();
const multer = require("../multer/multer");
const path = require('path');
const fs = require('fs');

router.post("/",multer.single("file"),(req,res)=> {
    try {
        const file = req.file;
        const nomeDaImagem = path.basename(file.path)
        return res.status(200).json({message: "tudo deu certo", path: file.path, nome: nomeDaImagem});
   
    }catch (error) {
        res.status(500).json({message: "erro algo deu erraod", error,})
    }
})