import { Component } from '@angular/core';

interface NavButton {
  label: string;
  route: string;
}
@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  protected readonly title: string = 'Bulding robust system from end to end';
  protected readonly userName: string = 'Carl Klöfverskjöld';
  protected readonly subTitle: string = '/ /  Fullstack developer';
  protected readonly description: string = 'Linux enthuriast, Neovim and Terminal delver';

  protected readonly navigationButtons: NavButton[] = [
    { label: 'cd / setup', route: '#setup' },
    { label: 'ls / projects', route: '#projects' },
    { label: 'cat / interest', route: '#interests' },
    { label: 'git clone / carl@klofverskjold.se', route: 'mailto:carl@klofverskjold.se' },
  ];
}
