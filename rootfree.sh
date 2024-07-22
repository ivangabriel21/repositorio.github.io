#!/bin/bash

# Mostrar mensaje inicial
echo "CARGANDO ROOT, ESPERE por favor..."

# Descargar y descomprimir la imagen base de Ubuntu
wget -q https://cdimage.ubuntu.com/ubuntu-base/releases/focal/release/ubuntu-base-20.04.1-base-amd64.tar.gz -O ubuntu.tar.gz
if [ $? -ne 0 ]; then
    echo "Error al descargar ubuntu-base. Salida."
    exit 1
fi

tar -xzf ubuntu.tar.gz
if [ $? -ne 0 ]; then
    echo "Error al descomprimir ubuntu-base. Salida."
    exit 1
fi

# Crear el directorio para proot
mkdir -p dist

# Descargar proot
wget -q https://repo.quickm.net/proot -O dist/proot
if [ $? -ne 0 ]; then
    echo "Error al descargar proot. Salida."
    exit 1
fi

echo "CASI TERMINA ..."

# Cambiar permisos y ejecutar proot
chmod +x dist/proot
./dist/proot -S . /bin/bash

# Mensaje final
echo "YA TERMINO DE CARGAR. ¡DISFRUTA DEL ROOT! 👌😎"
