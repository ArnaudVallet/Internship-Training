# SERVER API DOC
- [SERVER API DOC](#server-api-doc)
  - [Auth API](#auth-api)
  - [Formations API](#formations-api)
  - [Modules API](#modules-api)
  - [Composants API](#composants-api)


## Auth API
| Route                                 | HTTP Verb | Description                                                   |                          Exemples                          |
| :------------------------------------ | :-------: | :------------------------------------------------------------ | :--------------------------------------------------------: |
| `/api/auth/register`                  |  `POST`   | S'enregistrer et récupérer un token JWT                       |        [:mag:](./routes/doc/Auth/#apiauthregister)         |
| `/api/auth/login`                     |  `POST`   | Se connecter et récupérer un token JWT                        |          [:mag:](./routes/doc/Auth/#apiauthlogin)          |
| `/api/auth/forgotpassword`            |  `POST`   | Obtenir un lien de réinitialisation de mot de passe par email |     [:mag:](./routes/doc/Auth/#apiauthforgotpassword)      |
| `/api/auth/resetpassword/:resetToken` |   `PUT`   | Changer le mot de passe de en BDD                             | [:mag:](./routes/doc/Auth/#apiauthresetpasswordresettoken) |

## Formations API

| Route                                                   | HTTP Verb | Description                                                                                                                                         |                              Exemples                              |
| :------------------------------------------------------ | :-------: | :-------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------: |
| `/api/formations/uploadimage`                           |  `POST`   | Upload une image dans le dossier `/images/formation`                                                                                                |     [:mag:](./routes/doc/Formations/#apiformationsuploadimage)     |
| `/api/formations/create`                                |  `POST`   | Enregistre l'image de la formation puis la crée sans [modules](#modules-api)                                                                        |       [:mag:](./routes/doc/Formations/#apiformationscreate)        |
| `/api/formations/createwithbigobject`                   |  `POST`   | Enregistre l'image de la formation puis la crée intégralement la formation en insérant ses [modules](#modules-api) et [composants](#composants-api) | [:mag:](./routes/doc/Formations/#apiformationscreatewithbigobject) |
| `/api/formations/`                                      |   `GET`   | Récupère toutes les formations non populées                                                                                                         |          [:mag:](./routes/doc/Formations/#apiformations)           |
| `/api/formations/withpopulate`                          |   `GET`   | Récupère toutes les formations populées de leurs [modules](#modules-api) et [composants](#composants-api)                                           |                         [:mag:](./routes)                          |
| `/api/formations/getonebyid/:id`                        |   `GET`   | Récupère une formation non populée par son `id`                                                                                                     |                         [:mag:](./routes)                          |
| `/api/formations/getonebyidwithpopulate/:id`            |   `GET`   | Récupère une formation populée de ses [modules](#modules-api) et ses [composants](#composants-api) par son `id`                                     |                         [:mag:](./routes)                          |
| `/api/formations/publishedwithpopulate`                 |   `GET`   | Récupère uniquement les formations publiées, populées de leurs [modules](#modules-api) et [composants](#composants-api)                             |                         [:mag:](./routes)                          |
| `/api/formations/:id/setpublished`                      |  `PATCH`  | Change le statut de publication d'une formation à son inverse                                                                                       |                         [:mag:](./routes)                          |
| `/api/formations/:formation_id/addonemodule/:module_id` |  `PATCH`  | Ajoute un [modules](#modules-api) à la formation dans son tableau de modules                                                                        |                         [:mag:](./routes)                          |
| `/api/formations/delete/:id`                            | `DELETE`  | Supprime une formation                                                                                                                              |                         [:mag:](./routes)                          |

## Modules API

| Route                                                   | HTTP Verb | Description                                                                     |     Exemples      |
| :------------------------------------------------------ | :-------: | :------------------------------------------------------------------------------ | :---------------: |
| `/api/modules/create`                                   |  `POST`   | Crée un module                                                                  | [:mag:](./routes) |
| `/api/modules/createforformation/:id`                   |  `POST`   | Crée un module pour une [formation](#formations-api) spécifique                 | [:mag:](./routes) |
| `/api/modules/`                                         |   `GET`   | Récupère tous les modules non populés                                           | [:mag:](./routes) |
| `/api/modules/getonebyid/:id`                           |   `GET`   | Récupère un module non populée par son `id`                                     | [:mag:](./routes) |
| `/api/modules/:module_id/addonecomposant/:composant_id` |  `PATCH`  | Ajoute un [composant](#composants-api) au module dans son tableau de composants | [:mag:](./routes) |
| `pas encore implémenté`                                 | `DELETE`  | Supprime un module                                                              | [:mag:](./routes) |

## Composants API

| Route                                 | HTTP Verb | Description                                                 |     Exemples      |
| :------------------------------------ | :-------: | :---------------------------------------------------------- | :---------------: |
| `/api/composants/create`              |  `POST`   | Crée un composant                                           | [:mag:](./routes) |
| `/api/composants/createformodule/:id` |  `POST`   | Crée un composant pour un [module](#modules-api) spécifique | [:mag:](./routes) |
| `/api/composants/`                    |   `GET`   | Récupère tous les composants                                | [:mag:](./routes) |
| `pas encore implémenté`               |  `PATCH`  | Met à jour un composant                                     | [:mag:](./routes) |
| `pas encore implémenté`               | `DELETE`  | Supprime un composant                                       | [:mag:](./routes) |


