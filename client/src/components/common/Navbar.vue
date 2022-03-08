<template>
    <nav class="navbar navbar-expand-lg navbar-light" id="navbarNav">
        <!-- left -->
        <div class="container-fluid d-flex">
            <div class="d-flex flex-grow-1">
                <a class="navbar-brand" href="#">Logo</a>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- left -->
            <!-- right -->
            <div>
                <ul class="navbar-nav collapse navbar-collapse">
                    <li class="nav-item">
                        <a href="#" class="nav-link">Login</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">SignUp</a>
                    </li>
                </ul>
            </div>
            <!-- right -->
        </div>
    </nav>
</template>

<script>
export default {
    setup() {},
}
</script>

<style scoped>
nav {
    width: 100%;
    background-color: inherit;
}

.navbar-brand {
    display: block;
}
</style>
