type Props={accent:string,label:string,name:string}
export default function BottleMockup({accent,label,name}:Props){
  return (
    <div style={{textAlign:'center'}}>
      <svg width="140" height="240" viewBox="0 0 140 240" role="img" aria-label={`${name} bottle`}>
        <defs>
          <filter id="s" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.1"/>
          </filter>
        </defs>
        <g filter="url(#s)">
          <path d="M60 8h20c4 0 8 3 8 8v10c0 3 2 5 5 6 7 2 11 8 11 15v120c0 19-15 35-34 35H70c-19 0-34-16-34-35V47c0-7 4-13 11-15 3-1 5-3 5-6V16c0-5 4-8 8-8z" fill="#FDFDFD" stroke="#E6E8EA"/>
          <rect x="52" y="6" width="36" height="16" rx="6" fill={accent}/>
          <rect x="30" y="84" width="80" height="68" rx="10" fill={label} stroke="#E6E8EA"/>
          <text x="70" y="122" textAnchor="middle" fontWeight={800} fontSize="18" fontFamily="ui-sans-serif, system-ui">Twist<tspan fill={accent}>Up</tspan></text>
          <text x="70" y="144" textAnchor="middle" fontSize="12" fill="#66707A" fontFamily="ui-sans-serif, system-ui">{name}</text>
        </g>
      </svg>
    </div>
  )
}
