import { LitElement, html, css } from 'lit';
import './StoryCard.js';

class StoryList extends LitElement {
  static properties = {
    stories: { type: Array },
  };

  static styles = css`
    .row {
      display: flex;
      flex-wrap: wrap;
    }
  `;

  render() {
    return html`
      <div class="row">
        ${this.stories.map(story => html`<div class="col-md-4"><story-card .story=${story}></story-card></div>`)}
      </div>
    `;
  }
}

customElements.define('story-list', StoryList);