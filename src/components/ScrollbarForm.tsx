/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

type Props = {
  children: React.ReactNode;
};

const ScrollbarForm = (props: Props) => (
  <div
    css={css`
      height: 90%;
      ::after {
        content: "";
        position: absolute;
        bottom: 85px;
        width: 100%;
        height: 50px;
        background: linear-gradient(rgba(255, 255, 255, 0.001), #eef2f8);
        pointer-events: none;
      }
    `}
  >
    <div
      css={css`
        overflow-y: scroll;
        height: 100%;
        position: relative;

        &::-webkit-scrollbar {
          width: 2px;
        }
        &::-webkit-scrollbar-track {
          background-color: transparent;
        }
        &::-webkit-scrollbar-thumb {
          background-color: #a4acba;
        }
      `}
    >
      {props.children}
    </div>
  </div>
);

export default ScrollbarForm;
