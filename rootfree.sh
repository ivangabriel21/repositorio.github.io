echo "CARGANDO ROOT ESPERE www.quickm.net ...."
wget https://cdimage.ubuntu.com/ubuntu-base/releases/focal/release/ubuntu-base-20.04.1-base-amd64.tar.gz -O ubuntu.tar.xz > /dev/null
mkdir dist
wget https://repo.quickm.net/proot -O dist/proot > /dev/null
echo "CASI TERMINA ..."
chmod +x dist/proot
./dist/proot -S . /bin/bash
echo "YA TERMINO DE CARGAR DISFRUTA DEL ROOT 👌😎"
