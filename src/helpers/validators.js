/*eslint-disable*/
import Vue from "vue";

export const Validator = {
    validate(validations) {
        let isValid = true;
        for (const validation in validations) {
            if (!isValid) return;
            if (validations.hasOwnProperty(validation)) {
                const value = validations[validation];
                let status = true;
                if (validation === "required") {
                    status = this.required(value);
                } else if (validation === "number") {
                    status = this.number(value);
                } else if (validation === "email") {
                    status = this.email(value);
                } else if (validation === "mobile") {
                    status = this.mobile(value);
                } else if (validation === "otp") {
                    status = this.otp(value);
                } else if (validation === "arrayRequired") {
                    status = this.arrayRequired(value);
                }

                isValid = status;
            }
        }
        return isValid;
    },
    email(email) {
        const error = "Please Provide valid Email";
        if (!email) {
            Vue.toasted.error(error);
            return false;
        }

        const format = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/i;

        const validation = format.test(email.toString().toLowerCase());

        if (!validation) Vue.toasted.error(error);

        return validation;
    },
    number(inputs) {
        let validation = true;

        inputs.forEach(input => {
            if (!validation) return;

            const error = `Please Enter Valid ${input.name}`;

            if (!input.val) {
                Vue.toasted.error(error);
                validation = false;
                return;
            }

            validation = () => {
                let isNumber = !isNaN(parseInt(input.val));

                if (input.val.length)
                    return isNumber && input.val.length === input.length;

                return isNumber;
            };
            if (!validation) Vue.toasted.error(error);
        });
        return validation;
    },
    required(inputs) {
        let validation = true;

        inputs.forEach(val => {
            if (!validation) return;

            if (!val) {
                Vue.toasted.error("Please check your inputs Again!");
                validation = false;
            }
        });
        return validation;
    },
    arrayRequired(inputs) {
        let validation = true;

        inputs.forEach(val => {
            if (!validation) return;

            if (!val.length) {
                Vue.toasted.error("Please check your inputs Again!");
                validation = false;
            }
        });
        return validation;
    }
};
