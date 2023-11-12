//@@viewOn:imports
import { createVisualComponent, Utils } from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
import { Text } from "uu5g05-forms";

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

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());

    const amountUnit = [props.product.amount, props.product.unit, props.product.name ]
    const name = props.product.active ? amountUnit.join(' '):
      <span style={{ color: 'red' }}>
      {amountUnit.join(' ')}
    </span>;


    return  (
          <Uu5Elements.ListItem  {...attrs}
            icon="uugds-react"
            actionList={[
              { icon: "uugds-reload", children: "Update" },
              { icon: "uugds-delete", children: "Delete", primary: true, onClick: props.onDelete },
            ]}
          >
            {name}
          </Uu5Elements.ListItem>
    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { SItem };
export default SItem;
//@@viewOff:exports
