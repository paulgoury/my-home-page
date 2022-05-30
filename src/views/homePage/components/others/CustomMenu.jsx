// import { useContext, useState } from "react";

// import { v4 as uuidv4 } from "uuid";

// import {
//   BottomNavigation,
//   BottomNavigationAction,
//   Link,
//   Menu,
//   MenuItem,
// } from "@mui/material";
// import {
//   usePopupState,
//   bindTrigger,
//   bindMenu,
// } from "material-ui-popup-state/hooks";
// import { SettingsContext, useActions } from "../../tools";
// import { AddIconButton, DeleteIconButton } from "../";

// const CustomMenu = ({ menuCode, menuTitle, menuItem }) => {
//   const [value, setValue] = useState(0);

//   const { state } = useContext(SettingsContext);
//   const { removeBookmarkDropdownLink } = useActions();

//   const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" });

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div>
//       <BottomNavigation showLabels value={value} onChange={handleChange}>
//         <BottomNavigationAction
//           label={menuTitle}
//           {...bindTrigger(popupState)}
//           sx={{ backgroundColor: "background.paper" }}
//         />
//       </BottomNavigation>
//       <Menu {...bindMenu(popupState)}>
//         {menuItem.map((item) => (
//           <MenuItem onClick={popupState.close}>
//             {state.mainGridData.isDraggable ? (
//               <DeleteIconButton
//                 handleClick={() =>
//                   removeBookmarkDropdownLink({
//                     bookmarkDropdownCategoryCode: menuCode,
//                     bookmarkDropdownLinkCode: item.code,
//                   })
//                 }
//                 handleStyle={styles.icon}
//               />
//             ) : null}
//             <Link underline="none" href={item.link}>
//               {item.name}
//             </Link>
//           </MenuItem>
//         ))}
//         {state.mainGridData.isDraggable ? (
//           <MenuItem
//             key={uuidv4()}
//             onClick={() =>
//               handleOpenAddCategoryItem({
//                 bookmarkCategory: bookmarksDropdownCategoryTitle,
//               })
//             }
//           >
//             <AddIconButton handleStyle={styles.icon} />
//             <Link underline="none">Nuevo</Link>
//           </MenuItem>
//         ) : null}
//       </Menu>
//     </div>
//   );
// };

// export default CustomMenu;
