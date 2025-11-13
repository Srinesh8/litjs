import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-dynamic-leave-balance')
export class MyDynamicLeaveBalance extends LitElement {
  static styles = css`
    :host {
      display: block;
      /* Better system font stack */
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
      background: #fff;
      padding: 16px;
      border-radius: 12px;
      border: 1px solid #e0e0e0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
      width: 100%;
      max-width: 1000px;
      box-sizing: border-box;
    }

    h3 {
      margin: 0 0 16px 0;
      font-size: 1.1rem;
      font-weight: 600;
      color: #222;
      /* Removed padding-left to align */
    }

    .grid {
      display: grid;
      /* 🧠 Use auto-fit to stretch items to fill the row */
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 16px;
      justify-items: stretch;
      align-items: stretch;
    }

    .card {
      background: #fafafa; /* Softened background */
      border-radius: 8px;
      padding: 20px;
      text-align: center;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
      border: 1px solid #eee;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      min-height: 120px; /* Ensure consistent height */
    }

    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    }

    .label {
      font-size: 0.95rem;
      font-weight: 500;
      color: #333;
      margin-bottom: 6px;
      /* Handle long labels */
      word-break: break-word;
    }

    .value {
      font-size: 1.3rem;
      font-weight: 600;
      color: #000;
    }
    
    .empty-state {
      font-size: 0.9rem;
      color: #777;
      text-align: center;
      padding: 20px 0;
    }

    /* 📱 Responsive layout for small devices */
    @media (max-width: 768px) {
      .grid {
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 12px;
      }
    }

    @media (max-width: 480px) {
      .grid {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      }
    }
  `;

  // The data will be passed as JSON (string or object)
  @property({ type: Object })
  leaves: Record<string, number | string> = {};

  // If given as an attribute string, parse it
  updated(changedProps: Map<string, unknown>) {
    if (changedProps.has('leaves') && typeof this.leaves === 'string') {
      try {
        this.leaves = JSON.parse(this.leaves);
      } catch (e) {
        console.error('Invalid JSON in leaves attribute', e);
        this.leaves = {};
      }
    }
  }

  render() {
    const entries = Object.entries(this.leaves || {});

    return html`
      <h3>Leave Balances</h3>
      ${entries.length > 0
        ? html`
            <div class="grid">
              ${entries.map(
                ([type, count]) => html`
                  <div class="card">
                    <div class="label">${type}</div>
                    <div class="value">${count}</div>
                  </div>
                `
              )}
            </div>
          `
        : html`
            <div class="empty-state">
              No leave balances available.
            </div>
          `}
    `;
  }
}