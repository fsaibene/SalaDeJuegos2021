import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Survey } from 'src/app/classes/message';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
    selector: 'app-survey',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
    public selectedGame: string;
    public fg: FormGroup;
    public needValidate: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public needValidate$: Observable<boolean> = this.needValidate.asObservable();
    public disableButton: boolean = false;
    public surveySent2: boolean = false;

    constructor(private route: ActivatedRoute, private fb: FormBuilder, private surveyService: SurveyService) {
     }
    
    ngOnInit(): void {
        this.fg =  this.fb.group({
            'nombre': ['', [Validators.required, Validators.maxLength(100)]],
            'apellido': ['', [Validators.required, Validators.maxLength(100)]],
            'telefono': ['', [Validators.required, Validators.maxLength(10)]],
            'edad': ['', [Validators.required, Validators.min(18), Validators.max(99)]],
            'puntaje': ['', [Validators.required, Validators.min(1), Validators.max(5)]],
            'recomienda': ['', [Validators.required]],
            'comentarios': ['', [Validators.required, Validators.maxLength(100)]],
        });
        this.route.queryParams.subscribe(value => {
            this.selectedGame = value["game"];
        })
    }

    public onSubmit(form): void {
        this.needValidate.next(true);
        if(form.valid) {
            this.disableButton = true;
            let survey = new Survey();
            survey.nombre = this.fg.controls["nombre"].value;
            survey.apellido = this.fg.controls["apellido"].value;
            survey.telefono = this.fg.controls["telefono"].value;
            survey.edad = this.fg.controls["edad"].value;
            survey.puntaje = this.fg.controls["puntaje"].value;
            survey.recomienda = this.fg.controls["recomienda"].value;
            survey.comentarios = this.fg.controls["comentarios"].value;
            this.surveyService.create(survey).then(response => {
                this.surveySent2 = true;
                console.log(response)
            }).catch((error) => {
                this.disableButton = false;
                console.log("error al enviar la encuesta");
                console.error(error);
            });
        }
        console.log("submit")
    }
}
