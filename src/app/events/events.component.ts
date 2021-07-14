import {Component, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs";
import * as moment from 'moment';
import {EventService} from "../_services";
import {Event} from "../_models";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.scss"],
})
export class EventsComponent implements OnDestroy {
  events!: Event[]
  upcommingEvents!: Event[]
  private eventSubscribe = new Subscription()

  constructor(private eventService: EventService) {
    const month1 = moment().add(1, 'M'); // upcoming events till a month from now

    this.eventSubscribe = this.eventService.getAll().subscribe(res => {
      this.upcommingEvents = res.filter(event => {
        if ((moment(event.date) < month1) && (moment(event.date) > moment())){
          return event
        }
      })
      this.events = res
    })
  }

  ngOnDestroy(): void {
    this.eventSubscribe.unsubscribe()
  }
}
