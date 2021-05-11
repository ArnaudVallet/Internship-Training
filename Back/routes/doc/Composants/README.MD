# Exemples d'utilisation des routes de composants <!-- omit in toc --> 
- [`/api/composants/create`](#apicomposantscreate)
- [`/api/composants/createformodule/:id`](#apicomposantscreateformoduleid)
- [`/api/composants/`](#apicomposants)

<hr />
<br />

### `/api/composants/create`
:arrow_forward: *body*
```javascript
const data = { 
  titre: String,
  // Choisir entre
  vidéo: { titre: String, url: String }
  // ou
  quiz: { nom: String, description: String, obligatoire: Boolean, questions: [
    { 
      question: String, nbBonnesRéponses: Number,
      réponse1: { text: String, correct: Boolean },
      réponse2: { text: String, correct: Boolean },
      réponse3: { text: String, correct: Boolean },
      réponse4: { text: String, correct: Boolean }
    }]
  }
  // ou
  article: {
    titre: String
  }
}
```
:ballot_box_with_check: *req*
```javascript
const createComposant = async(token, data) => {
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
  composant: {
    _id: String,
    type: String,
    vidéo: {
      _id: String,
      url: String,
      titre: String
    },
    __v: 0
  }
}
```
<hr />
<br />

### `/api/composants/createformodule/:id`
:arrow_forward: *body*
```javascript
const data = { 
  titre: String,
  // Choisir entre
  vidéo: { titre: String, url: String }
  // ou
  quiz: { nom: String, description: String, obligatoire: Boolean, questions: [
    { 
      question: String, nbBonnesRéponses: Number,
      réponse1: { text: String, correct: Boolean },
      réponse2: { text: String, correct: Boolean },
      réponse3: { text: String, correct: Boolean },
      réponse4: { text: String, correct: Boolean }
    }]
  }
  // ou
  article: {
    titre: String
  }
}
```
:ballot_box_with_check: *req*
```javascript
const createComposantForModule = async(token, module_id, data) => {
  const config = {
    headers: {
      'Authorization': 'Bearer ' + token
      'content-type': 'application/json'
    }
  }
  const res = await axios.post(`http://localhost:3000/api/composants/createformodule/${module_id}`, data, config );
};
```
:white_check_mark: *res*
```javascript
{
  success: true,
  module: {
    composants: [
      String,
      // ...L'id du composant créé est ajouté ici
    ],
    _id: String,
    titre: String,
    __v: 1
  }
}
```
<hr />
<br />

### `/api/composants/`
:ballot_box_with_check: *req*
```javascript
const getAllComposants = async(token) => {
  const config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  const res = await axios.get(`http://localhost:3000/api/composants/`, config );
};
```
:white_check_mark: *res*
```javascript
{
  success: true,
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
  ]
}
```
