import etsyData from '../data/etsy.json';
import Listing from './components/Listing';
import type { ListingItem } from './types';

const etsy = etsyData as ListingItem[];

function App() {
  return (
    <div className="App">
      <h1>Список предложений</h1>
      <Listing items={etsy} />
    </div>
  );
}

export default App;