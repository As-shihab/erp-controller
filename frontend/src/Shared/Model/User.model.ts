
import { Deserializable } from "../Interface/deserializable";
import { Profile } from "./Profile.model";

export class User implements Deserializable {
  id?: number;
  active?: boolean = true;
  name?: string = "";
  custom_id?: string;
  email?: string = "";
  password?: string = "";
  profile?: Profile = new Profile().deserialize({});
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
