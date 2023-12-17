import { Component } from '@angular/core';
import { InputComponent } from './src/components/input';
import { HistoryComponent } from './src/components/history';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputComponent, HistoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'GentlemanTerminal';
}
