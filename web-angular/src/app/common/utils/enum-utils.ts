import { ValueLabel } from "src/app/core/models/value-label";

export class EnumUtils {

  public static getValuesLabels(_enum: any): ValueLabel[] {
    return Object.entries(_enum).map(([key, value]) => ({
      value: key,
      label: value
    } as ValueLabel));
  }

}
