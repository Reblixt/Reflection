import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

interface LabelValue {
  label: string;
  value: string;
}

const fastfetch: LabelValue[] = [
  { label: 'OS: ', value: 'NisOs' },
  { label: 'Shell: ', value: 'Zsh' },
  { label: 'Terminal: ', value: 'Ghostty' },
  { label: 'Editor: ', value: 'Neovim' },
  { label: 'WM: ', value: 'Hyprland' },
];

const hardware: LabelValue[] = [
  { label: 'Keyboard: ', value: 'The Voyager, Split keyboard' },
  { label: 'Mouse: ', value: 'The navigator' },
  { label: 'Headset: ', value: 'Nothing ear open' },
  { label: 'Monitor: ', value: 'AOC 2560x1440' },
];

@Component({
  selector: 'app-setup',
  imports: [NgOptimizedImage],
  templateUrl: './setup.html',
  styleUrl: './setup.css',
})
export class Setup {
  protected readonly title: string = '~/setup.conf';
  protected readonly description: string = 'Tools that power my workflow';
  protected readonly fastfetch: typeof fastfetch = fastfetch;
  protected readonly hardware: typeof hardware = hardware;
}
