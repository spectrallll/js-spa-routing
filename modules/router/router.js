'use strict';
export class Router {
    constructor(routes, rootElem) {
        this.routes = routes;
        this.rootElem = rootElem ? document.getElementById(rootElem) : document.getElementById("root");
        this.defautlRoute = routes.find(el => el.default);
    }

    init() {
        window.addEventListener("hashchange", () => {
            this.hasChanged();
        });
        this.hasChanged();
    }

    hasChanged() {
        if (window.location.hash.length > 0) {
            for (let i = 0; i < this.routes.length; i++) {
                const route = this.routes[i];
                if(route.isActiveRoute(window.location.hash.substr(1))) {
                    this.goToRoute(route.htmlName);
                }
            }
        } else {
            this.goToRoute(this.defautlRoute.htmlName);
        }
    }
   async goToRoute(htmlName) {
        const url = "views/" + htmlName;
        this.rootElem.innerHTML = await fetch(url).then(res => res).then(data => data.text());
    }
}