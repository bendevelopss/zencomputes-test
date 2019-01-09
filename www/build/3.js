webpackJsonp([3],{

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */]),
            ],
        })
    ], ChatPageModule);
    return ChatPageModule;
}());

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
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
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chatWindows = [];
        this.chatMessages = [];
        this.inputText = {};
        this.disabled = true;
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ChatPage");
    };
    ChatPage.prototype.addChatWindow = function () {
        console.log(this.chatWindows);
        if (this.inputText.toString.length > 2)
            this.disabled = true;
        else
            this.disabled = false;
        console.log("here");
        this.chatWindows.push({
            title: "Chat  " + (this.chatWindows.length + 1),
            alert: "Chat " + (this.chatWindows.length + 1) + " joined the conversation",
            chats: []
        });
        if (this.chatWindows.length <= 1)
            this.disabled = false;
        if (this.chatWindows.length > 1)
            this.disabled = false;
    };
    ChatPage.prototype.sendMesasge = function (title) {
        console.log(this.inputText);
        console.log(title);
        this.chatMessages.push({
            from: title,
            message: this.inputText[title]
        });
        this.inputText[title] = "";
        this.scrollToBottom();
    };
    ChatPage.prototype.scrollToBottom = function () {
        var _this = this;
        console.log(this.chatContainer);
        setTimeout(function () {
            _this.chatContainer.forEach(function (element) {
                element.nativeElement.scrollTop = element.nativeElement.scrollHeight;
            });
        }, 500);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])("chatContainer"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], ChatPage.prototype, "chatContainer", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-chat",template:/*ion-inline-start:"/home/benedict/Documents/pwa-test/pwa-test/src/pages/chat/chat.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start> </ion-buttons>\n    <button ion-button menuToggle><ion-icon name="menu"></ion-icon></button>\n    <ion-title> Chat Page </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="chat-container">\n    <h5 *ngIf="disabled">Click the "+" button to continue</h5>\n    <ng-container *ngFor="let window of chatWindows; let i = index">\n      <div class="chat-window">\n        <div class="chat-title">\n          <span>{{ window.title }}</span>\n        </div>\n\n        <div #chatContainer class="chat-bubble-container">\n          <ion-note ion-text style="color: grey">{{ window.alert }}</ion-note\n          ><br />\n          <div\n            class="chat-bubble"\n            [class.from-me]="chat.from == window.title"\n            *ngFor="let chat of chatMessages"\n          >\n            <span> {{ chat.from + ": " + chat.message }} </span>\n          </div>\n        </div>\n\n        <div class="actions">\n          <label style="color: red">{{window.title}}</label>\n          <ion-input\n            [(ngModel)]="inputText[window.title]"\n            placeholder="Text Input"\n          ></ion-input>\n          <button\n            (tap)="sendMesasge(window.title)"\n            ion-button\n            round\n            color="danger"\n          >\n            Send\n          </button>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n  <ion-fab bottom right>\n    <button (tap)="addChatWindow()" ion-fab icon-only color="danger" [disabled]="chatWindows.length == 4">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/benedict/Documents/pwa-test/pwa-test/src/pages/chat/chat.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ })

});
//# sourceMappingURL=3.js.map