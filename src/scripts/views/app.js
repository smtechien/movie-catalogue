import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

/**
 * class untuk menginisiasikan komponen-komponen dari app shell
 */
class App {
  /**
   * @constructor
   * @param {button} button - komponen button
   * @param {drawer} drawer - komponen drawer
   * @param {content} content - komponen content
   */
  constructor({button, drawer, content}) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  /**
   * fungsi initialisze app shell
   */
  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    // kita bisa mengenisiasikan komponen lain bila ada
  }

  /**
   * rendering page after getting the url
   */
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
};

export default App;
