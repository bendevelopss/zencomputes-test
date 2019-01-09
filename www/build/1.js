webpackJsonp([1],{

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupByPageModule", function() { return GroupByPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_by__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GroupByPageModule = /** @class */ (function () {
    function GroupByPageModule() {
    }
    GroupByPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__group_by__["a" /* GroupByPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__group_by__["a" /* GroupByPage */]),
            ],
        })
    ], GroupByPageModule);
    return GroupByPageModule;
}());

//# sourceMappingURL=group-by.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupByPage; });
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
 * Generated class for the GroupByPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GroupByPage = /** @class */ (function () {
    function GroupByPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.inventories = [
            { item_id: 1, warehouse_id: 1, stock: 10 },
            { item_id: 1, warehouse_id: 2, stock: 3 },
            { item_id: 1, warehouse_id: 3, stock: 5 },
            { item_id: 2, warehouse_id: 3, stock: 10 },
            { item_id: 2, warehouse_id: 2, stock: 4 },
            { item_id: 3, warehouse_id: 1, stock: 10 },
            { item_id: 4, warehouse_id: 2, stock: 10 },
            { item_id: 4, warehouse_id: 3, stock: 5 }
        ];
        this.inventory = [];
    }
    GroupByPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GroupByPage');
    };
    GroupByPage.prototype.groupBy = function () {
        var groupedCollection = this.inventories.reduce(function (previous, current) {
            if (!previous[current.item_id]) {
                previous[current.item_id] = [current];
            }
            else {
                previous[current.item_id].push(current);
            }
            return previous;
        }, {});
        this.inventory = Object.keys(groupedCollection).map(function (key) { return ({ key: key, value: groupedCollection[key] }); });
    };
    GroupByPage.prototype.clear = function () {
        this.inventories = [
            { item_id: 1, warehouse_id: 1, stock: 10 },
            { item_id: 1, warehouse_id: 2, stock: 3 },
            { item_id: 1, warehouse_id: 3, stock: 5 },
            { item_id: 2, warehouse_id: 3, stock: 10 },
            { item_id: 2, warehouse_id: 2, stock: 4 },
            { item_id: 3, warehouse_id: 1, stock: 10 },
            { item_id: 4, warehouse_id: 2, stock: 10 },
            { item_id: 4, warehouse_id: 3, stock: 5 }
        ];
        this.inventory = [];
    };
    GroupByPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-group-by',template:/*ion-inline-start:"/home/benedict/Documents/pwa-test/pwa-test/src/pages/group-by/group-by.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-buttons start> </ion-buttons>\n      <button ion-button menuToggle><ion-icon name="menu"></ion-icon></button>\n      <ion-title> Group Page </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n  <ion-list style="border: solid 2px #E7717D" *ngIf="inventory.length" >\n    <ng-container *ngFor="let item of inventory">\n      <ion-item-divider color="light">{{item.key}}</ion-item-divider>\n      <ion-item *ngFor="let child of item.value">{{\'warehouse_id: \' + child.warehouse_id + \'   \' +\'stock: \' + child.stock }}</ion-item>\n    </ng-container>\n  </ion-list>\n\n  <ion-list *ngIf="!inventory.length" style="border: solid 2px #E7717D">\n      <ion-item *ngFor="let item of inventories">{{\'item_id: \' + item.item_id + \'   \' +\'warehouse_id: \' + item.warehouse_id + \'   \' +\'stock: \' + item.stock }}</ion-item>\n  </ion-list>\n  <div padding>\n    <button (tap)="groupBy()" ion-button round outline color="danger">Generate</button>\n    <button (tap)="clear()" ion-button round outline color="danger">Reset</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/benedict/Documents/pwa-test/pwa-test/src/pages/group-by/group-by.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], GroupByPage);
    return GroupByPage;
}());

//# sourceMappingURL=group-by.js.map

/***/ })

});
//# sourceMappingURL=1.js.map