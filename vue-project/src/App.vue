<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid" id="navbar">
      <a class="navbar-brand logo" href="#">CFC/BOL</a>
      <div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Create
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Clients</a></li>
                <li><a class="dropdown-item" href="#">Volunteers</a></li>
                <li><a class="dropdown-item" href="#">Events</a></li>
                <li></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                View
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Clients</a></li>
                <li><a class="dropdown-item" href="#">Volunteers</a></li>
                <li><a class="dropdown-item" href="#">Events</a></li>
                <li><a class="dropdown-item" href="#">Employees</a></li>
                <li><a class="dropdown-item" href="#">Services</a></li>
                <li></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link">About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@import "./assets/base.css";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Roboto&display=swap");
body {
}
#app {
  max-width: 1280px;
  margin: 0 auto;

  font-weight: normal;
}
nav {
  font-size: 1.1em;
  padding: 20px;
  font-family: "Roboto", sans-serif !important;
}
a:hover {
  font-size: 20px;
  padding-bottom: 0px;
}
.container {
  padding: 15px;
}

li {
  margin-right: 10px;
}

@media (hover: hover) {
}

@media (min-width: 1024px) {
  body {
    display: flex;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
