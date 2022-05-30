import { useContext } from "react";

import { Link, Paper, styled } from "@mui/material";

import { SettingsContext, useActions } from "../../tools";
import { DeleteIconButton } from "../";

import styles from "../styles/bookmarkBox.module.css";

function BookmarkBox({
  isVisible,
  isActive,
  isAddBox,
  code,
  bookmarkBoxLink,
  handleClick,
  children,
}) {
  const { state } = useContext(SettingsContext);
  const { removeBookmarkBox } = useActions();

  const StyledPaper = styled(Paper)(
    ({ theme }) => `
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 150px;
    max-width: 150px;
    min-height: 100px;
    max-height: 100px;
    margin: 10px;
    padding: 10px;
    cursor: pointer;
    border: ${
      isActive ? "1px solid " + theme.palette.secondary.main : "default"
    };
    &:hover: {
      boxShadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.23),
    },
  `
  );

  const Component = () => {
    return (
      <StyledPaper
        key={code}
        draggable="false"
        variant="outlined"
        onClick={handleClick}
      >
        {!isAddBox ? (
          <DeleteIconButton
            isVisible={state.mainGridData.isDraggable}
            handleClick={() => removeBookmarkBox({ bookmarkBoxCode: code })}
            handleStyle={styles.deleteIcon}
          />
        ) : (
          <></>
        )}
        <Link underline="none" href={bookmarkBoxLink}>
          {children}
        </Link>
      </StyledPaper>
    );
  };

  return isVisible ? <Component /> : null;
}

export default BookmarkBox;
