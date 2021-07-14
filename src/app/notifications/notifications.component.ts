import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { find, pull } from "lodash";
class City {
  item_id = -1;
  item_text = "";
}
@Component({
  templateUrl: "notifications.component.html",
  styleUrls: ["notifications.component.scss"],
})
export class NotificationsComponent {
  active = 1;
  dropdownList: City[] = [];
  cities: string[] = [];
  selectedItems: City[] = [];
  singleselectedItems: string[] = [];
  dropdownSettings = {};
  singledropdownSettings = {};
  closeDropdownSelection = false;
  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: "Mumbai" },
      { item_id: 2, item_text: "Bangaluru" },
      { item_id: 3, item_text: "Pune" },
      { item_id: 4, item_text: "Navsari" },
      { item_id: 5, item_text: "New Delhi" },
    ];
    this.cities = ["Mumbai", "New Delhi", "Bangaluru", "Pune", "Navsari"];
    this.selectedItems = [];

    this.dropdownSettings = {
      singleSelection: false,
      idField: "item_id",
      textField: "item_text",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
    document
      .getElementsByClassName("container-fluid")[0]
      .setAttribute("style", "padding:0");
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
