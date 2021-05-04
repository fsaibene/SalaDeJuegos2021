import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-button',
  templateUrl: './survey-button.component.html',
  styleUrls: ['./survey-button.component.css']
})
export class SurveyButtonComponent implements OnInit {
    @Input() selectedGame: string;
    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    goToSurvey(): void {
        this.router.navigate(["/survey"], { queryParams: { game: this.selectedGame } })
    }
}
