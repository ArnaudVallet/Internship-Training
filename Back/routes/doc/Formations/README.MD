Exemples d'utilisation des routes d'authentification
- [`/api/formations/uploadimage`](#apiformationsuploadimage)
- [`/api/formations/create`](#apiformationscreate)

<hr />
<br />

### `/api/formations/uploadimage`
:arrow_forward: *body*
```javascript
const data = { file }
```
:ballot_box_with_check: *req*
```javascript
const uploadImage = async(token, data) => {
  const config = {
    headers: {
      'Authorization': 'Bearer ' + token
      'content-type': 'multipart/form-data'
    }
  }
  const res = await axios.post('http://localhost:3000/api/formations/uploadimage', data, config );
};
```
:white_check_mark: *res*
```javascript
{
  success: true,
  filename: file.filename,
  url: file.path
}
```
<hr />
<br />

### `/api/formations/create`
:arrow_forward: *body*
```javascript
const data = { file, data }
```
:ballot_box_with_check: *req*
```javascript
const create = async(token, data) => {
  const config = {
    headers: {
      'Authorization': 'Bearer ' + token
      'content-type': 'multipart/form-data'
    }
  }
  const res = await axios.post('http://localhost:3000/api/formations/uploadimage', data, config );
};
```
:white_check_mark: *res*
```javascript
{
  success: true,
  formation: {
      image: {
          path: String,
          filename: String
      },
      modules: [],
      published: false,
      _id: String,
      titre: String,
      description: String,
      niveau: String,
      createdAt: Date,
      updatedAt: Date,
      __v: 0
  }
}
```

