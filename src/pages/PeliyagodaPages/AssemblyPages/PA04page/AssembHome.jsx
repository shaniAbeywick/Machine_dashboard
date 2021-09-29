import "./Home.css"
import Production from "../../../../components/PeliyagodaComps/AssemblyComps/PA04Comps/production/Production";
import Oee from "../../../../components/PeliyagodaComps/AssemblyComps/PA04Comps/oee/Oee";
import Quality from "../../../../components/PeliyagodaComps/AssemblyComps/PA04Comps/quality/Quality";

export default function Home() {
    return (
        <div className="home">
          <Production /> 
          <div className="homeWidget">
           <Oee/>
           <Quality/>
          </div>
          


        </div>
    )
}
