import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      console.log("paramid: ",params['params']['id']);
    });
  }

  toggleleftTab(item){
    console.log("tab: ",item);
  }
  leftArrowEvent(item,param){
    console.log("left: ",item + ", "+param);
  };

  rightArrowEvent(item,param){
    console.log("right: ",item + ", "+param);
  };
  
  

}
