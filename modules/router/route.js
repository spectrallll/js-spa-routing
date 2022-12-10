'use strict';
export class Route {
    constructor(name, htmlName, defaultRoute = false) {
        this.name = name;
        this.htmlName = htmlName;
        this.default = defaultRoute;
    }

    isActiveRoute(hashPath) {
        return hashPath.replace("#", "") === this.name;
    }
}