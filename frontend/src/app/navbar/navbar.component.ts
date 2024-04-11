import { Component, EventEmitter, Output } from '@angular/core';
import { Employee } from '../employee/employee';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output() searchValueEvent = new EventEmitter<string>();

  constructor() {}

  public changeSearchValue(searchValue: string): void {
    console.log(searchValue);
    this.searchValueEvent.emit(searchValue);
  }

  public onOpenModal(): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#addEmployeeModal');
    container?.appendChild(button);
    button.click();
  }
}
