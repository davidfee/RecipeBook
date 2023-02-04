import { Component, Input } from '@angular/core';
import { RecipePreview } from '../../models/recipe-preview.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {

  @Input() recipe!: RecipePreview;

}
