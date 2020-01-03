import React from "react";
import "./List.scss";
import "./App";

class List extends React.Component {
    onInputChange(event) {
        console.log(event.target.value)
        return (
          <>
            <List />
            <List />
          </>
        )

    }
    render () {
        return (
            <div>
                <h1 class="list-container"> This is our list container!</h1>
                <form>
                <input onSubmit={this.onInputChange} />
                <input type="submit" value="ADD ITEM" />
                </form>
            </div>
        )
    }
}
export default List;