import { Link, Paper, Typography, useTheme } from "@mui/material";

import { CustomIconButton } from "../";

function BookmarkBox({
  isVisible,
  isIconVisible,
  hideLink,
  bookmarkBoxLink,
  iconName,
  iconSize,
  handleClick,
  handleClickIcon,
  handleStyle,
  handleStyleIcon,
  paperVariant,
  iconVariant,
  children,
}) {
  const { palette } = useTheme();

  const Component = () => {
    return (
      <Paper
        onClick={handleClick}
        draggable="false"
        className={handleStyle}
        variant={paperVariant}
      >
        <CustomIconButton
          isVisible={isIconVisible}
          name={iconName}
          size={iconSize}
          handleClick={handleClickIcon}
          handleStyle={handleStyleIcon}
          variant={iconVariant}
        />
        {!hideLink ? (
          bookmarkBoxLink !== "" ? (
            <Link underline="none" href={bookmarkBoxLink} variant="h6">
              {children}
            </Link>
          ) : (
            <Typography color={palette.grey.A200}>{children}</Typography>
          )
        ) : null}
      </Paper>
    );
  };

  return isVisible ? <Component /> : null;
}

export default BookmarkBox;
