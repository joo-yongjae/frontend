/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
              <a
                href="#"
              >
                개인정보처리방침
              </a>
              </li>
              <li>
              <a
                href="#"
                //target="_blank"
              >
                이용약관
              </a>
              </li>
              <li>
              <a
                href="#"
                //target="_blank"
              >
                저작권정책
              </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
          ©2MonthsAgo
        </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
