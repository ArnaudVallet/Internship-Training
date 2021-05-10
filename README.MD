DOCUMENTATION

- [SERVER](#server)
  - [Auth API](#auth-api)
  - [Formations API](#formations-api)
      - [CREATE - formations](#create---formations)
      - [READ - formations](#read---formations)
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

#### CREATE - formations
| Route                                 | HTTP Verb | Description                                                                                                                                         |        Exemples        |
| :------------------------------------ | :-------: | :-------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------: |
| `/api/formations/uploadimage`         |  `POST`   | Upload an image to the `/images/formation` folder                                                                                                   | [:mag:](./Back/routes) |
| `/api/formations/create`              |  `POST`   | Enregistre l'image de la formation puis la crée sans [modules](#modules-api)                                                                        | [:mag:](./Back/routes) |
| `/api/formations/createwithbigobject` |  `POST`   | Enregistre l'image de la formation puis la crée intégralement la formation en insérant ses [modules](#modules-api) et [composants](#composants-api) | [:mag:](./Back/routes) |

####  READ - formations
| Route                                        | HTTP Verb | Description                                                                                                             |        Exemples        |
| :------------------------------------------- | :-------: | :---------------------------------------------------------------------------------------------------------------------- | :--------------------: |
| `/api/formations/`                           |   `GET`   | Récupère toutes les formations non populées                                                                             | [:mag:](./Back/routes) |
| `/api/formations/withpopulate`               |   `GET`   | Récupère toutes les formations populées de leurs [modules](#modules-api) et [composants](#composants-api)               | [:mag:](./Back/routes) |
| `/api/formations/getonebyid/:id`             |   `GET`   | Récupère une formation non populée par son `id`                                                                         | [:mag:](./Back/routes) |
| `/api/formations/getonebyidwithpopulate/:id` |   `GET`   | Récupère une formation populée de ses [modules](#modules-api) et ses [composants](#composants-api) par son `id`         | [:mag:](./Back/routes) |
| `/api/formations/publishedwithpopulate`      |   `GET`   | Récupère uniquement les formations publiées, populées de leurs [modules](#modules-api) et [composants](#composants-api) | [:mag:](./Back/routes) |

# CLIENT

| Route | Description |
| :---- | :---------- |
| `/`   | Home Page   |


```javascript
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```
