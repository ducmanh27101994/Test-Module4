import { Component, OnInit } from '@angular/core';
import {IAwesome} from '../../iawesome';
import {AwesomeService} from '../../awesome.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  awesome: IAwesome;
  constructor(private awesomeService: AwesomeService,
              private router: Router,
              private route: ActivatedRoute) { }
  id = +this.route.snapshot.paramMap.get('id');
  ngOnInit(): void {
    this.getAwesome();
  }
  getAwesome() {
    this.awesomeService.getAwesomeId(this.id).subscribe(data => {
      this.awesome = data;
    });
  }
  list(){
    this.router.navigate(['awesome']);
  }




}
