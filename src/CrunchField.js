import React, { Component } from "react";
import "./Modal.scss";

const CrunchField = () => {
  return (
    <div className="crunchfield-modal modal-wrapper">
      <div className="overview">
        <h1 className="modal-title">Crunchfield</h1>
        <p>
          This is a usability analysis project on the site - Crunchfield. We
          used Nielsen's 10 heuristics to assess the usability of the site on
          both desktop and mobile site.
        </p>
      </div>
      <div className="modal-section-segregator">
        <hr />
        <p className="modal-section-title"> Working Process </p>
        <hr />
      </div>
      <div className="modal-section">
        <p>
          Although this is a group project, we first worked indivisually to
          ensure our evaluation is independent and unbiased. Then we shared and
          disscussed our findings together in a goup. This impoves the
          effectiveness of the evaluation.
        </p>
        <h2>~Indivisual Evaluation~</h2>
        <p>
          First, I played around in the website while taking screen shots of
          some confusing pages or pitides I found. Then I browse the site
          carefully while paying attention to each one of the Nielsen's 10
          Heuristics to see if there is any violation. In this process, I tested
          on some extrem cases, such as buying out of stock itemes, login with
          nonexisting accounts, etc.
        </p>
        <h3>Here are some examples:</h3>
      </div>
    </div>
  );
};

export default CrunchField;
