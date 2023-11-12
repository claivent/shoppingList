//@@viewOn:imports
import { createVisualComponent, Utils, ContentSizeProvider, Lsi } from "uu5g05";
import Config from "./config/config.js";
import SItem from "./s-item";
import Uu5Elements from "uu5g05-elements";
import { Grid } from "uu5g05-elements";
import Uu5Tiles from "uu5tilesg02";
import Uu5TilesElements from "uu5tilesg02-elements";


import Uu5TilesControls from "uu5tilesg02-controls";


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

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());




    const products = [...props.products];
    const products2 = [...props.products];


console.log(props.products)
    const blockProps = {
      header: (
        <Uu5Elements.Text category="story" segment="heading" type="h4">
          SearchButton
        </Uu5Elements.Text>
      ),
      card: "full",
    };



    const SERIE_LIST = [
      { value: "name", label: "Name", dataItem: (products2) => <SItems value="name" data={products2.data} /> },
      { value: "category", label: "category", dataItem: (products2) => <SItems value="location" data={products2.data} /> },
      { value: "amount", label: { cs: "Množství", en: "Amount" }, dataItem: (products2) => <SItems value="class" data={products2.data} /> },
      { value: "unit", label: { cs: "Jednotka", en: "Order" }, dataItem: (products2) => <SItems value="order" data={products2.data} /> },
      { value: "active", label:  { cs: "Aktivní", en: "Active" }, dataItem: (products2) => <SItems value="family" data={products2.data} /> },
    ];
    return  (



      <Uu5Tiles.ControllerProvider data={products} serieList={SERIE_LIST}>

        <Uu5TilesElements.Grid />

      </Uu5Tiles.ControllerProvider>






    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { SItems };
export default SItems;
//@@viewOff:exports
