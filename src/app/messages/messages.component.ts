import { Component, OnInit } from "@angular/core";
import { HireMessages } from "../_models/settings";
import { SettingsService } from "../_services";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"],
})
export class MessagesComponent implements OnInit {
  active = 1;
  hireMessages: HireMessages[] = []
  selectedMsg = {}

  constructor(private settingsService: SettingsService) {
    this.settingsService.getHires().subscribe(res => {
      this.hireMessages = res.items;
      this.selectedMsg = this.hireMessages[0]
    })
  }

  ngOnInit(): void { }

  setActive(id: number) {
    this.selectedMsg = this.hireMessages.filter(msg => msg.rootlessId == id)[0]
  }
}
