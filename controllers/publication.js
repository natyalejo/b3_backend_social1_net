
export const  testPublication = (req, res) => {
    return res.status (200).send({
        mesage: "Mensaje enviado desde el controlador de publication"
    
    });
    
    
    };