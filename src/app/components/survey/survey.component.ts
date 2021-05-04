import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-survey',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
    public selectedGame: string;
    public fg: FormGroup;
    public nombre: string;
    public apellido: string;
    public edad: number;
    public email: string;

    constructor(private route: ActivatedRoute, private fb: FormBuilder) {
        
        console.log(this.route.queryParams);
     }
    
    ngOnInit(): void {
        this.fg =  this.fb.group({
            'nombre': ['', [Validators.required]],
            'apellido': ['', Validators.required],
            'direccion': ['', Validators.required],
            'edad': ['', [Validators.required, Validators.min(18)]],
            'email': ['', [Validators.required, Validators.email]],
        });
        this.route.queryParams.subscribe(value => {
            this.selectedGame = value["game"];
        })
    }

}
