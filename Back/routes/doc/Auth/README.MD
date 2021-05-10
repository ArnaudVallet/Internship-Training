# Exemples d'utilisation des routes d'authentification
- [Exemples d'utilisation des routes d'authentification](#exemples-dutilisation-des-routes-dauthentification)
    - [`/api/auth/register`](#apiauthregister)

### `/api/auth/register`
```javascript
// req.body
const data = { email: String, password: String, username: String }
```
```javascript
// code
axios.post('http://localhost:3000/api/auth/register', {
  data
})
```
```javascript
// res
{
  success: true,
  token: 'a.JWT.token',
  username: String,
  email: String,
  isAdmin: false
}
```
