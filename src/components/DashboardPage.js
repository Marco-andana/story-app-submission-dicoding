import { LitElement, html, css } from 'lit';
import './StoryList.js';

class DashboardPage extends LitElement {
  static properties = {
    stories: { type: Array },
  };

  render() {
    return html`
      <div class="container">
        <h1>Dashboard</h1>
        <story-list .stories=${this.stories}></story-list>
      </div>
    `;
  }
}

customElements.define('dashboard-page', DashboardPage);