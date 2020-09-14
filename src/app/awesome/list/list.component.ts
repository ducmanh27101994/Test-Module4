import {Component, OnInit} from '@angular/core';
import {IAwesome} from '../../iawesome';
import {AwesomeService} from '../../awesome.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listAwesome: IAwesome[] = [];

  constructor(private awesomeService: AwesomeService) {
  }

  ngOnInit(): void {
    this.getListAwesome();
  }

  getListAwesome() {
    this.awesomeService.getAll().subscribe(data => {
      this.listAwesome = data;
    });
  }

  deleteAwesome(index){
    const product = this.listAwesome[index];
    if (confirm('Are you sure')){
      this.awesomeService.deleteAwesome(product.id).subscribe(() => {
        this.getListAwesome();
      });
    }
  }

}
