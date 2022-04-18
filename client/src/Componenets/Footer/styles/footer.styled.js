import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: rgba(41, 41, 43, 1);

  .block-body {
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    color: rgba(187, 198, 221, 1);
  }

  .block-header {
    display: flex;
    float: none;
    position: relative;
    z-index: 1;
    float: none;
    order: -1;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }

  .block-header img {
    display: flex;
    transition: all 0.1s ease-in-out;
    align-self: auto;
  }

  .block-header i {
    float: none;
    display: flex;
  }

  .block-header .icon {
    width: 50px;
    height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    transition: all 0.1s ease-in-out;
  }

  .block-header .icon::before {
    transition: all 0.1s ease-in-out;
  }

  .block-content {
    text-align: center;
    column-count: initial;
    column-gap: 20px;
    column-rule-width: 1px;
    column-rule-style: solid;
    position: relative;
    border-radius: inherit;
    color: rgba(114, 118, 132, 1);
  }

  .social-row {
    padding: 40px;
    display: block;
    width: 100%;
    justify-content: center;
  }

  .menu-item > a {
    text-decoration: none;
  }

  .icons-menu > ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
  }

  .icons-menu > ul > .menu-item > a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 22px;
    position: relative;
  }

  .icons-menu > ul > .menu-item > a:hover {
    color: #337ab7;
  }

  .icons-menu > ul > .menu-item > a .links-text {
    font-size: 0.47em;
    padding: 0 5px;
    margin: 3px 0 -3px 0;
    width: 100%;
    text-align: center;
    line-height: 1.2;
  }

  .social-icons .links-text {
    white-space: normal;
    overflow: visible;
    text-overflow: ellipsis;
    display: none;
  }

  .social-icons a {
    width: 30px;
    height: 30px;
  }

  .social-icons > ul > .icons-menu-item {
    padding: 5px;
  }

  .links-menu .module-body {
    flex-wrap: wrap;
    width: 100%;
  }

  .links-menu ul,
  .links-menu li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .links-menu .menu-item {
    position: relative;
    border-width: 1px 0 0 0;
    transition: all 0.08s ease-out;
    display: flex;
    align-items: center;
  }

  .links-menu .menu-item:first-child {
    border-top-width: 0;
    border-left-width: 0;
  }

  .links-menu .menu-item a {
    display: inline-flex;
    align-items: center;
    transition: all 0.08s ease-out;
    position: relative;
    width: inherit;
  }

  .links-menu .menu-item i {
    color: #337ab7;
    text-decoration: none;
  }

  .links-menu .menu-item a .menu-label {
    right: 0;
    top: auto;
    transform: translateX(100%);
  }

  .links-menu .menu-item a::before {
    line-height: 1;
  }

  .links-menu .menu-item a::after {
    display: none !important;
  }

  .links-menu .menu-item a:not([href]) {
    cursor: default;
  }

  .links-col .module-body {
    display: block;
    justify-content: flex-start;
    align-items: flex-start;
    -webkit-overflow-scrolling: touch;
    column-count: initial;
    column-rule-style: solid;
  }

  .links-col .menu-item {
    border-width: 1px 0 0 0;
    justify-content: flex-start;
    flex-grow: 0;
    width: auto;
  }

  .links-col .menu-item a .links-text {
    white-space: normal;
    color: rgba(114, 118, 132, 1);
  }

  .hoverr:hover::before {
    color: rgba(208, 30, 36, 1);
  }

  .links-col .arrow {
    margin-right: 7px;
  }

  .module-title {
    font-family: "IBM Plex Sans";
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 15px;
    text-align: left;
    text-transform: uppercase;
    text-decoration: none;
    white-space: normal;
    overflow: visible;
    text-overflow: initial;
    color: rgba(221, 221, 221, 1);
  }

  .module-title::after {
    content: "";
    display: block;
    position: relative;
    margin-top: 8px;
    left: initial;
    right: initial;
    margin-left: 0;
    margin-right: auto;
    transform: none;
    width: 50px;
    height: 1px;
    background: rgba(208, 30, 36, 1);
  }

  .module-body {
    display: block;
    justify-content: flex-start;
    -webkit-overflow-scrolling: touch;
  }

  .module-newsletter .module-body > div {
    align-self: flex-start;
  }

  .newsletter-text {
    color: rgba(114, 118, 132, 1);
    padding-bottom: 20px;
  }

  .module-newsletter .module-body .form-control {
    color: rgba(221, 221, 221, 1) !important;
    background: none !important;
    padding-left: 0px !important;
    border-width: 0px !important;
    border-bottom-width: 2px !important;
    border-style: solid !important;
    border-color: rgba(114, 118, 132, 1) !important;
    border-radius: 0px !important;
  }

  .module-newsletter .input-group .input-group-btn .btn {
    background: rgba(114, 118, 132, 1);
  }

  .input-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
  }

  .input-group .form-control {
    position: relative;
    z-index: 2;
    float: left;
    width: 100%;
    height: 100%;
    display: flex;
    margin-bottom: 0;
  }

  .input-group-btn {
    width: auto;
    height: 100%;
  }

  .input-group-btn .btn:hover {
    background: rgba(95, 123, 177, 1) !important;
  }

  .input-group-btn .btn:focus {
    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.25);
  }

  .input-group-btn .btn:active,
  .input-group-btn .btn:hover:active,
  .input-group-btn .btn:focus:active {
    box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  .module-newsletter .checkbox,
  .module-newsletter .radio {
    position: relative;
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .module-newsletter .checkbox label,
  .module-newsletter .radio label {
    min-height: 20px;
    margin-bottom: 0;
    font-weight: 400;
    cursor: pointer;
    color: rgba(114, 118, 132, 1);
  }

  .copyrights {
    background: rgba(52, 52, 56, 1);
    padding: 20px;
    justify-content: center;
  }

  .copyrights .links-text {
    color: rgba(187, 198, 221, 1);
  }

  .icons-payment a::before {
    color: rgba(221, 221, 221, 1);
    font-size: 30px;
  }

  .icons-payment a:hover::before {
    color: rgba(0, 138, 221, 1);
  }

  .icons-payment .links-text {
    white-space: normal;
    overflow: visible;
    text-overflow: ellipsis;
    display: none;
  }

  .icons-payment > ul > .icons-menu-item {
    padding: calc(15px / 2);
  }

  .icons-payment ul {
    justify-content: flex-end;
  }

  .icon-menu-icon a {
    color: rgba(114, 118, 132, 1);
  }
`;
