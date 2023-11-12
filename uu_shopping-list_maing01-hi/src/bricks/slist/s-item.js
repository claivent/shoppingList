//@@viewOn:imports
import {createVisualComponent, useState, Utils} from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
import Uu5Forms, { Text } from "uu5g05-forms";

//@@viewOff:imports

//@@viewOn:constants

//@@viewOff:constants

//@@viewOn:css

const Css = {
  main: () => Config.Css.css({}),
  redText: () =>
    Config.Css.css({
      color: "red",
    }),

};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const SItem = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "SItem",

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
    const[name, setName] = useState(props.product.name);
    const[amount, setAmount] = useState(props.product.amount);
    const[unit, setUnit] = useState(props.product.unit);
    //const[checked, setChecked] = useState(props.product.active);
    const checked = props.product.active
    //@@viewOn:interface
    //@@viewOff:interface


    function handleIsItemActive(id, checked){

      //setChecked(c);
      props.isItemActive(id,checked)

    }
    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());

    //const amountUnit = [props.product.amount, props.product.unit, props.product.name ]
   // const name = props.product.active ? amountUnit.join(' '):
     // <span style={{ color: 'red' }}>
      //{amountUnit.join(' ')}
    //</span>;


      console.log(props.product)
    return  (
          <Uu5Elements.ListItem  {...attrs}
            icon="uugds-dnd" actionList={[

              { icon: "uugds-delete",  primary: true, onClick: props.onDelete },
            ]}
          >
            <Uu5Forms.Text.Input value = {name} onChange={(e)=> setName(e.data.value)} placeholder="Name" significance="distinct"/>
            <Uu5Forms.Text.Input value = {amount} onChange={(e)=> setAmount(e.data.value)} placeholder="Author" significance="distinct"/>
            <Uu5Forms.Text.Input value = {unit} onChange={(e)=> setUnit(e.data.value)} placeholder="Author" significance="distinct"/>
            <Uu5Forms.Checkbox
              value={checked}
              box={checked} name="active"
              label="nakoupeno"
              onChange={(e)=>{handleIsItemActive(props.product.id, e.data.value  )}}
            >
            </Uu5Forms.Checkbox>
          </Uu5Elements.ListItem>
    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { SItem };
export default SItem;
//@@viewOff:exports
