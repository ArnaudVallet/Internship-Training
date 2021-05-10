- [SERVER](#server)
  - [Auth API](#auth-api)
- [CLIENT](#client)

# SERVER

## Auth API
| Route                                   | HTTP Verb | Description                       | Exemples |
| :-------------------------------------- | :-------: | :-------------------------------- | :---: |
| `/api/courses/sampleCourses`            |   `GET`   | Show random Courses               | [Voir](#)
| `/api/courses/getAllCourses`            |   `GET`   | Show all Courses                  |```javascript require 'redcarpet'markdown = Redcarpet.new("Hello World!")puts markdown.to_html``` |
| `/api/courses/getTeacherCourses/:id`    |   `GET`   | Show all Teacher Courses          |
| `/api/courses/getOneCourse/:id`         |   `GET`   | Show one Course                   |
| `/api/courses/newCourse`                |  `POST`   | Create new Course                 |
| `/api/courses/editCourse/:id`           |   `PUT`   | Edit Course                       |
| `/api/courses/deleteCourse/:id`         | `DELETE`  | Delete Course                     |
| `/api/courses/deleteTeacherCourses/:id` | `DELETE`  | Delete Courses created by Teacher |


# CLIENT

|   Route   |   Description   |
| :--- | :--- |
| `/` | Home Page |
| `/courses` | Show All Courses |
| `/courses/:course_id` | Show One Course |
| `/teachers` | Show All Teachers |
| `/teachers/:teacher_id` | Show Teacher Details |
| `/signup` | Show Signup Form |
| `/profile` | Show User Profile |
| `/profile/edit-user` | Show Edit Form |
| `/profile/create-teacher` | Show Create Teacher Profile Form |
| `/profile-teacher/edit-teacher` | Show Edit Teacher Form |
| `/profile-teacher/create-course` | Show Create Course Form |
| `/profile-teacher/edit-course/:course_id` | Show Edit Course Form |


```javascript
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```
