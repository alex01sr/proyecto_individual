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
    
   if(req.query.name){
        
           
                try {
                
                    let countrys
                   
                    if(req.query.order && req.query.table) {
                        countrys = await Country.findAll({where: {nombre: {[Op.iLike]: `%${req.query.name}%`}}, include:[Activity], order:[[req.query.table, req.query.order]] })
    
    
    
                        if(countrys.length === 0) return res.send([{
                            id: "sin id",
                            nombre: "No se encontro ningun pais",
                            flag: "https://w7.pngwing.com/pngs/595/505/png-transparent-computer-icons-error-closeup-miscellaneous-text-logo.png",
                            continente: "",
                            capital: "",
                            subregion: "",
                            area: "",
                            poblacion: ""}]);

                        res.send(countrys)

                    }else{
                    countrys = await Country.findAll({where: {nombre: {[Op.iLike]: `%${req.query.name}%`}}, include:[Activity]})
                        if(countrys.length === 0) return res.send([{
                            id: "sin id",
                            nombre: "No se encontro ningun pais",
                            flag: "https://w7.pngwing.com/pngs/595/505/png-transparent-computer-icons-error-closeup-miscellaneous-text-logo.png",
                            continente: "",
                            capital: "",
                            subregion: "",
                            area: "",
                            poblacion: ""}]);
                       res.send(countrys)

                    }
                   


                } catch (error) {
                    res.send({msg: "fallo en la busqueda"})
                }
        }
    
    else{

        let countries
        if(req.query.order && req.query.table)  {
        countries = await Country.findAll({order:[[req.query.table, req.query.order]], include:[Activity]}); 
       
        }else{
        countries = await Country.findAll({include:[Activity]})
        }


       if(countries.length === 0){
        request("https://restcountries.com/v3/all", async(err,response,body)=>{
            let countries
               /*      if(req.query.order && req.query.table)  {
                countries = await Country.findAll({order:[[req.query.table, req.query.order]], include:[Activity]}); 
       
                }else{
                 countries = await Country.findAll({include:[Activity]})
                }       
 */
            
            // validamos que no hayan datos en la base de datos 
            
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
  

    if(req.body.paisesAgregar && req.body.actividad){
        try {
            let aux = req.body.actividad.split("-")
        let activity = await Activity.findByPk(aux[0]);
        for(let element of req.body.paisesAgregar){
            let country = await Country.findByPk(element);
            await country.addActivity(activity)
            
        }
        res.send("Se agregaron los paises a la actividad seleccionada")
        } catch (error) {
        res.send("No se agregaron los paises a la actividad seleccionada")
        }
        


    }
    
    else{

    const {nombre, dificultad, duracion, temporada, arraypaises} = req.body;
    console.log(req.body)
    try {

        const [instance, created] = await Activity.findOrCreate({where:{nombre: nombre}, defaults:{ dificultad, duracion, temporada}});
       
        if(created === true){
            for(let element of arraypaises){
                let country = await Country.findByPk(element);
                await country.addActivity(instance)
                
            }
            res.send("Actividad creada exitosamente");
        }else{
            res.send("La actividad ya existia, si desea agregar la actividad a un nuevo pais por favor presione 'Agregar pais a actividad existente'");
        }
        
    } catch (error) {
        res.send({msg:"no se pudo crear la actividad, intentelo mas tarde"})
    }
}
});

router.get("/activity", async(req,res)=>{

   let activity = await Activity.findAll(); 
   res.send(activity)


})





module.exports = router;
