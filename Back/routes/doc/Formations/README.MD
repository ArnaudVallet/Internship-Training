# Exemples d'utilisation des routes de formations <!-- omit in toc --> 
- [`/api/formations/uploadimage`](#apiformationsuploadimage)
- [`/api/formations/create`](#apiformationscreate)
- [`/api/formations/createwithbigobject`](#apiformationscreatewithbigobject)
- [`/api/formations/`](#apiformations)
- [`/api/formations/withpopulate`](#apiformationswithpopulate)
- [`/api/formations/getonebyid/:id`](#apiformationsgetonebyidid)
- [`/api/formations/getonebyidwithpopulate/:id`](#apiformationsgetonebyidwithpopulateid)
- [`/api/formations/publishedwithpopulate`](#apiformationspublishedwithpopulate)
- [`/api/formations/:id/setpublished`](#apiformationsidsetpublished)
- [`/api/formations/:formation_id/addonemodule/:module_id`](#apiformationsformation_idaddonemodulemodule_id)
- [`/api/formations/delete/:id`](#apiformationsdeleteid)

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
  filename: String,
  url: String
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
      published: Boolean,
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
    published: Boolean,
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
      published: Boolean,
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
      published: Boolean,
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
const getAllFormationsWithPopulate = async(token) => {
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
      published: Boolean,
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
<hr />
<br />

### `/api/formations/getonebyid/:id`

:ballot_box_with_check: *req*
```javascript
const getOneFormationById = async(token, id) => {
  const config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  const res = await axios.get(`http://localhost:3000/api/formations/getonebyid/${id}`, config );
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
    published: Boolean,
    _id: String,
    titre: String,
    description: String,
    niveau: String,
    __v: 0,
    createdAt: Date,
    updatedAt: Date
  }
}
```
<hr />
<br />

### `/api/formations/getonebyidwithpopulate/:id`

:ballot_box_with_check: *req*
```javascript
const getOneFormationByIdWithPopulate = async(token, id) => {
  const config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  const res = await axios.get(`http://localhost:3000/api/formations/getonebyidwithpopulate/${id}`, config );
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
    published: Boolean,
    _id: String,
    titre: String,
    description: String,
    niveau: String,
    __v: 0,
    createdAt: Date,
    updatedAt: Date
  }
}
```
<hr />
<br />

### `/api/formations/publishedwithpopulate`

:ballot_box_with_check: *req*
```javascript
const getPublishedWithPopulate = async(token) => {
  const config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  const res = await axios.get(`http://localhost:3000/api/formations/publishedwithpopulate`, config );
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
              }
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
      published: Boolean,
      _id: String,
      titre: String,
      description: String,
      niveau: String,
      __v: 0
    },
    // ...autres formations
  ]
}
```
<hr />
<br />

### `/api/formations/:id/setpublished`

:ballot_box_with_check: *req*
```javascript
const setFormationPublish = async(token, id) => {
  const config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  const res = await axios.patch(`http://localhost:3000/api/formations/${id}/setpublished`, config );
};
```
:white_check_mark: *res*
```javascript
{
  success: true,
  message: "Formation correctement mise à jour",
  formation: {
    image: {
      path: String,
      filename: String
    },
    modules: [
      String,
      // ...autres modules
    ],
    published: Boolean,
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
### `/api/formations/:formation_id/addonemodule/:module_id`

:ballot_box_with_check: *req*
```javascript
const addExistingModuleToFormation = async(token, formation_id, module_id) => {
  const config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  const res = await axios.patch(`http://localhost:3000/api/formations/${formation_id}/addonemodule/${module_id}`, config );
};
```
:white_check_mark: *res*
```javascript
{
  image: {
    path: String,
    filename: String
  },
  modules: [
    String,
    String
  ],
  published: Boolean,
  _id: String,
  titre: String,
  description: String,
  niveau: String,
  __v: 0,
  createdAt: Date,
  updatedAt: Date
}
```
### `/api/formations/delete/:id`

:ballot_box_with_check: *req*
```javascript
const deleteOneFormation = async(token, id) => {
  const config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  const res = await axios.delete(`http://localhost:3000/api/formations/delete/${id}`, config );
};
```
:white_check_mark: *res*
```javascript
{
  success: true,
  deleted: String
}
```