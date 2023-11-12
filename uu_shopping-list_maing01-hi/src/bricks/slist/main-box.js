//@@viewOn:imports
import { createVisualComponent, Utils, useState } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Config from "./config/config.js";
import SearchBar from "./search-bar";
import SItems from "./s-items";
import Footbar from "./footbar";
import Uu5Forms from "uu5g05-forms";

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

    function addItem(data){
      //save data
      setProducts(([...actualItemList])=>{
        console.log (actualItemList);
        actualItemList.push({id: Utils.String.generateId(), ...data });
        return actualItemList;
      })

    }

    function  handleSubmit(e){
      const data =e.data.value; /* data z  formuláře*/
      console.log (data);

      addItem(data);
      setModalOpen(false);
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
              isChecked = {checked === true}   onShow={() => {
                setChecked(!checked);
            }}
            />
        <Uu5Elements.Grid className={Config.Css.css({maxWidth: "100%"})}>
            <SItems products={products}  isActive = {checked}   />
        </Uu5Elements.Grid>
        <Uu5Forms.Form.Provider key={modalOpen} onSubmit = {handleSubmit}>

          <Uu5Elements.Modal
            open={modalOpen}
            onClose={ ()=> setModalOpen(false)}
            header="Create Shop Item"
            footer={
              <div>
                <Uu5Forms.CancelButton />
                <Uu5Forms.SubmitButton />
              </div>
            }
          >
            <Uu5Forms.FormText name="name" label = "Name"/>
            <Uu5Forms.FormText amount="amount"   label = "Amount"/>
            <Uu5Forms.FormText unit="unit"   label = "Unit"/>

          </Uu5Elements.Modal>
        </Uu5Forms.Form.Provider>
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
