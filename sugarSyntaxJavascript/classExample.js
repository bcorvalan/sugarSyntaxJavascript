/*

Las clases de javascript, introducidas en ECMAScript 2015, son una mejora sintáctica sobre la herencia basada en prototipos de JavaScript. La sintaxis de las clases no introduce un nuevo modelo de herencia orientada a objetos en JavaScript. Las clases de JavaScript proveen una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia.
Más informacion : 
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes

*/

class User {
    constructor(username) {
      this.username = username;
      this.role = "standard";
    }
  
    static permissions() {
      return {
        read: true,
        write: false
      };
    }
  
    setUsername(username) {
      this.username = username;
    }
  
    getUsername() {
      return this.username;
    }
  
    getRole() {
      return this.role;
    }
  }
  
  class Admin extends User {
    constructor(username) {
      super(username);
      this.role = "admin";
    }
  
    static permissions() {
      return {
        read: true,
        write: true
      };
    }
  
    fireUser(username) {
      return `${username} has been fired!`;
    }
  }
  
  /*
  La palabra reservada  "extends" hereda todo del padre(User)
  
  */
  
  //Previamente a ES6
  
  function User(username) {
    this.username = username;
    this.role = "standard";
  }
  
  User.prototype.setUsername = function (username) {
    this.username = username;
  };
  
  User.prototype.getUsername = function () {
    return this.username;
  };
  
  User.prototype.getRole = function () {
    return this.role;
  };
  
  // if we wanted to create static methods, this is how we would write them
  User.permissions = function () {
    return {
      read: true,
      write: false
    };
  };
  
  function Admin(username) {
    User.call(this, username); // this is like calling super()
    this.role = "admin";
  }
  
  Admin.prototype = Object.create(User.prototype); // this is making it so the Admin prototype extends the User prototype
  // We're basically saying
  
  // Object.setPrototypeOf(Admin, User.prototype); // There are a few other ways that you can set the prototype of an object, including use of the setPrototypeOf function. However, use of this is generally discouraged due to possible performance issues, so it is best to just stick with method we have used
  
  Admin.prototype.fireUser = function (username) {
    return `${username} has been fired!`;
  };
  
  Admin.permissions = function () {
    return {
      read: true,
      write: true
    };
  };
  