import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './hero/hero';
import { Setup } from './setup/setup';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, Setup],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('reflection');
}
