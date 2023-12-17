import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommandlineComponent } from '../commandline';
import { SignalsManagerService } from '../../services';
import { AppSignalKeys } from '../../models/signals.model';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommandlineComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent implements AfterViewInit, OnDestroy {
  userInput: FormControl = new FormControl();
  listener: any;
  elementRef = inject(ElementRef);
  signalsManagerService = inject(SignalsManagerService);

  ngAfterViewInit() {
    const inputElementRef =
      this.elementRef.nativeElement.querySelector('input');

    this.listener = inputElementRef.addEventListener('focusout', () =>
      inputElementRef.focus(),
    );
  }

  sendCommand() {
    this.signalsManagerService.signalsManager.updateSignal(
      AppSignalKeys.USER_INPUT,
      this.userInput.value,
    );
    this.userInput.reset();
  }

  ngOnDestroy() {
    this.listener?.remove();
  }
}
