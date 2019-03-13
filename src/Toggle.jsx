import React, { useState } from "react";

const Toggle = () => {
    const [ isToggled, setToggle ] = useState(false);

    return (
        <div>
            <button onClick={() => setToggle(!isToggled)} >Toggle</button>
            {isToggled && <h2>Off Da Hook Yo!</h2>}
        </div>
    )
};

export default Toggle

// export default class Toggle extends Component {
//     state = {
//         isToggled: false
//     };
//
//     toggle = () => {
//         this.setState(state => {
//             return { isToggled: !state.isToggled };
//         });
//     };
//
//     render() {ß
//         return (
//             <div>
//                 <button onClick={this.toggle}>Toggle</button>
//                 {this.state.isToggled && <h2>Off Da Hook Yo!</h2>}
//             </div>
//         );
//     }
// }
