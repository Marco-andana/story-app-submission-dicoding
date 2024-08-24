import { LitElement, html, css } from 'lit';

class Navbar extends LitElement {
  static styles = css`
    .navbar {
      background-color: var(--primary-color);
    }
  `;

  render() {
    return html`
      <nav class="navbar navbar-expand-md navbar-dark">
        <div class="container">
          <a class="navbar-brand" href="#">Story App</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="/add-story">Add Story</a></li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('nav-bar', Navbar);