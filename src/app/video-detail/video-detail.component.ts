import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { VideoService } from "../videos/video.service";

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  providers: [VideoService]
})
export class VideoDetailComponent implements OnInit {
  private routeSub:any;
  private req:any;
  slug:string;
  video:any;
  constructor(private route: ActivatedRoute, private _videos:VideoService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params =>{
      this.slug = params.slug;
      this.req = this._videos.get(this.slug).subscribe(data=>{
        this.video = data;
      })
    }) //observable
  }

  ngOnDestroy(){
    this.routeSub.unsubscribe()
    this.req.unsubscribe()
  }

}