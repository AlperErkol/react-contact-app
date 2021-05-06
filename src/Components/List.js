import React, { Component } from "react";
import PropTypes from "prop-types";

class List extends Component {
    
    state = {
        filterText : '',
        
    }
    
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        
    };

    
    onChangeFilter = e =>{

        this.setState(
            {
                filterText : e.target.value 
            }
        );

    
    }

    openOverlay= _ => {
        const overlay = document.querySelector(".overlay");
        if (!overlay.classList.contains("open")) {
        overlay.classList.add("open");
        }
    }

    closeOverlay= _ => {
        const overlay = document.querySelector(".overlay");
        overlay.classList.remove("open");
    }

    onHover= e =>{

        const starIcon = e.target;
        if(starIcon.classList.contains("fa-star-o")){
            starIcon.classList.add("fa-star");
            starIcon.classList.remove("fa-star-o");
        }
        else
        {
            starIcon.classList.add("fa-star-o");
            starIcon.classList.remove("fa-star");
        }


    }

    tag= contact =>{

        const arr = contact.name.split(" ");
        if(arr.length===1){

            return arr[0].charAt(0).toUpperCase();

        }
        else{

            let str = arr[0].charAt(0)+arr[1].charAt(0);
            return str.toUpperCase();

        }


    }

    onContextMenu=(contact)=>{
        
        this.props.removeContact({
            ...contact
        });

    }
    

    render() {


        const filteredContacts = this.props.contacts.filter(

            contact => {

                if(contact.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1){

                    return contact;

                }
                return null;
            }


        )

        return (
        <section className="list-wrapper">
            <section className="overlay">
                <div className="overlay_content">
                    <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter name or phone to filter..."
                    onChange={this.onChangeFilter}
                    />
                    <div onClick={this.closeOverlay} className="overlay_content_close">
                    <span></span>
                    <span></span>
                    </div>
                </div>
            </section>

            <section className="header">
                <div className="toggle">
                    <input id="switch" className="toggle_input" type="checkbox" />
                    <label className="toggle_label" htmlFor="switch"></label>
                </div>

                <p>Contacts</p>
                <div onClick={this.openOverlay} className="search">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
            </section>

            <section className="listArea">
                <div className="listArea-content">
                    <ul className="listArea-content-list">
                    {filteredContacts.map((contact) => {
                        return (
                        <li key={contact.name} className="listArea-content-list-item" onClick={this.onAlper}>
                            <div className="listArea-content-list-item-header">
                                <i  onMouseOver={this.onHover} onMouseOut={this.onHover} className="star-icon fa fa-star-o" aria-hidden="true"></i>
                                <span className="profile_pic">{this.tag(contact)}</span>
                                <span className="name">{contact.name}</span>
                            </div>
                            <span onContextMenu={e=>{e.preventDefault(); this.onContextMenu(contact)}} className="phone">{contact.phone}</span>
                        </li>
                        );
                    })}
                    </ul>
                </div>
            </section>
        </section>
        );
    }
}

export default List;
