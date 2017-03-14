"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var Rx_1 = require("rxjs/Rx");
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var http_2 = require('@angular/http');
var LoginComponent = (function () {
    function LoginComponent(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.serverUrl = "http://192.168.1.32:8081/apiV1";
        this.loginUrl = this.serverUrl + "/login";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        console.log('trying to login to ' + this.loginUrl);
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        var jsonBody = {
            serverKey: '175d6c2c2632e0f87a07f32e88a690104f921b517c7af1c6333de2dfad9be8e3',
            username: 'rene',
            password: 'wachtwoordje'
        };
        return this.http.post(this.loginUrl, jsonBody, options)
            .map(this.loginResponse)
            .catch(this.handleError);
        //this.router.navigate(['todolist']);
    };
    LoginComponent.prototype.loginResponse = function (res) {
        console.log("keimooi!!!");
        console.info(res);
    };
    LoginComponent.prototype.handleError = function (error) {
        console.log("error!!");
        console.info(error);
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        console.error(errMsg);
        return Rx_1.Observable.throw(errMsg);
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, http_1.Http])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map