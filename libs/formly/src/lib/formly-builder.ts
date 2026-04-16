import { ConfigOption } from '@ngx-formly/core';
import { FormlyInputField } from './formly-input-field/formly-input-field.type';
// import { TypeOption, ValidationMessageOption, ValidatorOption, WrapperOption } from 'node_modules/@ngx-formly/core/lib/models';

export const config: ConfigOption = {}

type TypeOptions = ConfigOption['types'];
type ValidationMessageOptions = ConfigOption['validationMessages'];
type ValidatorOptions = ConfigOption['validators'];
type WrapperOptions = ConfigOption['wrappers'];

export class FormlyBuilder {
    #types: TypeOptions = [];
    #validators: ValidatorOptions = [];
    #validationMessages: ValidationMessageOptions = [];
    #wrappers: WrapperOptions = [];

    static create(): FormlyBuilder {
        const builder = new FormlyBuilder();

        builder.#types?.push({ name: 'input', component: FormlyInputField });

        return builder
    }

    build(): ConfigOption {
        return {
            types: this.#types,
            validators: this.#validators,
            validationMessages: this.#validationMessages,
            wrappers: this.#wrappers,
        };
    }
}