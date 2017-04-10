import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

import { ItemService } from './item.service';
import { lookupListToken } from './providers';

@Component({
  selector: 'yg-item-form',
  templateUrl: 'app/item-form.component.html',
  styleUrls: ['app/item-form.component.css']
})

export class ItemFormComponent {
  form;

  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemService,
    @Inject(lookupListToken) public lookupLists) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9 ]*$')
      ])),
      category: this.formBuilder.control('Acoustic'),
      price: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ])),
      subcategory: this.formBuilder.control('', )
    });
  }

  onSubmit(guitarItem) {
    this.itemService.add(guitarItem);
  }
}
