import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import PangolinService from 'src/services/pangolin.service';

@Component({
  selector: 'fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {

  message: string;

  constructor(private pangolinService: PangolinService) { 
    this.message = "fetching..."
  }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    console.log("fetching")
    this.pangolinService.findAllPangolin()
      .subscribe({
        next: (pangolinList) => {
          console.log(pangolinList)
        },
        error(error) {
          console.log(error)
        },
        complete() {
          console.log("fetched")
        }
      })
  }

}
