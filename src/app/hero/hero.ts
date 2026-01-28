import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  protected readonly title: string = 'Bulding robust system from end to end';
  protected readonly userName: string = 'Carl Klöfverskjöld';
  protected readonly subTitle: string = '// Fullstack developer';
  protected readonly description: string = 'Linux enthuriast, Neovim and Terminal delver';
}
