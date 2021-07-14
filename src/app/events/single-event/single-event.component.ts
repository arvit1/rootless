import {Component, OnDestroy} from '@angular/core';
import {EventService} from "../../_services";
import {Event} from "../../_models";
import {Subscription} from "rxjs";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.scss']
})
export class SingleEventComponent implements OnDestroy {

  aboutData = {
    name: 'Arnon',
    bio: '- “Claiming that equipment is preventing you from making good music is a mistake.”',
    aboutYou: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum sagittis, egestas lobortis fermentum ullamcorper vulputate pretium sit. In integer quis purus aliquam ipsum vitae in.`,
    tagline: 'Follow your passion and life will reward you.',
    bringToTable: [
      'Guidance on how to produce a song step by step',
      'Elementum sagittis, egestas lobortis fermentum',
      'In integer quis purus aliquam ipsum vitae in'
    ],
    expertise: [
      'Entrepreneurship', 'Music Production', 'Video Editing', 'Entrepreneurship 1', 'Music Production 2', 'Video Editing 3'
    ]
  }

  private id: number;
  event!: Event
  private eventSubscribe = new Subscription()

  constructor(private eventService: EventService, private route: ActivatedRoute,
              private router: Router) {

    // TODO update component from inside component... done maybbe needed in other single components as well
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
    // update component from inside component

    this.id = this.route.snapshot.params.id;
    this.eventSubscribe = this.eventService.getById(this.id).subscribe(res => {
      console.log(res)
      this.event = res
    })
  }

  ngOnDestroy(): void {
    this.eventSubscribe.unsubscribe()
  }
}
