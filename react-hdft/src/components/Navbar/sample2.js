// import React from "react";
// import { useFileUpload } from "use-file-upload";

// const Sample2 = () => {
//   const defaultSrc = <img src={`${window.location.origin}/avatar.png`} />;
//   // "https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png";

//   const [files, selectFiles] = useFileUpload();
//   return (
//     <div>
//       <img src={files?.source || defaultSrc} alt="preview" />
//       <div>
//         <button
//           onClick={() =>
//             selectFiles(
//               { accept: "image/*" },
//               ({ name, size, source, file }) => {
//                 console.log("Files Selected", { name, size, source, file });
//               }
//             )
//           }
//         >
//           画像をアップ
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sample2;
