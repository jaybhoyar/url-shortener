// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs";
import "../stylesheets/application.scss";
import * as ActiveStorage from "@rails/activestorage";
import "channels";
var ReactRailsUJS = require("react_ujs");
var componentRequireContext = require.context("src", true);

Rails.start();
ActiveStorage.start();
ReactRailsUJS.useContext(componentRequireContext);
// Support component names relative to this directory:
