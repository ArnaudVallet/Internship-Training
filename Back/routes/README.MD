# Exemples d'utilisation de toutes les routes

| Code                  |  req   | res                                     |
| :-------------------- | :----: | :-------------------------------------- |
| 
```javascript
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```
 | `POST` | S'enregistrer et récupérer un token JWT |