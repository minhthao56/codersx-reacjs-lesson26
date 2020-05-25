// import React, { Component } from "react";

// export class Pagination extends Component {
//   render() {
//     const { perPage, totalPages, handalPage } = this.props;
//     const numberPage = [];
//     for (let i = 1; i <= Math.ceil(totalPages / perPage); i++) {
//       numberPage.push(i);
//     }

//     return (
//       <div>
//         {numberPage.map((num) => {
//           return (
//             <li key={num}>
//               <button onClick={() => handalPage(num)}>{num}</button>
//             </li>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default Pagination;
