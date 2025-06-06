
import { Deserializable } from "../Interface/deserializable";

export class Profile implements Deserializable {
  id?: number;
  active?: boolean = true;
  first_name?: string = "";
  mid_name?: string ="";
  last_name?: string = "";
  custom_id?: string;
  created_at?: string;
  updated_at?: string;

  deserialize(input: any): this {
    if (input) {
      Object.assign(this, input);
    }
    return this;
  }

  toOdata(): Object {
    return {
      ...this,
      created_at: undefined,
      updated_at: undefined,
    };
  }
}
