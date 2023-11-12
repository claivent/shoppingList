import UuShoppingList from "uu_shopping-list_maing01-hi";
import { testProperties } from "uu5g05-test";

const CONFIG = {
  props: {
    // left: {
    //   values: ["Left as text", <span key="l">Left as JSX</span>, 0],
    // },
  },
  requiredProps: {
    // children: "Children content",
  },
};

describe(`UuShoppingList.Bricks.Slist.Modals`, () => {
  testProperties(UuShoppingList.Bricks.Slist.Modals, CONFIG);
});
