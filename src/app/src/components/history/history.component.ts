import { Component, Signal, computed, inject } from '@angular/core';
import { CommandlineComponent } from '../commandline';
import { SignalsManagerService } from '../../services';
import { AppSignalKeys } from '../../models/signals.model';
import { CommandMapper, getCommandFromString } from '../../mappers';
import { Commands } from '../../models/command-line.model';

export interface Log {
  id: number;
  text: string;
}

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommandlineComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
})
export class HistoryComponent {
  private historyBackup: Log[] = [];
  private signalsManagerService = inject(SignalsManagerService);
  userInput: Signal<string>;

  history: Signal<Log[]> = computed(() => {
    const userInputSignalValue = this.userInput();

    if (userInputSignalValue === Commands.CLEAR) {
      this.historyBackup = [];
      return this.historyBackup;
    }

    if (!userInputSignalValue) {
      return this.historyBackup;
    }

    const { command, text } = getCommandFromString(userInputSignalValue);

    this.historyBackup.push({
      id: this.historyBackup.length,
      text: command ? CommandMapper(command, text) : 'Command Not Recognized',
    });

    return this.historyBackup;
  });

  constructor() {
    this.userInput = this.signalsManagerService.signalsManager.getSignal(
      AppSignalKeys.USER_INPUT,
    );
  }
}
