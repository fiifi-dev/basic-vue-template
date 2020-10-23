import Vue from "vue";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import {
  required,
  email,
  min,
  confirmed,
  numeric,
} from "vee-validate/dist/rules";

// Add a rule.
extend("required", {
  ...required,
  message: "this field can not be empty",
});

// Add a rule.
extend("numeric", {
  ...numeric,
  message: "this field must be a number",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

extend("min", {
  ...min,
  message: "this field  must be at least  {length} characters",
});
extend("confirmed", {
  ...confirmed,
  message: "passwords do not match",
});

extend("money", (value) => {
  let re = /^\d*(\.\d{0,2})?$/;
  if (re.test(value)) {
    return true;
  }
  return "This field must be a number eg. 1000 or 1000.00";
});



// Register it globally
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
