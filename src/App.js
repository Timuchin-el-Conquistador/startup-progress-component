import { useReducer } from "react";

import logo from "./logo.svg";
import "./App.css";

const initialState = {
  foundationStep: {
    achieved: false,
    steps: {
      virtualOffice: false,
      missionAndVision: false,
      businessName: false,
      domains: false,
    },
  },
  discovery: {
    achieved: false,
    steps: {
      createRoadmap: false,
      competitorAnalysis: false,
    },
  },
  delivery: {
    achieved: false,
    steps: {
      marketingWebsite: false,
      MVP: false,
    },
  },
};

const reducerFn = (state, action) => {
  let achieved = !state[action.type].steps[action.step];
  const { steps } = state[action.type];
  switch (action.type) {
    case "foundationStep":
      for (let step in steps) {
        if (step !== action.step && steps[step] === false) {
          achieved = false;
        }
      }
      state = {
        ...state,
        foundationStep: {
          ...state.foundationStep,
          achieved,
          steps: {
            ...state.foundationStep.steps,
            [action.step]: !state.foundationStep.steps[action.step],
          },
        },
      };
      break;
    case "discovery":
      for (let step in steps) {
        if (step !== action.step && steps[step] === false) {
          achieved = false;
        }
      }
      state = {
        ...state,
        discovery: {
          ...state.discovery,
          achieved,
          steps: {
            ...state.discovery.steps,
            [action.step]: !state.discovery.steps[action.step],
          },
        },
      };
      break;
    case "delivery":
      for (let step in steps) {
        if (step !== action.step && steps[step] === false) {
          achieved = false;
        }
      }
      state = {
        ...state,
        delivery: {
          ...state.delivery,
          achieved,
          steps: {
            ...state.delivery.steps,
            [action.step]: !state.delivery.steps[action.step],
          },
        },
      };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

function App() {
  const [state, setState] = useReducer(reducerFn, initialState);

  return (
    <div className="progress">
      <h1>My startup progress</h1>

      <div
        className={`step ${state.foundationStep.achieved ? "active" : null}`}
      >
        <span>1</span>Foundation
      </div>
      <div className="steps">
        <ul>
          <li>
            <div className="checkbox">
              <div
                className={`${
                  state.foundationStep.steps.virtualOffice ? "active" : null
                }`}
              />
              <input
                type="checkbox"
                id="virtual-office"
                onChange={() => {
                  console.log("check");
                  setState({ type: "foundationStep", step: "virtualOffice" });
                }}
              />
            </div>
            <label htmlFor="virtual-office">Setup virtual office</label>
          </li>
          <li>
            <div className="checkbox">
              <div
                className={`${
                  state.foundationStep.steps.missionAndVision ? "active" : null
                }`}
              />
              <input
                type="checkbox"
                id="missionAndVision"
                onChange={() => {
                  setState({
                    type: "foundationStep",
                    step: "missionAndVision",
                  });
                }}
              />
            </div>
            <label htmlFor="missionAndVision">Set mission & vision</label>
          </li>
          <li>
            <div className="checkbox">
              <div
                className={`${
                  state.foundationStep.steps.businessName ? "active" : null
                }`}
              />
              <input
                type="checkbox"
                id="businessName"
                onChange={() => {
                  setState({ type: "foundationStep", step: "businessName" });
                }}
              />
            </div>
            <label htmlFor="businessName">Select business name</label>
          </li>
          <li>
            <div className="checkbox">
              <div
                className={`${
                  state.foundationStep.steps.domains ? "active" : null
                }`}
              />
              <input
                type="checkbox"
                id="domains"
                onChange={() => {
                  setState({ type: "foundationStep", step: "domains" });
                }}
              />
            </div>
            <label htmlFor="domains">Buy domains</label>
          </li>
        </ul>
      </div>
      <div className={`step ${state.discovery.achieved ? "active" : null}`}>
        <span>2</span>Discovery
      </div>
      <div className="steps">
        <ul>
          <li>
            <div className="checkbox">
              <div
                className={`${
                  state.discovery.steps.createRoadmap ? "active" : null
                }`}
              />
              <input
                type="checkbox"
                id="createRoadmap"
                onChange={() => {
                  setState({ type: "discovery", step: "createRoadmap" });
                }}
              />
            </div>
            <label htmlFor="createRoadmap">Create roadmap</label>
          </li>
          <li>
            <div className="checkbox">
              <div
                className={`${
                  state.discovery.steps.competitorAnalysis ? "active" : null
                }`}
              />
              <input
                type="checkbox"
                id="competitorAnalysis"
                onChange={() => {
                  setState({ type: "discovery", step: "competitorAnalysis" });
                }}
              />
            </div>
            <label htmlFor="competitorAnalysis">Competitor analysis</label>
          </li>
        </ul>
      </div>
      <div className={`step ${state.delivery.achieved ? "active" : null}`}>
        <span>3</span>Delivery
      </div>
      <div className="steps">
        <ul>
          <li>
            <div className="checkbox">
              <div
                className={`${
                  state.delivery.steps.marketingWebsite ? "active" : null
                }`}
              />
              <input
                type="checkbox"
                id="marketingWebsite"
                onChange={() => {
                  setState({ type: "delivery", step: "marketingWebsite" });
                }}
              />
            </div>
            <label htmlFor="marketingWebsite">Release marketing website</label>
          </li>
          <li>
            <div className="checkbox">
              <div
                className={`${state.delivery.steps.MVP ? "active" : null}`}
              />
              <input
                type="checkbox"
                id="MVP"
                onChange={() => {
                  setState({ type: "delivery", step: "MVP" });
                }}
              />
            </div>
            <label htmlFor="MVP">Release MVP</label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
