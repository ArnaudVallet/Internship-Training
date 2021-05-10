- [Références API](#références-api)
  - [AuthController](#authcontroller)

# Références API

## AuthController
| Route                                   | HTTP Verb | Description                       |
| :-------------------------------------- | :-------: | :-------------------------------- |
| `/api/courses/sampleCourses`            |   `GET`   | Show random Courses               |
| `/api/courses/getAllCourses`            |   `GET`   | Show all Courses                  |
| `/api/courses/getTeacherCourses/:id`    |   `GET`   | Show all Teacher Courses          |
| `/api/courses/getOneCourse/:id`         |   `GET`   | Show one Course                   |
| `/api/courses/newCourse`                |  `POST`   | Create new Course                 |
| `/api/courses/editCourse/:id`           |   `PUT`   | Edit Course                       |
| `/api/courses/deleteCourse/:id`         | `DELETE`  | Delete Course                     |
| `/api/courses/deleteTeacherCourses/:id` | `DELETE`  | Delete Courses created by Teacher |

```javascript
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

