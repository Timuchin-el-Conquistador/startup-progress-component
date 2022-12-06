import { useReducer } from "react";

import logo from "./logo.svg";
import "./App.css";

const initialState = {
  foundationStep: {
    achieved: false,
    actions: {
      virtualOffice: false,
      missionAndVision: false,
      businessName: false,
      domains: false,
    },
  },
  discovery: {
    achieved: false,
    actions: {
      createRoadmap: false,
      competitorAnalysis: false,
    },
  },
  delivery: {
    achieved: false,
    actions: {
      marketingWebsite: false,
      MVP: false,
    },
  },
};

const reducerFn = (state, payload) => {
  //steps Foundation, Discovery and Delivery
  //actions u make to achive them


  let achieved =
    !state[payload.step].actions[payload.action]; /*the checkbox u clicked (if false
     then step achived iis false and no sense of traversing actions hashmap )*/
  const { actions } = state[payload.step];  //progress step fetching all actions required
  switch (payload.step) {
    case "foundationStep":
      if (achieved) {   //if false no sense traversing actions and step is not achieved
        for (let action in actions) {
          if (action !== payload.action && actions[action] === false) {
            achieved = false;
          }
        }
      }
      state = {
        ...state,
        foundationStep: {
          ...state.foundationStep,
          achieved,
          actions: {
            ...state.foundationStep.actions,
            [payload.action]: !state.foundationStep.actions[payload.action],
          },
        },
      };
      break;
    case "discovery":
      if (achieved) {
        for (let action in actions) {
          if (action !== payload.action && actions[action] === false) {
            achieved = false;
          }
        }
      }
      state = {
        ...state,
        discovery: {
          ...state.discovery,
          achieved,
          actions: {
            ...state.discovery.actions,
            [payload.action]: !state.discovery.actions[payload.action],
          },
        },
      };
      break;
    case "delivery":
      if (achieved) {
        for (let action in actions) {
          if (action !== payload.action && actions[action] === false) {
            achieved = false;
          }
        }
      }
      state = {
        ...state,
        delivery: {
          ...state.delivery,
          achieved,
          actions: {
            ...state.delivery.actions,
            [payload.action]: !state.delivery.actions[payload.action],
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
                  state.foundationStep.actions.virtualOffice ? "active" : null
                }`}
              />
              <input
                type="checkbox"
                id="virtual-office"
                onChange={() => {
              
                  setState({ step: "foundationStep", action: "virtualOffice" });
                }}
              />
            </div>
            <label htmlFor="virtual-office">Setup virtual office</label>
          </li>
          <li>
            <div className="checkbox">
              <div
                className={`${
                  state.foundationStep.actions.missionAndVision ? "active" : null
                }`}
              />
              <input
                type="checkbox"
                id="missionAndVision"
                onChange={() => {
                  setState({
                    step: "foundationStep",
                    action: "missionAndVision",
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
                  state.foundationStep.actions.businessName ? "active" : null
                }`}
              />
              <input
                type="checkbox"
                id="businessName"
                onChange={() => {
                  setState({ step: "foundationStep", action: "businessName" });
                }}
              />
            </div>
            <label htmlFor="businessName">Select business name</label>
          </li>
          <li>
            <div className="checkbox">
              <div
                className={`${
                  state.foundationStep.actions.domains ? "active" : null
                }`}
              />
              <input
                type="checkbox"
                id="domains"
                onChange={() => {
                  setState({ step: "foundationStep", action: "domains" });
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
                  state.discovery.actions.createRoadmap ? "active" : null
                }`}
              />
              <input
                type="checkbox"
                id="createRoadmap"
                onChange={() => {
                  setState({ step: "discovery", action: "createRoadmap" });
                }}
              />
            </div>
            <label htmlFor="createRoadmap">Create roadmap</label>
          </li>
          <li>
            <div className="checkbox">
              <div
                className={`${
                  state.discovery.actions.competitorAnalysis ? "active" : null
                }`}
              />
              <input
                type="checkbox"
                id="competitorAnalysis"
                onChange={() => {
                  setState({ step: "discovery", action: "competitorAnalysis" });
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
                  state.delivery.actions.marketingWebsite ? "active" : null
                }`}
              />
              <input
                type="checkbox"
                id="marketingWebsite"
                onChange={() => {
                  setState({ step: "delivery", action: "marketingWebsite" });
                }}
              />
            </div>
            <label htmlFor="marketingWebsite">Release marketing website</label>
          </li>
          <li>
            <div className="checkbox">
              <div
                className={`${state.delivery.actions.MVP ? "active" : null}`}
              />
              <input
                type="checkbox"
                id="MVP"
                onChange={() => {
                  setState({ step: "delivery", action: "MVP" });
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
