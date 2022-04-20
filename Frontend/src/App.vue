<template>
  <div>
    <!-- Nav bar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <!-- title -->
        <a class="navbar-brand" href="/">Community Life Center</a>
        <div>
          <!-- dropdown button-->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown"
            aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul class="navbar-nav">
              <!-- Employee views and creation -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Employees</a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                  <li>
                    <a class="dropdown-item"><router-link class="nav-link" to="/new-emp">Create</router-link></a>
                  </li>
                  
                  <li>
                    <a class="dropdown-item"><router-link class="nav-link" to="/employees">View</router-link></a>
                  </li>
                </ul>
              </li>

              <!-- Client views and creation -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Clients</a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                  <li>
                    <a class="dropdown-item"><router-link class="nav-link" to="/new-client">Create</router-link></a>
                  </li>
                  
                  <li>
                    <a class="dropdown-item"><router-link class="nav-link" to="/clients">View</router-link></a>
                  </li>
                </ul>
              </li>

              

              <!-- Volunteer views and creation -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Volunteers</a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                  <li>
                    <a class="dropdown-item"><router-link class="nav-link" to="/new-volunteers">Create</router-link></a>
                  </li>
                  
                  <li>
                    <a class="dropdown-item"><router-link class="nav-link" to="/volunteers">View</router-link></a>
                  </li>
                </ul>
              </li>

              <!-- Organization views and creation -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Organizations</a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                  <li>
                    <a class="dropdown-item"><router-link class="nav-link" to="/new-org">Create</router-link></a>
                  </li>
                  
                  <li>
                    <a class="dropdown-item"><router-link class="nav-link" to="/organizations">View</router-link></a>
                  </li>
                </ul>
              </li>

              <!-- Events views and creation -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Events</a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                  <li>
                    <a class="dropdown-item"><router-link class="nav-link" to="/new-event">Create</router-link></a>
                  </li>
                  
                  <li>
                    <a class="dropdown-item"><router-link class="nav-link" to="/events">View</router-link></a>
                  </li>
                </ul>
              </li>

              <!-- Service views and creation -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                  <li>
                    <a class="dropdown-item"><router-link class="nav-link" to="/new-service">Create</router-link></a>
                  </li>
                  
                  <li>
                    <a class="dropdown-item"><router-link class="nav-link" to="/services">View</router-link></a>
                  </li>
                </ul>
              </li>

              <!-- graph of reports -->
              <li class="nav-item">
                <a class="nav-link" href="/graphs">Reports</a>
              </li>

              <!-- About page-->
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
            
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
@import "assets/app.css";
</style>
