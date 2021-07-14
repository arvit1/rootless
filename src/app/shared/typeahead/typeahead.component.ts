import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Observable, OperatorFunction } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";

@Component({
  selector: "app-typeahead",
  templateUrl: "./typeahead.component.html",
  styleUrls: ["./typeahead.component.scss"],
})
export class TypeaheadComponent implements OnInit {
  @Input() states = [];
  @Input() placeholder = "";
  @Output() itemSelected = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  public model: any;

  formatter = (result: string) => result.toUpperCase();

  search: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(
        (term) => (term === "" ? [] : this.states)
        // .filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
        // .slice(0, 10)
      )
    );

  onSelect(value: any) {
    value.preventDefault();
    this.itemSelected.emit(value.item);
    this.model = null;
  }
}
