import angular from 'angular';
import './style/example.scss';

import appController from './app.controller';
import antPathExample from './ant-path-example.directive';

"use strict";
const appModule = angular.module('ant-path-example', []);

antPathExample(appModule);
appController(appModule);


appModule.run(run);

run.$inject = ['$templateCache'];
function run($templateCache) {
    const templates = require.context('./templates', true, /\.html/);
    templates.keys().forEach(url => {
        const templateName = url.replace('./', '');
        $templateCache.put(templateName, templates(url));
    });
}
