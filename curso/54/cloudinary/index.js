const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});
//  se utiliza para configurar las credenciales de Cloudinary. Estas credenciales generalmente se almacenan en variables de entorno

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'YelpCamp',
        allowedFormats: ['jpeg', 'png', 'jpg']
    }
});
//gestionar la carga y almacenamiento de archivos en Cloudinary.
module.exports = {
    cloudinary,
    storage
}
//configura un servicio de almacenamiento en la nube, para gestionar la carga y almacenamiento de imágenes 