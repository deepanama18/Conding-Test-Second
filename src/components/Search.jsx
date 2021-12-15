import axios from "axios";
import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            search: ""
        }
    }


    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
            console.log(res.data)
            this.setState({ userData: res.data })
        })
    };

    render() {

        return (
            <div>
                <div className="container">
                <input type="text" placeholder="Search"
                    value={this.state.search}
                    onChange={(e) => { console.log(e); this.setState({ search: e.target.value }) }}/>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.userData.filter((ele, index) => {
                                const name = ele.name.toLowerCase().includes(this.state.search.toLowerCase());
                                const username = ele.username.toLowerCase().includes(this.state.search.toLowerCase());
                                const email = ele.email.toLowerCase().includes(this.state.search.toLowerCase());

                                return name || username || email;
                            })
                                .map((ele, index) => {
                                return <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{ele.name}</td>
                                    <td>{ele.username}</td>
                                    <td>{ele.email}</td>
                                </tr>
                            })
                        }
   
   
                    </tbody>
                    </table>
                    </div>
            </div>
        )
    }
}

export default Search