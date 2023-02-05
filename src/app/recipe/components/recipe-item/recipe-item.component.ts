import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipePreview } from '../../models/recipe-preview.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {

  @Input() recipe!: RecipePreview;

  constructor(private router: Router, private route: ActivatedRoute) { }

  onViewRecipe() {
    this.router.navigate([this.recipe.id], {relativeTo: this.route});
  }

}
