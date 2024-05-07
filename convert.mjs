import imagein from 'imagemin';
import imageinWebp from 'imagemin-webp';

//ruta entrada de las imagenes y salida de las imagenes optomizadas
const inputPath = './resources/input';
const outputPath = './resources/output';

//Configuracio d'imatges
const config ={
    plugin: [
        imageinWebp({
            quality: 50, //qualitat de la imatge en webp
        }),
    ],
};

//Proces d'optomizacio de les imatges a traves de imagemin
async function optomizeImages() {
    try {
        await imagein([`${inputPath}/*.{jpg,png}`], {
            destination: outputPath,
            ...config,
        });

        console.log('Realizacio de tranformacio y compresio de imatges realizat amb exito');
    } catch (error) {
        console.error('Error al optomizar las imagenes', error);
    }
}

optomizeImages();