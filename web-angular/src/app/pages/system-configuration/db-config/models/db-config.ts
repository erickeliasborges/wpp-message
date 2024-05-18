import { DbConfigTypeType } from "src/app/pages/system-configuration/db-config/enums/db-config-type";

export interface DbConfig {
  id: number;
  type: DbConfigTypeType;
  host: string;
  port: number;
  name: string;
  username: string;
  password: string;
}
