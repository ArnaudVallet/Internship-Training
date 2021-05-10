DOCUMENTATION

- [SERVER](#server)
  - [Auth API](#auth-api)
  - [Formations API](#formations-api)
  - [Modules API](#modules-api)
  - [Composants API](#composants-api)
      - [CREATE - composants](#create---composants)
- [CLIENT](#client)

# SERVER

## Auth API
| Route                      | HTTP Verb | Description                                                   |        Exemples        |
| :------------------------- | :-------: | :------------------------------------------------------------ | :--------------------: |
| `/api/auth//register`      |  `POST`   | S'enregistrer et récupérer un token JWT                       | [:mag:](./Back/routes) |
| `/api/auth/login`          |  `POST`   | Se connecter et récupérer un token JWT                        | [:mag:](./Back/routes) |
| `/api/auth/forgotpassword` |  `POST`   | Obtenir un lien de réinitialisation de mot de passe par email | [:mag:](./Back/routes) |
| `/api/auth/resetpassword`  |  `POST`   | Changer le mot de passe de en BDD                             | [:mag:](./Back/routes) |

## Formations API

| Route                                                   | HTTP Verb | Description                                                                                                                                         |        Exemples        |
| :------------------------------------------------------ | :-------: | :-------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------: |
| `/api/formations/uploadimage`                           |  `POST`   | Upload une image dans le dossier `/images/formation`                                                                                                | [:mag:](./Back/routes) |
| `/api/formations/create`                                |  `POST`   | Enregistre l'image de la formation puis la crée sans [modules](#modules-api)                                                                        | [:mag:](./Back/routes) |
| `/api/formations/createwithbigobject`                   |  `POST`   | Enregistre l'image de la formation puis la crée intégralement la formation en insérant ses [modules](#modules-api) et [composants](#composants-api) | [:mag:](./Back/routes) |
| `/api/formations/`                                      |   `GET`   | Récupère toutes les formations non populées                                                                                                         | [:mag:](./Back/routes) |
| `/api/formations/withpopulate`                          |   `GET`   | Récupère toutes les formations populées de leurs [modules](#modules-api) et [composants](#composants-api)                                           | [:mag:](./Back/routes) |
| `/api/formations/getonebyid/:id`                        |   `GET`   | Récupère une formation non populée par son `id`                                                                                                     | [:mag:](./Back/routes) |
| `/api/formations/getonebyidwithpopulate/:id`            |   `GET`   | Récupère une formation populée de ses [modules](#modules-api) et ses [composants](#composants-api) par son `id`                                     | [:mag:](./Back/routes) |
| `/api/formations/publishedwithpopulate`                 |   `GET`   | Récupère uniquement les formations publiées, populées de leurs [modules](#modules-api) et [composants](#composants-api)                             | [:mag:](./Back/routes) |
| `/api/formations/:id/setpublished`                      |  `PATCH`  | Change le statut de publication d'une formation à son inverse                                                                                       | [:mag:](./Back/routes) |
| `/api/formations/:formation_id/addonemodule/:module_id` |  `PATCH`  | Ajoute un [modules](#modules-api) à la formation dans son tableau de modules                                                                        | [:mag:](./Back/routes) |
| `/api/formations/delete/:id`                            | `DELETE`  | Supprime une formation                                                                                                                              | [:mag:](./Back/routes) |

## Modules API

| Route                                                   | HTTP Verb | Description                                                                     |        Exemples        |
| :------------------------------------------------------ | :-------: | :------------------------------------------------------------------------------ | :--------------------: |
| `/api/modules/create`                                   |  `POST`   | Crée un module                                                                  | [:mag:](./Back/routes) |
| `/api/modules/createforformation/:id`                   |  `POST`   | Crée un module pour une [formation](#formations-api) spécifique                 | [:mag:](./Back/routes) |
| `/api/modules/`                                         |   `GET`   | Récupère tous les modules non populés                                           | [:mag:](./Back/routes) |
| `/api/modules/getonebyid/:id`                           |   `GET`   | Récupère un module non populée par son `id`                                     | [:mag:](./Back/routes) |
| `/api/modules/:module_id/addonecomposant/:composant_id` |  `PATCH`  | Ajoute un [composant](#composants-api) au module dans son tableau de composants | [:mag:](./Back/routes) |
| `pas encore implémenté`                                 | `DELETE`  | Supprime un module                                                              | [:mag:](./Back/routes) |

## Composants API

#### CREATE - composants
| Route                                 | HTTP Verb | Description                                                 |        Exemples        |
| :------------------------------------ | :-------: | :---------------------------------------------------------- | :--------------------: |
| `/api/composants/create`              |  `POST`   | Crée un composant                                           | [:mag:](./Back/routes) |
| `/api/composants/createformodule/:id` |  `POST`   | Crée un composant pour un [module](#modules-api) spécifique | [:mag:](./Back/routes) |
| `/api/composants/`                    |   `GET`   | Récupère tous les composants                                | [:mag:](./Back/routes) |
| `pas encore implémenté`               |  `PATCH`  | Met à jour un composant                                     | [:mag:](./Back/routes) |
| `pas encore implémenté`               | `DELETE`  | Supprime un composant                                       | [:mag:](./Back/routes) |


# CLIENT

| Route | Description |
| :---- | :---------- |
| `/`   | Home Page   |


```javascript
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```