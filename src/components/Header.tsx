/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Icon } from "antd";

type Props = {
  title: string;
};

const Header = (props: Props) => (
  <header
    css={css`
      display: flex;
      justify-content: space-between;
      align-items: center;

      background-color: #121212;
      padding: 10px 20px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    `}
  >
    <h1
      css={css`
        margin-bottom: 0 !important;
        font-size: 1.25rem;
        color: #fff;
        text-transform: uppercase;
      `}
    >
      {props.title}
    </h1>
    <a
      href="https://github.com/n1ghtdev/scroll-editor"
      target="_blank"
      rel="nofollow noopener noreferrer"
      css={css`
        color: #fff;
        font-size: 2rem;
      `}
    >
      <Icon type="github" />
    </a>
  </header>
);

export default Header;
