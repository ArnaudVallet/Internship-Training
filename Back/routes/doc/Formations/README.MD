# Exemples d'utilisation des routes d'authentification <!-- omit in toc --> 
- [`/api/formations/uploadimage`](#apiformationsuploadimage)
- [`/api/formations/create`](#apiformationscreate)
- [`/api/formations/createwithbigobject`](#apiformationscreatewithbigobject)
- [`/api/formations/`](#apiformations)
- [`/api/formations/withpopulate`](#apiformationswithpopulate)

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
const data = { 
  file, 
  data: {
    titre: String,
    description: String,
    niveau: String,
  }
}
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
  const res = await axios.post('http://localhost:3000/api/formations/create', data, config );
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
<hr />
<br />

### `/api/formations/createwithbigobject`
:arrow_forward: *body*
```javascript
const data = { 
  file, 
  data: {
    titre: String,
    description: String,
    niveau: String,
    published: true,
    modules: [
      {
        titre: String,
        composants: [
          { titre: String, type: String, quiz: Object, video: Object, article: Object },
          // ...autres composants
        ]
      },
      // ...autres modules
    ]
  }
}
```
:ballot_box_with_check: *req*
```javascript
const createwithbigobject = async(token, data) => {
  const config = {
    headers: {
      'Authorization': 'Bearer ' + token
      'content-type': 'multipart/form-data'
    }
  }
  const res = await axios.post('http://localhost:3000/api/formations/createwithbigobject', data, config );
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
      modules: [
        String,
        // ...autres modules
      ],
      published: true,
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

<hr />
<br />

### `/api/formations/`

:ballot_box_with_check: *req*
```javascript
const getAllFormations = async(token) => {
  const config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  const res = await axios.get('http://localhost:3000/api/formations/', config );
};
```
:white_check_mark: *res*
```javascript
{
  success: true,
  formations: [
    {
      image: {
          path: String,
          filename: String
      },
      modules: [
        String,
        // ... autres modules
      ],
      published: false,
      _id: String,
      titre: String,
      description: String,
      niveau: String,
      __v: 1,
      createdAt: Date,
      updatedAt: Date
    },
    // ...autres formations
  ]
}
```
<hr />
<br />

### `/api/formations/withpopulate`

:ballot_box_with_check: *req*
```javascript
const getAllFormations = async(token) => {
  const config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  const res = await axios.get('http://localhost:3000/api/formations/withpopulate', config );
};
```
:white_check_mark: *res*
```javascript
{
  success: true,
  formations: [
    {
      image: {
        path: String,
        filename: String
      },
      modules: [
        {
          composants: [
            {
              _id: String,
              type: String,
              video: {
                _id: String,
                url: String,
                titre: String
              },
              __v: 0
            },
            // ...autres composants
          ],
          _id: String,
          titre: String,
          __v: 0
        },
        // ...autres modules
      ],
      published: false,
      _id: String,
      titre: String,
      description: String,
      niveau: String,
      __v: 0,
      createdAt: Date,
      updatedAt: Date
    },
    // ...autres formations
  ]
}
```