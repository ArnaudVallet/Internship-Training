Exemples d'utilisation des routes d'authentification
- [`/api/auth/register`](#apiauthregister)
- [`/api/auth/login`](#apiauthlogin)
- [`/api/auth/forgotpassword`](#apiauthforgotpassword)
- [`/api/auth/resetpassword`](#apiauthresetpassword)

### `/api/auth/register`
:arrow_forward: *body*
```javascript
const data = { email: String, password: String, username: String }
```
:ballot_box_with_check: *req*
```javascript
const register = async(data) => {
  const res = await axios.post('http://localhost:3000/api/auth/register', { data })
}
```
:white_check_mark: *res*
```javascript
{
  success: true,
  token: 'a.JWT.token',
  username: String,
  email: String,
  isAdmin: false
}
```
<hr />
<br />

### `/api/auth/login`
:arrow_forward: *body*
```javascript
const data = { email: String, password: String }
```
:ballot_box_with_check: *req*
```javascript
axios.post('http://localhost:3000/api/auth/login', {
  data
})
```
:white_check_mark: *res*
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
:arrow_forward: *body*
```javascript
const data = { email: String }
```
:ballot_box_with_check: *req*
```javascript
axios.post('http://localhost:3000/api/auth/forgotpassword', {
  data
})
```
:white_check_mark: *res*
```javascript
{
  success: true,
  data: "Email envoyé"
}
```

### `/api/auth/resetpassword`
:arrow_forward: *body*
```javascript
const data = { email: String }
```
:ballot_box_with_check: *req*
```javascript
axios.put('http://localhost:3000/api/auth/resetpassword/:resetToken')
```
:white_check_mark: *res*
```javascript
{
  success: true,
  data: 'Mot de passe réinitialisé'
}
```