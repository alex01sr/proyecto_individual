const { Router } = require('express');
const request = require("request");
const { off } = require('../app');
const { Country, Activity, country_activity} = require("../db");
const {  Op } = require('sequelize');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
let arrPromises = [];

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



  router.get("/countries",async (req,res)=>{
    
    /* function buscadorName (){ */
    if(req.query.name && req.query.order && req.query.table){
        
           
                try {
                
                    let countrys
                   
                    if(req.query.order === "O") {
                        countrys = await Country.findAll({where: {nombre: {[Op.iLike]: `%${req.query.name}%`}}, include:[Activity]})
    
    
    
                        if(countrys.length === 0) return res.json({msg:"No se encontro ningun pais"});
                        res.send(countrys)

                    }else{

                        countrys = await Country.findAll({where: {nombre: {[Op.iLike]: `%${req.query.name}%`}}, include:[Activity], order:[[req.query.table, req.query.order]] })
    
    
    
                        if(countrys.length === 0) return res.json({msg:"No se encontro ningun pais"});
                        res.send(countrys)

                    }
                   


                } catch (error) {
                    res.send({msg: "fallo en la busqueda"})
                }
        }
    
    else{

        let countries
        if(req.query.order === "O" || !req.query.order)  {
            countries = await Country.findAll()
        }else{
            countries = await Country.findAll({order:[[req.query.table, req.query.order]]}); 
       }

       if(countries.length=== 0){
        request("https://restcountries.com/v3/all", async(err,response,body)=>{
            let countries
            if(req.query.order === "O" || !req.query.order)  {countries = await Country.findAll()
            } else{
                 countries = await Country.findAll({order:[[req.query.table, req.query.order]]}); 
            }
            
            // validamos que no hayan datos en la base de datos 
                if(countries.length === 0){
                const users = await JSON.parse(body);
                
                arrPromises = users.map(( element )=>{
                    let obj = {
    
                        id: element.cca3,
                        nombre: element.name.common? element.name.common: "sin nombre",
                        flag: element.flags? element.flags[1]:"sin bandera",
                        continente: element.continents?element.continents[0] :"no pertenece a un continente",
                        capital: element.capital?element.capital[0]:"no tiene capital",
                        subregion: element.subregion,
                        area: Math.floor(element.area),
                        poblacion: Math.floor(element.population),
                    }
                    //converitmos todo el arreglo de objetos en promesas para ejecutarlas en el promiseAll
                    return Country.create(obj);})
            
                try {
                    await Promise.all(arrPromises)
                    countries = await Country.findAll();
                } catch (error) {
                    res.send("No se pudo guardar en la base de datos")
                }
            }
           
             res.send(countries)
            
            })


       }else{

            res.send(countries)

       }

        

    }

    
});

router.get("/countries/:idPais",async (req,res)=>{

    if(req.params.idPais.length != 3) return res.json({msg: "Ingrese un id valido"});
    //BUSCAMOS EL PAIS INGRESADO POR PARAMS, Y INCLUIMOS LAS ACTIVIDADES
     let country = await Country.findByPk(req.params.idPais.toUpperCase(),{include: [Activity]})
        if(!country) return res.json({msg: "no se encontro el pais"})
    
    res.send(country)
} );

router.post("/activity", async (req,res)=>{
  
    const {nombre, dificultad, duracion, temporada,countries} = req.body;
    try {
        const [instance, created] = await Activity.findOrCreate({where:{nombre: nombre}, defaults:{ dificultad, duracion, temporada}});
       


        for(let element of countries){
            let country = await Country.findByPk(element);
            await country.addActivity(instance)
            
        }

      
        res.send("actividad creada exitosamente");
    } catch (error) {
        res.send({msg:"no se pudo crear la actividad"})
    }
   

    

    
});





module.exports = router;
