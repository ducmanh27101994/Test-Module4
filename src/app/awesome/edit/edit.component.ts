import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AwesomeService} from '../../awesome.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IAwesome} from '../../iawesome';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  awesome: IAwesome;

  constructor(private fb: FormBuilder,
              private awesomeService: AwesomeService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  id = +this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.editForm = this.fb.group({
      tag: ['', [Validators.required]],
      url: ['', [Validators.required]],
      descriptions: ['', [Validators.required]]
    });
    this.awesomeService.getAwesomeId(this.id).subscribe(data => {
      this.awesome = data;
      this.editForm.patchValue(this.awesome);
    });
  }

  update() {
    const awesome = this.editForm.value;
    this.awesomeService.updateAwesome(awesome, this.id).subscribe(res => {
      this.router.navigate(['awesome']);
    });
  }

  deleteAwesome() {
    if (confirm('Are you sure')) {
      this.awesomeService.deleteAwesome(this.id).subscribe(() => {
        this.router.navigate(['awesome']);
      });
    }
  }

  list() {
    this.router.navigate(['awesome']);
  }

  get tag() {
    return this.editForm.get('tag');
  }

  get url() {
    return this.editForm.get('url');
  }

  get descriptions() {
    return this.editForm.get('descriptions');
  }
}
