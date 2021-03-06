import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
    // The moduleId: module.id property sets the base 
    // for module-relative loading of the templateUrl
    moduleId: module.id,
    selector: 'hero-form',
    templateUrl: './hero-form.component.html'
})

export class HeroFormComponent {

    powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit() {this.submitted = true; }

    newHero() {
        this.model = new Hero(42, '', '');
    }

    get diagnostic() { return JSON.stringify(this.model); }
}