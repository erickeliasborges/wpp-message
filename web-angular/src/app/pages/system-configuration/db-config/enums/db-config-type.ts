import { ValueLabel } from "src/app/core/models/value-label";
import { EnumUtils } from "src/app/common/utils/enum-utils";

enum DbConfigType {
  POSTGRESQL = 'PostgreSQL',
  ORACLE = 'Oracle',
  FIREBASE = 'Firebase',
}

export type DbConfigTypeType = keyof typeof DbConfigType;

export function getDbConfigTypeLabelsValues(): ValueLabel[] {
  return EnumUtils.getValuesLabels(DbConfigType);
}
