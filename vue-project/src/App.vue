<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand float-left" href="/" id="brand">
        Bread of Life / CFC
      </a>
      <ul class="nav navbar-nav mr-auto" id="navbar">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/create">Clients</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/view">Volunteers</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/view">Employees</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;

  font-weight: normal;
}

nav {
  margin-top: 0;
  width: 100vw;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}
.container {
  padding: 5px;
}
li:hover {
  cursor: pointer;
}
li {
  margin-right: 10px;
}
#brand:hover {
  color: orange;
}
#navbar.nav-link:hover {
  color: orange;
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
