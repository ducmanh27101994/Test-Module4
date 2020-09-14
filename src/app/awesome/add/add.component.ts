import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AwesomeService} from '../../awesome.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private awesomeServices: AwesomeService) {
  }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      tag: ['', [Validators.required]],
      url: ['', [Validators.required]],
      descriptions: ['', [Validators.required]]
    });
  }

  add() {
    const awesome = this.addForm.value;
    this.awesomeServices.addAwesome(awesome).subscribe(data => {
      this.router.navigate(['awesome']);
    });
  }
  list(){
    this.router.navigate(['awesome']);
  }
  get tag(){
    return this.addForm.get('tag');
  }
  get url(){
    return this.addForm.get('url');
  }
  get descriptions(){
    return this.addForm.get('descriptions');
  }



}
