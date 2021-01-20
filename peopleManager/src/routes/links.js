const express = require('express');
const router = express.Router();
const multer = require('multer')
const upload = multer({ dest: '../images/'})

const pool = require('../database');

router.get('/add', (req, res) => {
    res.render('links/add.hbs');
})

router.post('/add', upload.single('profilePic'), async(req, res) => {
    console.log(req.file);
    /* const { profilePic } = req.file.path; */
    const { numidentif, nombre1, nombre2, apellido1, apellido2, profilePic, pasatiempos } = req.body;
    const newUser = {
        numidentif,
        nombre1,
        nombre2,
        apellido1,
        apellido2,
        profilePic,
        pasatiempos
    };
    
    const nuevoRegistro = async() => {
        
        console.log("Escribiendo...")

        const consulta = "INSERT INTO users (num_indentif, nombre1, nombre2, apellido1, apellido2, profile_pic, pasatiempo) VALUES ($1, $2, $3, $4, $5, $6, $7)"
        const values = [newUser.numidentif, newUser.nombre1, newUser.nombre2, newUser.apellido1, newUser.apellido2, newUser.profilePic, newUser.pasatiempos]
        
        const res = await pool.query(consulta, values);
        console.log(res)
        console.log("Escrito ☺")
    }

    const imagen = async() => {
        console.log("Subiendo imagen...")

        const consulta = "INSERT INTO users (profilePic) VALUES ($1)"
        const values = 

        console.log("Subida ☺")
    }
    
    nuevoRegistro();
    res.redirect('/links')
}),


router.get('/', async (req, res) =>{
   const users = await pool.query('SELECT * FROM users')
    res.render('links/list', {users});
})

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    console.log("Eliminando...")
    pool.query('DELETE FROM users WHERE ID = $1', [id])
    res.redirect('/links');
})

router.post('/edit/:id', async (req, res) =>{
    console.log("Actualizando...")
    const { id } = req.params;
    const { numidentif, nombre1, nombre2, apellido1, apellido2, profilePic, pasatiempos } = req.body;
    const newUser = {
        numidentif,
        nombre1,
        nombre2,
        apellido1,
        apellido2,
        profilePic,
        pasatiempos
    };
    const consulta = 'UPDATE USERS SET num_indentif = $1, nombre1 = $2, nombre2 = $3, apellido1 = $4, apellido2 = $5, profile_pic = $6, pasatiempo = $7 clave= WHERE id = $8'
    const values = [newUser.numidentif, newUser.nombre1, newUser.nombre2, newUser.apellido1, newUser.apellido2, newUser.profilePic, newUser.pasatiempos, id]
    await pool.query(consulta, values)
    console.log(newUser)
    res.redirect(/links/)
})

module.exports = router;

