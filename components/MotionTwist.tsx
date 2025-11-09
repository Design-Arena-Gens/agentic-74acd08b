export default function MotionTwist(){
  return (
    <div style={{display:'flex',alignItems:'center',gap:18}}>
      <svg width="88" height="88" viewBox="0 0 48 48" className="twist" aria-hidden>
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor="#6FE3D0"/>
            <stop offset="100%" stopColor="#FFA864"/>
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="20" fill="url(#g)"/>
        <path d="M10 24c5-6 11-6 16 0" stroke="#232628" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M14 28c5-6 9-6 14 0" stroke="#232628" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity=".7"/>
      </svg>
      <div>
        <div style={{fontWeight:600}}>Twist oscillation</div>
        <div className="p" style={{margin:0}}>2.2s ease?in?out, ?9?; subtle and breathable.</div>
      </div>
    </div>
  )
}
