//@@viewOn:imports
import { createVisualComponent, Utils, useState } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Config from "./config/config.js";
import SearchBar from "./search-bar";
import SItems from "./s-items";
import Footbar from "./footbar";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({
    BackgroundColor: "grey",
  }),
};
//@@viewOff:css

const MainBox = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "MainBox",

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
    const [checked, setChecked] = useState(false);
    const [products, setProducts] = useState(props.products);
    const[modalOpen, setModalOpen] = useState(false);

    //@@viewOff:private

  function showActiveItems(products){
      setProducts( () => {
        products.filter((prod) =>{

        } );
      });
  }


    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());

    return  (
      <Uu5Elements.Block
            {...attrs}
            header="Block"
            headerType="title"
            actionList={[{icon: "uugds-plus", onClick: ()=> setModalOpen(true)  }]} //TODO modal
      >

            <SearchBar
              isChecked = {checked === true}
              onShow={() => {
                setChecked(!checked);
            }}
            />
            <SItems
              products={products}
              isActive = {checked}
            />
            <Footbar />
      </Uu5Elements.Block>


    )
    //@@viewOff:render
  }
})

//@@viewOn:exports
export { MainBox };
export default MainBox;
//@@viewOff:exports
