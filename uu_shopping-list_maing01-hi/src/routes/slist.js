//@@viewOn:imports
import {createVisualComponent, Utils, Content, useSession} from "uu5g05";
import Config from "./config/config.js";
import { withRoute } from "uu_plus4u5g02-app";
import Tree from "../bricks/help/tree";
import RouteBar from "../core/route-bar.js";
import importLsi from "../lsi/import-lsi.js";


//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
  l1: () =>
    Config.Css.css({
      fontSize: 48,
      lineHeight: "1em",
      display: "block",
      marginRight: "20px",
    }),
  l2: () =>
    Config.Css.css({
      fontSize: 48,
      lineHeight: "1em",
      display: "block",
      marginRight: "40px",
    }),
  l3: () =>
    Config.Css.css({
      fontSize: 48,
      lineHeight: "1em",
      display: "block",
      marginRight: "40px",
    }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let Slist = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Slist",

  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { identity } = useSession();
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());


    function ProductCategoryRow({ category }) {
      return (
        <tr>
          <th colSpan="2">
            {category}
          </th>
        </tr>
      );
    }

    function SItem({ product }) {
      const name = product.active ? product.name :
        <span style={{ color: 'red' }}>
      {product.name}
    </span>;
      const amountUnit = [product.amount, product.unit]
      return (
        <tr>
          <td>{name}</td>
          <td>{amountUnit.join(' ')} </td>
        </tr>
      );
    }
    function SItems({ products }) {
      const rows = [];
      let lastCategory = null;

      products.forEach((product) => {
        if (product.category !== lastCategory) {
          rows.push(
            <ProductCategoryRow
              category={product.category}
              key={product.category} />
          );
        }
        rows.push(
          <SItem
            product={product}
            key={product.name} />
        );
        lastCategory = product.category;
      });

      return (
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
          </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
    function SearchBar() {
      return (
        <form>
          <input type="text" placeholder="Search..." />
          <label>
            <input type="checkbox" />
            {' '}
            Only show products in stock
          </label>
        </form>
      );
    }
    function MainBox({ products }) {
      return (
        <div>
          <SearchBar />
          <SItems products={products} />
        </div>
      );
    }
    const PRODUCTS = [
      {category: "Fruits", amount: 5, unit: "Kg", active: true, name: "Apple"},
      {category: "Toy", amount: 4, unit: "pieces", active: true, name: "Car"},
      {category: "Fruits", amount: 5, unit: "pieces", active: false, name: "Passionfruit"},
      {category: "Vegetables", amount: 10, unit: "Stock", active: true, name: "Spinach"},
      {category: "Vegetables", amount: 4, unit: "Stock", active: false, name: "Pumpkin"},
      {category: "Vegetables", amount: 5, unit: "Kg", active: true, name: "Peas"}
    ];


    return(
      <div {...attrs}>

          <RouteBar />
          <MainBox products={PRODUCTS} />;
        <Tree />


      </div>
    ) ;
    //@@viewOff:render
  },
});


Slist = withRoute(Slist, { authenticated: false }); //TODO return back to true



//@@viewOn:exports
export { Slist };
export default Slist;
//@@viewOff:exports
