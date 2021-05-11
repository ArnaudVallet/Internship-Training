# Exemples d'utilisation des routes d'authentification
- [Exemples d'utilisation des routes d'authentification](#exemples-dutilisation-des-routes-dauthentification)
    - [`/api/auth/register`](#apiauthregister)
    - [`/api/auth/login`](#apiauthlogin)
    - [`/api/auth/forgotpassword`](#apiauthforgotpassword)
    - [`/api/auth/resetpassword`](#apiauthresetpassword)

### `/api/auth/register`
:ballot_box_with_check: req
```javascript
const data = { email: String, password: String, username: String }
```
:arrow_forward: Code
```javascript
const login = async(data) => {
  const res = await axios.post('http://localhost:3000/api/auth/register', { data })
}

```
:white_check_mark: res
```javascript
{
  success: true,
  token: 'a.JWT.token',
  username: String,
  email: String,
  isAdmin: false
}
```

### `/api/auth/login`
:ballot_box_with_check: req
```javascript
const data = { email: String, password: String }
```
:arrow_forward: Code
```javascript
axios.post('http://localhost:3000/api/auth/login', {
  data
})
```
:white_check_mark: res
```javascript
{
  success: true,
  token: 'a.JWT.token',
  username: String,
  email: String,
  isAdmin: false
}
```

### `/api/auth/forgotpassword`
:ballot_box_with_check: req
```javascript
const data = { email: String }
```
:arrow_forward: Code
```javascript
axios.post('http://localhost:3000/api/auth/forgotpassword', {
  data
})
```
:white_check_mark: res
```javascript
{
  success: true,
  data: "Email envoyé"
}
```

### `/api/auth/resetpassword`
:ballot_box_with_check: req
```javascript
const data = { email: String }
```
:arrow_forward: Code
```javascript
axios.put('http://localhost:3000/api/auth/resetpassword/:resetToken')
```
:white_check_mark: res
```javascript
{
  success: true,
  data: 'Mot de passe réinitialisé'
}
```