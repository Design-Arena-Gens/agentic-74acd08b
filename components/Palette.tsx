function Swatch({name,hex}:{name:string,hex:string}){
  return (
    <div className="swatch">
      <div className="tone" style={{background:hex}} />
      <div className="meta">{name}<br/>{hex}</div>
    </div>
  )
}

export default function Palette(){
  return (
    <div style={{marginTop:16}}>
      <div className="palette">
        <Swatch name="Off?White" hex="#F7F7F4"/>
        <Swatch name="Mist Gray" hex="#E6E8EA"/>
        <Swatch name="Charcoal" hex="#232628"/>
        <Swatch name="Mint Aqua" hex="#6FE3D0"/>
        <Swatch name="Tangerine" hex="#FFA864"/>
      </div>
      <div className="kicker" style={{marginTop:24}}>Flavor accents</div>
      <div className="palette" style={{marginTop:8}}>
        <Swatch name="Lemon?Lime" hex="#66DB7F"/>
        <Swatch name="Berry" hex="#FF6EA8"/>
        <Swatch name="Mango" hex="#FFB24D"/>
        <Swatch name="Cola" hex="#43B0FF"/>
        <Swatch name="Watermelon" hex="#FF5F77"/>
      </div>
    </div>
  )
}
