// import React, { useState } from "react";

// import urlsApi from "apis/urls";
// import Input from "components/Input";
// import Button from "components/Button";

// const CreateTask = ({ history }) => {
//   const [originalLink, setOriginalLink] = useState("");

//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();
//   //   try {
//   //     await urlsApi.create({ task: { title, user_id: userId } });
//   //     setLoading(false);
//   //     history.push("/");
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   return (
//     <div className="mt-6">
//       <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
//         <div className="mt-1 rounded-md shadow-sm">
//           <input
//             type={type}
//             required={required}
//             value={value}
//             // onChange={(e) => {}}
//             placeholder={placeholder}
//             className="block w-full px-3 py-2 placeholder-gray-400
//           transition duration-150 ease-in-out border
//           border-gray-300 rounded-md appearance-none
//           focus:outline-none focus:shadow-outline-blue
//           focus:border-blue-300 sm:text-sm sm:leading-5"
//           />
//         </div>
//         <Button type="submit" buttonText={"Shorten Link"} />
//       </form>
//     </div>
//   );
// };

// export default CreateTask;
