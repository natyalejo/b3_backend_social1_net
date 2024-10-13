import  User from '../models/users.js'


export const  testUser = (req, res) => {

return res.status (200).send({
    message: "Mensaje enviado desde el controlador de usiuarios"

});


};

export const register = async (req, res) =>{
try {
let params = req.body;

if( ! params.name || !params.last_name || !params.nick || !params.email || !params.password) {
  return res.status(400).json({
    status: "error",
    message: "faltan datos por enviar"
  });
}

let user_to_save = new User(params);
await user_to_save.save ();


return res.status(200).json({
    message: "Registro de usuario exitoso",
    params,
    user_to_save
})


} catch (error) {
    console.log("Error en le registro de usuario: ", error);
    return res.status(500).send ({
         status: "error",
         message: "Error en le registro de usuario"

    });
}


    

};