import { AntPath } from "../../src/plugin/main";

export default class CustomAntPath extends AntPath {
  constructor(path, options) {
    super(path, { ...options, color: "red" });
  }
}
