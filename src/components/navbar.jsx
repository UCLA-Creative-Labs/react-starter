/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const side = css({
  display: "flex"
});

const navbar = css({
  display: "flex",
  justifyContent: "space-between",
  padding: "1em"
});

const NavBar = props => (
  <div css={navbar}>
    <div css={side}>{props.left}</div>
    <div css={side}>{props.right}</div>
  </div>
);

export default NavBar;
