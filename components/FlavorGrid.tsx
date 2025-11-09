type Flavor={name:string,accent:string,secondary?:string}
const FLAVORS:Flavor[]=[
  {name:'Lemon?Lime',accent:'#66DB7F'},
  {name:'Berry',accent:'#FF6EA8'},
  {name:'Mango',accent:'#FFB24D'},
  {name:'Cola',accent:'#43B0FF'},
  {name:'Watermelon',accent:'#FF5F77'},
]

export default function FlavorGrid(){
  return (
    <div className="grid" style={{marginTop:16}}>
      {FLAVORS.map(f=> (
        <div key={f.name} className="flavor">
          <div className="title" style={{display:'flex',alignItems:'center',gap:10}}>
            <span style={{width:14,height:14,background:f.accent,borderRadius:999,border:'1px solid #E1E6EA'}}/>
            {f.name}
          </div>
          <div className="p" style={{marginTop:8}}>Accent {f.accent} with neutrals. Keep contrast ? 4.5:1.</div>
          <div style={{display:'flex',gap:8,marginTop:10}}>
            <div style={{flex:1,height:30,background:'#fff',border:'1px solid #E6E8EA',borderRadius:8}}/>
            <div style={{flex:1,height:30,background:f.accent,opacity:.22,border:'1px solid #E6E8EA',borderRadius:8}}/>
            <div style={{flex:1,height:30,background:f.accent,opacity:.12,border:'1px solid #E6E8EA',borderRadius:8}}/>
          </div>
        </div>
      ))}
    </div>
  )
}
