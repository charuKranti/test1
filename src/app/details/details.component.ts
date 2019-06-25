import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  /* image viewer properties start*/
  isZoomInBtn:boolean=true;
  isZoomOutBtn:boolean=true;
  isResetZoom:boolean=true;
  isFullscreenBtn:boolean=false;
  isRotate:boolean=true;
  isDownloadBtn:boolean=false;
  
  jurnyNumber:any;
  userDetails:any;
  currentTab="pet1";
  targetFile=['iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='];
  currentIndex:any=0;
  constructor(private route: ActivatedRoute, private authService: AuthService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      console.log("paramid: ",params['params']['id']);
      this.jurnyNumber=params['params']['id'];
      this.authService.getUserDetails(this.jurnyNumber,{}).subscribe((res)=>{
         console.log(res);
         this.userDetails=res;
      });
    });
  }
  
  toggleTabs(key){
    this.currentTab=key;
  }
  toggleleftTab(item,index){
    console.log("tab: ",item);
    this.targetFile=[];
    this.targetFile.push(item['file']);
    this.currentIndex=index;
  }
  leftArrowEvent(item,key){
    if(this.currentIndex >= 1 ){
      this.currentIndex--;
      this.currentIndex=this.currentIndex;
      this.targetFile=[];
      this.targetFile.push(this.userDetails.dataList[key].doctypes[this.currentIndex]['file']);
    }
  };

  rightArrowEvent(item,key){
    if(this.currentIndex+2 <= (this.userDetails.dataList[key].doctypes.length)){
      this.currentIndex++;
      this.currentIndex=this.currentIndex;
      this.targetFile=[];
      this.targetFile.push(this.userDetails.dataList[key].doctypes[this.currentIndex]['file']);
    }
    
  };
  
  

}