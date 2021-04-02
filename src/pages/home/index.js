import "./index.sass";
import "./index.pug";

import "./empower";
import "./choose";
import "./advice";
import initService from "./service";
import "./clients";
import "./newsletter";
import "./touch";
import "./consulting";

export default () => {
  initService();
};
