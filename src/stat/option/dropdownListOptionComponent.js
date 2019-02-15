import React,{Component} from "react";

export default class extends Component {

    render(){
        return (
            <div>
                <div className="insp-row">
                    <div>
                        <div className="insp-dropdown-list insp-inline-row"
                             data-list-ref={this.props.data.name + "List"}
                             data-name={this.props.data.name} id={this.props.data.id?this.props.data.id:""}>
                            <div className="title insp-inline-row-item insp-col-4 localize">
                                {this.props.data.caption}
                            </div>
                            <div className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                <div style={{width: "100%", height: "100%"}}>
                                    {(()=>{
                                        if (this.props.data.itemid)
                                            return (<div id={this.props.data.itemid}></div>)
                                        else
                                            return(<span className="display"></span>)
                                    })()}
                                    <span className="caret">
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
