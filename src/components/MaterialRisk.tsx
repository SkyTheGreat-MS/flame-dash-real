import { materials, sectors, type Sector } from '../data';

export function MaterialRisk({ activeSector, selectedMaterial, onSelectMaterial }: { activeSector: Sector; selectedMaterial: number; onSelectMaterial: (index: number) => void }) {
  return <section className="panel risk-panel"><div className="risk-title-row"><div><div className="section-head"><h2>Material risk ranking</h2></div><p className="subnote">Illustrative values · not a flammability model</p></div><div className="active-volume"><span>Active volume</span><b>{sectors[activeSector].short}</b></div></div>
    <div className="risk-table"><div className="risk-head"><span>Rank</span><span>Material / location</span><span>Visual meter</span><span>Demo value</span><span>State</span></div>
      {materials.map((material, index) => <button key={material.name} className={`risk-row ${selectedMaterial === index ? 'selected' : ''}`} onClick={() => onSelectMaterial(index)}><span className="rank">{String(index + 1).padStart(2, '0')}</span><span className="material-copy"><b>{material.name}</b><small>{material.location} · ULOI reference {material.uloi}</small></span><span className="meter">{Array.from({ length: 24 }, (_, n) => <i key={n} className={n < material.level ? (index === 0 ? 'on amber' : 'on') : ''} />)}</span><span className="probability">{material.probability}</span><span className={`badge ${index === 0 ? 'warning' : ''}`}>{material.state}</span></button>)}
    </div>
  </section>;
}

