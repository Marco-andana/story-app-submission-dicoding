import { LitElement, html, css } from 'lit';

class StoryCard extends LitElement {
  static properties = {
    story: { type: Object },
  };

  static styles = css`
    .card {
      margin-bottom: 1rem;
    }
  `;

  render() {
    return html`
      <div class="card">
        <img src=${this.story.image} class="card-img-top" alt="Story Image">
        <div class="card-body">
          <h5 class="card-title">${this.story.name}</h5>
          <p class="card-text">${this.story.description}</p>
          <p class="card-text"><small class="text-muted">${this.story.date}</small></p>
        </div>
      </div>
    `;
  }
}

customElements.define('story-card', StoryCard);