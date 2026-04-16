import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FieldType, FieldTypeConfig, FormlyFieldProps } from '@ngx-formly/core';

@Component({
  selector: 'asepa-formly-input-field',
  imports: [
    FormlyModule,
    ReactiveFormsModule
  ],
  templateUrl: './formly-input-field.type.html',
  styleUrl: './formly-input-field.type.scss',
})
export class FormlyInputField extends FieldType<FieldTypeConfig<FormlyFieldProps>> { }
