import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angu';
  name: string = 'Tauhidul Islam';

  ngOnInit() {
    console.log('here you go!');
    console.log(this.name);
  }

}
