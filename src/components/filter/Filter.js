import React from "react";
// import { connect } from "react-redux";
// import { filterContact } from "../../redux/actions";

// const Filter = props => {
//   return (
//     <>
//       <p>Find contact by name</p>
//       {/* {console.log("filter", props)} */}
//       <input
//         type="text"
//         onChange={e => {
//           props.filterContact(e.target.value);
//           console.log(e.target.value);
//         }}
//       />
//     </>
//   );
// };

// const mapDTP = {
//   filterContact
// };

const Filter = ({ getName, value }) => (
  <>
    <p>Find contact by name</p>
    <input type="text" onChange={getName} value={value} />
  </>
);

// export default connect(null, mapDTP)(Filter);
// mapStateToProps, mapDispatchToProps, mergeProps
export default Filter;
