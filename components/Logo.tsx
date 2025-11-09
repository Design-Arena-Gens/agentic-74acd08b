type Props={size?:number,color?:string}
export default function Logo({size=200,color="#232628"}:Props){
  const height=size*0.36
  return (
    <svg width={size} height={height} viewBox={`0 0 ${size} ${height}`} role="img" aria-label="TwistUp logo">
      <g transform={`translate(${size*0.02},${height*0.14})`}>
        {/* Logomark: subtle twist cap */}
        <g className="twist" transform={`translate(${size*0.02},-${height*0.04})`}>
          <path d="M20 8c0-4.418 3.582-8 8-8h8c4.418 0 8 3.582 8 8v8c0 4.418-3.582 8-8 8h-8c-4.418 0-8-3.582-8-8V8z" fill="#6FE3D0"/>
          <path d="M22 14c6-6 14-6 20 0" stroke="#232628" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity=".9"/>
          <path d="M24 18c6-6 12-6 18 0" stroke="#FFA864" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity=".9"/>
        </g>
        {/* Wordmark */}
        <text x={size*0.18} y={height*0.42} fill={color} fontSize={height*0.48} fontWeight={700} 
          fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" letterSpacing="-0.02em">
          Twist<tspan fill="#6FE3D0">Up</tspan>
        </text>
      </g>
    </svg>
  )
}
