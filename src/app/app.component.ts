import { Component, VERSION } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  lisit1=[{'id':'1','name':'ponkaumr'},
  {'id':'1','name':'ponkaumr'}
   ];
  lisit2=[{'id':'2','name':'kumar'}];
  lisit3=[];
  count=0;



  getcommend(pagenumer=11,pagesize=1){
    this.lisit3=this.lisit3.concat(this.lisit2)
    if(this.count==0)
    {
      this.count++;
      this.getcommend(19,19);
    }
    console.log("class",this.lisit3);
  }


}
