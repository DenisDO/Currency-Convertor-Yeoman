'use strict';

import headerTpl from './header.html';
import headerController from './header.controller';

export default class HeaderComponent {
    constructor() {
        this.templateUrl = headerTpl;
        this.controller = headerController;
    }
}