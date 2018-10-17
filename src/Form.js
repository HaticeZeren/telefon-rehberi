import React from 'react';

export class Form extends React.Component{
constructor(){
    super();
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
}
    state={
    isim:"",
    telefon:""
    };
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value

        });
        console.log(e.target.name);
        console.log(e.target.value);
    }
    onSubmit(e){
        e.preventDefault();//varsayılanı sıfırlar.
        this.props.addContacts({...this.state});
        this.setState({
           isim:'',
           telefon:'' 
        })
    }
    render(){
        return(
            <div>

               <form onSubmit={this.onSubmit}>
                   <input name="isim" id="name" value={this.state.isim} placeholder="İsim Giriniz." onChange={this.onChange}></input>
                   <input name="telefon" id="telefon" value={this.state.telefon} placeholder="Telefon Giriniz." onChange={this.onChange}></input>
                   <br></br><br></br>
                   <button>Kaydet</button>
               </form>
            </div>
        );
    }
}