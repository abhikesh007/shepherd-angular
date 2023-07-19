import { Component, OnDestroy, AfterViewInit, OnInit } from "@angular/core";
import { ShepherdService } from "angular-shepherd";

const tour = {
  defaultStepOptions: {
    scrollTo: true,
    cancelIcon: {
      enabled: true
    },
    canClickTarget: true,
    popperOptions: {
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 20]
          }
        }
      ]
    },
    modalOverlayOpeningPadding: 8,
    modalOverlayOpeningRadius: 4
  },
  steps: [
    {
      id: "btn-1",
      attachTo: {
        element: ".home-btn-1",
        on: "bottom"
      },
      buttons: [
        {
          classes: "cancel-button",
          text: "Exit",
          type: "cancel"
        },
        {
          classes: "shepherd-button-primary",
          text: "Back",
          type: "back"
        },
        {
          classes: "shepherd-button-primary",
          text: "Next",
          type: "next"
        }
      ],
      classes: "",
      highlightClass: "highlight",
      title: "Step 1",
      text: "This is content"
    },
    {
      id: "btn-2",
      attachTo: {
        element: ".home-btn-2",
        on: "bottom"
      },
      buttons: [
        {
          classes: "mat-raised-button",
          text: "Exit",
          type: "cancel"
        },
        {
          classes: "mat-raised-button",
          text: "Back",
          type: "back"
        },
        {
          classes: "mat-raised-button",
          text: "Next",
          type: "next"
        }
      ],
      classes: "",
      highlightClass: "highlight",
      title: "Step 2",
      text: "This is content"
    }
  ]
};

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(private guideTour: ShepherdService) {}

  ngOnDestroy() {
    // this.guideTour.complete();
    this.guideTour = null;
  }

  ngOnInit() {
    this.guideTour.defaultStepOptions = tour.defaultStepOptions;
    this.guideTour.modal = true;
    this.guideTour.confirmCancel = false;
    this.guideTour.addSteps(tour.steps);
    this.guideTour.start();

    setTimeout(() => {
      this.guideTour.next();
    }, 500);
  }

  ngAfterViewInit() {}

  startTour() {
    this.guideTour.defaultStepOptions = tour.defaultStepOptions;
    this.guideTour.modal = true;
    this.guideTour.confirmCancel = false;
    this.guideTour.addSteps(tour.steps);
    this.guideTour.start();
  }
}
