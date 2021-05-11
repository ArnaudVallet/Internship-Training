Exemples d'utilisation des routes d'authentification
- [`/api/auth/register`](#apiauthregister)
- [`/api/auth/login`](#apiauthlogin)
- [`/api/auth/forgotpassword`](#apiauthforgotpassword)
- [`/api/auth/resetpassword/:resetToken`](#apiauthresetpasswordresettoken)

<hr />
<br />

### `/api/auth/register`
:arrow_forward: *body*
```javascript
const data = { email: String, password: String, username: String }
```
:ballot_box_with_check: *req*
```javascript
const register = async(data) => {
  const res = await axios.post('http://localhost:3000/api/auth/register', data );
};
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
const login = async(data) => {
  const res = await axios.post('http://localhost:3000/api/auth/login', data );
};

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

### `/api/auth/forgotpassword`
:arrow_forward: *body*
```javascript
const data = { email: String }
```
:ballot_box_with_check: *req*
```javascript
const forgotpassword = async(data) => {
  const res = await axios.post('http://localhost:3000/api/auth/forgotpassword', data );
};
```
:white_check_mark: *res*
```javascript
{
  success: true,
  data: "Email envoyé"
}
```
<hr />
<br />

### `/api/auth/resetpassword/:resetToken`
:arrow_forward: *body + params*
```javascript
// body
const data = { password: String }

// :resetToken est envoyé via le mail que reçoit l'utilisateur pour réinitialiser son mot de passe
```
:ballot_box_with_check: *req*
```javascript
const reserpassword = async() => {
  const res = await axios.put('http://localhost:3000/api/auth/resetpassword/:resetToken', data);
};
```
:white_check_mark: *res*
```javascript
{
  success: true,
  data: 'Mot de passe réinitialisé'
}
```