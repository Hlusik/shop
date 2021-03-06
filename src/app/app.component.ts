import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') title: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    this.title.nativeElement.textContent = 'Food shop!';
  }
}
