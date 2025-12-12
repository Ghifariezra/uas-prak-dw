import { initEvents } from "./core/events.js";
import { handleRoute } from "./router/router.js";
import { initSearchToggle, initSearchInput } from "./components/search/search.js";

initSearchToggle();
initSearchInput();
initEvents();
handleRoute();
