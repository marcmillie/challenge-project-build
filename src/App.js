import './App.css';

function App() {
  return (
    <div className="App">
     <h1>My Website Style Guide</h1>
     
      <div class="container">
        <h2>Colors</h2>
        
        <div class="color-container">

          <div class="color-panel claret">
            <p class="color-label">Claret</p>
            <p class="color-hex">#820933</p>
          </div>

          <div class="color-panel mulberry">
            <p class="color-label">Mulberry</p>
            <p class="color-hex">#D84797</p>
          </div>

          <div class="color-panel mint-green">
            <p class="color-label">Mint Green</p>
            <p class="color-hex">#D2FDFF</p>
          </div>

          <div class="color-panel sky-blue">
            <p class="color-label">Sky Blue</p>
            <p class="color-hex">#3ABEFF</p>
          </div>
        </div>
      </div>

      <div class="container">
       <h1>Fonts</h1>

        <div class="font-container">

          <div class="font-panel">
                <p class="font-label lucida">Lucida</p>
                <p class="regularlucidao">The quick brown fox jumps over the lazy dog.</p>
                <p class="bold lucida">The quick brown fox jumps over the lazy dog.</p>
                <p class="italic lucida">The quick brown fox jumps over the lazy dog.</p>
              </div>

              <div class="font-panel">
                <p class="font-label font gill-sans">Gill Sans</p>
                <p class="regular font gill-sans">The quick brown fox jumps over the lazy dog.</p>
                <p class="bold font gill-sans">The quick brown fox jumps over the lazy dog.</p>
                <p class="italic font gill-sans">The quick brown fox jumps over the lazy dog.</p>
              </div>

              <div class="font-panel">
                <p class="font-label franklin-gothic-medium">Franklin Gothic</p>
                <p class="regular ffranklin-gothic-medium">The quick brown fox jumps over the lazy dog.</p>
                <p class="bold franklin-gothic-medium">The quick brown fox jumps over the lazy dog.</p>
                <p class="italic ffranklin-gothic-medium">The quick brown fox jumps over the lazy dog.</p>
              </div>
          </div>
        </div>

      <div class="container">
              <h2>Text Styles</h2>

              <div class="text-container">
                <div class="text-panel">
                  <h1>H1: Main Page Heading</h1>
                  <ul>
                    <li>Font-weight: 700 bold</li>
                    <li>Font-size: 26px</li>
                    <li>Font Family: font name</li>
                  </ul>
                </div>

                <div class="text-panel">
                  <h1>H2: Subheading</h1>
                  <ul>
                    <li>Font-weight: 500 bold</li>
                    <li>Font-size: 18px</li>
                    <li>Font Family: font name</li>
                  </ul>
                </div>

                <div class="text-panel">
                  <h1>P: Paragragh text</h1>
                  <ul>
                    <li>Font-weight: 400 bold</li>
                    <li>Font-size: 14px</li>
                    <li>Font Family: font name</li>
                  </ul>
                </div>

              </div>
            </div>
    </div>
  );
}

export default App;
