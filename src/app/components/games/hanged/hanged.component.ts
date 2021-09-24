import { Component, OnInit } from '@angular/core';
import { Letter } from 'src/app/classes/letter';

@Component({
  selector: 'app-hanged',
  templateUrl: './hanged.component.html',
  styleUrls: ['./hanged.component.css']
})
export class HangedComponent implements OnInit {
  public word: Array<Letter> | null = null;
  public letters: Array<string> | null = null;
  public attempts: number = 10;
  private readonly words: Array<string>
  public message: string = 'Tiene 10 intentos';
  constructor() { 
    this.words = new Array<string>();
    this.words.push("perro");
    this.words.push("gato");
    this.words.push("caballo");
    this.words.push("alce");
    this.words.push("toro");
    this.words.push("mono");
    this.words.push("lince");
    this.words.push("coballo");
    this.words.push("carpincho");
    this.letters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
  }

  ngOnInit(): void {
    this.reset();
  }

  reset(): void {
    let index = Math.floor((Math.random() * 8));
    let newWord = this.words[index];
    this.word = new Array<Letter>()
    newWord.split('').forEach(l => {
      this.word.push(new Letter(l));
    });
    this.attempts = 10;
    this.message = '';
  }

  selectLetter(letter: string): void {
    if(this.attempts > 0) {
      this.attempts--;
      this.word.forEach(l => {
        if(l.value.toUpperCase() == letter.toUpperCase()) {
          l.revealed = true;
        }
      });
      if(this.word.every(l => l.revealed)) {
        this.message = 'Gano! en solo ' + (10 - this.attempts) + 'intentos. Felicitaciones!';
      } else {
        this.message = 'Le quedan ' + this.attempts + ' intentos.';
      }
    } else {
      this.message = 'No tiene más intentos';
    }
  }
}
