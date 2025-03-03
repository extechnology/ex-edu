"use client";
import styled from 'styled-components';

const ThemeButton = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <input title='title' type="checkbox" id="checkbox" />
        <label title='label' htmlFor="checkbox" className="button">
          <span className="icon">
            <svg data-darkreader-inline-fill className="fill"  xmlSpace="preserve" viewBox="0 0 30.143 30.143" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="Capa_1" version="1.1" width="200px" height="200px">
              <g strokeWidth={0} id="SVGRepo_bgCarrier" />
              <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" />
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path data-darkreader-inline-fill d="M20.034,2.357v3.824c3.482,1.798,5.869,5.427,5.869,9.619c0,5.98-4.848,10.83-10.828,10.83 c-5.982,0-10.832-4.85-10.832-10.83c0-3.844,2.012-7.215,5.029-9.136V2.689C4.245,4.918,0.731,9.945,0.731,15.801 c0,7.921,6.42,14.342,14.34,14.342c7.924,0,14.342-6.421,14.342-14.342C29.412,9.624,25.501,4.379,20.034,2.357z" />
                  <path data-darkreader-inline-fill d="M14.795,17.652c1.576,0,1.736-0.931,1.736-2.076V2.08c0-1.148-0.16-2.08-1.736-2.08 c-1.57,0-1.732,0.932-1.732,2.08v13.496C13.062,16.722,13.225,17.652,14.795,17.652z" />
                </g>
              </g>
            </svg>
          </span>
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    width: 4.5em;
    height: 4.5em;
    position: relative;
  }

  .button {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 4px solid #090929;
    background-color: transparent;
    background-image: linear-gradient(145deg, #111827, #374151);
    box-sizing: border-box;
    box-shadow: inset 2px 2px 3px #334155, inset -2px -2px 3px #0f172a;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container input {
    display: none;
  }

  .button::before {
    position: absolute;
    content: "";
    width: 4em;
    height: 4em;
    border-radius: inherit;
    background-color: transparent;
    background-image: linear-gradient(145deg, #262626, #606060);
    z-index: -1;
    box-shadow: 11px 11px 22px #0f172a, -11px -11px 22px #374151;
  }

  .button .icon {
    width: 30px;
    height: 30px;
    display: inline-block;
  }

  .button .icon svg {
    height: 100%;
    width: 100%;
    fill: #a5a5a5;
  }

  .container input:checked + .button {
    box-shadow: inset -2px -2px 0 #5e5e5e, inset 2px 2px 0 #1c1c1c;
    border: 4px solid rgba(139, 92, 246, 1);
    animation: animeBorder 0.3s linear alternate-reverse infinite;
  }

  .container input:checked + .button .icon svg {
    fill: rgba(139, 92, 246, 1);
    animation: animeFill 0.3s linear alternate-reverse infinite;
  }

  @keyframes animeFill {
    to {
      fill: rgba(139, 92, 246, 1);
    }
  }

  @keyframes animeBorder {
    to {
      border-color: rgba(236, 72, 153, 1);
    }
  }
`;

export default ThemeButton;
