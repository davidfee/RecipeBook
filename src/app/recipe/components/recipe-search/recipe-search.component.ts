import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.scss']
})
export class RecipeSearchComponent {

  constructor(private router: Router) { }

  searchForm: FormGroup = new FormGroup({
    title: new FormControl("", Validators.required)
  });

  onSubmit() {
    let value = this.searchForm.controls['title'].value;
    this.router.navigate(['../search/', value]);
  }

}
