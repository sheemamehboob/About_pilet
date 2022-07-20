import { PiletApi } from "../piral~/About_Pilet/node_modules/goodhealth-piral";

export default (app: PiletApi) => {
    app.registerTile(app.fromBlazor("my-tile"));
    app.registerMenu(app.fromBlazor("AboutPage-menu"));
    app.registerMenu(app.fromBlazor("counter"));


    /*  app.registerPage("/providers", app.fromBlazor("providers"));   */
};