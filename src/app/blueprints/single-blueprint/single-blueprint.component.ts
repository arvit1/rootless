import { Component, OnDestroy } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Blueprint, Industry } from "../../_models";
import { BlueprintService } from "../../_services";

@Component({
  selector: 'app-single-blueprint',
  templateUrl: './single-blueprint.component.html',
  styles: ['.carousel-control-prev-icon {background-image: url(../../../../assets/images/left-arrow.svg);}'],
  styleUrls: ['./single-blueprint.component.scss'],
  providers: [NgbCarouselConfig]
}
)
export class SingleBlueprintComponent implements OnDestroy {

  private id: number;
  blueprint!: Blueprint;
  private blueprintSubscribe: Subscription;
  industries: Industry[] = [];
  statKeys = [] as string[];
  statValues: any
  pdfUrl = ''
  interviewVideo = ''
  interviewPodcast = ''

  constructor(config: NgbCarouselConfig, private blueprintService: BlueprintService,
    private route: ActivatedRoute) {
    config.showNavigationIndicators = false;
    config.interval = 0;
    this.id = this.route.snapshot.params.id;

    this.blueprintService.getIndustries().subscribe((res) => {
      this.industries = res
    });

    this.blueprintSubscribe = this.blueprintService.getById(this.id).subscribe(res => {
      this.blueprint = res;
      this.blueprintService.getMediaUrl(res.pdfFile).subscribe((res) => {
        this.pdfUrl = res.signedUrl
      });
      this.blueprintService.getMediaUrl(res.interviewVideo).subscribe((res) => {
        this.interviewVideo = res.signedUrl
      });
      this.blueprintService.getMediaUrl(res.interviewVideo).subscribe((res) => {
        this.interviewPodcast = res.signedUrl
      });

      this.statKeys = Object.keys(this.blueprint.stats).map(k => k);
      this.statValues = Object.keys(this.blueprint.stats).map(k => this.blueprint.stats[k]);
    });
  }

  ngOnDestroy(): void {
    this.blueprintSubscribe.unsubscribe();
  }

  getIndustryName(id: any) {
    if (id && this.industries) {
      return this.industries.filter(industry => industry.id === id)[0].name;
    }
  }
}
