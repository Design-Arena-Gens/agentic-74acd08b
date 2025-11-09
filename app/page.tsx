import Logo from "../components/Logo";
import Palette from "../components/Palette";
import MotionTwist from "../components/MotionTwist";
import FlavorGrid from "../components/FlavorGrid";
import BottleMockup from "../components/BottleMockup";

export default function Page(){
  return (
    <main>
      <section className="container" style={{paddingTop:64,paddingBottom:40}}>
        <div className="badge"><span className="kicker">Brand</span><span>TwistUp</span></div>
        <h1 className="h1"><span className="twist">Twist</span>Up ? Clean, refreshing, confident.</h1>
        <p className="p">A modern beverage identity that blends purity and subtle motion with a premium, breathable aesthetic. Built on neutrals with mint aqua and tangerine accents.</p>
      </section>

      <section className="section">
        <div className="container hgrid">
          <div className="card">
            <div className="kicker">Logo</div>
            <div style={{marginTop:16,marginBottom:24}}>
              <Logo size={240} />
            </div>
            <p className="p">Simple, confident wordmark with a gentle twist gesture. Use clear space equal to the cap height around the logo. Primary usage on off?white. Dark mode on mist gray.</p>
            <div style={{display:'flex',gap:12,marginTop:16,flexWrap:'wrap'}}>
              <a className="button" href="/brand/twistup-logo.svg" download>Download SVG</a>
              <a className="button" href="/brand/twistup-logomark.svg" download>Logomark SVG</a>
              <a className="button" href="/brand/twistup-wordmark.svg" download>Wordmark SVG</a>
            </div>
          </div>
          <div className="card">
            <div className="kicker">Motion</div>
            <div style={{marginTop:16}}>
              <MotionTwist />
            </div>
            <p className="p">Motion expresses freshness and the twist?cap action. Keep it subtle and cyclical ? never flashy. 2?3 second gentle oscillations are preferred.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container hgrid">
          <div className="card">
            <div className="kicker">Palette</div>
            <Palette />
          </div>
          <div className="card">
            <div className="kicker">Typography</div>
            <div style={{marginTop:16}}>
              <div style={{fontWeight:700,letterSpacing:'-0.02em',fontSize:'2rem'}}>Headlines ? Clean, tight, confident</div>
              <div className="p" style={{marginTop:8}}>System UI stack for reliability and performance. Use tight tracking on display, generous leading for body. Avoid decorative styles.</div>
              <div style={{marginTop:16,display:'grid',gap:12}}>
                <div className="card" style={{background:'#fafafa'}}>
                  <div style={{fontWeight:700,fontSize:'1.6rem'}}>TwistUp brings flavor to life.</div>
                  <div className="p">Headline, 700, -2% letter spacing</div>
                </div>
                <div className="card" style={{background:'#fafafa'}}>
                  <div className="p" style={{margin:0}}>Body copy sits at 16?18px with 160% line height for breathability.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker">Flavor System</div>
          <p className="p">Each flavor adopts a distinct accent while remaining balanced within the core identity.</p>
          <FlavorGrid />
        </div>
      </section>

      <section className="section">
        <div className="container hgrid">
          <div className="card">
            <div className="kicker">Packaging Preview</div>
            <p className="p">Minimal label, generous whitespace, confident wordmark, accented cap.</p>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:20,marginTop:12}}>
              <BottleMockup accent="#6FE3D0" label="#ffffff" name="Original"/>
              <BottleMockup accent="#66DB7F" label="#ffffff" name="Lemon?Lime"/>
              <BottleMockup accent="#FFB24D" label="#ffffff" name="Mango"/>
              <BottleMockup accent="#FF6EA8" label="#ffffff" name="Berry"/>
              <BottleMockup accent="#43B0FF" label="#ffffff" name="Cola"/>
              <BottleMockup accent="#FF5F77" label="#ffffff" name="Watermelon"/>
            </div>
          </div>
          <div className="card">
            <div className="kicker">Downloads</div>
            <p className="p">Use these production?ready assets.</p>
            <ul>
              <li><a href="/brand/twistup-logo.svg" download>Primary logo (SVG)</a></li>
              <li><a href="/brand/twistup-wordmark.svg" download>Wordmark (SVG)</a></li>
              <li><a href="/brand/twistup-logomark.svg" download>Logomark (SVG)</a></li>
            </ul>
          </div>
        </div>
      </section>

      <div className="container footer">? {new Date().getFullYear()} TwistUp</div>
    </main>
  );
}
