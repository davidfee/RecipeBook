import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipePreview } from '../../models/recipe-preview.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('*', style({
        'opacity': 1,
        'transform': 'scale(1)'
      })),
      transition('void => *', [
        style({
          'opacity': 0,
          'transform': 'scale(0)'
        }),
        animate('.5s ease-in')
      ])
    ])
  ]
})
export class RecipeItemComponent {

  @Input() recipe!: RecipePreview;

  constructor(private router: Router, private route: ActivatedRoute) { }

  onViewRecipe() {
    let id = this.route.snapshot.paramMap.get('id');
    if(id) {
      // searching by title
      if(this.route.snapshot.paramMap.has('title')) {
        let searchTerm = this.route.snapshot.paramMap.get('title');
        this.router.navigate(['../search', searchTerm, this.recipe.id]);
      }
      // searching by category
      if(this.route.snapshot.paramMap.has('category')) {
        let searchTerm = this.route.snapshot.paramMap.get('category');
        this.router.navigate(['../category', searchTerm, this.recipe.id]);
      }
      // favourites
      if(!this.route.snapshot.paramMap.has('category') || !this.route.snapshot.paramMap.has('title')) {
        this.router.navigate(['../favourites', this.recipe.id]);
      }
    } else {
      this.router.navigate([this.recipe.id], {relativeTo: this.route});
    }
  }

}
