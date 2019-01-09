import {
  Component,
  QueryList,
  ViewChildren
} from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-chat",
  templateUrl: "chat.html"
})
export class ChatPage {
  //@ViewChild('chatContainer') chatContainer: ElementRef;
  @ViewChildren("chatContainer") chatContainer: QueryList<any>;

  chatWindows = [];
  chatMessages = [];
  inputText = {};
  disabled: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ChatPage");
  }

  addChatWindow() {
    console.log(this.chatWindows);

    if (this.inputText.toString.length > 2) this.disabled = true
    else this.disabled = false

    console.log("here");
    this.chatWindows.push({
      title: `Chat  ${this.chatWindows.length + 1}`,
      alert: `Chat ${this.chatWindows.length + 1} joined the conversation`,
      chats: []
    });
    if (this.chatWindows.length <= 1) this.disabled = false;
    if(this.chatWindows.length > 1) this.disabled = false;
  }

  sendMesasge(title) {
    console.log(this.inputText);

    console.log(title);

    this.chatMessages.push({
      from: title,
      message: this.inputText[title]
    });

    this.inputText[title] = "";

    this.scrollToBottom();
  }

  private scrollToBottom() {
    console.log(this.chatContainer);
    setTimeout(() => {
      this.chatContainer.forEach(element => {
        element.nativeElement.scrollTop = element.nativeElement.scrollHeight;
      });
    }, 500);
  }
}
