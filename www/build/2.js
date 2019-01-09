webpackJsonp([2],{

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiboPageModule", function() { return FiboPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fibo__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FiboPageModule = /** @class */ (function () {
    function FiboPageModule() {
    }
    FiboPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fibo__["a" /* FiboPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fibo__["a" /* FiboPage */]),
            ],
        })
    ], FiboPageModule);
    return FiboPageModule;
}());

//# sourceMappingURL=fibo.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiboPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FiboPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FiboPage = /** @class */ (function () {
    function FiboPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fiboNumbers = [];
        this.min = 0;
        this.max = 0;
    }
    FiboPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FiboPage');
    };
    FiboPage.prototype.fiboLoop = function (min, max) {
        var numbers = [0, 1];
        var a = 0, b = 1;
        while (max > a + b) {
            numbers.push(a + b);
            a = b;
            b = numbers[numbers.length - 1];
        }
        return numbers.filter(function (number) { return number >= min; });
    };
    FiboPage.prototype.fiboRec = function (num) {
        if (num <= 1)
            return 1;
        return this.fiboRec(num - 1) + this.fiboRec(num - 2);
    };
    FiboPage.prototype.fiboMemo = function (num, memo) {
        memo = memo || {};
        if (memo[num])
            return memo[num];
        if (num <= 1)
            return 1;
        return memo[num] = this.fiboMemo(num - 1, memo) + this.fiboMemo(num - 2, memo);
    };
    FiboPage.prototype.generate = function () {
        console.log("generate", this.fiboLoop(this.min, this.max));
        this.fiboNumbers = this.fiboLoop(this.min, this.max);
    };
    FiboPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fibo',template:/*ion-inline-start:"/home/benedict/Documents/pwa-test/pwa-test/src/pages/fibo/fibo.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start> </ion-buttons>\n    <button ion-button menuToggle><ion-icon name="menu"></ion-icon></button>\n    <ion-title> Fibonacci Page </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container">\n    <ion-item>\n      <ion-label fixed>Minimum</ion-label>\n      <ion-input type="number" [(ngModel)]="min"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Maximum</ion-label>\n      <ion-input type="number" [(ngModel)]="max"></ion-input>\n    </ion-item>\n    <div padding>\n      <button (tap)="generate()" ion-button color="danger" block>\n        Generate\n      </button>\n    </div>\n  </div>\n\n  <div *ngIf="fiboNumbers.length > 0">\n    <ion-item no-lines> <h2>Generated Fiboacci</h2> </ion-item>\n    <ion-item no-lines style="border: solid 1px grey">\n      <label\n        *ngFor="let number of fiboNumbers; let i = index"\n        text-center\n        style="white-space: normal"\n        >{{ number + (i != fiboNumbers.length - 1 ? ", " : "") }}</label\n      >\n    </ion-item>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/benedict/Documents/pwa-test/pwa-test/src/pages/fibo/fibo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FiboPage);
    return FiboPage;
}());

//# sourceMappingURL=fibo.js.map

/***/ })

});
//# sourceMappingURL=2.js.map