'use strict';

import { Route } from "./modules/router/route.js";
import { Router } from "./modules/router/router.js";

window.addEventListener("DOMContentLoaded", () => {
   const router = new Router([
       new Route("home", "home.html", true),
       new Route("about", "about.html"),
       new Route("main", "main.html")
   ], "app");
   router.init();
});