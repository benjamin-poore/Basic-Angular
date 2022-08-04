import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [
    `
    h3{
      color: dodgerblue;
    }
    .white-text{
      color: white;
    }
    `
  ]
})

export class AppComponent {
  username = '';
  title = 'my-first-app';
  log = []

  getBackgroundColor(){
   if(this.log.length >= 5)
   return {backgroundColor: "blue"};
  }



  onDisplayClick(){
    this.log.push(Date.now())
  }
}
