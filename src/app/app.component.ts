import { Component } from "@angular/core";
import { ShepherdService } from "angular-shepherd";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [ShepherdService]
})
export class AppComponent {
  constructor() {}
}
