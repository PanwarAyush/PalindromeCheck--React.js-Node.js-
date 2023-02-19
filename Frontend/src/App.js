
import NodeReact from './components/NodeReact';
import Palindrome from './components/Palindrome';
import AdSense from 'react-adsense';
const App = () => {
  return (
    <div>
      <Palindrome/>
      <AdSense.Google
       client='ca-pub-9471515798383572'
       slot='9263299235'
        />
      <NodeReact/>
    </div>
  );
}

export default App;