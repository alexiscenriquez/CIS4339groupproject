<template>
  <div>
    <!-- Nav bar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Community Life Center</a>
        <div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDarkDropdown"
            aria-controls="navbarNavDarkDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul class="navbar-nav">
              
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Create
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      <router-link class="nav-link" to="/new-client">
                        Client</router-link
                      ></a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <router-link class="nav-link" to="/new-emp">Employees</router-link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <router-link class="nav-link" to="/new-volunteers">
                        Volunteers</router-link
                      >
                    </a>
                  </li>

                  <li><a class="dropdown-item" href="#">
                    <router-link class="nav-link" to="/new-service">
                    Services
                    </router-link></a>
                    </li>
                  <li>
                    <a class="dropdown-item"
                      ><router-link class="nav-link" to="/new-event"
                        >Events</router-link
                      ></a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <router-link class="nav-link" to="/new-org">
                        Organizations</router-link
                      >
                    </a>
                  </li>
                </ul>
              </li>
              <!-- view dropdown -->
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  View
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item"
                      ><router-link class="nav-link" to="/clients"
                        >Clients</router-link
                      ></a
                    >
                  </li>
                  <li><a class="dropdown-item" >
                   <router-link class="nav-link" to="/employees"
                        >Employees</router-link
                      ></a></li>
                  <li>
                    <a class="dropdown-item"
                      ><router-link class="nav-link" to="/volunteers"
                        >Volunteers</router-link
                      ></a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item"
                      ><router-link class="nav-link" to="/services"
                        >Services</router-link
                      ></a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item"
                      ><router-link class="nav-link" to="/events"
                        >Events</router-link
                      ></a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item"
                      ><router-link class="nav-link" to="/organizations"
                        >Organizations</router-link
                      ></a
                    >
                  </li>
                </ul>
              </li>
              
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <!-- search bar -->
              <!-- <div class="input-group">
            <div class="form-outline">
              <input type="search" id="form1" class="form-control" />
              <label class="form-label" for="form1">Search</label>
            </div>
            <button type="button" class="btn btn-primary">Search</button>    
          </div> -->
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <!-- Router view - our main view below the navigation -->
    <div class="container mt-5">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style>
nav {
  padding: 20px;
}
li a:hover {
  font-size: 18px;
  padding-bottom: 0px;
}
</style>
