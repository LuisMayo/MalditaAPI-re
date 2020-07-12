# MalditaAPI-re
Reverse engineering of "Maldito Bulo" API. Since this project documents an Spanish website the rest of the README will be in 
Spanish

Este proyecto no oficial pretende documentar ligeramente la API de Maldito Bulo, para analizar está API he mirado su extensión para Chrome.
En este proyecto dejaré la colección de postman e interfaces en Typescript para cada respuesta.

## Generalidades.
Todas las llamadas parecen apuntar a `https://backend.maldita.es/api/` y la mayoría parecen devolver los mismos datos pero estructurados de diferentes formas

## Autenticación
Todas las API parecen estar accesibles sin autenticación, no obstante el sistema tiene un endpoint para la asignación de keys en `https://backend.maldita.es/api/userkey`. Esta petición acepta un parámetro `version` opcional y devuelve un string con tu clave.

## Métodos
 - https://backend.maldita.es/api/websitecategories : Listado de páginas que Maldita ha desmentido, incluyendo la categoría a la que pertenecen y sus desmentidos
 - https://backend.maldita.es/api/debunks : Listado de bulos desmentidos
 - https://backend.maldita.es/api/urls : URLs desmentidas por Maldita
 - https://backend.maldita.es/api/websites : Listado de páginas que Maldita ha desmentido, incluyendo la categoría a la que pertenecen y sus desmentidos. La principal diferencia con `websitecategories` es que los bulos no tienen demasiados atributos, incluyendo sólo el id y una cadena con el título
 - https://backend.maldita.es/api/unlistedwebsitedebunkscount : URLs desmentidas por Maldita. La diferencia con `urls` es que apenas incluye ninguna información sobre los desmentidos, en `urls` al menos incluyen el ID del debunk
 - https://maldita.es/reports : Usa POST. API para informar sobre posibles bulos

## Contribuir
Cualquier contribución que desees hacer puedes abrir PR, si no sabes que hacer mira las issues, si has encontrado alguna mejora y no tienes claro si deberías hacerla o no abre una issue para que opine al respecto :)
