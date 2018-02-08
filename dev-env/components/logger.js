export default class Logger {
  constructor(container) {
    this._element = container;
    this.log("");
  }

  _format(msg) {
    return typeof msg === "string" ? msg : JSON.stringify(msg, null, 2);
  }

  log(message) {
    const template = `
            <div class="col m6 s12">      
                <div class="card">
                    <div class="card-content">
                        <span class="card-title">Logger output</span>
                        <pre>${this._format(message)}</pre>
                    </div>
                </div>
            </div>
        `;
    this._element.innerHTML = template;
  }
}
