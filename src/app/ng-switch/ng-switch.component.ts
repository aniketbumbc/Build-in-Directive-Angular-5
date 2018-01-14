import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent   {
  
diffdata=[];

 choice:any;
 color:string;
 fontsize:number;

  constructor() {
  this.choice=1; 
  this.diffdata=['Aniket','Bunny',235555,'Yahoo','Gamil',45555];
}
nextChoice():void{
this.choice +=1;
//this.color='red';
//this.fontsize=22;
if(this.choice > 5)
{
  this.choice=1;
}
}
apply(color:string,fontsize:number){
  alert("Hello");
this.color=color;
this.fontsize=fontsize;
}
}
