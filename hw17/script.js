const gradation = {
  20: "satisfactory",
  55: "good",
  85: "very-good",
  100: "excellent"
};

const users = [
  {
    name: "Jack Smith",
    age: 23,
    image: "JackSmith",
    role: "student",
    courses: [
      {
        "title": "Front-end Pro",
        "mark": 20
      },
      {
        "title": "Java Enterprise",
        "mark": 100
      }
    ]
  },
  {
    name: "Amal Smith",
    age: 20,
    image: "AmalSmith",
    role: "student"
  },
  {
    name: "Noah Smith",
    age: 43,
    image: "NoahSmith",
    role: "student",
    courses: [
      {
        "title": "Front-end Pro",
        "mark": 50
      }
    ]
  },
  {
    name: "Charlie Smith",
    age: 18,
    image: "CharlieSmith",
    role: "student",
    courses: [
      {
        "title": "Front-end Pro",
        "mark": 75
      },
      {
        "title": "Java Enterprise",
        "mark": 23
      }]
  },
  {
    name: "Emily Smith",
    age: 30,
    image: "EmilySmith",
    role: "admin",
    courses: [
      {
        "title": "Front-end Pro",
        "score": 10,
        "lector": "Leo Smith"
      },
      {
        "title": "Java Enterprise",
        "score": 50,
        "lector": "David Smith"
      },
      {
        "title": "QA",
        "score": 75,
        "lector": "Emilie Smith"
      }]
  },
  {
    name: "Leo Smith",
    age: 25,
    image: "LeoSmith",
    role: "lector",
    courses: [
      {
        "title": "Front-end Pro",
        "score": 78,
        "studentsScore": 79
      },
      {
        "title": "Java Enterprise",
        "score": 85,
        "studentsScore": 85
      }
    ]
  }
];

function defineClass(mark) {
  if (mark >= 10 && mark <= 20) return "satisfactory";
  if (mark > 20 && mark <= 55) return "good";
  if (mark > 55 && mark <= 85) return "very-good";
  if (mark > 85 && mark <= 100) return "excellent";
  return "";
}

class User {
  constructor(user) {
    this.name = user.name;
    this.age = user.age;
    this.image = user.image;
    this.role = user.role;
    this.courses = user.courses ? user.courses : [];
  }

  getUserCoursesClass() {
    return "user__courses";
  }

  render() {
    return `
    <div class="user">
        <div class="user__info">
            <div class="user__info--data">
                <image src="images/users/${this.image}.png" alt="${this.name}" height="50">
                <div class="user__naming">
                    <p>Name: <b>${this.name}</b></p>
                    <p>Age: <b>${this.age}</b></p>
                </div>
            </div>
            <div class="user__info--role ${this.role}">
                <image src="images/roles/${this.role}.png" alt="${this.role}" height="25">
                <p>${this.role}</p>
            </div>
        </div>
        <div class="${this.getUserCoursesClass()}">
            ${this.renderCourses()}
        </div>
    </div>`;
  }

  renderCourses() {
    return this.courses.map(course => {
      let score = course.mark ? course.mark : course.score;
      let scoreClass = defineClass(score);
      return `
        <p class="user__courses--course ${this.role}">
            ${course.title} <span class="${scoreClass}">${scoreClass}</span>
        </p>`;
    }).join('');
  }
}

class Student extends User { }

class Lector extends User {
  getUserCoursesClass() {
    return "user__courses admin--info";
  }

  renderCourses() {
    return this.courses.map(course => {
      let lectorScoreClass = defineClass(course.score);
      let studentScoreClass = defineClass(course.studentsScore);
      return `
          <div class="user__courses--course lector">
              <p>Title: <b>${course.title}</b></p>
              <p>Lector's score: <span class="${lectorScoreClass}">${lectorScoreClass}</span></p>
              <p>Average student's score: <span class="${studentScoreClass}">${studentScoreClass}</span></p>
          </div>`;
    }).join('');
  }
}

class Admin extends User {
  getUserCoursesClass() {
    return "user__courses admin--info";
  }

  renderCourses() {
    return this.courses.map(course => {
      let adminScoreClass = defineClass(course.score);
      return `
          <div class="user__courses--course admin">
              <p>Title: <b>${course.title}</b></p>
              <p>Admin's score: <span class="${adminScoreClass}">${adminScoreClass}</span></p>
              <p>Lector: <b>${course.lector}</b></p>
          </div>`;
    }).join('');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const usersContainer = document.querySelector('.users');
  const USER_CLASSES = {
    'student': Student,
    'lector': Lector,
    'admin': Admin
  };

  users.forEach(userData => {
    const UserClass = USER_CLASSES[userData.role];
    const userInstance = new UserClass(userData);
    usersContainer.innerHTML += userInstance.render();
  });
});
