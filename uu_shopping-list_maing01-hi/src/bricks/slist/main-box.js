//@@viewOn:imports
import { createVisualComponent, Utils, useState, useSession } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Config from "./config/config.js";
import SearchBar from "./search-bar";
import SItems from "./s-items";
import Footbar from "./footbar";
import Uu5Forms from "uu5g05-forms";
import {useSubAppData, useSystemData} from "uu_plus4u5g02";




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
    const [products, setProducts] = useState(props.initialProducts);
    const [list, setList] = useState(props.initialList)
    const[modalOpen, setModalOpen] = useState([false, 0]);


    //@@viewOff:private


    function  handleSubmit(e){
      const data =e.data.value; /* data z  formuláře*/
      addItem(data);
      setModalOpen(false, 0);
    }
    function addItem(data){
      //save data
      setProducts(([...actualItemList])=>{
        console.log (actualItemList);
        actualItemList.push({id: Utils.String.generateId(),  ...data, active: true, });
        return actualItemList;
      })
    }
    function handleEditListName(e){
      setList(()=>list.name=e.data.value)
      setModalOpen(false, 0);
    }
    function handleDelete(id) {
      setProducts(([...actualItemList]) => { /* [...actualBookList] vytvoří kopii booklistu*/
        const index = actualItemList.findIndex((item) => item.id === id);
        actualItemList.splice(index, 1);/* smažu takto jednu položku*/
        return actualItemList;
      })
    }
    function handleItemActive(id, checked) {
      setProducts(([...actualItemList]) => { /* [...actualBookList] vytvoří kopii booklistu*/
        const index = actualItemList.findIndex((item) => item.id === id);
        actualItemList[index].active = checked;
        console.log(id, index);
        return actualItemList;
      })
    }


    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());

    return  (

      <Uu5Elements.Block
        {...attrs}
        header={list.name}
        headerType="title"
        actionList={[{icon: "uugds-pencil", onClick: ()=> setModalOpen([true, 0])   }]} //TODO modal
      >

        <Uu5Elements.Block
              {...attrs}
              header="Items list"
              headerType="title"
              actionList={[{icon: "uugds-plus", onClick: ()=> setModalOpen([true, 1])  }]} //TODO modal
        >


              <SearchBar
                isChecked = {checked === true}   onShow={() => {
                  setChecked(!checked);
              }}
              />
          <Uu5Elements.Grid className={Config.Css.css({maxWidth: "100%"})}>
              <SItems
                products={products}
                isActive = {checked}
                isItemActive={handleItemActive}
                onDelete={handleDelete}
              />
          </Uu5Elements.Grid>



          <Uu5Forms.Form.Provider key={modalOpen[1]} onSubmit = {handleSubmit}>
            <Uu5Elements.Modal
              open={modalOpen[1] === 1 ? modalOpen[0]: false  }
              onClose={ ()=> setModalOpen(false, 0)}
              header="Create Shop Item"
              footer={
                <div>
                  <Uu5Forms.CancelButton  onClick={()=> setModalOpen(false, 0)} />
                  <Uu5Forms.SubmitButton  />
                </div>
              }
            >
              <Uu5Forms.FormText name="name" label = "Name"/>
              <Uu5Forms.FormText name="amount"   label = "Amount"/>
              <Uu5Forms.FormText name="unit"   label = "Unit"/>
            </Uu5Elements.Modal>
          </Uu5Forms.Form.Provider>

            <Uu5Forms.Form.Provider key={modalOpen[0]} onSubmit = {handleEditListName}>
            <Uu5Elements.Modal
              open={modalOpen[1] === 0 ? modalOpen[0]: false  }
              onClose={ ()=> setModalOpen(false, 0)}
              header="Edit name"
              footer={
                <div>
                  <Uu5Forms.CancelButton onClick={()=> setModalOpen(false, 0)} />
                  <Uu5Forms.SubmitButton  />
                </div>
              }
            >
              <Uu5Forms.FormText initialValue={list.name} name="name" label = "Změn jméno"/>

            </Uu5Elements.Modal>
            </Uu5Forms.Form.Provider>





              <Footbar />

        </Uu5Elements.Block>

  </Uu5Elements.Block>

    )
    //@@viewOff:render
  }
})

//@@viewOn:exports
export { MainBox };
export default MainBox;
//@@viewOff:exports
