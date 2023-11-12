//@@viewOn:imports
import {createVisualComponent, Utils, ContentSizeProvider, useState} from "uu5g05";
import Config from "./config/config.js";
import SItem from "./s-item";
import Uu5Elements from "uu5g05-elements";
import { Grid } from "uu5g05-elements";
import Uu5Tiles from "uu5tilesg02";
import Uu5TilesElements from "uu5tilesg02-elements";


//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),

};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const SItems = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "SItems",

  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps




  render(props) {
    //@@viewOn:private
    const { children } = props;
    //@@viewOff:private

    const products = props.products;
    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    function handleDelete(id) {
      // Update parent's state instead of local state
      props.onDelete (id);
    }


    return  (
      <Uu5Elements.Grid>
        {products
          .filter((product) => props.isActive ? product.active : true)
          .map((product) => (
            <SItem
              key={product.id}
              product={product}
              onDelete={() => handleDelete(product.id)}
              isItemActive={props.isItemActive}
            />
          ))}
      </Uu5Elements.Grid>

    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { SItems };
export default SItems;
//@@viewOff:exports
