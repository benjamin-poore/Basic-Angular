import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName = 'test string';
  serverCreated = false;
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  servers = ['test server', 'test server 2']

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName
    this.servers.push(this.serverName)
    this.serverCreated = true;
  }

}
