import validate from "validate.js";

export default class SignUp {
  password: string;
  email: string;

  constructor({
    password = "",
    email = "",
  }) {
    this.password = password;
    this.email = email;
  }

  validationErrors({ mode }: { mode: "emailAndPassword" } = { mode: "emailAndPassword" }) { // I should come up with a better solution
    const constraintsPerMode = {
      emailAndPassword: {
        email: {
          presence: true,
          email: true,
        },
        password: {
          presence: true,
          length: {
            minimum: 6,
            message: "must be at least 6 characters"
          }
        },
      }
    }

    return validate(this, constraintsPerMode[mode]);
  }
}