# Exemples d'utilisation des routes de modules <!-- omit in toc --> 
- [`/api/modules/create`](#apimodulescreate)
- [`/api/modules/createforformation/:id`](#apimodulescreateforformationid)
- [`/api/modules/`](#apimodules)
- [`/api/modules/getonebyid/:id`](#apimodulesgetonebyidid)
- [`/api/modules/:module_id/addonecomposant/:composant_id`](#apimodulesmodule_idaddonecomposantcomposant_id)

<hr />
<br />

### `/api/modules/create`
:arrow_forward: *body*
```javascript
const data = { 
  titre: String,
}
```
:ballot_box_with_check: *req*
```javascript
const createModule = async(token, data) => {
  const config = {
    headers: {
      'Authorization': 'Bearer ' + token
      'content-type': 'application/json'
    }
  }
  const res = await axios.post('http://localhost:3000/api/modules/create', data, config );
};
```
:white_check_mark: *res*
```javascript
{
  success: true,
  module: {
    composants: [],
    _id: String,
    titre: String,
    __v: 0
  }
}
```
<hr />
<br />

### `/api/modules/createforformation/:id`
:arrow_forward: *body*
```javascript
const data = { 
  titre: String,
}
```
:ballot_box_with_check: *req*
```javascript
const createModuleForFormation = async(token, formation_id, data) => {
  const config = {
    headers: {
      'Authorization': 'Bearer ' + token
      'content-type': 'application/json'
    }
  }
  const res = await axios.post(`http://localhost:3000/api/modules/createforformation/${formation_id}`, data, config );
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
      // ...les modules créés sont ajoutés ici
    ],
    published: Boolean,
    _id: String,
    titre: String,
    description: String,
    niveau: String,
    __v: 1,
    createdAt: Date,
    updatedAt: Date
  }
}
```
<hr />
<br />

### `/api/modules/`
:ballot_box_with_check: *req*
```javascript
const getAllModules = async(token) => {
  const config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  const res = await axios.get(`http://localhost:3000/api/modules/`, config );
};
```
:white_check_mark: *res*
```javascript
{
  success: true,
  modules: [
    {
      composants: [
        String,
        // ...autres composants
      ],
      _id: String,
      titre: String,
      __v: 0
    },
    // ...autres modules
  ]
}
```
<hr />
<br />

### `/api/modules/getonebyid/:id`
:ballot_box_with_check: *req*
```javascript
const getOneModuleById = async(token, id) => {
  const config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  const res = await axios.get(`http://localhost:3000/api/modules/getonebyid/${id}`, config );
};
```
:white_check_mark: *res*
```javascript
{
  success: true,
  module: {
    composants: [
      String,
      // ...autres composants
    ],
    _id: String,
    titre: String,
    __v: 1
  }
}
```
<hr />
<br />

### `/api/modules/:module_id/addonecomposant/:composant_id`
:ballot_box_with_check: *req*
```javascript
const addExistingComposantToModule = async(token) => {
  const config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  const res = await axios.patch(`http://localhost:3000/api/modules/${module_id}/addonecomposant/${composant_id}`, config );
};
```
:white_check_mark: *res*
```javascript
{
  success: true,
  module: {
    composants: [
      String,
      // ...les composants créés sont ajoutés ici
    ],
    _id: String,
    titre: String,
    __v: 3
  }
}
```
