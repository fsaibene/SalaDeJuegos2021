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
  private readonly words: Array<string>
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
    this.word = new Array<Letter>();
    this.word.push(new Letter('a'));
    this.word.push(new Letter('l'));
    this.word.push(new Letter('c'));
    this.word.push(new Letter('e'));
  }

  reset(): void {
    let index = Math.floor((Math.random() * 8));
    let newWord = this.words[index];
    this.word = new Array<Letter>()
    newWord.split('').forEach(l => {
      this.word.push(new Letter(l));
    })
  }
}
