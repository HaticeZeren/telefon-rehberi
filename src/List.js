import React from 'react';
import './List.css';
export class List extends React.Component{
    
    constructor(){
        super();
        this.onChangeFilter=this.onChangeFilter.bind(this);
        this.onSubmitDelete=this.onSubmitDelete.bind(this);
        this.onSubmitUpdate=this.onSubmitUpdate.bind(this);
    }
    state={
       filter:'',
       isim:"",
       telefon:""
    };

    onChangeFilter(e){
        console.log(e.target.value);
       this.setState({
           [e.target.name]:e.target.value
       })
    }
    onSubmitDelete(e){
     console.log(e.target.id);
     const id=e.target.id;
     this.props.deleteContacts({id});
    }
    onSubmitUpdate(e){
        console.log(e.target.id);
        const id=e.target.id;
        this.props.updateContacts({id});
    }
    render(){
        //her görüntü değişiminde çalışıyor.
        const filterContact=this.props.contacts.filter(
            contact=>{
                return contact.isim.toLowerCase().indexOf(this.state.filter.toLowerCase())!==-1 || contact.telefon.toLowerCase().indexOf(this.state.filter.toLowerCase())!==-1
                
            }

          )
          console.log(filterContact);

        return(
            <div className="ListArea">
                <input name="filter" id="filter" placeholder="Telefon/İsim Giriniz..."  onChange={this.onChangeFilter}></input>
                
                  <ul className="Liste">
                  {
                           filterContact.map((eleman)=>{
                               return(
                                   <li key={eleman.telefon}>
                                       <span className="isim" id="isim">{eleman.isim}</span>
                                       <span className="telefon" id="telefon">{eleman.telefon}</span>
                                   </li>
                                
                               )
                           })
                        }
                  </ul>

                <table>
                <tbody>

                        {
                           filterContact.map((eleman)=>{
                               return(
                                   <tr key={eleman.telefon}>
                                       <td>{eleman.isim}</td>
                                       <td>{eleman.telefon}</td>
                                       <td><button id={eleman.telefon} onClick={this.onSubmitDelete}>Sil</button></td>
                                       <td><button id={eleman.telefon}  onClick={this.onSubmitUpdate}>Güncelle</button></td>

                                   </tr>
                                
                               )
                           })
                        }
                   </tbody>
                </table>
            </div>
        );
    }
}