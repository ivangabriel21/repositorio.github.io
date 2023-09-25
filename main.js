const Docker = require('dockerode');
const fs = require('fs');

const docker = new Docker();

const imageTag = 'mi-imagen-gotty'; // Nombre de la imagen
const dockerfilePath = './mi-dockerfile'; // Ruta al Dockerfile
const dockerfileContents = fs.readFileSync(dockerfilePath, 'utf8'); // Lee el contenido del Dockerfile

// Construye la imagen a partir del Dockerfile
docker.buildImage({
  context: __dirname,
  src: ['Dockerfile'],
  tags: [imageTag],
  dockerfile: dockerfileContents,
}, (error, stream) => {
  if (error) {
    console.error('Error al construir la imagen:', error);
    return;
  }

  stream.on('data', (data) => {
    const message = JSON.parse(data.toString());
    console.log(message.stream);
  });

  stream.on('end', () => {
    console.log('Imagen construida con éxito.');

    // Ahora que la imagen está construida, puedes ejecutar un contenedor basado en ella.
    const container = docker.container.create({
      Image: imageTag,
      Tty: true,
      ExposedPorts: { '8085/tcp': {} },
      HostConfig: {
        PortBindings: { '8085/tcp': [{ HostPort: '8085' }] },
      },
    });

    container.start((startError) => {
      if (startError) {
        console.error('Error al iniciar el contenedor:', startError);
        return;
      }

      console.log('Contenedor iniciado en el puerto 8085.');
    });
  });
});
