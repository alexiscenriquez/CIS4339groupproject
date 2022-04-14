<template>
  <div>
    <!-- Nav bar -->
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <!-- added float-left -->
    <a class="navbar-brand float-left" href="/">
    
      <img
              alt="CLC logo"
              src="./assets/clcenter.png"
              width="30"
              height="30"
              class="d-inline-block align-text-top"
            />Community Life Center
    </a>


    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <!-- added mr-auto -->
      <ul class="navbar-nav mr-auto">
        <!-- view dropdown -->
        <li class="nav-item">
    <a class="nav-link" href="/">Home</a>
    </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            View
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a class="dropdown-item"><router-link class="nav-link" to="/clients">Clients</router-link></a></li>
            <li><a class="dropdown-item" href="#">Employees</a></li>
            <li><a class="dropdown-item"><router-link class='nav-link' to="/volunteers">Volunteers</router-link></a></li>
            <li><a class="dropdown-item"><router-link class="nav-link" to="/services">Services</router-link></a></li>
            <li><a class="dropdown-item"><router-link class="nav-link" to="/events">Events</router-link></a></li>
          </ul>
        </li>
        <!-- edit dropdown -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Edit
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Client</a></li>
            <li><a class="dropdown-item" href="#">Employees</a></li>
            <li><a class="dropdown-item" href="#">Volunteers</a></li>
            <li><a class="dropdown-item" href="#">Services</a></li>
            <li><a class="dropdown-item" href="#">Events</a></li>
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
  </nav>

    <!-- Router view - our main view below the navigation -->
    <div class="container mt-5">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style>
  .navbar-nav{
    margin-left:auto;
  }
</style>

