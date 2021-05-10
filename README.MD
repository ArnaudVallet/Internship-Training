DOCUMENTATION

- [SERVER](#server)
  - [Auth API](#auth-api)
- [CLIENT](#client)

# SERVER

## Auth API
| Route                      | HTTP Verb | Description                                                   |     Exemples      |
| :------------------------- | :-------: | :------------------------------------------------------------ | :---------------: |
| `/api/auth//register`      |  `POST`   | S'enregistrer et récupérer un token JWT                       | [:mag:](./Back/routes) |
| `/api/auth/login`          |  `POST`   | Se connecter et récupérer un token JWT                        | [:mag:](#) |
| `/api/auth/forgotpassword` |  `POST`   | Obtenir un lien de réinitialisation de mot de passe par email | [:mag:](#) |
| `/api/auth/resetpassword`  |  `POST`   | Changer le mot de passe de en BDD                             | [:mag:](#) |


# CLIENT

| Route | Description |
| :---- | :---------- |
| `/`   | Home Page   |


```javascript
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```
