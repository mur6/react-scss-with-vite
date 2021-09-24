import { useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(20);

  return (
    <>
     <div class="d-flex flex-column h-100">
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a class="navbar-brand" href="#">
              navバー
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item active">
                  <a class="nav-link" aria-current="page" href="#">
                    ホーム
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    リンク
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link disabled"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    無効
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex-shrink-0">
      <div className="container pt-5">
          <p>僕のアプリ</p>
          <p>
            <button
              type="button"
              onClick={() => setCount((count) => count + 1)}
            >
              count is: {count}
            </button>
          </p>
          <p>
            Edit <code>App.jsx</code> and save to test HMR updates. Edit{" "}
            <code>App.jsx</code> and sav Edit <code>App.jsx</code> and sav Edit{" "}
            <code>App.jsx</code> and sav Edit <code>App.jsx</code> and sav Edit{" "}
            <code>App.jsx</code> and sav
          </p>
      </div>
      </main>

      <footer class="footer mt-auto py-3 fixed-bottom bg-light">
        <div class="container">
          <p>フッターのコンテンツをここに置きます。</p>
          <div class="d-grid gap-2 d-md-block">
            <button
              type="button"
              class="btn btn-primary btn-lg"
              onClick={() => setCount((count) => count + 1)}
            >
              Large count is: {count}
            </button>
            <button
              type="button"
              class="btn btn-success btn-lg"
              onClick={() => setCount((count) => count - 1)}
            >
              Large count is: {count}
            </button>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}

export default App;
